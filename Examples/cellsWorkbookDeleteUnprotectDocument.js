var range = new Range();
const { CellsWorkbookApi, CellsWorkbook_DeleteUnprotectDocumentRequest,WorkbookProtectionRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"

var req = new CellsWorkbook_DeleteUnprotectDocumentRequest();
req.name = filename;
var protection = new WorkbookProtectionRequest();
protection.password = "123";
protection.protectionType = "All";
req.protection = protection;
req.folder = "";

cellsApi.cellsWorkbookDeleteUnprotectDocument(req)
    .then((result) => {
        console.log(result)
    });