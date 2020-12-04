const { CellsWorkbookApi, CellsWorkbook_PostWorkbookSplitRequest, WorkbookSettings } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsWorkbook_PostWorkbookSplitRequest();
req.name = filename;
req.folder = "";
req.format = "png";
req.from = 1;
req.to = 3;
req.horizontalResolution = 100;
req.verticalResolution = 90;

cellsApi.cellsWorkbookPostWorkbookSplit(req)
    .then((result) => {
        console.log(result)
    });