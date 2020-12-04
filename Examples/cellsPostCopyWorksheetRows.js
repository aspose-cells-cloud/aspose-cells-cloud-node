const { CellsApi, Cells_PostCopyWorksheetRowsRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"



var req = new Cells_PostCopyWorksheetRowsRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.worksheet = "Sheet1";
req.sourceRowIndex = 1;
req.destinationRowIndex = 1;
req.rowNumber = 1;
req.folder = "";

return cellsApi.cellsPostCopyWorksheetRows(req)
    .then((result) => {
        console.log(result)
    });