const { CellsAutoFilterApi, CellsAutoFilter_PutWorksheetDynamicFilterRequest } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"
cellsApi = new CellsAutoFilterApi(AppSid, AppKey);
filename = "Book1.xlsx"



var req = new CellsAutoFilter_PutWorksheetDynamicFilterRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.range = "A1:C10";
req.fieldIndex = 0;
req.dynamicFilterType = "May";
req.matchBlanks = true;
req.refresh = true;
req.folder = "";

cellsAutoFilterApi.cellsAutoFilterPutWorksheetDynamicFilter(req)
    .then((result) => {
        console.log(result)
    });