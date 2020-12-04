const { CellsWorkbookApi, CellsWorkbook_PutWorkbookCreateRequest, PasswordRequest } = require("asposecellscloud");
let date = require('date-and-time');

const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
cellsApi = new CellsApi(clientId, clientSecret);
filename = "Book1.xlsx"



var req = new CellsWorkbook_PutWorkbookCreateRequest();
req.folder = "";
var date = new Date();
var year = date.getUTCFullYear();
var month = date.getUTCMonth();
var day = date.getUTCDate();
var hours = date.getUTCHours();
var min = date.getUTCMinutes();
var sec = date.getUTCSeconds();
req.name = "NewBook" + year + "" + month + "" + day + "" + hours + "" + min + "" + sec + ".xlsx";
req.templateFile = "Book1.xlsx";
req.dataFile = "ReportData.xml";

cellsApi.cellsWorkbookPutWorkbookCreate(req)
    .then((result) => {
        console.log(result)
    });