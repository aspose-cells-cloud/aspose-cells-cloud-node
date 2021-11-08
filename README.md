![](https://img.shields.io/badge/REST%20API-v3.0-lightgrey) ![npm](https://img.shields.io/npm/v/asposecellscloud) ![node-current](https://img.shields.io/node/v/asposecellscloud) [![GitHub license](https://img.shields.io/github/license/aspose-cells-cloud/aspose-cells-cloud-node)](https://github.com/aspose-cells-cloud/aspose-cells-cloud-node/blob/master/LICENSE) ![GitHub commits since latest release (by date)](https://img.shields.io/github/commits-since/aspose-cells-cloud/aspose-cells-cloud-node/21.10)

# Process Excel® Files in the Cloud with Node.js

[Aspose.Cells Cloud SDK for Node.js](https://products.aspose.cloud/cells/nodejs) allows developers to create, edit, process & convert Excel spreadsheets in the Cloud. The Node.js Excel Cloud SDK gets its functionality from Aspose.Cells Cloud API, allowing your Node.js apps to work with all Excel file formats and features including worksheet & cell management, conditional formatting, auto-filters, auto-shapes, charts, OleObjects, page breaks, ListObjects, Pivot Tables, charts and much more. 

## Excel File Manipulation Features

- Create Excel files from scratch via API or [Smart Markers](https://docs.aspose.cloud/cells/create-excel-workbook-from-a-smartmarker-template/).
- Load, process & [convert Excel files](https://docs.aspose.cloud/cells/convert-excel-workbook-to-different-file-formats/) via Cloud SDK.
- Add, update or delete worksheet, charts, pictures, shapes, hyperlinks & validations.
- Add or remove cells area for conditional formatting from Excel worksheets.
- Insert or delete, horizontal or vertical page breaks.
- Add ListObject or convert ListObjects to a range of cells.
- Summarize data with [Pivot Tables](https://docs.aspose.cloud/cells/working-with-pivot-tables/) & Excel charts.
- Apply custom criteria to list filters of various types.
- Get, update, show or hide chart legend & titles.
- Manipulate page setup, header & footer.
- Create, update, fetch or delete document properties.
- Fetch the required shape from worksheet.
- Leverage the power of named ranges.

## Feature & Enhancements in Version 21.10

- Add new API for support delete multiple worksheets in a single call.
- Add new API for supports batch convert excel files.
	
 
## Read & Write Spreadsheet Formats

**Microsoft Excel:** XLS, XLSX, XLSB, XLSM, XLT, XLTX, XLTM
**OpenOffice:** ODS
**SpreadsheetML:** XML
**Text:** CSV, TSV, TXT (TabDelimited)
**Web:** HTML, MHTML

## Save Spreadsheets As

**Microsoft Excel:** XLS, XLSX, XLSB
**OpenOffice:** ODS
**SpreadsheetML:** XML
**Text:** CSV, TSV, TXT (TabDelimited)
**Web:** HTML, MHTML
**Fixed Layout:** PDF, XPS
**Images:** PNG, JPG, TIFF, SVG
**Markdown:** MD
**Other:** DIF

## Read Other Formats

SXC, FODS

## Integrated Storage API

Since version 19.9, SDK includes support of storage operations for better user experience and unification. It gives you an ability to;

- Upload, download, copy, move and delete files, including versions handling (if you are using Cloud storage that supports this feature - true by default).
- Create, copy, move and delete folders.
- Copy and move files and folders across separate storages in scope of a single operation.
- Check if certain file, folder or storage exists.

## Get Started with Aspose.Cells Cloud SDK for Node.js

First, create an account at [Aspose for Cloud](https://dashboard.aspose.cloud/#/apps) to get your application information. Next, execute `npm install asposecellscloud --save` from the command line to install Aspose.Cells Cloud SDK for Node.js via NPM.

## Convert Excel to PDF via Node.js

```js
var fs = require('fs');
var path = require('path');
var assert = require('assert');
const localPath = "../TestData/";
describe('cellsWorkbookPutConvertWorkbook', function() {
  it('should call cellsWorkbookPutConvertWorkbook successfully', function() {
    const cellsApi =new api.CellsApi(clientId, clientSecret);
    const filename = "Book1.xlsx";
    var data =fs.createReadStream(localPath  + filename);
    var req = new model.UploadFileRequest();
    req.path = "Temp/" + filename;
    req.file = data;

    return cellsApi.uploadFile(req)
      .then(() => {
        var req = new model.CellsWorkbook_PutConvertWorkbookRequest({
          workbook : fs.createReadStream(localPath  + filename),
          format : "pdf",
        });

        return cellsApi.cellsWorkbookPutConvertWorkbook(req)
          .then((result) => {
            expect(result.body.toString().length).to.greaterThan(0);
          });
      });
  });
});
```

## Hide Excel Columns via Node.js

```js
const { CellsApi, Cells_PostHideWorksheetColumnsRequest } = require("asposecellscloud");

clientId = ""
clientSecret = ""
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"

var req = new Cells_PostHideWorksheetColumnsRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.startColumn = 1;
req.totalColumns = 2;
req.folder = "";

return cellsApi.cellsPostHideWorksheetColumns(req)
    .then((result) => {
        console.log(result)
    });
```

## Merge Worksheets in the Cloud

```js
const { CellsApi, Cells_PostWorksheetMergeRequest } = require("asposecellscloud");

clientId = ""
clientSecret = ""
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"

var req = new Cells_PostWorksheetMergeRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.startRow = 1;
req.startColumn = 1;
req.totalRows = 4;
req.totalColumns = 4;
req.folder = "";

return cellsApi.cellsPostWorksheetMerge(req)
  .then((result) => {
    console.log(result)
  });
```

## Aspose.Cells Cloud SDKs in Popular Languages

| .NET | Java | PHP | Python | Ruby | Android | Swift | Perl | GO |
|---|---|---|---|---|---|---|---|---|
| [GitHub](https://github.com/aspose-cells-cloud/aspose-cells-cloud-dotnet) | [GitHub](https://github.com/aspose-cells-cloud/aspose-cells-cloud-java) | [GitHub](https://github.com/aspose-cells-cloud/aspose-cells-cloud-php) | [GitHub](https://github.com/aspose-cells-cloud/aspose-cells-cloud-python)  | [GitHub](https://github.com/aspose-cells-cloud/aspose-cells-cloud-ruby) | [GitHub](https://github.com/aspose-cells-cloud/aspose-cells-cloud-android)  | [GitHub](https://github.com/aspose-cells-cloud/aspose-cells-cloud-swift) | [GitHub](https://github.com/aspose-cells-cloud/aspose-cells-cloud-perl) | [GitHub](https://github.com/aspose-cells-cloud/aspose-cells-cloud-go) |
| [NuGet](https://www.nuget.org/packages/Aspose.Cells-Cloud/) | [Maven](https://repository.aspose.cloud/webapp/#/artifacts/browse/tree/General/repo/com/aspose/aspose-cells-cloud) | [Composer](https://packagist.org/packages/aspose/cells-sdk-php) | [PIP](https://pypi.org/project/asposecellscloud/)  | [GEM](https://rubygems.org/gems/aspose_cells_cloud) | [Maven](https://repository.aspose.cloud/webapp/#/artifacts/browse/tree/General/repo/com/aspose/aspose-cells-cloud-android) | [POD](https://cocoapods.org/pods/AsposeCellsCloud) |  [CPAN](https://metacpan.org/release/AsposeCellsCloud-CellsApi) | [GO](https://pkg.go.dev/github.com/aspose-cells-cloud/aspose-cells-cloud-go/v20?tab=overview) |

[Product Page](https://products.aspose.cloud/cells/nodejs) | [Documentation](https://docs.aspose.cloud/cells/) | [Live Demo](https://products.aspose.app/cells/family) | [API Reference](https://apireference.aspose.cloud/cells/) | [Code Samples](https://github.com/aspose-cells-cloud/aspose-cells-cloud-node) | [Blog](https://blog.aspose.cloud/category/cells/) | [Free Support](https://forum.aspose.cloud/c/cells) | [Free Trial](https://dashboard.aspose.cloud/#/apps)
