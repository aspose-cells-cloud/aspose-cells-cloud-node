const { CellsPicturesApi, CellsPictures_DeleteWorksheetPicturesRequest } = require("asposecellscloud");

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"


var req = new CellsPictures_DeleteWorksheetPicturesRequest();
req.name = filename;
req.sheetName = "Sheet6";
req.folder = "Temp";

cellsApi.cellsPicturesDeleteWorksheetPictures(req)
    .then((result) => {
        console.log(result)

    });