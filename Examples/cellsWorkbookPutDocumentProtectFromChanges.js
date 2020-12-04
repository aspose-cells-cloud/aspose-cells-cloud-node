const { CellsWorkbookApi, CellsWorkbook_PutDocumentProtectFromChangesRequest, PasswordRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"



var req = new CellsWorkbook_PutDocumentProtectFromChangesRequest();
req.name = filename;
req.folder = "";
req.password = new PasswordRequest();
req.password.password = "123456";

return cellsApi.cellsWorkbookPutDocumentProtectFromChanges(req)
    .then((result) => {
        console.log(result)
    });