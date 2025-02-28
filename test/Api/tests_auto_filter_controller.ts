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


describe('AutoFilterController test', function() {
    this.timeout(200000);
    const cellsApi = new api.CellsApi(clientId, clientSecret,"v3.0",ApiURL);

    describe('get_worksheet_auto_filter test', function(){
      it("should call GetWorksheetAutoFilter successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetWorksheetAutoFilterRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorksheetAutoFilter(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('put_worksheet_date_filter test', function(){
      it("should call PutWorksheetDateFilter successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PutWorksheetDateFilterRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.range =  "A1:B1";
        request.fieldIndex =  0;
        request.dateTimeGroupingType =  "Year";
        request.year =  1920;
        request.matchBlanks =  false;
        request.refresh =  true;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.putWorksheetDateFilter(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('put_worksheet_filter test', function(){
      it("should call PutWorksheetFilter successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PutWorksheetFilterRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.range =  "A1:B1";
        request.fieldIndex =  0;
        request.criteria =  "Year";
        request.matchBlanks =  false;
        request.refresh =  true;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.putWorksheetFilter(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('put_worksheet_icon_filter test', function(){
      it("should call PutWorksheetIconFilter successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PutWorksheetIconFilterRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.range =  "A1:B1";
        request.fieldIndex =  0;
        request.iconSetType =  "ArrowsGray3";
        request.iconId =  1;
        request.matchBlanks =  false;
        request.refresh =  true;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.putWorksheetIconFilter(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('put_worksheet_custom_filter test', function(){
      it("should call PutWorksheetCustomFilter successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PutWorksheetCustomFilterRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.range =  "A1:B1";
        request.fieldIndex =  0;
        request.operatorType1 =  "LessOrEqual";
        request.criteria1 =  "1";
        request.matchBlanks =  false;
        request.refresh =  true;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.putWorksheetCustomFilter(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('put_worksheet_dynamic_filter test', function(){
      it("should call PutWorksheetDynamicFilter successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PutWorksheetDynamicFilterRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.range =  "A1:B1";
        request.fieldIndex =  0;
        request.dynamicFilterType =  "BelowAverage";
        request.matchBlanks =  false;
        request.refresh =  true;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.putWorksheetDynamicFilter(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('put_worksheet_filter_top10 test', function(){
      it("should call PutWorksheetFilterTop10 successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PutWorksheetFilterTop10Request();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.range =  "A1:B1";
        request.fieldIndex =  0;
        request.isTop =  true;
        request.isPercent =  true;
        request.itemCount =  1;
        request.matchBlanks =  false;
        request.refresh =  true;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.putWorksheetFilterTop10(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('put_worksheet_color_filter test', function(){
      it("should call PutWorksheetColorFilter successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var colorFilterForegroundColorColor = new model.Color();
         colorFilterForegroundColorColor.r = 48  ;
         colorFilterForegroundColorColor.g = 48  ;
         colorFilterForegroundColorColor.b = 48  ;
        var colorFilterForegroundColor = new model.CellsColor();
         colorFilterForegroundColor.type = "Automatic"  ;
         colorFilterForegroundColor.color = colorFilterForegroundColorColor  ;
        var colorFilter = new model.ColorFilterRequest();
         colorFilter.pattern = "Solid"  ;
         colorFilter.foregroundColor = colorFilterForegroundColor  ;

        var request = new model.PutWorksheetColorFilterRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.range =  "A1:B1";
        request.fieldIndex =  0;
        request.colorFilter =  colorFilter;
        request.matchBlanks =  true;
        request.refresh =  true;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.putWorksheetColorFilter(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_worksheet_match_blanks test', function(){
      it("should call PostWorksheetMatchBlanks successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PostWorksheetMatchBlanksRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.fieldIndex =  0;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorksheetMatchBlanks(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_worksheet_match_non_blanks test', function(){
      it("should call PostWorksheetMatchNonBlanks successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PostWorksheetMatchNonBlanksRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.fieldIndex =  0;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorksheetMatchNonBlanks(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_worksheet_auto_filter_refresh test', function(){
      it("should call PostWorksheetAutoFilterRefresh successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PostWorksheetAutoFilterRefreshRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorksheetAutoFilterRefresh(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_worksheet_date_filter test', function(){
      it("should call DeleteWorksheetDateFilter successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.DeleteWorksheetDateFilterRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.fieldIndex =  0;
        request.dateTimeGroupingType =  "Year";
        request.year =  1920;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteWorksheetDateFilter(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_worksheet_filter test', function(){
      it("should call DeleteWorksheetFilter successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.DeleteWorksheetFilterRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.fieldIndex =  0;
        request.criteria =  "year";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteWorksheetFilter(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
});