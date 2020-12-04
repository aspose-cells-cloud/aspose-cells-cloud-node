const {CellsConditionalFormattingsApi, CellsConditionalFormattings_PutWorksheetConditionalFormattingRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
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

cellsApi.cellsConditionalFormattingsPutWorksheetConditionalFormatting(req)
  .then((result) => {
    console.log(result)
  });