const { CellsAutoFilterApi, CellsAutoFilter_PutWorksheetCustomFilterRequest} = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"
cellsApi = new CellsAutoFilterApi(AppSid, AppKey);
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

cellsAutoFilterApi.cellsAutoFilterPutWorksheetDateFilter(req)
    .then((result) => {
        console.log(result)
    });