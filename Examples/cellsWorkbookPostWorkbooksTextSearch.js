const { CellsWorkbookApi, CellsWorkbook_PostWorkbooksTextSearchRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"



var req = new CellsWorkbook_PostWorkbooksTextSearchRequest();
req.name = filename;
req.folder = "";
req.text = "test";

return cellsApi.cellsWorkbookPostWorkbooksTextSearch(req)
    .then((result) => {
        console.log(result)
    });