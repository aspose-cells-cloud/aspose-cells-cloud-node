const { CellsApi, Cells_PutInsertWorksheetRowRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new Cells_PutInsertWorksheetRowRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.rowIndex = 1;
req.folder = "";

return cellsApi.cellsPutInsertWorksheetRow(req)
  .then((result) => {
    console.log(result)
  });