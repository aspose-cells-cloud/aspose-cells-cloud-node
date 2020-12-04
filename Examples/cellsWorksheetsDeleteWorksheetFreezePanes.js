const { CellsWorksheetsApi, CellsWorksheets_DeleteWorksheetFreezePanesRequest } = require("asposecellscloud");


const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsWorksheets_DeleteWorksheetFreezePanesRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.row = 1;
req.column = 1;
req.freezedRows = 2;
req.freezedColumns = 2;
req.folder = "";

cellsApi.cellsWorksheetsDeleteWorksheetFreezePanes(req)
    .then((result) => {
        console.log(result)
    });