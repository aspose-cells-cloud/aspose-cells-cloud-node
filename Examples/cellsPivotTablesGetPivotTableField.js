const { CellsPivotTablesApi, CellsPivotTables_GetPivotTableFieldRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsPivotTables_GetPivotTableFieldRequest();
req.name = filename;
req.sheetName = "Sheet4";
req.pivotTableIndex = 0;
req.pivotFieldIndex = 0;
req.pivotFieldType = "Row";
req.folder = "";

cellsApi.cellsPivotTablesGetPivotTableField(req)
    .then((result) => {
        Console.log(result)
    });