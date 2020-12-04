const { CellsHypelinksApi, CellsHypelinks_PostWorksheetHyperlinkRequest,Hyperlink } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"




var req = new CellsHypelinks_PostWorksheetHyperlinkRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.hyperlinkIndex = 0;
var hyperlink = new Hyperlink();
hyperlink.address = "http://www.aspose.com";
req.hyperlink = hyperlink;
req.folder = "";

cellsApi.cellsHypelinksPostWorksheetHyperlink(req)
    .then((result) => {
        console.log(result)
    });