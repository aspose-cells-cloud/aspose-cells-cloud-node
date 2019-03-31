const { CellsAutoFilterApi, CellsAutoFilter_PutWorksheetCustomFilterRequest, ColorFilterRequest, CellsColor } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"
cellsApi = new CellsAutoFilterApi(AppSid, AppKey);
filename = "Book1.xlsx"


var req = new CellsAutoFilter_PutWorksheetCustomFilterRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.range = "A1:C10";
req.fieldIndex = 0;
req.folder = "";
req.operatorType1 = "LessOrEqual";
req.criteria1 = "test";
req.isAnd = false;
req.operatorType2 = "LessOrEqual";
req.criteria2 = "test";
req.matchBlanks = true;
req.refresh = false;

cellsAutoFilterApi.cellsAutoFilterPutWorksheetCustomFilter(req)
    .then((result) => {
        console.log(result)
    });