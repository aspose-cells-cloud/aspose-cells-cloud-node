const { CellsRangesApi, CellsRanges_PostWorksheetCellsRangeRowHeightRequest, Range } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsRanges_PostWorksheetCellsRangeRowHeightRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.value = 10.99;
var range = Range();
range.columnCount = 1;
range.columnWidth = 10.1;
range.firstColumn = 1;
range.firstRow = 1;
range.rowCount = 10;
req.range = range;
req.folder = "";

cellsApi.cellsRangesPostWorksheetCellsRangeRowHeight(req)
    .then((result) => {
        console.log(result)
    });