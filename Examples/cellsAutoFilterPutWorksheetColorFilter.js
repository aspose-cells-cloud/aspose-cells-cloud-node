const { CellsAutoFilterApi, CellsAutoFilter_PutWorksheetColorFilterRequest,ColorFilterRequest,CellsColor } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
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

return cellsApi.cellsAutoFilterPutWorksheetColorFilter(req)
  .then((result) => {
    console.log(result)
  });