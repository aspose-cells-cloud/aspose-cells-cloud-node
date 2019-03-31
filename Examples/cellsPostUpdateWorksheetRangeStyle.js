const { CellsApi, Cells_PostUpdateWorksheetCellStyleRequest,Font,Style } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"
cellsApi = new CellsApi(AppSid, AppKey);
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