const { CellsWorksheetsApi, CellsWorksheets_PutWorksheetBackgroundRequest, ProtectSheetParameter } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xls"


var req = new CellsWorksheets_PutWorksheetBackgroundRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.png = localPath + png;
req.folder = "";

return cellsApi.cellsWorksheetsPutWorksheetBackground(req)
    .then((result) => {
        console.log(result)
    });