const { CellsApi, Cells_GetWorksheetCellStyleRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new Cells_GetWorksheetCellStyleRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.cellName = "A1";
req.folder = "";

return cellsApi.cellsGetWorksheetCellStyle(req)
    .then((result) => {
        console.log(result)
    });