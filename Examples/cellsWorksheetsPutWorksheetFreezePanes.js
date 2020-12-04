const { CellsWorksheetsApi, CellsWorksheets_PutWorksheetCommentRequest, Comment } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xls"


var req = new CellsWorksheets_PutWorksheetFreezePanesRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.folder = "";
req.row = 1;
req.column = 1;
req.freezedRows = 4;
req.freezedColumns = 5;

cellsApi.cellsWorksheetsPutWorksheetFreezePanes(req)
    .then((result) => {
        console.log(result)
    });