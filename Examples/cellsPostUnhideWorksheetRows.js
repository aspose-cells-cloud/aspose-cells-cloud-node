const { CellsApi, Cells_PostUnhideWorksheetRowsRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"



var req = new Cells_PostUnhideWorksheetRowsRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.startrow = 1;
req.totalRows = 8;
req.height = 18;
req.folder = "";

return cellsApi.cellsPostUnhideWorksheetRows(req)
    .then((result) => {
        console.log(result)
    });