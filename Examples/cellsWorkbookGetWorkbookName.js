var range = new Range();
const { CellsWorkbookApi, CellsWorkbook_GetWorkbookNameRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsWorkbook_GetWorkbookNameRequest();
req.name = filename;
req.nameName = "Name_2";
req.folder = "";

return cellsApi.cellsWorkbookGetWorkbookName(req)
    .then((result) => {
        console.log(result)
    });