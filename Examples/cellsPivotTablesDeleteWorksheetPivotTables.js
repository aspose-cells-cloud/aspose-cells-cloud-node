const { CellsPivotTablesApi, CellsPivotTables_DeleteWorksheetPivotTablesRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsPivotTables_DeleteWorksheetPivotTablesRequest();
req.name = filename;
req.sheetName = "Sheet4";
req.folder = "";

cellsApi.cellsPivotTablesDeleteWorksheetPivotTables(req)
    .then((result) => {
        console.log(result)
    });