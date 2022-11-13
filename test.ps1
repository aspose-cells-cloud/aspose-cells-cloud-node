Write-Host "Start Aspose.Cells Cloud SDK for NodeJS"
    $StartTime = Get-Date
    $passed = 0
    $total =0
    $failed = 0
    $skipped =0
    [string[]]$lines = npm test
    foreach ($line in $lines) {
        if($line -match "(\d+) passing "){
            $passed=$matches[1]
        }
        if($line -match "(\d+) failing"){
            $failed=$matches[1]
            break
        }
    }
    $total = $passed/1 + $failed/1
    $EndTime = Get-Date
    $timespan ="{0:N2}" -f (New-TimeSpan $StartTime  $EndTime).TotalSeconds
    Write-Host "Spent ${timespan}s on finishing test. Result : Total ${total}, Passed ${passed} , Failed ${failed} ,Skipped ${skipped} ."
    