var range = new Range();
const { CellsShapesApi, CellsShapes_DeleteWorksheetShapeRequest } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"

cellsShapesApi = new CellsShapesApi(AppSid, AppKey);
filename = "Book1.xlsx"


var req = new CellsShapes_DeleteWorksheetShapeRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.shapeindex = 0;
req.folder = "";

cellsShapesApi.cellsShapesDeleteWorksheetShape(req)
    .then((result) => {
        console.log(result)
    });