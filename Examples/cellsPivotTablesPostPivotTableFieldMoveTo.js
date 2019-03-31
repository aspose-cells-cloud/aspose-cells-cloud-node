const { CellsPivotTablesApi, CellsPivotTables_PostPivotTableFieldMoveToRequest } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"

cellsPivotTablesApi = new CellsPivotTablesApi(AppSid, AppKey);
filename = "Book1.xlsx"



var req = new CellsPivotTables_PostPivotTableFieldMoveToRequest();
req.name = filename;
req.sheetName = "Sheet4";
req.pivotTableIndex = 0;
req.fieldIndex = 0;
req.from = "Row";
req.to = "Column";
req.folder = "";

cellsPivotTablesApi.cellsPivotTablesPostPivotTableFieldMoveTo(req)
    .then((result) => {
        console.log(result)
    });