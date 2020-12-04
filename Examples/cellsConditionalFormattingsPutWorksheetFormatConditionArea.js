const {CellsConditionalFormattingsApi, CellsConditionalFormattings_PutWorksheetFormatConditionAreaRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"



var req = new CellsConditionalFormattings_PutWorksheetFormatConditionAreaRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.index = 0;
req.cellArea = "A1:C10";
req.folder = "";

cellsApi.cellsConditionalFormattingsPutWorksheetFormatConditionArea(req)
    .then((result) => {
        console.log(result)
});