const { CellsWorkbookApi, CellsWorkbook_PostWorkbooksTextReplaceRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsWorkbook_PostWorkbooksTextReplaceRequest();
req.name = filename;
req.folder = "";
req.oldValue = "!22";
req.newValue = "22";

cellsApi.cellsWorkbookPostWorkbooksTextReplace(req)
    .then((result) => {
        console.log(result)
    });