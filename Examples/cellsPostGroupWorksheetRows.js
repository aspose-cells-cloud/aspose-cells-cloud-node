const { CellsApi, Cells_PostGroupWorksheetRowsRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"



var req = new Cells_PostGroupWorksheetRowsRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.firstIndex = 1;
req.lastIndex = 1;
req.hide = true;
req.folder = "";

return cellsApi.cellsPostGroupWorksheetRows(req)
    .then((result) => {
        console.log(result)
    });