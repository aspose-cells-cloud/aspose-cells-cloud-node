const { CellsPicturesApi, CellsPictures_PostWorksheetPictureRequest } = require("asposecellscloud");

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"

cellsApi = new CellsPicturesApi(AppSid, AppKey);
filename = "Book1.xlsx"



var req = new CellsPictures_PostWorksheetPictureRequest();
req.name = filename;
req.sheetName = "Sheet6";
req.pictureIndex = 0;
req.picture = new model.Picture();
req.picture.left = 10;
req.folder = "";

cellsApi.cellsPicturesPostWorksheetPicture(req)
    .then((result) => {
        console.log(result)
    });