const { CellsOleObjectsApi, CellsOleObjects_PostUpdateWorksheetOleObjectRequest,OleObject } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"
cellsApi = new CellsOleObjectsApi(AppSid, AppKey);
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

cellsOleObjectsApi.cellsOleObjectsPostUpdateWorksheetOleObject(req)
    .then((result) => {
        console.log(result)
    });