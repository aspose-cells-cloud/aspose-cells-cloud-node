const { CellsListObjectsApi, CellsListObjects_PostWorksheetListObjectRequest,ListObject } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"
cellsApi = new CellsListObjectsApi(AppSid, AppKey);
filename = "Book1.xlsx"

var req = new CellsListObjects_PostWorksheetListObjectRequest();
req.name = filename;
req.sheetName = "Sheet7";
req.listObjectIndex = 0;
req.listObject = new ListObject();
req.listObject.showHeaderRow = true;
req.folder = "";

cellsListObjectsApi.cellsListObjectsPostWorksheetListObject(req)
    .then((result) => {
        console.log(result)

    });