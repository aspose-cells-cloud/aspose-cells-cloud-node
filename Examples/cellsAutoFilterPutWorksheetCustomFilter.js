const { CellsAutoFilterApi, CellsAutoFilter_PutWorksheetCustomFilterRequest, ColorFilterRequest, CellsColor } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsAutoFilter_PutWorksheetCustomFilterRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.range = "A1:C10";
req.fieldIndex = 0;
req.folder = "";
req.operatorType1 = "LessOrEqual";
req.criteria1 = "test";
req.isAnd = false;
req.operatorType2 = "LessOrEqual";
req.criteria2 = "test";
req.matchBlanks = true;
req.refresh = false;

cellsApi.cellsAutoFilterPutWorksheetCustomFilter(req)
    .then((result) => {
        console.log(result)
    });