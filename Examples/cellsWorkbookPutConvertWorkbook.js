const { CellsWorkbookApi, CellsWorkbook_PutConvertWorkbookRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"



var req = new CellsWorkbook_PutConvertWorkbookRequest({
    workbook: fs.readFileSync("Examples/" + filename),
    format: "pdf",
});

cellsApi.cellsWorkbookPutConvertWorkbook(req)
    .then((result) => {
        console.log(result)
    });