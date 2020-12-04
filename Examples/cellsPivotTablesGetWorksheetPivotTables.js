const { CellsPivotTablesApi, CellsPivotTables_GetWorksheetPivotTablesRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsPivotTables_GetWorksheetPivotTablesRequest();
req.name = filename;
req.sheetName = "Sheet4";
req.folder = "";

cellsApi.cellsPivotTablesGetWorksheetPivotTables(req)
    .then((result) => {
        console.log(result)
    });