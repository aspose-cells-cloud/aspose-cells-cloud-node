import { expect } from "chai";
import "mocha";

import * as model from "../../src/model/model";
import * as api from "../../src/api";
const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
const ApiURL = process.env.CellsCloudTestApiBaseUrl;

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
         batchConvertRequest.outFolder = "TestResult"  ;
         batchConvertRequest.matchCondition = batchConvertRequestMatchCondition  ;
        console.log(batchConvertRequest);
        var request = new model.PostBatchConvertRequest();
        request.batchConvertRequest =  batchConvertRequest;
        return cellsApi.postBatchConvert(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
});