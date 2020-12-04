const { CellsPicturesApi, CellsPictures_PostWorksheetPictureRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
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