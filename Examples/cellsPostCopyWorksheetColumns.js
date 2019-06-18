const { CellsApi, Cells_PostCopyWorksheetColumnsRequest } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"
cellsApi = new CellsApi(AppSid, AppKey);
filename = "Book1.xlsx"


var req = new Cells_PostCopyWorksheetColumnsRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.worksheet = "Sheet1";
req.sourceColumnIndex = 1;
req.destinationColumnIndex = 21;
req.columnNumber = 1;
req.folder = "";

return cellsApi.cellsPostCopyWorksheetColumns(req)
    .then((result) => {
        console.log(result)
    });