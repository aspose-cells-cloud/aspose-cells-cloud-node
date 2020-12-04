const { CellsWorksheetsApi, CellsWorksheets_DeleteUnprotectWorksheetRequest, ProtectSheetParameter } = require("asposecellscloud");
let date = require('date-and-time');

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsWorksheets_DeleteUnprotectWorksheetRequest();
req.name = filename;
req.sheetName = "Sheet1";
var protectParameter = new ProtectSheetParameter();
protectParameter.password = "12345";
protectParameter.protectionType = "All";
req.protectParameter = protectParameter;
req.folder = "";

cellsApi.cellsWorksheetsDeleteUnprotectWorksheet(req)
    .then((result) => {
        console.log(result)
    });