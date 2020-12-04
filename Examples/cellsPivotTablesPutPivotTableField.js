const { CellsPivotTablesApi, CellsPivotTables_PutPivotTableFieldRequest, PivotTableFieldRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsPivotTables_PutPivotTableFieldRequest();
req.name = filename;
req.sheetName = "Sheet4";
req.pivotTableIndex = 0;
req.pivotFieldType = "Row";
req.request = new PivotTableFieldRequest();
req.request.data = [1];
req.needReCalculate = null;
req.folder = "";

cellsApi.cellsPivotTablesPutPivotTableField(req)
    .then((result) => {
        console.log(result)
    });