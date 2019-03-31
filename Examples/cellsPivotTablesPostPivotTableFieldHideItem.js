const { CellsPivotTablesApi, CellsPivotTables_PostPivotTableFieldHideItemRequest, Style, Font } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"

cellsPivotTablesApi = new CellsPivotTablesApi(AppSid, AppKey);
filename = "Book1.xlsx"



var req = new CellsPivotTables_PostPivotTableFieldHideItemRequest();
req.name = filename;
req.sheetName = "Sheet4";
req.pivotTableIndex = 0;
req.pivotFieldType = "Row";
req.fieldIndex = 0;
req.itemIndex = 1;
req.isHide = true;
req.needReCalculate = true;
req.folder = "";

cellsPivotTablesApi.cellsPivotTablesPostPivotTableFieldHideItem(req)
    .then((result) => {
        console.log(result)

    });