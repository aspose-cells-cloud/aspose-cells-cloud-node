const { CellsAutoFilterApi, CellsAutoFilter_DeleteWorksheetDateFilterRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"

var req = new CellsAutoFilter_DeleteWorksheetDateFilterRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.fieldIndex = 1;
req.dateTimeGroupingType = "Day";
req.year = 2010;
req.month = 10;
req.day = 1;
req.hour = 1;
req.minute = 1;
req.second = 1;
req.folder = "";

return cellsApi.cellsAutoFilterDeleteWorksheetDateFilter(req)
  .then((result) => {
    console.log(result)
  });