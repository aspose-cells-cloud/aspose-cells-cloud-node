const { CellsAutoFilterApi, CellsAutoFilter_DeleteWorksheetFilterRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsAutoFilter_DeleteWorksheetFilterRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.fieldIndex = 1;
req.criteria = "test";
req.folder = "";

return cellsApi.cellsAutoFilterDeleteWorksheetFilter(req)
  .then((result) => {
    console.log(result)
  });