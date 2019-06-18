const { CellsWorksheetValidationsApi, CellsWorksheetValidations_PutWorksheetValidationRequest, Validation, CellArea } = require("asposecellscloud");
let date = require('date-and-time');

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"

cellsWorksheetValidationsApi = new CellsWorksheetValidationsApi(AppSid, AppKey);
filename = "Book1.xlsx"


var req = new CellsWorksheetValidations_PutWorksheetValidationRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.range = "A1:C10";
req.folder = "";

return cellsWorksheetValidationsApi.cellsWorksheetValidationsPutWorksheetValidation(req)
    .then((result) => {
        console.log(result)
    });