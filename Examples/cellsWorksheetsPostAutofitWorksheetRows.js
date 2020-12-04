const { CellsWorksheetsApi, CellsWorksheets_PostAutofitWorksheetRowsRequest, AutoFitterOptions } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsWorksheets_PostAutofitWorksheetRowsRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.autoFitterOptions = new AutoFitterOptions();
req.autoFitterOptions.autoFitMergedCells = true;
req.startRow = 1;
req.endRow = 10;
req.onlyAuto = true;
req.folder = "";

return cellsApi.cellsWorksheetsPostAutofitWorksheetRows(req)
    .then((result) => {
        console.log(result)
    });