const { CellsPageBreaksApi, CellsPageBreaks_PutVerticalPageBreakRequest } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"
cellsApi = new CellsPageBreaksApi(AppSid, AppKey);
filename = "Book1.xlsx"



var req = new CellsPageBreaks_PutVerticalPageBreakRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.cellname = "A1";
req.row = 1;
req.column = 1;
req.startRow = 1;
req.endRow = 1;
req.folder = "";

return cellsPageBreaksApi.cellsPageBreaksPutVerticalPageBreak(req)
    .then((result) => {
        console.log(result)
    });