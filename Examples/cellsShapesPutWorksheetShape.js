var range = new Range();
const { CellsShapesApi, CellsShapes_GetWorksheetShapesRequest, } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
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

return cellsApi.cellsShapesPutWorksheetShape(req)
    .then((result) => {
        console.log(result)

    });