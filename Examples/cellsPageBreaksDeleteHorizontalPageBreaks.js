const { CellsPageBreaksApi, CellsPageBreaks_DeleteHorizontalPageBreaksRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"

var req = new CellsPageBreaks_DeleteHorizontalPageBreaksRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.row = 1;
req.folder = "";

cellsApi.cellsPageBreaksDeleteHorizontalPageBreaks(req)
  .then((result) => {
    console.log(result)
  });