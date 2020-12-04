const { CellsAutoFilterApi, CellsAutoFilter_PutWorksheetDynamicFilterRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
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

cellsApi.cellsAutoFilterPutWorksheetDynamicFilter(req)
    .then((result) => {
        console.log(result)
    });