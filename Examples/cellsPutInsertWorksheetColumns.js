const { CellsApi, Cells_PutInsertWorksheetColumnsRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new Cells_PutInsertWorksheetColumnsRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.columnIndex = 1;
req.columns = 1;
req.updateReference = true;
req.folder = "";

return cellsApi.cellsPutInsertWorksheetColumns(req)
  .then((result) => {
    console.log(result)
  });