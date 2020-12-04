const { CellsRangesApi, CellsRanges_PostWorksheetCellsRangeMoveToRequest, Range } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsRanges_PostWorksheetCellsRangeMoveToRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.destRow = 1;
req.destColumn = 1;
var range = new Range();
range.columnCount = 1;
range.columnWidth = 10.1;
range.firstColumn = 1;
range.firstRow = 1;
range.rowCount = 10;
req.range = range;
req.folder = "";

return cellsApi.cellsRangesPostWorksheetCellsRangeMoveTo(req)
  .then((result) => {
    console.log(result)
  });