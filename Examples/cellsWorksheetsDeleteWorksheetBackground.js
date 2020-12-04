const { CellsWorksheetsApi, CellsWorksheets_DeleteWorksheetBackgroundRequest } = require("asposecellscloud");
let date = require('date-and-time');

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsWorksheets_DeleteWorksheetBackgroundRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.folder = "";

cellsApi.cellsWorksheetsDeleteWorksheetBackground(req)
    .then((result) => {
        console.log(result)
    });