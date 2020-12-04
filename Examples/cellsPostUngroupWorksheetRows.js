const { CellsApi, Cells_PostUngroupWorksheetRowsRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"

var req = new Cells_PostUngroupWorksheetRowsRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.firstIndex = 1;
req.lastIndex = 5;
req.isAll = true;
req.folder = "Temp";

return cellsApi.cellsPostUngroupWorksheetRows(req)
  .then((result) => {
    console.log(result)
  });