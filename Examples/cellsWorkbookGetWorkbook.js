var range = new Range();
const { CellsWorkbookApi, CellsWorkbook_GetWorkbookRequest } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"

cellsWorkbookApi = new CellsWorkbookApi(AppSid, AppKey);
filename = "Book1.xlsx"


var req = new CellsWorkbook_GetWorkbookRequest();
req.name = filename;
req.password = null;
req.isAutoFit = true;
req.folder = "";

cellsWorkbookApi.cellsWorkbookGetWorkbook(req)
    .then((result) => {
        console.log(result)
    });