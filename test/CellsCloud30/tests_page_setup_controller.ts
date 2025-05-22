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


describe('PageSetupController test', function() {
    this.timeout(200000);
    const cellsApi = new api.CellsApi(clientId, clientSecret,"v3.0",ApiURL);

    describe('get_page_setup test', function(){
      it("should call GetPageSetup successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetPageSetupRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getPageSetup(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_page_setup test', function(){
      it("should call PostPageSetup successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var pageSetup = new model.PageSetup();
         pageSetup.blackAndWhite = true  ;
         pageSetup.centerHorizontally = true  ;
         pageSetup.centerVertically = true  ;

        var request = new model.PostPageSetupRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.pageSetup =  pageSetup;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postPageSetup(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_header_footer test', function(){
      it("should call DeleteHeaderFooter successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.DeleteHeaderFooterRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteHeaderFooter(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_header test', function(){
      it("should call GetHeader successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetHeaderRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getHeader(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_header test', function(){
      it("should call PostHeader successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PostHeaderRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.section =  1;
        request.script =  "Update add header";
        request.isFirstPage =  true;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postHeader(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_footer test', function(){
      it("should call GetFooter successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetFooterRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getFooter(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_footer test', function(){
      it("should call PostFooter successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PostFooterRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.section =  1;
        request.script =  "add footer script";
        request.isFirstPage =  true;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postFooter(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_fit_wide_to_pages test', function(){
      it("should call PostFitWideToPages successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PostFitWideToPagesRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postFitWideToPages(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_fit_tall_to_pages test', function(){
      it("should call PostFitTallToPages successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PostFitTallToPagesRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet1";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postFitTallToPages(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
});