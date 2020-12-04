const { CellsRangesApi, CellsRanges_PostWorksheetCellsRangeMergeRequest, Range } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"

var req = new CellsRanges_PostWorksheetCellsRangeMergeRequest();
req.name = filename;
req.sheetName = "Sheet1";
var range = new Range();
range.columnCount = 1;
range.columnWidth = 10.1;
range.firstColumn = 1;
range.firstRow = 1;
range.rowCount = 10;
req.range = range;
req.folder = "";

cellsApi.cellsRangesPostWorksheetCellsRangeMerge(req)
    .then((result) => {
        console.log(result)

    });