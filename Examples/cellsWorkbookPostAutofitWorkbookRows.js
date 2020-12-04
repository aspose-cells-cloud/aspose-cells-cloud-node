const { CellsWorkbookApi, CellsWorkbook_PostAutofitWorkbookRowsRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"




var req = new CellsWorkbook_PostAutofitWorkbookRowsRequest();
req.name = filename;
req.folder = "";
req.autoFitterOptions = null;
req.startRow = 1;
req.endRow = 100;
req.onlyAuto = true;

return cellsApi.cellsWorkbookPostAutofitWorkbookRows(req)
    .then((result) => {
        console.log(result)
    });