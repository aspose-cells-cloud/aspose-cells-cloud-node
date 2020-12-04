const { CellsPicturesApi, CellsPictures_GetWorksheetPicturesRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsPictures_GetWorksheetPicturesRequest();
req.name = filename;
req.sheetName = "Sheet6";
req.folder = "";

cellsApi.cellsPicturesGetWorksheetPictures(req)
    .then((result) => {
        console.log(result)
    });