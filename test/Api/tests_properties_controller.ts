import { expect } from "chai";
import "mocha";

import * as model from "../../src/model/model";
import * as api from "../../src/api";
const clientId = process.env.CellsCloudClientId;
const clientSecret = process.env.CellsCloudClientSecret;
const ApiURL = process.env.CellsCloudApiBaseUrl;

const localPath = "TestData/CellsCloud/";
//const localPath = "TestData/";
var fs = require('fs');
var path = require('path');
var assert = require('assert');


describe('PropertiesController test', function() {
    this.timeout(200000);
    const cellsApi = new api.CellsApi(clientId, clientSecret,"v3.0",ApiURL);

    describe('get_document_properties test', function(){
      it("should call GetDocumentProperties successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetDocumentPropertiesRequest();
        request.name =  remoteName;
        request.type =  "All";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getDocumentProperties(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_document_property test', function(){
      it("should call GetDocumentProperty successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetDocumentPropertyRequest();
        request.name =  remoteName;
        request.propertyName =  "Author";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getDocumentProperty(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('put_document_property test', function(){
      it("should call PutDocumentProperty successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var property = new model.CellsDocumentProperty();
         property.name = "Author"  ;
         property.value = "cells developer"  ;

        var request = new model.PutDocumentPropertyRequest();
        request.name =  remoteName;
        request.property =  property;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.putDocumentProperty(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_document_property test', function(){
      it("should call DeleteDocumentProperty successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.DeleteDocumentPropertyRequest();
        request.name =  remoteName;
        request.propertyName =  "Author";
        request.type =  "All";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteDocumentProperty(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_document_properties test', function(){
      it("should call DeleteDocumentProperties successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.DeleteDocumentPropertiesRequest();
        request.name =  remoteName;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteDocumentProperties(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
});