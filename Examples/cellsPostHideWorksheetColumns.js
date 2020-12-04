const { CellsApi, Cells_PostHideWorksheetColumnsRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"



var req = new Cells_PostHideWorksheetColumnsRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.startColumn = 1;
req.totalColumns = 2;
req.folder = "";

return cellsApi.cellsPostHideWorksheetColumns(req)
    .then((result) => {
        console.log(result)
    });