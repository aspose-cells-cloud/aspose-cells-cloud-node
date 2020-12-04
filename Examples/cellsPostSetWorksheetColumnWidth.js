const { CellsApi, Cells_PostSetWorksheetColumnWidthRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"

var req = new Cells_PostSetWorksheetColumnWidthRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.columnIndex = 1;
req.width = 10;
req.folder = "";

return cellsApi.cellsPostSetWorksheetColumnWidth(req)
  .then((result) => {
    console.log(result)
  });