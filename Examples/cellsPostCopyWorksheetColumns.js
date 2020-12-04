const { CellsApi, Cells_PostCopyWorksheetColumnsRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new Cells_PostCopyWorksheetColumnsRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.worksheet = "Sheet1";
req.sourceColumnIndex = 1;
req.destinationColumnIndex = 21;
req.columnNumber = 1;
req.folder = "";

return cellsApi.cellsPostCopyWorksheetColumns(req)
    .then((result) => {
        console.log(result)
    });