const { CellsWorksheetsApi, CellsWorksheets_PostWorksheetRangeSortRequest, DataSorter } = require("asposecellscloud");


const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xls"


var req = new CellsWorksheets_PostWorksheetRangeSortRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.cellArea = "A1:C10";
req.dataSorter = new DataSorter();
req.dataSorter.caseSensitive = true;
req.folder = "";

cellsApi.cellsWorksheetsPostWorksheetRangeSort(req)
  .then((result) => {
    console.log(result)
  });