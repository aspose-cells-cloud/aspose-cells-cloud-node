const { CellsRangesApi, CellsRanges_PostWorksheetCellsRangeOutlineBorderRequest, Color, RangeSetOutlineBorderRequest, Range } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"

cellsRangesApi = new CellsRangesApi(AppSid, AppKey);
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

cellsRangesApi.cellsRangesPostWorksheetCellsRangeOutlineBorder(req)
    .then((result) => {
        console.log(result)
    });