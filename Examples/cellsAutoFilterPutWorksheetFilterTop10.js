const { CellsAutoFilterApi, CellsAutoFilter_PutWorksheetFilterTop10Request } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"
cellsApi = new CellsAutoFilterApi(AppSid, AppKey);
filename = "Book1.xlsx"


var req = new CellsAutoFilter_PutWorksheetFilterTop10Request();
req.name = filename;
req.sheetName = "Sheet1";
req.range = "A1:C10";
req.fieldIndex = 0;
req.isTop = true;
req.isPercent = true;
req.itemCount = 1;
req.matchBlanks = null;
req.refresh = null;
req.folder = "";

return cellsAutoFilterApi.cellsAutoFilterPutWorksheetFilterTop10(req)
  .then((result) => {
    console.log(result)
  });