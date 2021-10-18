const { CellsApi, CellsWorkbook_PutConvertWorkbookRequest } = require("asposecellscloud");
var fs = require('fs');
const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
const ApiURL = process.env.CellsCloudTestApiBaseUrl;
const cellsApi = new api.CellsApi(clientId, clientSecret,"v3.0",ApiURL);
const filename = "Book1.xlsx"
const localPath = "../TestData/";


var req = new CellsWorkbook_PutConvertWorkbookRequest({
    workbook: fs.readFileSync(localPath + filename),
    format: "pdf",
});

cellsApi.cellsWorkbookPutConvertWorkbook(req)
    .then((result) => {
        console.log(result)
    });
    