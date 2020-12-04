const { CellsApi, Cells_PostCellCalculateRequest,CalculationOptions } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new Cells_PostCellCalculateRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.cellName = "A1";
req.folder = "";
var options = new CalculationOptions();
options.recursive = true;
options.ignoreError = true;
req.options = options;

return cellsApi.cellsPostCellCalculate(req)
    .then((result) => {
        console.log(result)
    });

