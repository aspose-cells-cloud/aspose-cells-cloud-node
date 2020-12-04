const { CellsApi, Cells_PutInsertWorksheetRowsRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"



var req = new Cells_PutInsertWorksheetRowsRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.startrow = 1;
req.totalRows = 2;
req.updateReference = true;
req.folder = "";

return cellsApi.cellsPutInsertWorksheetRows(req)
  .then((result) => {
    console.log(result)
  });