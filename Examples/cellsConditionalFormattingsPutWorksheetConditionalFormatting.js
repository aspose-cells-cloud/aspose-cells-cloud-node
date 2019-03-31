const {CellsConditionalFormattingsApi, CellsConditionalFormattings_PutWorksheetConditionalFormattingRequest } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"
cellsApi = new CellsConditionalFormattingsApi(AppSid, AppKey);
filename = "Book1.xlsx"

var req = new CellsConditionalFormattings_PutWorksheetConditionalFormattingRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.cellArea = "A1:C10";
var formatcondition = new FormatCondition();
formatcondition.type = "CellValue";
formatcondition.operator = "Between";
formatcondition.formula1 = "v1";
formatcondition.formula2 = "v2";
req.formatcondition = formatcondition;
req.folder = "";

cellsConditionalFormattingsApi.cellsConditionalFormattingsPutWorksheetConditionalFormatting(req)
  .then((result) => {
    console.log(result)
  });