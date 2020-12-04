const { CellsAutoFilterApi, CellsAutoFilter_PostWorksheetMatchNonBlanksRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"



var req = new CellsAutoFilter_PostWorksheetMatchNonBlanksRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.fieldIndex = 0;
req.folder = "";

return cellsApi.cellsAutoFilterPostWorksheetMatchNonBlanks(req)
  .then((result) => {
    console.log(result)
  });