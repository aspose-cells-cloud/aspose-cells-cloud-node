const { CellsPageBreaksApi, CellsPageBreaks_GetHorizontalPageBreakRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsPageBreaks_GetHorizontalPageBreakRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.index = 0;
req.folder = "";

return cellsApi.cellsPageBreaksGetHorizontalPageBreak(req)
    .then((result) => {
        console.log(result)
    });