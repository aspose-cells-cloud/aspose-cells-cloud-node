const { CellsWorksheetsApi, CellsWorksheets_DeleteWorksheetFreezePanesRequest } = require("asposecellscloud");


AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"

cellsWorksheetsApi = new CellsWorksheetsApi(AppSid, AppKey);
filename = "Book1.xlsx"


var req = new CellsWorksheets_DeleteWorksheetFreezePanesRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.row = 1;
req.column = 1;
req.freezedRows = 2;
req.freezedColumns = 2;
req.folder = "";

cellsWorksheetsApi.cellsWorksheetsDeleteWorksheetFreezePanes(req)
    .then((result) => {
        console.log(result)
    });