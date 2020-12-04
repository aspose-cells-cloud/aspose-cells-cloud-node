const { CellsWorksheetsApi, CellsWorksheets_GetWorksheetMergedCellsRequest } = require("asposecellscloud");


const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsWorksheets_GetWorksheetMergedCellsRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.folder = "";

return cellsApi.cellsWorksheetsGetWorksheetMergedCells(req)
    .then((result) => {
        console.log(result)
    });