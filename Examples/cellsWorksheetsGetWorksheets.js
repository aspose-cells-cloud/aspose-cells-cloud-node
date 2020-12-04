const { CellsWorksheetsApi, CellsWorksheets_GetWorksheetsRequest } = require("asposecellscloud");


const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsWorksheets_GetWorksheetsRequest();
req.name = filename;
req.folder = "";

return cellsApi.cellsWorksheetsGetWorksheets(req)
    .then((result) => {
        console.log(result)
    });