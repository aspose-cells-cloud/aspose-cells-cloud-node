var range = new Range();
const { CellsWorkbookApi, CellsWorkbook_DeleteDocumentUnprotectFromChangesRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsWorkbook_DeleteDocumentUnprotectFromChangesRequest();
req.name = filename;
req.folder = "";

cellsApi.cellsWorkbookDeleteDocumentUnprotectFromChanges(req)
  .then((result) => {
    console.log(result)
  });