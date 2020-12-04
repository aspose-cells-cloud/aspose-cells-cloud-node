const { CellsRangesApi, CellsRanges_GetWorksheetCellsRangeValueRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"

var req = new CellsRanges_GetWorksheetCellsRangeValueRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.firstRow = 0;
req.firstColumn = 0;
req.rowCount = 3;
req.columnCount = 2;
req.folder = "";

cellsApi.cellsRangesGetWorksheetCellsRangeValue(req)
    .then((result) => {
        console.log(result)
    });

