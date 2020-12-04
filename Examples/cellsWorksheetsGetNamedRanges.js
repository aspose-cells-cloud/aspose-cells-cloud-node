const { CellsWorksheetsApi, CellsWorksheets_GetNamedRangesRequest } = require("asposecellscloud");


const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"



var req = new CellsWorksheets_GetNamedRangesRequest();
req.name = filename;
req.folder = "";

cellsApi.cellsWorksheetsGetNamedRanges(req)
    .then((result) => {
        console.log(result)
    });