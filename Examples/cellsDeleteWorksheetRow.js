const { CellsApi, Cells_DeleteWorksheetRowRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);


var req = new Cells_DeleteWorksheetRowRequest();
req.name = "Book1.xlsx";
req.sheetName = "Sheet1";
req.rowIndex = 1;
req.folder = "";


return cellsApi.cellsDeleteWorksheetRow(req)
    .then((result) => {
        console.log(result)
    });