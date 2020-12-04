var range = new Range();
const { CellsShapesApi, CellsShapes_GetWorksheetShapesRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"

var req = new CellsShapes_GetWorksheetShapesRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.folder = "";

cellsApi.cellsShapesGetWorksheetShapes(req)
    .then((result) => {
        console.log(result)
    });