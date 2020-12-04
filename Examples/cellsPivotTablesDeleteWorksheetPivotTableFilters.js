const { CellsPivotTablesApi, CellsPivotTables_DeleteWorksheetPivotTableFiltersRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsPivotTables_DeleteWorksheetPivotTableFiltersRequest();
req.name = filename;
req.sheetName = "Sheet4";
req.pivotTableIndex = 0;
req.needReCalculate = true;
req.folder = "";

cellsApi.cellsPivotTablesDeleteWorksheetPivotTableFilters(req)
    .then((result) => {
        console.log(result)
    });