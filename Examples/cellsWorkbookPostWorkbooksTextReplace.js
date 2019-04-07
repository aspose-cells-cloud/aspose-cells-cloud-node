const { CellsWorkbookApi, CellsWorkbook_PostWorkbooksTextReplaceRequest } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"

cellsWorkbookApi = new CellsWorkbookApi(AppSid, AppKey);
filename = "Book1.xlsx"


var req = new CellsWorkbook_PostWorkbooksTextReplaceRequest();
req.name = filename;
req.folder = "";
req.oldValue = "!22";
req.newValue = "22";

cellsWorkbookApi.cellsWorkbookPostWorkbooksTextReplace(req)
    .then((result) => {
        console.log(result)
    });