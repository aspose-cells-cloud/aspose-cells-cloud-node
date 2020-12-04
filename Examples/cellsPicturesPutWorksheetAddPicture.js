const { CellsPicturesApi, CellsPictures_PutWorksheetAddPictureRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsPictures_PutWorksheetAddPictureRequest();
req.name = filename;
req.sheetName = "Sheet6";
req.picture = null;
req.upperLeftRow = 1;
req.upperLeftColumn = 1;
req.lowerRightRow = 10;
req.lowerRightColumn = 10;
req.picturePath = "WaterMark.png";
req.folder = "";

cellsApi.cellsPicturesPutWorksheetAddPicture(req)
    .then((result) => {
        console.log(result)
    });