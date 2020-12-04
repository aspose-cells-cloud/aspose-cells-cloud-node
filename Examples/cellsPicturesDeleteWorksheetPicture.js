const { CellsPicturesApi, CellsPictures_DeleteWorksheetPictureRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsPictures_DeleteWorksheetPictureRequest();
req.name = filename;
req.sheetName = "Sheet6";
req.pictureIndex = 0;
req.folder = "";

cellsApi.cellsPicturesDeleteWorksheetPicture(req)
  .then((result) => {
    console.log(result)

  });
