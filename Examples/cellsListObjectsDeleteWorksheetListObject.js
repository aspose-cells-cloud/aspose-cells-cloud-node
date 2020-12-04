const { CellsListObjectsApi, CellsListObjects_DeleteWorksheetListObjectRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsListObjects_DeleteWorksheetListObjectRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.listObjectIndex = 0;
req.folder = "";

cellsApi.cellsListObjectsDeleteWorksheetListObject(req)
    .then((result) => {
        console.log(result)
    });