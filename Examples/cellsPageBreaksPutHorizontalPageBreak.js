const { CellsPageBreaksApi, CellsPageBreaks_PutHorizontalPageBreakRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"



var req = new CellsPageBreaks_PutHorizontalPageBreakRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.cellname = "A1";
req.row = 1;
req.column = 1;
req.startColumn = 1;
req.endColumn = 1;
req.folder = "";

cellsApi.cellsPageBreaksPutHorizontalPageBreak(req)
    .then((result) => {
        console.log(result)
    });