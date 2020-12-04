const { CellsWorkbookApi, CellsWorkbook_PostWorkbookGetSmartMarkerResultRequest, WorkbookProtectionRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"




var req = new CellsWorkbook_PostWorkbookGetSmartMarkerResultRequest();
req.name = filename;
req.xmlFile = "ReportData.xml";
req.outPath = null;
req.folder = "";

return cellsApi.cellsWorkbookPostWorkbookGetSmartMarkerResult(req)
    .then((result) => {
        console.log(result)
    });