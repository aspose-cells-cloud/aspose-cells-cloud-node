const { CellsApi, Cells_PostRowStyleRequest,Style,Font} = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"



var req = new Cells_PostRowStyleRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.rowIndex = 1;
req.folder = "";
var style = new Style();
var font = new Font();
font.isBold = true;
font.size = 20;
style.font = font;
req.style = style;

return cellsApi.cellsPostRowStyle(req)
  .then((result) => {
    console.log(result)
  });