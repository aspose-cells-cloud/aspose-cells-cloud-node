const { CellsPageSetupApi, CellsPageSetup_PostHeaderRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsPageSetup_PostHeaderRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.section = 1;
req.script = "test";
req.isFirstPage = false;
req.folder = "";

cellsApi.cellsPageSetupPostHeader(req)
    .then((result) => {
        console.log(result)
    });