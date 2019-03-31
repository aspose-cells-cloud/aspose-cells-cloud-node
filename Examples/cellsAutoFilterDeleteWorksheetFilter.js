const { CellsAutoFilterApi, CellsAutoFilter_DeleteWorksheetFilterRequest } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"
cellsApi = new CellsAutoFilterApi(AppSid, AppKey);
filename = "Book1.xlsx"


var req = new CellsAutoFilter_DeleteWorksheetFilterRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.fieldIndex = 1;
req.criteria = "test";
req.folder = "";

return cellsAutoFilterApi.cellsAutoFilterDeleteWorksheetFilter(req)
  .then((result) => {
    console.log(result)
  });