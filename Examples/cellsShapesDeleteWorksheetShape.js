var range = new Range();
const { CellsShapesApi, CellsShapes_DeleteWorksheetShapeRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsShapes_DeleteWorksheetShapeRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.shapeindex = 0;
req.folder = "";

cellsApi.cellsShapesDeleteWorksheetShape(req)
    .then((result) => {
        console.log(result)
    });