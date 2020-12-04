const { CellsWorksheetValidationsApi,CellsWorksheetValidations_DeleteWorksheetValidationRequest } = require("asposecellscloud");
let date = require('date-and-time');
const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"

var req = new CellsWorksheetValidations_DeleteWorksheetValidationRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.validationIndex = 0;
req.folder = "";

cellsApi.cellsWorksheetValidationsDeleteWorksheetValidation(req)
    .then((result) => {
        console.log(result)
    });