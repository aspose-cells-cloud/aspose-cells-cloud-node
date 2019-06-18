const { CellsHypelinksApi, CellsHypelinks_GetWorksheetHyperlinkRequest } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"
cellsApi = new CellsHypelinksApi(AppSid, AppKey);
filename = "Book1.xlsx"



var req = CellsHypelinks_GetWorksheetHyperlinkRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.hyperlinkIndex = 0;
req.folder = "";

cellsHypelinksApi.cellsHypelinksGetWorksheetHyperlink(req)
    .then((result) => {
        console.log(result)

    });