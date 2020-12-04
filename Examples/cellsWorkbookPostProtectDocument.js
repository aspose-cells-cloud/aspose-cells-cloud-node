const { CellsWorkbookApi, CellsWorkbook_PostProtectDocumentRequest, WorkbookProtectionRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"



var req = new CellsWorkbook_PostProtectDocumentRequest();
req.name = filename;
req.folder = "";
var protection = new WorkbookProtectionRequest();
protection.password = "123";
protection.protectionType = "All";
req.protection = protection;

cellsApi.cellsWorkbookPostProtectDocument(req)
    .then((result) => {
        console.log(result)
    });