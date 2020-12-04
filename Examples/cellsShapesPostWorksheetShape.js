var range = new Range();
const { CellsShapesApi, CellsShapes_GetWorksheetShapesRequest, Shape } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"

var req = new CellsShapes_PostWorksheetShapeRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.shapeindex = 0;
req.dto = new Shape();
req.dto.lowerRightColumn = 10;
req.folder = "";

return cellsApi.cellsShapesPostWorksheetShape(req)
    .then((result) => {
        console.log(result)
    });