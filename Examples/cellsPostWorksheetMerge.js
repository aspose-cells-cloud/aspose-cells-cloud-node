const { CellsApi, Cells_PostWorksheetMergeRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"



var req = new Cells_PostWorksheetMergeRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.startRow = 1;
req.startColumn = 1;
req.totalRows = 4;
req.totalColumns = 4;
req.folder = "";

return cellsApi.cellsPostWorksheetMerge(req)
  .then((result) => {
    console.log(result)
  });