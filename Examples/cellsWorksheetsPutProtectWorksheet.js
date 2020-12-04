const { CellsWorksheetsApi, CellsWorksheets_PutProtectWorksheetRequest, ProtectSheetParameter } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xls"



var req = new CellsWorksheets_PutProtectWorksheetRequest();
req.name = filename;
req.sheetName = "Sheet1";
var protectParameter = new ProtectSheetParameter();
protectParameter.protectionType = "All";
protectParameter.password = "123";
req.protectParameter = protectParameter;
req.folder = "";

return cellsApi.cellsWorksheetsPutProtectWorksheet(req)
    .then((result) => {
        console.log(result)
    });