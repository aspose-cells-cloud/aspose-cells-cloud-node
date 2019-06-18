const { CellsAutoFilterApi, CellsAutoFilter_PutWorksheetColorFilterRequest,ColorFilterRequest,CellsColor } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"
cellsApi = new CellsAutoFilterApi(AppSid, AppKey);
filename = "Book1.xlsx"


var req = new CellsAutoFilter_PutWorksheetColorFilterRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.range = "A1:C10";
req.fieldIndex = 0;
req.folder = "";
var colorFilter = new ColorFilterRequest();
req.colorFilter = colorFilter;
var color = new model.Color();//0, 255, 245, 2
color.r = 255;
color.g = 245;

colorFilter.foregroundColor = new CellsColor();
colorFilter.foregroundColor.color = color;
colorFilter.pattern = "Solid";
req.matchBlanks = true;
req.refresh = true;

return cellsAutoFilterApi.cellsAutoFilterPutWorksheetColorFilter(req)
  .then((result) => {
    console.log(result)
  });