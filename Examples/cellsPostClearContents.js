const { CellsApi, Cells_PostClearContentsRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new Cells_PostClearContentsRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.range = "A1:C10";
req.startRow = 1;
req.startColumn = 1;
req.endRow = 3;
req.endColumn = 3;
req.folder = "";

return cellsApi.cellsPostClearContents(req)
    .then((result) => {
        console.log(result)
    });