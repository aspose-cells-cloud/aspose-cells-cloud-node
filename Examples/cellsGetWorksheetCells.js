const { CellsApi, Cells_GetWorksheetCellsRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new Cells_GetWorksheetCellsRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.offest = 1;
req.count = 1;
req.folder = "";

return cellsApi.cellsGetWorksheetCells(req)
  .then((result) => {
    console.log(result)
  });