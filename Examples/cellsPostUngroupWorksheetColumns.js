const { CellsApi, Cells_PostUngroupWorksheetColumnsRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new Cells_PostUngroupWorksheetColumnsRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.firstIndex = 1;
req.lastIndex = 5;
req.folder = "";

return cellsApi.cellsPostUngroupWorksheetColumns(req)
  .then((result) => {
    console.log(result)
  });