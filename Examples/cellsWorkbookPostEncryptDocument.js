const { CellsWorkbookApi, CellsWorkbook_PostEncryptDocumentRequest,WorkbookEncryptionRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"



var req = new CellsWorkbook_PostEncryptDocumentRequest();
req.name = filename;
req.folder = "";
var encryption = new WorkbookEncryptionRequest();
encryption.password = "123456";
encryption.keyLength = 128;
encryption.encryptionType = "XOR";
req.encryption = encryption;

cellsApi.cellsWorkbookPostEncryptDocument(req)
    .then((result) => {
        console.log(result)
    });