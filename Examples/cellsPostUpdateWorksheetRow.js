const { CellsApi, Cells_PostUpdateWorksheetRowRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new Cells_PostUpdateWorksheetRowRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.rowIndex = 1;
req.height = 10.8;
req.folder = "";

return cellsApi.cellsPostUpdateWorksheetRow(req)
  .then((result) => {
    console.log(result)
  });