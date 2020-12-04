const { CellsApi, Cells_PostColumnStyleRequest,Style,Font } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new Cells_PostColumnStyleRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.columnIndex = 1;
req.folder = "";

var style = new Style();
var font = new Font();
font.isBold = true;
font.size = 16;
style.font = font;
req.style = style;

return cellsApi.cellsPostColumnStyle(req)
    .then((result) => {
        console.log(result)
    });