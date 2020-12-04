const { CellsPivotTablesApi, CellsPivotTables_PostWorksheetPivotTableMoveRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsPivotTables_PostWorksheetPivotTableMoveRequest();
req.name = filename;
req.sheetName = "Sheet4";
req.pivotTableIndex = 0;
req.row = 1;
req.column = 1;
req.destCellName = "C10";
req.folder = "";

return cellsApi.cellsPivotTablesPostWorksheetPivotTableMove(req)
    .then((result) => {
        console.log(result)

    });