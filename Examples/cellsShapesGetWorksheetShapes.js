var range = new Range();
const { CellsShapesApi, CellsShapes_GetWorksheetShapesRequest } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"

cellsShapesApi = new CellsShapesApi(AppSid, AppKey);
filename = "Book1.xlsx"

var req = new CellsShapes_GetWorksheetShapesRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.folder = "";

cellsShapesApi.cellsShapesGetWorksheetShapes(req)
    .then((result) => {
        console.log(result)
    });