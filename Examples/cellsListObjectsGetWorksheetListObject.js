const { CellsListObjectsApi, CellsListObjects_GetWorksheetListObjectRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"



var req = new CellsListObjects_GetWorksheetListObjectRequest();

req.name = filename;
req.sheetName = "Sheet7";
req.listobjectindex = 0;
req.folder = "";
cellsApi.cellsListObjectsGetWorksheetListObject(req)
    .then((result) => {
        console.log(result)

    });