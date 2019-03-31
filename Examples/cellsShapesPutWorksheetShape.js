var range = new Range();
const { CellsShapesApi, CellsShapes_GetWorksheetShapesRequest, } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"

cellsShapesApi = new CellsShapesApi(AppSid, AppKey);
filename = "Book1.xlsx"


var req = new model.CellsShapes_PutWorksheetShapeRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.drawingType = "button";
req.upperLeftRow = 1;
req.upperLeftColumn = 1;
req.top = 10;
req.left = 10;
req.width = 100;
req.height = 90;
req.folder = "";

return cellsShapesApi.cellsShapesPutWorksheetShape(req)
    .then((result) => {
        console.log(result)

    });