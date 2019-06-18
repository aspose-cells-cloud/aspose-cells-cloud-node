const { CellsListObjectsApi, CellsListObjects_PostWorksheetListObjectSummarizeWithPivotTableRequest, CreatePivotTableRequest } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"
cellsApi = new CellsListObjectsApi(AppSid, AppKey);
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

cellsListObjectsApi.cellsListObjectsPostWorksheetListObjectSummarizeWithPivotTable(req)
    .then((result) => {
        console.log(result)

    });