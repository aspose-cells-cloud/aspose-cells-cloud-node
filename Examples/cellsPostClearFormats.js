const { CellsApi, Cells_PostClearFormatsRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new Cells_PostClearFormatsRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.range = "A1:C10";
req.startRow = 1;
req.startColumn = 1;
req.endRow = 3;
req.endColumn = 10;
req.folder = "";

return cellsApi.cellsPostClearFormats(req)
    .then((result) => {
        console.log(result)
    });