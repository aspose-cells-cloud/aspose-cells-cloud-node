const { CellsRangesApi, CellsRanges_PostWorksheetCellsRangeColumnWidthRequest, Range } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"

cellsRangesApi = new CellsRangesApi(AppSid, AppKey);
filename = "Book1.xlsx"

var req = new CellsRanges_PostWorksheetCellsRangeColumnWidthRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.value = 10.01;
var range = new Range();
range.columnCount = 1;
range.columnWidth = 10.1;
range.firstColumn = 1;
range.firstRow = 1;
range.rowCount = 10;
req.range = range;
req.folder = "";

cellsRangesApi.cellsRangesPostWorksheetCellsRangeColumnWidth(req)
    .then((result) => {
        console.log(result)

    });