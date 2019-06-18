const { CellsAutoFilterApi, CellsAutoFilter_DeleteWorksheetDateFilterRequest } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"
cellsApi = new CellsAutoFilterApi(AppSid, AppKey);
filename = "Book1.xlsx"

var req = new CellsAutoFilter_DeleteWorksheetDateFilterRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.fieldIndex = 1;
req.dateTimeGroupingType = "Day";
req.year = 2010;
req.month = 10;
req.day = 1;
req.hour = 1;
req.minute = 1;
req.second = 1;
req.folder = "";

return cellsAutoFilterApi.cellsAutoFilterDeleteWorksheetDateFilter(req)
  .then((result) => {
    console.log(result)
  });