const { CellsPageSetupApi, CellsPageSetup_PostPageSetupRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsPageSetup_PostPageSetupRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.pageSetup = new model.PageSetup();
req.pageSetup.blackAndWhite = true;
req.folder = "";

cellsApi.cellsPageSetupPostPageSetup(req)
    .then((result) => {
        console.log(result)
    });