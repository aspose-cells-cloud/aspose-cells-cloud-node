const { CellsAutoFilterApi, CellsAutoFilter_PutWorksheetFilterTop10Request } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsAutoFilter_PutWorksheetFilterTop10Request();
req.name = filename;
req.sheetName = "Sheet1";
req.range = "A1:C10";
req.fieldIndex = 0;
req.isTop = true;
req.isPercent = true;
req.itemCount = 1;
req.matchBlanks = null;
req.refresh = null;
req.folder = "";

return cellsApi.cellsAutoFilterPutWorksheetFilterTop10(req)
  .then((result) => {
    console.log(result)
  });