const { CellsApi, Cells_PostGroupWorksheetColumnsRequest } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"
cellsApi = new CellsApi(AppSid, AppKey);
filename = "Book1.xlsx"



var req = new Cells_PostGroupWorksheetColumnsRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.firstIndex = 1;
req.lastIndex = 1;
req.hide = true;
req.folder = "";

return cellsApi.cellsPostGroupWorksheetColumns(req)
    .then((result) => {
        console.log(result)
    });