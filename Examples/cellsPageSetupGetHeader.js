const { CellsPageSetupApi, CellsPageSetup_GetHeaderRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"

var req = new CellsPageSetup_GetHeaderRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.folder = "";

return cellsApi.cellsPageSetupGetHeader(req)
    .then((result) => {
        console.log(result)
    });