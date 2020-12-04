const { CellsApi, Cells_GetWorksheetCellRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new Cells_GetWorksheetCellRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.cellOrMethodName = 'A1';
req.folder = "";


return cellsApi.cellsGetWorksheetCell(req)
    .then((result) => {
        console.log(result)
    });