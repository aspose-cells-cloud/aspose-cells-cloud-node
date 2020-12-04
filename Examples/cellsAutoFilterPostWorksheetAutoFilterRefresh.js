const { CellsAutoFilterApi, CellsAutoFilter_PostWorksheetAutoFilterRefreshRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsAutoFilter_PostWorksheetAutoFilterRefreshRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.folder = "";

return cellsApi.cellsAutoFilterPostWorksheetAutoFilterRefresh(req)
    .then((result) => {
        console.log(result)
    });