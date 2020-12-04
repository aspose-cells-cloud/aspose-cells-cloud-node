const { CellsWorksheetsApi, CellsWorksheets_GetWorksheetsRequest } = require("asposecellscloud");


const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsWorksheets_PostAutofitWorksheetColumnsRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.firstColumn = 1;
req.lastColumn = 10;
req.autoFitterOptions = null;
req.firstRow = 1;
req.lastRow = 19;
req.folder = "";

cellsApi.cellsWorksheetsPostAutofitWorksheetColumns(req)
    .then((result) => {
        console.log(result)
    });