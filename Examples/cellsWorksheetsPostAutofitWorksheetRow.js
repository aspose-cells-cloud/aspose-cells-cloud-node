const { CellsWorksheetsApi, CellsWorksheets_GetWorksheetsRequest,AutoFitterOptions } = require("asposecellscloud");


AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"

cellsWorksheetsApi = new CellsWorksheetsApi(AppSid, AppKey);
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

return cellsWorksheetsApi.cellsWorksheetsPostAutofitWorksheetRow(req)
    .then((result) => {
        console.log(result)
    });