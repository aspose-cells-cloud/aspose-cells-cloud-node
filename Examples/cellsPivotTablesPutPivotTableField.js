const { CellsPivotTablesApi, CellsPivotTables_PutPivotTableFieldRequest, PivotTableFieldRequest } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"

cellsPivotTablesApi = new CellsPivotTablesApi(AppSid, AppKey);
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

cellsPivotTablesApi.cellsPivotTablesPutPivotTableField(req)
    .then((result) => {
        console.log(result)
    });