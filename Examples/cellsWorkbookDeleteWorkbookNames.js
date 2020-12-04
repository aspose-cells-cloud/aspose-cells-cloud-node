var range = new Range();
const { CellsWorkbookApi, CellsWorkbook_DeleteWorkbookNamesRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsWorkbook_DeleteWorkbookNamesRequest();
req.name = filename;
req.folder = "";

cellsApi.cellsWorkbookDeleteWorkbookNames(req)
  .then((result) => {
    console.log(result)
  });