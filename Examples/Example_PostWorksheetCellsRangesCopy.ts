var fs = require('fs');
var path = require('path');
const _ = require('asposecellscloud');

const cellsApi = new CellsApi(process.env.CellsCloudClientId, process.env.CellsCloudClientSecret,"v3.0",process.env.CellsCloudApiBaseUrl);

var remoteFolder = "TestData/In"
  
var localName = "Book1.xlsx"
var remoteName = "Book1.xlsx"

var localNameRequest = new  model.UploadFileRequest();
localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
localNameRequest.path = remoteFolder + "/" + remoteName ;
localNameRequest.storageName ="";
cellsApi.uploadFile(localNameRequest );
 
var rangeOperateSource = new model.Range();
 rangeOperateSource.columnCount = 1  ;
 rangeOperateSource.columnWidth = 10.0  ;
 rangeOperateSource.firstRow = 1  ;
 rangeOperateSource.rowCount = 10  ;
var rangeOperateTarget = new model.Range();
 rangeOperateTarget.columnCount = 1  ;
 rangeOperateTarget.columnWidth = 10.0  ;
 rangeOperateTarget.firstRow = 10  ;
 rangeOperateTarget.rowCount = 10  ;
var rangeOperate = new model.RangeCopyRequest();
 rangeOperate.operate = "copydata"  ;
 rangeOperate.source = rangeOperateSource  ;
 rangeOperate.target = rangeOperateTarget  ;

var request = new model.PostWorksheetCellsRangesCopyRequest();
request.name =  remoteName;
request.sheetName =  "Sheet1";
request.rangeOperate =  rangeOperate;
request.folder =  remoteFolder;
request.storageName =  "";
return cellsApi.postWorksheetCellsRangesCopy(request).then((result) => {
    expect(result.response.statusCode).to.equal(200);
});