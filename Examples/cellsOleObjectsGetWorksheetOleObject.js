const { CellsOleObjectsApi, CellsOleObjects_DeleteWorksheetOleObjectsRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new model.CellsOleObjects_GetWorksheetOleObjectRequest();
req.name = filename;
req.sheetName = "Sheet6";
req.objectNumber = 0;
req.folder = "";

cellsApi.cellsOleObjectsGetWorksheetOleObject(req)
    .then((result) => {
        console.log(result)
    });