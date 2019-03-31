const { CellsApi, Cells_PostUpdateWorksheetRowRequest } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"
cellsApi = new CellsApi(AppSid, AppKey);
filename = "Book1.xlsx"


var req = new Cells_PostUpdateWorksheetRowRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.rowIndex = 1;
req.height = 10.8;
req.folder = "";

return cellsApi.cellsPostUpdateWorksheetRow(req)
  .then((result) => {
    console.log(result)
  });