<#
.SYNOPSIS
    Runs the Aspose.Cells Cloud SDK integration tests, collects results, and
    generates a test report (Markdown + HTML + JSON).

.DESCRIPTION
    This script invokes the Jest integration tests under `integration-tests/`,
    reads the machine-readable JSON output Jest produces, aggregates
    pass/fail/skip statistics, and writes a human-readable report.

    Credentials are read from the `-ClientId` / `-ClientSecret` parameters,
    falling back to the `CellsCloudClientId` / `CellsCloudClientSecret`
    environment variables. When credentials are missing the tests skip
    themselves (see `integration-tests/*.test.js`) and the report records them
    as skipped.

.PARAMETER ClientId
    Aspose Cloud client id.

.PARAMETER ClientSecret
    Aspose Cloud client secret.

.PARAMETER BaseUrl
    API base URL (defaults to https://api.aspose.cloud).

.PARAMETER ReportDir
    Directory that receives the generated report files.

.PARAMETER Filter
    Optional Jest `-t` substring to run a subset of tests.

.EXAMPLE
    .\run-integration-tests.ps1 -ClientId "..." -ClientSecret "..."

.EXAMPLE
    $env:CellsCloudClientId = "..."
    $env:CellsCloudClientSecret = "..."
    .\run-integration-tests.ps1 -Filter "PostClearContents"
#>
[CmdletBinding()]
param(
    [string]$ClientId = $env:CellsCloudClientId,
    [string]$ClientSecret = $env:CellsCloudClientSecret,
    [string]$BaseUrl = $env:CellsCloudApiBaseUrl,
    [string]$ReportDir = "test-reports",
    [string]$Filter = ""
)

$ErrorActionPreference = "Stop"
Set-StrictMode -Version 2.0

# Resolve the repository root relative to this script's location.
$RepoRoot = $PSScriptRoot
Set-Location $RepoRoot

# ---------------------------------------------------------------------------
# 1. Credentials & prerequisites
# ---------------------------------------------------------------------------
if ([string]::IsNullOrWhiteSpace($ClientId) -or [string]::IsNullOrWhiteSpace($ClientSecret)) {
    Write-Warning "Aspose Cloud credentials are not fully configured."
    Write-Warning "Set -ClientId / -ClientSecret or the CellsCloudClientId / CellsCloudClientSecret environment variables."
    Write-Warning "Without credentials, all integration tests will be skipped."
}

$env:CellsCloudClientId = $ClientId
$env:CellsCloudClientSecret = $ClientSecret
if (-not [string]::IsNullOrWhiteSpace($BaseUrl)) {
    $env:CellsCloudApiBaseUrl = $BaseUrl
}

if (-not (Test-Path (Join-Path $RepoRoot "node_modules\jest"))) {
    throw "Jest is not installed. Run 'npm install' first."
}

if (-not (Test-Path (Join-Path $RepoRoot "integration-tests"))) {
    throw "integration-tests/ directory not found. Run 'node generate-tests.js' first."
}

# ---------------------------------------------------------------------------
# 2. Prepare the report directory
# ---------------------------------------------------------------------------
$ReportPath = Join-Path $RepoRoot $ReportDir
if (-not (Test-Path $ReportPath)) {
    New-Item -ItemType Directory -Path $ReportPath | Out-Null
}
$JestOutputFile = Join-Path $ReportPath "jest-results.json"

# ---------------------------------------------------------------------------
# 3. Run the integration tests (serial, to respect API rate limits)
# ---------------------------------------------------------------------------
Write-Host "Running integration tests..."
$node = (Get-Command node).Source

$jestArgs = @(
    "--experimental-vm-modules",
    (Join-Path $RepoRoot "node_modules\jest\bin\jest.js"),
    "integration-tests",
    "--runInBand",
    "--json",
    "--outputFile=$JestOutputFile"
)
if (-not [string]::IsNullOrWhiteSpace($Filter)) {
    $jestArgs += @("-t", $Filter)
}

& $node @jestArgs 2>$null
$jestExitCode = $LASTEXITCODE

if (-not (Test-Path $JestOutputFile)) {
    throw "Jest did not produce a results file at '$JestOutputFile'. Ensure credentials are set or that the test files were generated."
}

# ---------------------------------------------------------------------------
# 4. Aggregate results
# ---------------------------------------------------------------------------
$raw = Get-Content -Raw -Path $JestOutputFile | ConvertFrom-Json

$totalTests = 0
$passedTests = 0
$failedTests = 0
$skippedTests = 0
$failedSuites = @()

foreach ($suite in $raw.testResults) {
    $suiteName = [System.IO.Path]::GetFileName($suite.name)
    $suiteFailed = 0
    $suitePassed = 0
    $suiteSkipped = 0

    foreach ($result in $suite.assertionResults) {
        $totalTests++
        switch ($result.status) {
            "passed" { $passedTests++; $suitePassed++ }
            "failed" { $failedTests++; $suiteFailed++ }
            "skipped" { $skippedTests++; $suiteSkipped++ }
            "pending" { $skippedTests++; $suiteSkipped++ }
            "todo"    { $skippedTests++; $suiteSkipped++ }
        }
    }

    if ($suiteFailed -gt 0) {
        $failedSuites += [PSCustomObject]@{
            Suite    = $suiteName
            Failed   = $suiteFailed
            Passed   = $suitePassed
            Skipped  = $suiteSkipped
        }
    }
}

$passRate = if ($totalTests -gt 0) {
    [math]::Round(100.0 * $passedTests / $totalTests, 2)
} else {
    0
}

$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

# ---------------------------------------------------------------------------
# 5. Write reports
# ---------------------------------------------------------------------------
$summary = [ordered]@{
    generatedAt   = $timestamp
    baseUrl       = if ($BaseUrl) { $BaseUrl } else { "https://api.aspose.cloud" }
    credentialsConfigured = [bool](-not [string]::IsNullOrWhiteSpace($ClientId) -and -not [string]::IsNullOrWhiteSpace($ClientSecret))
    totalTests    = $totalTests
    passedTests   = $passedTests
    failedTests   = $failedTests
    skippedTests  = $skippedTests
    passRate      = $passRate
    failedSuites  = $failedSuites
}

# JSON report
$summary | ConvertTo-Json -Depth 6 | Set-Content -Path (Join-Path $ReportPath "test-report.json") -Encoding UTF8

# Markdown report
$md = New-Object System.Text.StringBuilder
[void]$md.AppendLine("# Aspose.Cells Cloud SDK — Integration Test Report")
[void]$md.AppendLine("")
[void]$md.AppendLine("Generated: $timestamp")
[void]$md.AppendLine("")
[void]$md.AppendLine("| Metric | Value |")
[void]$md.AppendLine("|---|---|")
[void]$md.AppendLine("| Base URL | $($summary.baseUrl) |")
[void]$md.AppendLine("| Credentials configured | $($summary.credentialsConfigured) |")
[void]$md.AppendLine("| Total tests | $totalTests |")
[void]$md.AppendLine("| Passed | $passedTests |")
[void]$md.AppendLine("| Failed | $failedTests |")
[void]$md.AppendLine("| Skipped | $skippedTests |")
[void]$md.AppendLine("| Pass rate | $passRate% |")
[void]$md.AppendLine("")
[void]$md.AppendLine("## Summary")
[void]$md.AppendLine("")
if ($totalTests -eq 0) {
    [void]$md.AppendLine("_No tests were executed. Confirm that credentials are configured and that the integration tests were generated with `node generate-tests.js`._")
} else {
    [void]$md.AppendLine("- **$passedTests** passed, **$failedTests** failed, **$skippedTests** skipped ($passRate% pass rate).")
}
[void]$md.AppendLine("")
if ($failedSuites.Count -gt 0) {
    [void]$md.AppendLine("## Failed Suites")
    [void]$md.AppendLine("")
    [void]$md.AppendLine("| Suite | Passed | Failed | Skipped |")
    [void]$md.AppendLine("|---|---|---|---|")
    foreach ($f in $failedSuites) {
        [void]$md.AppendLine("| $($f.Suite) | $($f.Passed) | $($f.Failed) | $($f.Skipped) |")
    }
    [void]$md.AppendLine("")
}
$md.ToString() | Set-Content -Path (Join-Path $ReportPath "test-report.md") -Encoding UTF8

# HTML report
$failedRows = ""
if ($failedSuites.Count -gt 0) {
    foreach ($f in $failedSuites) {
        $failedRows += "<tr><td>$($f.Suite)</td><td>$($f.Passed)</td><td>$($f.Failed)</td><td>$($f.Skipped)</td></tr>`n"
    }
} else {
    $failedRows = "<tr><td colspan='4' class='ok'>No failing suites.</td></tr>"
}

$html = @"
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Aspose.Cells Cloud SDK — Test Report</title>
<style>
  :root { --ok:#1a7f37; --fail:#cf222e; --skip:#6e7781; --muted:#57606a; --border:#d0d7de; }
  * { box-sizing: border-box; }
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; color:#24292f; max-width: 960px; margin: 32px auto; padding: 0 20px; line-height: 1.5; }
  h1 { font-size: 24px; margin-bottom: 4px; }
  .sub { color: var(--muted); font-size: 13px; margin-bottom: 24px; }
  .cards { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 24px; }
  .card { flex: 1 1 140px; border: 1px solid var(--border); border-radius: 8px; padding: 16px; }
  .card .num { font-size: 30px; font-weight: 600; }
  .card .lbl { color: var(--muted); font-size: 13px; text-transform: uppercase; letter-spacing: .03em; }
  .num.pass { color: var(--ok); } .num.fail { color: var(--fail); } .num.skip { color: var(--skip); }
  table { width: 100%; border-collapse: collapse; margin-top: 12px; }
  th, td { border: 1px solid var(--border); padding: 8px 12px; text-align: left; font-size: 14px; }
  th { background: #f6f8fa; }
  .ok { color: var(--ok); }
</style>
</head>
<body>
  <h1>Aspose.Cells Cloud SDK — Integration Test Report</h1>
  <div class="sub">Generated $timestamp &middot; Base URL $($summary.baseUrl)</div>
  <div class="cards">
    <div class="card"><div class="num">$totalTests</div><div class="lbl">Total</div></div>
    <div class="card"><div class="num pass">$passedTests</div><div class="lbl">Passed</div></div>
    <div class="card"><div class="num fail">$failedTests</div><div class="lbl">Failed</div></div>
    <div class="card"><div class="num skip">$skippedTests</div><div class="lbl">Skipped</div></div>
    <div class="card"><div class="num">$passRate%</div><div class="lbl">Pass rate</div></div>
  </div>
  <h2>Failed Suites</h2>
  <table>
    <tr><th>Suite</th><th>Passed</th><th>Failed</th><th>Skipped</th></tr>
    $failedRows
  </table>
</body>
</html>
"@
$html | Set-Content -Path (Join-Path $ReportPath "test-report.html") -Encoding UTF8

# ---------------------------------------------------------------------------
# 6. Console summary
# ---------------------------------------------------------------------------
Write-Host ""
Write-Host "====================================================="
Write-Host "  Integration Test Summary"
Write-Host "====================================================="
Write-Host ("  Total   : {0}" -f $totalTests)
Write-Host ("  Passed  : {0}" -f $passedTests)
Write-Host ("  Failed  : {0}" -f $failedTests)
Write-Host ("  Skipped : {0}" -f $skippedTests)
Write-Host ("  Pass rate: {0}%" -f $passRate)
Write-Host "-----------------------------------------------------"
Write-Host ("  Report  : {0}" -f (Join-Path $ReportPath "test-report.md"))
Write-Host ("  Report  : {0}" -f (Join-Path $ReportPath "test-report.html"))
Write-Host ("  Report  : {0}" -f (Join-Path $ReportPath "test-report.json"))
Write-Host "====================================================="

if ($failedTests -gt 0 -or $jestExitCode -ne 0) {
    exit 1
}
exit 0
