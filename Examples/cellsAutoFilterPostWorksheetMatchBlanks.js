const { CellsAutoFilterApi, CellsAutoFilter_PostWorksheetMatchBlanksRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsAutoFilter_PostWorksheetMatchBlanksRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.fieldIndex = 0;
req.folder = "";

return cellsApi.cellsAutoFilterPostWorksheetMatchBlanks(req)
  .then((result) => {
    console.log(result)
  });