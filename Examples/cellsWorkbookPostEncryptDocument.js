const { CellsWorkbookApi, CellsWorkbook_PostEncryptDocumentRequest,WorkbookEncryptionRequest } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"

cellsWorkbookApi = new CellsWorkbookApi(AppSid, AppKey);
filename = "Book1.xlsx"



var req = new CellsWorkbook_PostEncryptDocumentRequest();
req.name = filename;
req.folder = "";
var encryption = new WorkbookEncryptionRequest();
encryption.password = "123456";
encryption.keyLength = 128;
encryption.encryptionType = "XOR";
req.encryption = encryption;

cellsWorkbookApi.cellsWorkbookPostEncryptDocument(req)
    .then((result) => {
        console.log(result)
    });