var range = new Range();
const { CellsShapesApi, CellsShapes_GetWorksheetShapesRequest, Shape } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"

cellsShapesApi = new CellsShapesApi(AppSid, AppKey);
filename = "Book1.xlsx"

var req = new CellsShapes_PostWorksheetShapeRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.shapeindex = 0;
req.dto = new Shape();
req.dto.lowerRightColumn = 10;
req.folder = "";

return cellsShapesApi.cellsShapesPostWorksheetShape(req)
    .then((result) => {
        console.log(result)
    });