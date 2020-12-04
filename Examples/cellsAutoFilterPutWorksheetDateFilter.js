const { CellsAutoFilterApi, CellsAutoFilter_PutWorksheetCustomFilterRequest} = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsAutoFilter_PutWorksheetDateFilterRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.range = "A1:C10";
req.fieldIndex = 0;
req.dateTimeGroupingType = "Day";
req.year = 2019;
req.month = 1;
req.day = 1;
req.hour = 1;
req.minute = 1;
req.second = 1;
req.matchBlanks = true;
req.refresh = true;
req.folder = "";

cellsApi.cellsAutoFilterPutWorksheetDateFilter(req)
    .then((result) => {
        console.log(result)
    });