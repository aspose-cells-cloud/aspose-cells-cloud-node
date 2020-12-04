const { CellsPageBreaksApi, CellsPageBreaks_GetVerticalPageBreakRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"



var req = new CellsPageBreaks_GetVerticalPageBreakRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.index = 0;
req.folder = "";

cellsApi.cellsPageBreaksGetVerticalPageBreak(req)
  .then((result) => {
    console.log(result)

  });