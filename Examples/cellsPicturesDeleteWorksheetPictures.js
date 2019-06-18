const { CellsPicturesApi, CellsPictures_DeleteWorksheetPicturesRequest } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"

cellsApi = new CellsPicturesApi(AppSid, AppKey);
filename = "Book1.xlsx"


var req = new CellsPictures_DeleteWorksheetPicturesRequest();
req.name = filename;
req.sheetName = "Sheet6";
req.folder = "Temp";

cellsPicturesApi.cellsPicturesDeleteWorksheetPictures(req)
    .then((result) => {
        console.log(result)

    });