const { CellsApi, Cells_PostCopyCellIntoCellRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new Cells_PostCopyCellIntoCellRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.destCellName = "C1";
req.worksheet = "Sheet1";
req.cellname = "A1";
req.row = 1;
req.column = 1;
req.folder = "";

return cellsApi.cellsPostCopyCellIntoCell(req)
    .then((result) => {
        console.log(result)
    });