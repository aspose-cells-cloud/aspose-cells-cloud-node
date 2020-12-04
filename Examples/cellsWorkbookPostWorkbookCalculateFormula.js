const { CellsWorkbookApi, CellsWorkbook_PostWorkbookCalculateFormulaRequest, CalculationOptions } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsWorkbook_PostWorkbookCalculateFormulaRequest();
req.name = filename;
req.folder = "";
var options = new CalculationOptions();
options.ignoreError = true;
req.options = options;
req.ignoreError = true;

return cellsApi.cellsWorkbookPostWorkbookCalculateFormula(req)
    .then((result) => {
        console.log(result)
    });