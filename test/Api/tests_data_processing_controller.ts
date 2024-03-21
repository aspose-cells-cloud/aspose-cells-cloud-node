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


describe('DataProcessingController test', function() {
    this.timeout(200000);
    const cellsApi = new api.CellsApi(clientId, clientSecret,"v3.0",ApiURL);

    describe('post_workbook_data_cleansing test', function(){
      it("should call PostWorkbookDataCleansing successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "BookCsvDuplicateData.csv"
        var remoteName = "BookCsvDuplicateData.csv"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var dataCleansingDataFillDataFillDefaultValue = new model.DataFillValue();
         dataCleansingDataFillDataFillDefaultValue.defaultDate = "2024-01-01"  ;
         dataCleansingDataFillDataFillDefaultValue.defaultNumber = 0  ;
         dataCleansingDataFillDataFillDefaultValue.defaultBoolean = false  ;
        var dataCleansingDataFill = new model.DataFill();
         dataCleansingDataFill.dataFillDefaultValue = dataCleansingDataFillDataFillDefaultValue  ;
        var dataCleansing = new model.DataCleansing();
         dataCleansing.needFillData = true  ;
         dataCleansing.dataFill = dataCleansingDataFill  ;

        var request = new model.PostWorkbookDataCleansingRequest();
        request.name =  remoteName;
        request.dataCleansing =  dataCleansing;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorkbookDataCleansing(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_workbook_data_deduplication test', function(){
      it("should call PostWorkbookDataDeduplication successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "BookCsvDuplicateData.csv"
        var remoteName = "BookCsvDuplicateData.csv"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var deduplicationRegion = new model.DeduplicationRegion();


        var request = new model.PostWorkbookDataDeduplicationRequest();
        request.name =  remoteName;
        request.deduplicationRegion =  deduplicationRegion;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorkbookDataDeduplication(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_workbook_data_fill test', function(){
      it("should call PostWorkbookDataFill successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "BookCsvDuplicateData.csv"
        var remoteName = "BookCsvDuplicateData.csv"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var dataFillDataFillDefaultValue = new model.DataFillValue();
         dataFillDataFillDefaultValue.defaultDate = "2024-01-01"  ;
         dataFillDataFillDefaultValue.defaultNumber = 0  ;
         dataFillDataFillDefaultValue.defaultBoolean = false  ;
        var dataFill = new model.DataFill();
         dataFill.dataFillDefaultValue = dataFillDataFillDefaultValue  ;

        var request = new model.PostWorkbookDataFillRequest();
        request.name =  remoteName;
        request.dataFill =  dataFill;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorkbookDataFill(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
});