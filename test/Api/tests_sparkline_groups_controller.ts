import { expect } from "chai";
import "mocha";

import * as model from "../../src/model/model";
import * as api from "../../src/api";
const clientId = process.env.CellsCloudClientId;
const clientSecret = process.env.CellsCloudClientSecret;
const ApiURL = process.env.CellsCloudApiBaseUrl;

//const localPath = "TestData/CellsCloud/";
const localPath = "TestData/";
var fs = require('fs');
var path = require('path');
var assert = require('assert');


describe('SparklineGroupsController test', function() {
    this.timeout(200000);
    const cellsApi = new api.CellsApi(clientId, clientSecret,"v3.0",ApiURL);

    describe('get_worksheet_sparkline_groups test', function(){
      it("should call GetWorksheetSparklineGroups successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "TestCase.xlsx"
        var remoteName = "TestCase.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetWorksheetSparklineGroupsRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorksheetSparklineGroups(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_worksheet_sparkline_group test', function(){
      it("should call GetWorksheetSparklineGroup successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "TestCase.xlsx"
        var remoteName = "TestCase.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetWorksheetSparklineGroupRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.sparklineIndex =  0;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorksheetSparklineGroup(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_worksheet_sparkline_groups test', function(){
      it("should call DeleteWorksheetSparklineGroups successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "TestCase.xlsx"
        var remoteName = "TestCase.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.DeleteWorksheetSparklineGroupsRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteWorksheetSparklineGroups(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_worksheet_sparkline_group test', function(){
      it("should call DeleteWorksheetSparklineGroup successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "TestCase.xlsx"
        var remoteName = "TestCase.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.DeleteWorksheetSparklineGroupRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.sparklineIndex =  0;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteWorksheetSparklineGroup(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('put_worksheet_sparkline_group test', function(){
      it("should call PutWorksheetSparklineGroup successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "TestCase.xlsx"
        var remoteName = "TestCase.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PutWorksheetSparklineGroupRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.type =  "Line";
        request.dataRange =  "C6:E13";
        request.isVertical =  false;
        request.locationRange =  "G6:G13";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.putWorksheetSparklineGroup(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_worksheet_sparkline_group test', function(){
      it("should call PostWorksheetSparklineGroup successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "TestCase.xlsx"
        var remoteName = "TestCase.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var sparklineGroup = new model.SparklineGroup();
         sparklineGroup.displayHidden = true  ;
         sparklineGroup.plotRightToLeft = true  ;

        var request = new model.PostWorksheetSparklineGroupRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.sparklineGroupIndex =  0;
        request.sparklineGroup =  sparklineGroup;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorksheetSparklineGroup(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
});