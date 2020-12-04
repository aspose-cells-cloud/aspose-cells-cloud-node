const { CellsApi, Cells_PostUpdateWorksheetCellStyleRequest,Font,Style } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"

var req = newCells_PostUpdateWorksheetRangeStyleRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.range = "A1:C10";
var font = new Font();
font.size = 15;
var style = new Style();
style.font = font;
req.style = style;
req.folder = "";

return cellsApi.cellsPostUpdateWorksheetRangeStyle(req)
  .then((result) => {
    console.log(result)
  });