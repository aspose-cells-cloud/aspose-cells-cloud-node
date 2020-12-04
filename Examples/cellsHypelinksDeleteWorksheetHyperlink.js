const { CellsHypelinksApi, CellsHypelinks_DeleteWorksheetHyperlinkRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"

var req = new CellsHypelinks_DeleteWorksheetHyperlinkRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.hyperlinkIndex = 0;
req.folder = "";

cellsApi.cellsHypelinksDeleteWorksheetHyperlink(req)
    .then((result) => {
        console.log(result)
    });