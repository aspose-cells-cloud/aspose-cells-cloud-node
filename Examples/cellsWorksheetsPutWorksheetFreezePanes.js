const { CellsWorksheetsApi, CellsWorksheets_PutWorksheetCommentRequest, Comment } = require("asposecellscloud");


AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"

cellsWorksheetsApi = new CellsWorksheetsApi(AppSid, AppKey);
filename = "Book1.xls"


var req = new CellsWorksheets_PutWorksheetFreezePanesRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.folder = "";
req.row = 1;
req.column = 1;
req.freezedRows = 4;
req.freezedColumns = 5;

cellsWorksheetsApi.cellsWorksheetsPutWorksheetFreezePanes(req)
    .then((result) => {
        console.log(result)
    });