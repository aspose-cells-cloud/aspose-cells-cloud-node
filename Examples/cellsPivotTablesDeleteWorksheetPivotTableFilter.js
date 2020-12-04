const { CellsPivotTablesApi, CellsPivotTables_DeleteWorksheetPivotTableFilterRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsPivotTables_DeleteWorksheetPivotTableFilterRequest();
req.name = filename;
req.sheetName = "Sheet4";
req.pivotTableIndex = 0;
req.fieldIndex = 0;
req.needReCalculate = true;
req.folder = "";

cellsApi.cellsPivotTablesDeleteWorksheetPivotTableFilter(req)
    .then((result) => {
        console.log(result)
    });