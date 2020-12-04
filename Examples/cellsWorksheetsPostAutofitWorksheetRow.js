const { CellsWorksheetsApi, CellsWorksheets_GetWorksheetsRequest,AutoFitterOptions } = require("asposecellscloud");


const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsWorksheets_PostAutofitWorksheetRowRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.rowIndex = 1;
req.firstColumn = 1;
req.lastColumn = 10;
req.autoFitterOptions = new AutoFitterOptions();
req.autoFitterOptions.autoFitMergedCells = true;
req.folder = "";

return cellsApi.cellsWorksheetsPostAutofitWorksheetRow(req)
    .then((result) => {
        console.log(result)
    });