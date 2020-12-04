const { CellsPivotTablesApi, CellsPivotTables_PostPivotTableFieldMoveToRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"



var req = new CellsPivotTables_PostPivotTableFieldMoveToRequest();
req.name = filename;
req.sheetName = "Sheet4";
req.pivotTableIndex = 0;
req.fieldIndex = 0;
req.from = "Row";
req.to = "Column";
req.folder = "";

cellsApi.cellsPivotTablesPostPivotTableFieldMoveTo(req)
    .then((result) => {
        console.log(result)
    });