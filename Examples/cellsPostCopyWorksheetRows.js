const { CellsApi, Cells_PostCopyWorksheetRowsRequest } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"
cellsApi = new CellsApi(AppSid, AppKey);
filename = "Book1.xlsx"



var req = new Cells_PostCopyWorksheetRowsRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.worksheet = "Sheet1";
req.sourceRowIndex = 1;
req.destinationRowIndex = 1;
req.rowNumber = 1;
req.folder = "";

return cellsApi.cellsPostCopyWorksheetRows(req)
    .then((result) => {
        console.log(result)
    });