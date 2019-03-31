const { CellsPivotTablesApi, CellsPivotTables_PutWorksheetPivotTableRequest } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"

cellsPivotTablesApi = new CellsPivotTablesApi(AppSid, AppKey);
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

return cellsPivotTablesApi.cellsPivotTablesPutWorksheetPivotTable(req)
    .then((result) => {
        console.log(result)
    });