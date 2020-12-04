const { CellsApi, Cells_GetWorksheetColumnRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new Cells_GetWorksheetColumnRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.columnIndex = 1;
req.folder = "";

return cellsApi.cellsGetWorksheetColumn(req)
    .then((result) => {
        console.log(result)
    });