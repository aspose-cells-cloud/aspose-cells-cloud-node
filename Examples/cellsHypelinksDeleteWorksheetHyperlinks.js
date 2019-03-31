const { CellsHypelinksApi, CellsHypelinks_DeleteWorksheetHyperlinksRequest } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"
cellsApi = new CellsHypelinksApi(AppSid, AppKey);
filename = "Book1.xlsx"


var req = new CellsHypelinks_DeleteWorksheetHyperlinksRequest();
req.name = filename;
req.sheetName = "Sheet1";
req.folder = "";

cellsHypelinksApi.cellsHypelinksDeleteWorksheetHyperlinks(req)
    .then((result) => {
        console.log(result)
    });