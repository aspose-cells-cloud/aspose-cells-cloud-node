const { CellsPivotTablesApi, CellsPivotTables_GetPivotTableFieldRequest } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"

cellsApi = new CellsPivotTablesApi(AppSid, AppKey);
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