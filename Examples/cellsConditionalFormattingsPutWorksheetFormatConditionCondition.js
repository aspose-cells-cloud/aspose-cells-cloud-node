const {CellsConditionalFormattingsApi, CellsConditionalFormattings_PutWorksheetConditionalFormattingRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsConditionalFormattings_PutWorksheetFormatConditionConditionRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.index = 0;
req.type = "CellValue";
req.operatorType = "Between";
req.formula1 = "v1";
req.formula2 = "v2";
req.folder = "";

cellsApi.cellsConditionalFormattingsPutWorksheetFormatConditionCondition(req)
    .then((result) => {
        console.log(result)
    });