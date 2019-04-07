const { CellsWorksheetsApi, CellsWorksheets_PostWorksheetRangeSortRequest, DataSorter } = require("asposecellscloud");


AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"

cellsWorksheetsApi = new CellsWorksheetsApi(AppSid, AppKey);
filename = "Book1.xls"


var req = new CellsWorksheets_PostWorksheetRangeSortRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.cellArea = "A1:C10";
req.dataSorter = new DataSorter();
req.dataSorter.caseSensitive = true;
req.folder = "";

cellsWorksheetsApi.cellsWorksheetsPostWorksheetRangeSort(req)
  .then((result) => {
    console.log(result)
  });