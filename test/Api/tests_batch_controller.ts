import { expect } from "chai";
import "mocha";

import * as model from "../../src/model/model";
import * as api from "../../src/api";
const clientId = process.env.CellsCloudClientId;
const clientSecret = process.env.CellsCloudClientSecret;
const ApiURL = process.env.CellsCloudApiBaseUrl;

const localPath = "TestData/";

var fs = require('fs');
var path = require('path');
var assert = require('assert');


describe('BatchController test', function() {
    this.timeout(200000);
    const cellsApi = new api.CellsApi(clientId, clientSecret,"v3.0",ApiURL);

    describe('post_batch_convert test', function(){
      it("should call PostBatchConvert successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localBook1 = "Book1.xlsx"
        var remoteBook1 = "Book1.xlsx"
        var localMyDoc = "myDocument.xlsx"
        var remoteMyDoc = "myDocument.xlsx"

        var localBook1Request = new  model.UploadFileRequest();
        localBook1Request.uploadFiles ={localBook1:fs.createReadStream(localPath  + localBook1)};
        localBook1Request.path = remoteFolder + "/" + remoteBook1 ;
        localBook1Request.storageName ="";
        cellsApi.uploadFile(localBook1Request );
        var localMyDocRequest = new  model.UploadFileRequest();
        localMyDocRequest.uploadFiles ={localMyDoc:fs.createReadStream(localPath  + localMyDoc)};
        localMyDocRequest.path = remoteFolder + "/" + remoteMyDoc ;
        localMyDocRequest.storageName ="";
        cellsApi.uploadFile(localMyDocRequest );
     
        var batchConvertRequestMatchCondition = new model.MatchConditionRequest();
         batchConvertRequestMatchCondition.regexPattern = "(^Book)(.+)(xlsx$)"  ;
        var batchConvertRequest = new model.BatchConvertRequest();
         batchConvertRequest.sourceFolder = remoteFolder  ;
         batchConvertRequest.format = "pdf"  ;
         batchConvertRequest.outFolder = "OutResult"  ;
         batchConvertRequest.matchCondition = batchConvertRequestMatchCondition  ;

        var request = new model.PostBatchConvertRequest();
        request.batchConvertRequest =  batchConvertRequest;
        return cellsApi.postBatchConvert(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_batch_protect test', function(){
      it("should call PostBatchProtect successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localBook1 = "Book1.xlsx"
        var remoteBook1 = "Book1.xlsx"
        var localMyDoc = "myDocument.xlsx"
        var remoteMyDoc = "myDocument.xlsx"

        var localBook1Request = new  model.UploadFileRequest();
        localBook1Request.uploadFiles ={localBook1:fs.createReadStream(localPath  + localBook1)};
        localBook1Request.path = remoteFolder + "/" + remoteBook1 ;
        localBook1Request.storageName ="";
        cellsApi.uploadFile(localBook1Request );
        var localMyDocRequest = new  model.UploadFileRequest();
        localMyDocRequest.uploadFiles ={localMyDoc:fs.createReadStream(localPath  + localMyDoc)};
        localMyDocRequest.path = remoteFolder + "/" + remoteMyDoc ;
        localMyDocRequest.storageName ="";
        cellsApi.uploadFile(localMyDocRequest );
     
        var batchProtectRequestMatchCondition = new model.MatchConditionRequest();
         batchProtectRequestMatchCondition.regexPattern = "(^Book)(.+)(xlsx$)"  ;
        var batchProtectRequest = new model.BatchProtectRequest();
         batchProtectRequest.sourceFolder = remoteFolder  ;
         batchProtectRequest.protectionType = "All"  ;
         batchProtectRequest.password = "123456"  ;
         batchProtectRequest.outFolder = "OutResult"  ;
         batchProtectRequest.matchCondition = batchProtectRequestMatchCondition  ;

        var request = new model.PostBatchProtectRequest();
        request.batchProtectRequest =  batchProtectRequest;
        return cellsApi.postBatchProtect(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_batch_lock test', function(){
      it("should call PostBatchLock successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localBook1 = "Book1.xlsx"
        var remoteBook1 = "Book1.xlsx"
        var localMyDoc = "myDocument.xlsx"
        var remoteMyDoc = "myDocument.xlsx"

        var localBook1Request = new  model.UploadFileRequest();
        localBook1Request.uploadFiles ={localBook1:fs.createReadStream(localPath  + localBook1)};
        localBook1Request.path = remoteFolder + "/" + remoteBook1 ;
        localBook1Request.storageName ="";
        cellsApi.uploadFile(localBook1Request );
        var localMyDocRequest = new  model.UploadFileRequest();
        localMyDocRequest.uploadFiles ={localMyDoc:fs.createReadStream(localPath  + localMyDoc)};
        localMyDocRequest.path = remoteFolder + "/" + remoteMyDoc ;
        localMyDocRequest.storageName ="";
        cellsApi.uploadFile(localMyDocRequest );
     
        var batchLockRequestMatchCondition = new model.MatchConditionRequest();
         batchLockRequestMatchCondition.regexPattern = "(^Book)(.+)(xlsx$)"  ;
        var batchLockRequest = new model.BatchLockRequest();
         batchLockRequest.sourceFolder = remoteFolder  ;
         batchLockRequest.password = "123456"  ;
         batchLockRequest.outFolder = "OutResult"  ;
         batchLockRequest.matchCondition = batchLockRequestMatchCondition  ;

        var request = new model.PostBatchLockRequest();
        request.batchLockRequest =  batchLockRequest;
        return cellsApi.postBatchLock(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_batch_unlock test', function(){
      it("should call PostBatchUnlock successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localBook1 = "Book1.xlsx"
        var remoteBook1 = "Book1.xlsx"
        var localMyDoc = "myDocument.xlsx"
        var remoteMyDoc = "myDocument.xlsx"

        var localBook1Request = new  model.UploadFileRequest();
        localBook1Request.uploadFiles ={localBook1:fs.createReadStream(localPath  + localBook1)};
        localBook1Request.path = remoteFolder + "/" + remoteBook1 ;
        localBook1Request.storageName ="";
        cellsApi.uploadFile(localBook1Request );
        var localMyDocRequest = new  model.UploadFileRequest();
        localMyDocRequest.uploadFiles ={localMyDoc:fs.createReadStream(localPath  + localMyDoc)};
        localMyDocRequest.path = remoteFolder + "/" + remoteMyDoc ;
        localMyDocRequest.storageName ="";
        cellsApi.uploadFile(localMyDocRequest );
     
        var batchLockRequestMatchCondition = new model.MatchConditionRequest();
         batchLockRequestMatchCondition.regexPattern = "(^Book)(.+)(xlsx$)"  ;
        var batchLockRequest = new model.BatchLockRequest();
         batchLockRequest.sourceFolder = remoteFolder  ;
         batchLockRequest.password = "123456"  ;
         batchLockRequest.outFolder = "OutResult"  ;
         batchLockRequest.matchCondition = batchLockRequestMatchCondition  ;

        var request = new model.PostBatchUnlockRequest();
        request.batchLockRequest =  batchLockRequest;
        return cellsApi.postBatchUnlock(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
});