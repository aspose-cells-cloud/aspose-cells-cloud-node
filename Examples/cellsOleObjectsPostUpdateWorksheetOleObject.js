const { CellsOleObjectsApi, CellsOleObjects_PostUpdateWorksheetOleObjectRequest,OleObject } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"




var req = new CellsOleObjects_PostUpdateWorksheetOleObjectRequest();
req.name = filename;
req.sheetName = "Sheet6";
req.folder = "";
req.oleObjectIndex = 0;
var ole = new OleObject();
ole.left = 10;
ole.right = 10;
ole.height = 90;
ole.width = 78;
req.ole = ole;

cellsApi.cellsOleObjectsPostUpdateWorksheetOleObject(req)
    .then((result) => {
        console.log(result)
    });