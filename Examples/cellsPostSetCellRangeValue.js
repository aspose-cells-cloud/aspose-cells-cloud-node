const { CellsApi, Cells_PostSetCellRangeValueRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new Cells_PostSetCellRangeValueRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.cellarea = "A1:C10";
req.folder = "";
req.value = "1";
req.type = "int";
return cellsApi.cellsPostSetCellRangeValue(req)
    .then((result) => {
        console.log(result)
    });