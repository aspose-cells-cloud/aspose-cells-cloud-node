const { CellsListObjectsApi, CellsListObjects_PutWorksheetListObjectRequest } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"
cellsApi = new CellsListObjectsApi(AppSid, AppKey);
filename = "Book1.xlsx"


var req = new CellsListObjects_PutWorksheetListObjectRequest();
req.name = filename;
req.sheetName = "Sheet7";
req.startRow = 1;
req.startColumn = 1;
req.endRow = 6;
req.endColumn = 6;
req.folder = "";

cellsListObjectsApi.cellsListObjectsPutWorksheetListObject(req)
    .then((result) => {
        console.log(result)
    });