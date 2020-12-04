var range = new Range();
const { CellsWorkbookApi, CellsWorkbook_GetWorkbookNameValueRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsWorkbook_GetWorkbookNameValueRequest();
req.name = filename;
req.nameName = "Name_2";
req.folder = "";

return cellsApi.cellsWorkbookGetWorkbookNameValue(req)
    .then((result) => {
        console.log(result)
    });
