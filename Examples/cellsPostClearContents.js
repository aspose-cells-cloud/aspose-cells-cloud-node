const { CellsApi, Cells_PostClearContentsRequest } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"
cellsApi = new CellsApi(AppSid, AppKey);
filename = "Book1.xlsx"


var req = new Cells_PostClearContentsRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.range = "A1:C10";
req.startRow = 1;
req.startColumn = 1;
req.endRow = 3;
req.endColumn = 3;
req.folder = "";

return cellsApi.cellsPostClearContents(req)
    .then((result) => {
        console.log(result)
    });