const { CellsApi, Cells_PostUpdateWorksheetCellStyleRequest,Font,Style } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"

var req = new Cells_PostUpdateWorksheetCellStyleRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.cellName = "A1";
var font = new Font();
font.size = 19;
var style = new Style();
style.font = font;
req.style = style;
req.folder = "";

return cellsApi.cellsPostUpdateWorksheetCellStyle(req)
  .then((result) => {
    console.log(result)
  });