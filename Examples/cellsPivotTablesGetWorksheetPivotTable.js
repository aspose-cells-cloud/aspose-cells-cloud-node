const { CellsPivotTablesApi, CellsPivotTables_GetWorksheetPivotTableRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"



var req = new CellsPivotTables_GetWorksheetPivotTableRequest();
req.name = filename;
req.sheetName = "Sheet4";
req.pivottableIndex = 0;
req.folder = "";

cellsApi.cellsPivotTablesGetWorksheetPivotTable(req)
    .then((result) => {
        Console.log(result)
    });