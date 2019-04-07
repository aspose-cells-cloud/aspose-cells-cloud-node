var range = new Range();
const { CellsWorkbookApi, CellsWorkbook_DeleteDecryptDocumentRequest,WorkbookEncryptionRequest } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"

cellsWorkbookApi  = new CellsWorkbookApi(AppSid, AppKey);
filename = "Book1.xlsx"



var req = new CellsWorkbook_DeleteDecryptDocumentRequest();
req.name = filename;
var encryption = new WorkbookEncryptionRequest();
encryption.password = "123456";
encryption.keyLength = 128;
encryption.encryptionType = "XOR";
req.encryption = encryption;
req.folder = "Temp";

cellsWorkbookApi.cellsWorkbookDeleteDecryptDocument(req)
    .then((result) => {
        console.log(result)
    });