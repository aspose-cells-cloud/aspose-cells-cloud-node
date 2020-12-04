const { CellsPageBreaksApi, CellsPageBreaks_GetHorizontalPageBreaksRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"



var req = new CellsPageBreaks_GetHorizontalPageBreaksRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.folder = "";

cellsApi.cellsPageBreaksGetHorizontalPageBreaks(req)
    .then((result) => {
        console.log(result)

    });