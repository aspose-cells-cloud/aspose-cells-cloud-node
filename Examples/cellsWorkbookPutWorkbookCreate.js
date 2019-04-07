const { CellsWorkbookApi, CellsWorkbook_PutWorkbookCreateRequest, PasswordRequest } = require("asposecellscloud");
let date = require('date-and-time');

AppSid = "78946fb4-3bd4-4d3e-b309-f9e2ff9ac6f9"
AppKey = "b125f13bf6b76ed81ee990142d841195"

cellsWorkbookApi = new CellsWorkbookApi(AppSid, AppKey);
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

cellsWorkbookApi.cellsWorkbookPutWorkbookCreate(req)
    .then((result) => {
        console.log(result)
    });