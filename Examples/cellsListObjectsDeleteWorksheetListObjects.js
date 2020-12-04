const { CellsListObjectsApi, CellsListObjects_DeleteWorksheetListObjectsRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"



var req = new CellsListObjects_DeleteWorksheetListObjectsRequest();
req.name = filename;
req.sheetName = "Sheet7";
req.folder = "";

cellsApi.cellsListObjectsDeleteWorksheetListObjects(req)
    .then((result) => {
        console.log(result)

    });