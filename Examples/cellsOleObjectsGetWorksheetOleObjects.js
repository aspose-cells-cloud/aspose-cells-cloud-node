const { CellsOleObjectsApi, CellsOleObjects_GetWorksheetOleObjectsRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"



var req = new CellsOleObjects_GetWorksheetOleObjectsRequest();
req.name = filename;
req.sheetName = "Sheet6";
req.folder = "";

cellsApi.cellsOleObjectsGetWorksheetOleObjects(req)
  .then((result) => {
    console.log(result)
  });