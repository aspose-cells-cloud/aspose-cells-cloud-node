const { CellsListObjectsApi, CellsListObjects_GetWorksheetListObjectsRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsListObjects_GetWorksheetListObjectsRequest();
req.name = filename;
req.sheetName = "Sheet7";
req.folder = "";

cellsApi.cellsListObjectsGetWorksheetListObjects(req)
    .then((result) => {
        console.log(result)
    });