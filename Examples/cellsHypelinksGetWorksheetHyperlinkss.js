const { CellsHypelinksApi, CellsHypelinks_GetWorksheetHyperlinksRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"



var req = new CellsHypelinks_GetWorksheetHyperlinksRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.folder = "";

cellsApi.cellsHypelinksGetWorksheetHyperlinks(req)
    .then((result) => {
        console.log(result)
    });