const { CellsApi, Cells_DeleteWorksheetRowRequest } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"
cellsApi=new CellsApi(AppSid, AppKey);


var req = new Cells_DeleteWorksheetRowRequest();
req.name = "Book1.xlsx";
req.sheetName = "Sheet1";
req.rowIndex = 1;
req.folder = "";


return cellsApi.cellsDeleteWorksheetRow(req)
    .then((result) => {
        console.log(result)
    });