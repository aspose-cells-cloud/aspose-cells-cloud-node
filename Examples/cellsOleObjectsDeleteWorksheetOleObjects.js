const { CellsOleObjectsApi, CellsOleObjects_DeleteWorksheetOleObjectsRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsOleObjects_DeleteWorksheetOleObjectsRequest();
req.name = filename;
req.sheetName = "Sheet6";
req.folder = "";

return cellsApi.cellsOleObjectsDeleteWorksheetOleObjects(req)
  .then((result) => {
    console.log(result)
  });