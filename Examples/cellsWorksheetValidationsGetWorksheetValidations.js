const { CellsWorksheetValidationsApi, CellsWorksheetValidations_GetWorksheetValidationsRequest } = require("asposecellscloud");
let date = require('date-and-time');

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsWorksheetValidations_GetWorksheetValidationsRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.folder = "";

cellsApi.cellsWorksheetValidationsGetWorksheetValidations(req)
    .then((result) => {
        console.log(result)
    });