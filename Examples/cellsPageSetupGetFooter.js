const { CellsPageSetupApi, CellsPageSetup_GetFooterRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"

var req = new CellsPageSetup_GetFooterRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.folder = "";

cellsApi.cellsPageSetupGetFooter(req)
    .then((result) => {
        console.log(result)

    });