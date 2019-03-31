const { CellsApi, Cells_PostColumnStyleRequest,Style,Font } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"
cellsApi = new CellsApi(AppSid, AppKey);
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