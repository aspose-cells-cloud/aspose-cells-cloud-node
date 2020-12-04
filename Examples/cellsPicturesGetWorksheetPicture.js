const { CellsPicturesApi, CellsPictures_GetWorksheetPictureRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsPictures_GetWorksheetPictureRequest();
req.name = filename;
req.sheetName = "Sheet6";
req.pictureIndex = 0;
req.folder = "";

cellsApi.cellsPicturesGetWorksheetPicture(req)
    .then((result) => {
        console.log(result)
    });