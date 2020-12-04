const { CellsWorksheetsApi, CellsWorksheets_DeleteUnprotectWorksheetRequest, ProtectSheetParameter } = require("asposecellscloud");
let date = require('date-and-time');

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"



var req = new CellsWorksheets_DeleteWorksheetRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.folder = "";

cellsApi.cellsWorksheetsDeleteWorksheet(req)
    .then((result) => {
        console.log(result)
    });