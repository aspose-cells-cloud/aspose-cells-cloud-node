const { CellsAutoFilterApi, CellsAutoFilter_PutWorksheetIconFilterRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsAutoFilter_PutWorksheetIconFilterRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.range = "A1:C10";
req.fieldIndex = 0;
req.iconSetType = "None";
req.iconId = 0;
req.matchBlanks = null;
req.refresh = null;
req.folder = "";

cellsApi.cellsAutoFilterPutWorksheetIconFilter(req)
    .then((result) => {
        console.log(result)
    });