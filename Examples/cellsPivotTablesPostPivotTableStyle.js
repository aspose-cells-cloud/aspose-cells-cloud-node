const { CellsPivotTablesApi, CellsPivotTables_PostPivotTableStyleRequest,Style,Font } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"

var req = new CellsPivotTables_PostPivotTableStyleRequest();
req.name = filename;
req.sheetName = "Sheet4";
req.pivotTableIndex = 0;
var style = new Style();
style.font = new Font();
style.font.size = 18;
req.style = style;
req.needReCalculate = true;
req.folder = "";

cellsApi.cellsPivotTablesPostPivotTableStyle(req)
    .then((result) => {
        console.log(result)

    });