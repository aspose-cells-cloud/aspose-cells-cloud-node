var range = new Range();
const { CellsWorkbookApi, CellsWorkbook_GetWorkbookDefaultStyleRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsWorkbook_GetWorkbookDefaultStyleRequest();
req.name = filename;
req.folder = "";

return cellsApi.cellsWorkbookGetWorkbookDefaultStyle(req)
    .then((result) => {
        console.log(result)
    });