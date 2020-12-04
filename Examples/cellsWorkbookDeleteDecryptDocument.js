var range = new Range();
const { CellsWorkbookApi, CellsWorkbook_DeleteDecryptDocumentRequest,WorkbookEncryptionRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"



var req = new CellsWorkbook_DeleteDecryptDocumentRequest();
req.name = filename;
var encryption = new WorkbookEncryptionRequest();
encryption.password = "123456";
encryption.keyLength = 128;
encryption.encryptionType = "XOR";
req.encryption = encryption;
req.folder = "Temp";

cellsApi.cellsWorkbookDeleteDecryptDocument(req)
    .then((result) => {
        console.log(result)
    });