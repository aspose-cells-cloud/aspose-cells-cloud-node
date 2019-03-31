const {CellsConditionalFormattingsApi, CellsConditionalFormattings_PutWorksheetFormatConditionAreaRequest } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"
cellsApi = new CellsConditionalFormattingsApi(AppSid, AppKey);
filename = "Book1.xlsx"



var req = new CellsConditionalFormattings_PutWorksheetFormatConditionAreaRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.index = 0;
req.cellArea = "A1:C10";
req.folder = "";

cellsConditionalFormattingsApi.cellsConditionalFormattingsPutWorksheetFormatConditionArea(req)
    .then((result) => {
        console.log(result)
});