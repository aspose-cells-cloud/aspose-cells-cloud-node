const { CellsWorksheetValidationsApi, CellsWorksheetValidations_GetWorksheetValidationRequest } = require("asposecellscloud");
let date = require('date-and-time');

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"

cellsWorksheetValidationsApi = new CellsWorksheetValidationsApi(AppSid, AppKey);
filename = "Book1.xlsx"


var req = new CellsWorksheetValidations_GetWorksheetValidationRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.validationIndex = 0;
req.folder = "";

cellsWorksheetValidationsApi.cellsWorksheetValidationsGetWorksheetValidation(req)
    .then((result) => {
        console.log(result)
    });