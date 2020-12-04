const { CellsHypelinksApi, CellsHypelinks_DeleteWorksheetHyperlinksRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsHypelinks_DeleteWorksheetHyperlinksRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.folder = "";

cellsApi.cellsHypelinksDeleteWorksheetHyperlinks(req)
    .then((result) => {
        console.log(result)
    });