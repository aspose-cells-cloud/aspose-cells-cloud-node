const { CellsPivotTablesApi, CellsPivotTables_PostPivotTableCellStyleRequest,Style, Font} = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"

cellsPivotTablesApi = new CellsPivotTablesApi(AppSid, AppKey);
filename = "Book1.xlsx"



var req = new CellsPivotTables_PostPivotTableCellStyleRequest();
req.name = filename;
req.sheetName = "Sheet4";
req.pivotTableIndex = 0;
req.column = 1;
req.row = 1;
var style = new Style();
style.font = new Font();
style.font.size = 17;
req.style = style;
req.needReCalculate = true;
req.folder = "";

cellsPivotTablesApi.cellsPivotTablesPostPivotTableCellStyle(req)
    .then((result) => {
        console.log(result)
    });