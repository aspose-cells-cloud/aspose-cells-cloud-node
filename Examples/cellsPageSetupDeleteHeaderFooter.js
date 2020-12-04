const { CellsPageSetupApi, CellsPageSetup_DeleteHeaderFooterRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"



var req = new CellsPageSetup_DeleteHeaderFooterRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.folder = "";

cellsApi.cellsPageSetupDeleteHeaderFooter(req)
    .then((result) => {
        console.log(result)
    });