const { CellsApi, Cells_PostCopyCellIntoCellRequest } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"
cellsApi = new CellsApi(AppSid, AppKey);
filename = "Book1.xlsx"


var req = new Cells_PostCopyCellIntoCellRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.destCellName = "C1";
req.worksheet = "Sheet1";
req.cellname = "A1";
req.row = 1;
req.column = 1;
req.folder = "";

return cellsApi.cellsPostCopyCellIntoCell(req)
    .then((result) => {
        console.log(result)
    });