const { CellsWorkbookApi, CellsWorkbook_GetWorkbookTextItemsRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsWorkbook_GetWorkbookTextItemsRequest();
req.name = filename;
req.folder = "";

return cellsApi.cellsWorkbookGetWorkbookTextItems(req)
    .then((result) => {
        console.log(result)
    });