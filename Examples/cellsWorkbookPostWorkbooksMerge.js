const { CellsWorkbookApi, CellsWorkbook_PostWorkbooksMergeRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"




var req = new CellsWorkbook_PostWorkbooksMergeRequest();
req.name = filename;
req.folder = "";
req.mergeWith = "myDocument.xlsx";

return cellsApi.cellsWorkbookPostWorkbooksMerge(req)
    .then((result) => {
        console.log(result)
    });