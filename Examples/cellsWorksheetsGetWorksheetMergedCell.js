const { CellsWorksheetsApi, CellsWorksheets_GetWorksheetMergedCellRequest } = require("asposecellscloud");


const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsWorksheets_GetWorksheetMergedCellRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.mergedCellIndex = 1;
req.folder = "";

cellsApi.cellsWorksheetsGetWorksheetMergedCell(req)
    .then((result) => {
        console.log(result)
    });