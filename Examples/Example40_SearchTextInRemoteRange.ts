var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

  
var remoteFolder = "TestData/In"
var bookTextXlsx = "BookText.xlsx"

var bookTextXlsxRequest = new  model.UploadFileRequest();
bookTextXlsxRequest.uploadFiles ={bookTextXlsx:fs.createReadStream(localPath  + bookTextXlsx)};
bookTextXlsxRequest.path = remoteFolder + "/" + bookTextXlsx ;
bookTextXlsxRequest.storageName ="";
cellsApi.uploadFile(bookTextXlsxRequest );
 

var request = new model.SearchContentInRemoteRangeRequest();
request.name =  bookTextXlsx;
request.worksheet =  "Sales";
request.cellArea =  "A1:A10";
request.searchText =  "Bike";
request.ignoringCase =  false;
request.folder =  remoteFolder;
return cellsApi.searchContentInRemoteRange(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});