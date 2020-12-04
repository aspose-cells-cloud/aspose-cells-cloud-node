const { CellsPageSetupApi, CellsPageSetup_PostFooterRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"



var req = new CellsPageSetup_PostFooterRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.section = 0;
req.script = "test";
req.isFirstPage = true;
req.folder = "";

cellsApi.cellsPageSetupPostFooter(req)
    .then((result) => {
        console.log(result)
    });