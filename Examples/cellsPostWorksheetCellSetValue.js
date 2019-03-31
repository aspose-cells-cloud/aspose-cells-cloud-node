const { CellsApi, Cells_PostWorksheetCellSetValueRequest } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"
cellsApi = new CellsApi(AppSid, AppKey);
filename = "Book1.xlsx"


var req = new Cells_PostWorksheetCellSetValueRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.cellName = "A1";
req.folder = "";
req.value = "1";
req.type = "int";
req.formula = null;
return cellsApi.cellsPostWorksheetCellSetValue(req)
  .then((result) => {
    console.log(result)
});