const { CellsHypelinksApi, CellsHypelinks_GetWorksheetHyperlinkRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"



var req = CellsHypelinks_GetWorksheetHyperlinkRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.hyperlinkIndex = 0;
req.folder = "";

cellsApi.cellsHypelinksGetWorksheetHyperlink(req)
    .then((result) => {
        console.log(result)

    });