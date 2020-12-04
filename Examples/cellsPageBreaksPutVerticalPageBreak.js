const { CellsPageBreaksApi, CellsPageBreaks_PutVerticalPageBreakRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
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

return cellsApi.cellsPageBreaksPutVerticalPageBreak(req)
    .then((result) => {
        console.log(result)
    });