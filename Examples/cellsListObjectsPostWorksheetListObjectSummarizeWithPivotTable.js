const { CellsListObjectsApi, CellsListObjects_PostWorksheetListObjectSummarizeWithPivotTableRequest, CreatePivotTableRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsListObjects_PostWorksheetListObjectSummarizeWithPivotTableRequest();
req.name = filename;
req.sheetName = "Sheet7";
req.listObjectIndex = 0;
req.destsheetName = "Sheet2";
var request = new CreatePivotTableRequest();
request.destCellName = "C1";
request.name = "testp";
request.pivotFieldColumns = [2];
request.pivotFieldData = [1];
request.pivotFieldRows = [0];
request.sourceData = "=Sheet2!A1:E8";
request.useSameSource = true;
req.request = request;
req.folder = "";

cellsApi.cellsListObjectsPostWorksheetListObjectSummarizeWithPivotTable(req)
    .then((result) => {
        console.log(result)

    });