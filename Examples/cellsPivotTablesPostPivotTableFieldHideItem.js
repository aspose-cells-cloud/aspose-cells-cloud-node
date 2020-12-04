const { CellsPivotTablesApi, CellsPivotTables_PostPivotTableFieldHideItemRequest, Style, Font } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
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

cellsApi.cellsPivotTablesPostPivotTableFieldHideItem(req)
    .then((result) => {
        console.log(result)

    });