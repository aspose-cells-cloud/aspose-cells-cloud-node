const { CellsHypelinksApi, CellsHypelinks_PutWorksheetHyperlinkRequest } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"
cellsApi = new CellsHypelinksApi(AppSid, AppKey);
filename = "Book1.xlsx"


var req = new CellsHypelinks_PutWorksheetHyperlinkRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.firstRow = 1;
req.firstColumn = 1;
req.totalRows = 2;
req.totalColumns = 3;
req.address = "http://wwww.aspose.com";
req.folder = "";

cellsHypelinksApi.cellsHypelinksPutWorksheetHyperlink(req)
    .then((result) => {
        console.log(result)
    });