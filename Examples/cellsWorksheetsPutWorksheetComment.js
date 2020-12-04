const { CellsWorksheetsApi, CellsWorksheets_PutWorksheetCommentRequest, Comment } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xls"


var req = new CellsWorksheets_PutWorksheetCommentRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.folder = "";
req.cellName = "C1";
var comment = new Comment();
comment.author = "roy";
req.comment = comment;

cellsApi.cellsWorksheetsPutWorksheetComment(req)
    .then((result) => {
        console.log(result)
    });