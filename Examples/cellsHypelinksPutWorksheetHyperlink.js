const { CellsHypelinksApi, CellsHypelinks_PutWorksheetHyperlinkRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsHypelinks_PutWorksheetHyperlinkRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.firstRow = 1;
req.firstColumn = 1;
req.totalRows = 2;
req.totalColumns = 3;
req.address = "http://wwww.aspose.com";
req.folder = "";

cellsApi.cellsHypelinksPutWorksheetHyperlink(req)
    .then((result) => {
        console.log(result)
    });