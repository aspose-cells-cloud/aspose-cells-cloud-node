const { CellsApi, Cells_PostUnhideWorksheetColumnsRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new Cells_PostUnhideWorksheetColumnsRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.startcolumn = 1;
req.totalColumns = 2;
req.width = 10;
req.folder = "";

return cellsApi.cellsPostUnhideWorksheetColumns(req)
    .then((result) => {
        console.log(result)
    });