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


describe('TextProcessingController test', function() {
    this.timeout(200000);
    const cellsApi = new api.CellsApi(clientId, clientSecret,"v3.0",ApiURL);

    describe('post_add_text_content test', function(){
      it("should call PostAddTextContent successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "BookText.xlsx"
        var remoteName = "BookText.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var addTextOptionsDataSource = new model.DataSource();
         addTextOptionsDataSource.dataSourceType = "CloudFileSystem"  ;
         addTextOptionsDataSource.dataPath = "BookText.xlsx"  ;
        var addTextOptions = new model.AddTextOptions();
         addTextOptions.dataSource = addTextOptionsDataSource  ;
         addTextOptions.text = "Aspose.Cells Cloud is an excellent product."  ;
         addTextOptions.worksheet = "202401"  ;
         addTextOptions.selectPoistion = "AtTheBeginning"  ;
         addTextOptions.skipEmptyCells = true  ;

        var request = new model.PostAddTextContentRequest();
        request.addTextOptions =  addTextOptions;
        return cellsApi.postAddTextContent(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_trim_content test', function(){
      it("should call PostTrimContent successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "BookText.xlsx"
        var remoteName = "BookText.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var trimContentOptionsDataSource = new model.DataSource();
         trimContentOptionsDataSource.dataSourceType = "CloudFileSystem"  ;
         trimContentOptionsDataSource.dataPath = "BookText.xlsx"  ;
        var trimContentOptionsScopeOptions = new model.ScopeOptions();
         trimContentOptionsScopeOptions.scope = "EntireWorkbook"  ;
        var trimContentOptions = new model.TrimContentOptions();
         trimContentOptions.dataSource = trimContentOptionsDataSource  ;
         trimContentOptions.trimLeading = true  ;
         trimContentOptions.trimTrailing = true  ;
         trimContentOptions.trimSpaceBetweenWordTo1 = true  ;
         trimContentOptions.removeAllLineBreaks = true  ;
         trimContentOptions.scopeOptions = trimContentOptionsScopeOptions  ;

        var request = new model.PostTrimContentRequest();
        request.trimContentOptions =  trimContentOptions;
        return cellsApi.postTrimContent(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_update_word_case test', function(){
      it("should call PostUpdateWordCase successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "BookText.xlsx"
        var remoteName = "BookText.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var wordCaseOptionsDataSource = new model.DataSource();
         wordCaseOptionsDataSource.dataSourceType = "CloudFileSystem"  ;
         wordCaseOptionsDataSource.dataPath = "BookText.xlsx"  ;
        var wordCaseOptionsScopeOptions = new model.ScopeOptions();
         wordCaseOptionsScopeOptions.scope = "EntireWorkbook"  ;
        var wordCaseOptions = new model.WordCaseOptions();
         wordCaseOptions.dataSource = wordCaseOptionsDataSource  ;
         wordCaseOptions.wordCaseType = "None"  ;
         wordCaseOptions.scopeOptions = wordCaseOptionsScopeOptions  ;

        var request = new model.PostUpdateWordCaseRequest();
        request.wordCaseOptions =  wordCaseOptions;
        return cellsApi.postUpdateWordCase(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
});