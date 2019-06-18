const { CellsListObjectsApi, CellsListObjects_PostWorksheetListObjectSortTableRequest,DataSorter } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"
cellsApi = new CellsListObjectsApi(AppSid, AppKey);
filename = "Book1.xlsx"


var req = new CellsListObjects_PostWorksheetListObjectSortTableRequest();
req.name = filename;
req.sheetName = "Sheet7";
req.listObjectIndex = 0;
req.dataSorter = new DataSorter();
req.dataSorter.caseSensitive = true;
req.folder = "";

return cellsListObjectsApi.cellsListObjectsPostWorksheetListObjectSortTable(req)
  .then((result) => {
    console.log(result)
  });