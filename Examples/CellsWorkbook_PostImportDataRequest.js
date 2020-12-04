const { CellsWorkbookApi, CellsWorkbook_PostImportDataRequest,ImportIntArrayOption } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsWorkbook_PostImportDataRequest();
req.name = filename;
req.folder = "";
var data = new ImportIntArrayOption();
data.destinationWorksheet = "Sheet1";
data.firstColumn = 1;
data.firstRow = 3;
data.importDataType = "IntArray";
data.isVertical = true;
data.data = [ 1, 2, 3, 4 ];
req.importdata = data;

return cellsApi.cellsWorkbookPostImportData(req)
  .then((result) => {
    console.log(result)
  });