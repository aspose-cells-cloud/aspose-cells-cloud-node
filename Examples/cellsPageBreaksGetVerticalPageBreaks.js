const { CellsPageBreaksApi, CellsPageBreaks_GetVerticalPageBreaksRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"




var req = new CellsPageBreaks_GetVerticalPageBreaksRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.folder = "";

cellsApi.cellsPageBreaksGetVerticalPageBreaks(req)
    .then((result) => {
        console.log(result)

    });