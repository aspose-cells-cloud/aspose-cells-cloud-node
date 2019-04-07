const { CellsWorkbookApi, CellsWorkbook_PostWorkbookSplitRequest, WorkbookSettings } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"

cellsWorkbookApi = new CellsWorkbookApi(AppSid, AppKey);
filename = "Book1.xlsx"


var req = new CellsWorkbook_PostWorkbookSplitRequest();
req.name = filename;
req.folder = "";
req.format = "png";
req.from = 1;
req.to = 3;
req.horizontalResolution = 100;
req.verticalResolution = 90;

cellsWorkbookApi.cellsWorkbookPostWorkbookSplit(req)
    .then((result) => {
        console.log(result)
    });