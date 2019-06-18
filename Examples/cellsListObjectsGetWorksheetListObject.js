const { CellsListObjectsApi, CellsListObjects_GetWorksheetListObjectRequest } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"
cellsApi = new CellsListObjectsApi(AppSid, AppKey);
filename = "Book1.xlsx"



var req = new CellsListObjects_GetWorksheetListObjectRequest();

req.name = filename;
req.sheetName = "Sheet7";
req.listobjectindex = 0;
req.folder = "";
cellsListObjectsApi.cellsListObjectsGetWorksheetListObject(req)
    .then((result) => {
        console.log(result)

    });