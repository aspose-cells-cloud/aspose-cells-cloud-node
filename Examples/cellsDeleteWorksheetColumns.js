const {CellsApi, Cells_DeleteWorksheetColumnsRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);

req = new Cells_DeleteWorksheetColumnsRequest();
req.name = "Book1.xlsx";
req.sheetName = "Sheet1";
req.columnIndex = 1;
req.columns = 1;
req.updateReference = true;
req.folder = "";



cellsApi.cellsDeleteWorksheetColumns(req)
    .then((result) => {
        console.log(result)
    });