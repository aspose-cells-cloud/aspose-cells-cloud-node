var range = new Range();
const { CellsShapesApi, CellsShapes_DeleteWorksheetShapesRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsShapes_DeleteWorksheetShapesRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.folder = "";

return cellsApi.cellsShapesDeleteWorksheetShapes(req)
    .then((result) => {
        console.log(result)
    });