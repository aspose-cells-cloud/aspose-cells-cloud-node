const { CellsAutoFilterApi, CellsAutoFilter_PostWorksheetAutoFilterRefreshRequest } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"
cellsApi = new CellsAutoFilterApi(AppSid, AppKey);
filename = "Book1.xlsx"


var req = new CellsAutoFilter_PostWorksheetAutoFilterRefreshRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.folder = "";

return cellsAutoFilterApi.cellsAutoFilterPostWorksheetAutoFilterRefresh(req)
    .then((result) => {
        console.log(result)
    });