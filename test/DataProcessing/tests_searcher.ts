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


describe('Searcher test', function() {
    this.timeout(200000);
    const cellsApi = new api.CellsApi(clientId, clientSecret,"v3.0",ApiURL);

    describe('search_text_in_local_file test', function(){
      it("should call SearchText successfully" , function(){
      
        var bookTextXlsx = "BookText.xlsx"

     

        var request = new model.SearchTextRequest();
        request.spreadsheet =  "TestData/" + bookTextXlsx;
        request.searchText =  "Bike";
        request.ignoringCase =  false;
        return cellsApi.searchText(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('search_text_from_worksheet_in_local_file test', function(){
      it("should call SearchText successfully" , function(){
      
        var bookTextXlsx = "BookText.xlsx"

     

        var request = new model.SearchTextRequest();
        request.spreadsheet =  "TestData/" + bookTextXlsx;
        request.searchText =  "Bike";
        request.ignoringCase =  false;
        request.sheetname =  "Sales";
        return cellsApi.searchText(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('search_text_in_remote test', function(){
      it("should call SearchTextInRemote successfully" , function(){
      
        var remoteFolder = "TestData/In"
        var bookTextXlsx = "BookText.xlsx"

        var bookTextXlsxRequest = new  model.UploadFileRequest();
        bookTextXlsxRequest.uploadFiles ={bookTextXlsx:fs.createReadStream(localPath  + bookTextXlsx)};
        bookTextXlsxRequest.path = remoteFolder + "/" + bookTextXlsx ;
        bookTextXlsxRequest.storageName ="";
        cellsApi.uploadFile(bookTextXlsxRequest );
     

        var request = new model.SearchTextInRemoteRequest();
        request.name =  bookTextXlsx;
        request.searchText =  "Bike";
        request.ignoringCase =  false;
        request.sheetname =  "Sales";
        request.folder =  remoteFolder;
        return cellsApi.searchTextInRemote(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('replace_text_in_local_file test', function(){
      it("should call ReplaceText successfully" , function(){
      
        var bookTextXlsx = "BookText.xlsx"

     

        var request = new model.ReplaceTextRequest();
        request.spreadsheet =  "TestData/" + bookTextXlsx;
        request.searchText =  "Bike";
        request.replaceText =  "****";
        return cellsApi.replaceText(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('replace_text_from_worksheet_in_local_file test', function(){
      it("should call ReplaceText successfully" , function(){
      
        var bookTextXlsx = "BookText.xlsx"

     

        var request = new model.ReplaceTextRequest();
        request.spreadsheet =  "TestData/" + bookTextXlsx;
        request.searchText =  "Bike";
        request.replaceText =  "****";
        request.sheetname =  "Sales";
        return cellsApi.replaceText(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('replace_text_in_remote test', function(){
      it("should call ReplaceTextInRemote successfully" , function(){
      
        var remoteFolder = "TestData/In"
        var bookTextXlsx = "BookText.xlsx"

        var bookTextXlsxRequest = new  model.UploadFileRequest();
        bookTextXlsxRequest.uploadFiles ={bookTextXlsx:fs.createReadStream(localPath  + bookTextXlsx)};
        bookTextXlsxRequest.path = remoteFolder + "/" + bookTextXlsx ;
        bookTextXlsxRequest.storageName ="";
        cellsApi.uploadFile(bookTextXlsxRequest );
     

        var request = new model.ReplaceTextInRemoteRequest();
        request.name =  bookTextXlsx;
        request.searchText =  "Bike";
        request.replaceText =  "****";
        request.sheetname =  "Sales";
        request.folder =  remoteFolder;
        return cellsApi.replaceTextInRemote(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
});