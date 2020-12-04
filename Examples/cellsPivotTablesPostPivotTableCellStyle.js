const { CellsPivotTablesApi, CellsPivotTables_PostPivotTableCellStyleRequest,Style, Font} = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
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

cellsApi.cellsPivotTablesPostPivotTableCellStyle(req)
    .then((result) => {
        console.log(result)
    });