const { CellsOleObjectsApi, CellsOleObjects_GetWorksheetOleObjectsRequest } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"
cellsApi = new CellsOleObjectsApi(AppSid, AppKey);
filename = "Book1.xlsx"



var req = new CellsOleObjects_GetWorksheetOleObjectsRequest();
req.name = filename;
req.sheetName = "Sheet6";
req.folder = "";

cellsOleObjectsApi.cellsOleObjectsGetWorksheetOleObjects(req)
  .then((result) => {
    console.log(result)
  });