const { CellsRangesApi, CellsRanges_PostWorksheetCellsRangeOutlineBorderRequest, Color, RangeSetOutlineBorderRequest, Range } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"

var req = new CellsRanges_PostWorksheetCellsRangeOutlineBorderRequest();
req.name = filename;
req.sheetName = "Sheet1";
var rangeOperate = new RangeSetOutlineBorderRequest();
rangeOperate.borderEdge = "LeftBorder";
rangeOperate.borderStyle = "Dotted";
rangeOperate.borderColor = new Color();
rangeOperate.borderColor.r = 255;
var range = new Range();
range.columnCount = 10;
range.firstColumn = 1;
range.firstRow = 1;
range.rowCount = 2;
range.rowHeight = 10;
rangeOperate.range = range;
req.rangeOperate = rangeOperate;
req.folder = "Temp";

cellsApi.cellsRangesPostWorksheetCellsRangeOutlineBorder(req)
    .then((result) => {
        console.log(result)
    });