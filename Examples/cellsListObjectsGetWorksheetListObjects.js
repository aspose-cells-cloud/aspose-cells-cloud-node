const { CellsListObjectsApi, CellsListObjects_GetWorksheetListObjectsRequest } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"
cellsApi = new CellsListObjectsApi(AppSid, AppKey);
filename = "Book1.xlsx"


var req = new CellsListObjects_GetWorksheetListObjectsRequest();
req.name = filename;
req.sheetName = "Sheet7";
req.folder = "";

cellsListObjectsApi.cellsListObjectsGetWorksheetListObjects(req)
    .then((result) => {
        console.log(result)
    });