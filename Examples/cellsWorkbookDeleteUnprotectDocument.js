var range = new Range();
const { CellsWorkbookApi, CellsWorkbook_DeleteUnprotectDocumentRequest,WorkbookProtectionRequest } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"

cellsWorkbookApi = new CellsWorkbookApi(AppSid, AppKey);
filename = "Book1.xlsx"

var req = new CellsWorkbook_DeleteUnprotectDocumentRequest();
req.name = filename;
var protection = new WorkbookProtectionRequest();
protection.password = "123";
protection.protectionType = "All";
req.protection = protection;
req.folder = "";

cellsWorkbookApi.cellsWorkbookDeleteUnprotectDocument(req)
    .then((result) => {
        console.log(result)
    });