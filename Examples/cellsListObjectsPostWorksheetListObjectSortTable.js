const { CellsListObjectsApi, CellsListObjects_PostWorksheetListObjectSortTableRequest,DataSorter } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsListObjects_PostWorksheetListObjectSortTableRequest();
req.name = filename;
req.sheetName = "Sheet7";
req.listObjectIndex = 0;
req.dataSorter = new DataSorter();
req.dataSorter.caseSensitive = true;
req.folder = "";

return cellsApi.cellsListObjectsPostWorksheetListObjectSortTable(req)
  .then((result) => {
    console.log(result)
  });