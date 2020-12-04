var range = new Range();
const { CellsWorkbookApi, CellsWorkbook_GetWorkbookRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsWorkbook_GetWorkbookRequest();
req.name = filename;
req.password = null;
req.isAutoFit = true;
req.folder = "";

cellsApi.cellsWorkbookGetWorkbook(req)
    .then((result) => {
        console.log(result)
    });