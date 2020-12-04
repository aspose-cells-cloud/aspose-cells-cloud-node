const { CellsPivotTablesApi, CellsPivotTables_GetWorksheetPivotTableRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new model.CellsPivotTables_GetWorksheetPivotTableFiltersRequest();
req.name = filename;
req.sheetName = "Sheet4";
req.pivotTableIndex = 0;
req.folder = "Temp";

cellsApi.cellsPivotTablesGetWorksheetPivotTableFilters(req)
    .then((result) => {
        Console.log(result)

    });