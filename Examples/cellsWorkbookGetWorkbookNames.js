var range = new Range();
const { CellsWorkbookApi, CellsWorkbook_GetWorkbookNamesRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsWorkbook_GetWorkbookNamesRequest();
req.name = filename;
req.folder = "";

cellsApi.cellsWorkbookGetWorkbookNames(req)
    .then((result) => {
        console.log(result)
    });