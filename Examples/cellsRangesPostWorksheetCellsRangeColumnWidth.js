const { CellsRangesApi, CellsRanges_PostWorksheetCellsRangeColumnWidthRequest, Range } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
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

cellsApi.cellsRangesPostWorksheetCellsRangeColumnWidth(req)
    .then((result) => {
        console.log(result)

    });