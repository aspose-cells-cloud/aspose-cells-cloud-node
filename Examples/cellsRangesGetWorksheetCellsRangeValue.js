const { CellsRangesApi, CellsRanges_GetWorksheetCellsRangeValueRequest } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"

cellsRangesApi = new CellsRangesApi(AppSid, AppKey);
filename = "Book1.xlsx"

var req = new CellsRanges_GetWorksheetCellsRangeValueRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.firstRow = 0;
req.firstColumn = 0;
req.rowCount = 3;
req.columnCount = 2;
req.folder = "";

cellsRangesApi.cellsRangesGetWorksheetCellsRangeValue(req)
    .then((result) => {
        console.log(result)
    });

