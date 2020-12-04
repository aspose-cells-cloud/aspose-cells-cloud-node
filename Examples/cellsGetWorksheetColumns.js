const { CellsApi, Cells_GetWorksheetColumnsRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new Cells_GetWorksheetColumnsRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.folder = "";

return cellsApi.cellsGetWorksheetColumns(req)
  .then((result) => {
    console.log(result)
  });