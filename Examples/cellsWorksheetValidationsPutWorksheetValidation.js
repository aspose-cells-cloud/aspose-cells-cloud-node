const { CellsWorksheetValidationsApi, CellsWorksheetValidations_PutWorksheetValidationRequest, Validation, CellArea } = require("asposecellscloud");
let date = require('date-and-time');

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsWorksheetValidations_PutWorksheetValidationRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.range = "A1:C10";
req.folder = "";

return cellsApi.cellsWorksheetValidationsPutWorksheetValidation(req)
    .then((result) => {
        console.log(result)
    });