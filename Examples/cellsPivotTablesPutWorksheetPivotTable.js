const { CellsPivotTablesApi, CellsPivotTables_PutWorksheetPivotTableRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsPivotTables_PutWorksheetPivotTableRequest();
req.name = filename;
req.sheetName = "Sheet4";
req.request = null;
req.folder = "";
req.sourceData = "Sheet1!C6:E13";
req.destCellName = "C1";
req.tableName = "TestPivot";
req.useSameSource = true;

return cellsApi.cellsPivotTablesPutWorksheetPivotTable(req)
    .then((result) => {
        console.log(result)
    });