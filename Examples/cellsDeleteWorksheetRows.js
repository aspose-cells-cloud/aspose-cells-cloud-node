const { CellsApi, Cells_DeleteWorksheetRowsRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"

var req = new Cells_DeleteWorksheetRowsRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.startrow = 1;
req.totalRows = 2;
req.updateReference = true;
req.folder = "";

return cellsApi.cellsDeleteWorksheetRows(req)
    .then((result) => {
        console.log(result)
    });