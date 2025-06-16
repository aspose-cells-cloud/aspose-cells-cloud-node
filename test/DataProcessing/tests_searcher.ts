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
      it("should call SearchSpreadsheetContent successfully" , function(){
      
        var bookTextXlsx = "BookText.xlsx"

     

        var request = new model.SearchSpreadsheetContentRequest();
        request.spreadsheet =  "TestData/" + bookTextXlsx;
        request.searchText =  "Bike";
        request.ignoringCase =  false;
        return cellsApi.searchSpreadsheetContent(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('search_text_from_worksheet_in_local_file test', function(){
      it("should call SearchSpreadsheetContent successfully" , function(){
      
        var bookTextXlsx = "BookText.xlsx"

     

        var request = new model.SearchSpreadsheetContentRequest();
        request.spreadsheet =  "TestData/" + bookTextXlsx;
        request.searchText =  "Bike";
        request.ignoringCase =  false;
        request.worksheet =  "Sales";
        return cellsApi.searchSpreadsheetContent(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('search_text_in_remote_spreadsheet test', function(){
      it("should call SearchContentInRemoteSpreadsheet successfully" , function(){
      
        var remoteFolder = "TestData/In"
        var bookTextXlsx = "BookText.xlsx"

        var bookTextXlsxRequest = new  model.UploadFileRequest();
        bookTextXlsxRequest.uploadFiles ={bookTextXlsx:fs.createReadStream(localPath  + bookTextXlsx)};
        bookTextXlsxRequest.path = remoteFolder + "/" + bookTextXlsx ;
        bookTextXlsxRequest.storageName ="";
        cellsApi.uploadFile(bookTextXlsxRequest );
     

        var request = new model.SearchContentInRemoteSpreadsheetRequest();
        request.name =  bookTextXlsx;
        request.searchText =  "Bike";
        request.ignoringCase =  false;
        request.folder =  remoteFolder;
        return cellsApi.searchContentInRemoteSpreadsheet(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('search_text_in_remote_range test', function(){
      it("should call SearchContentInRemoteRange successfully" , function(){
      
        var remoteFolder = "TestData/In"
        var bookTextXlsx = "BookText.xlsx"

        var bookTextXlsxRequest = new  model.UploadFileRequest();
        bookTextXlsxRequest.uploadFiles ={bookTextXlsx:fs.createReadStream(localPath  + bookTextXlsx)};
        bookTextXlsxRequest.path = remoteFolder + "/" + bookTextXlsx ;
        bookTextXlsxRequest.storageName ="";
        cellsApi.uploadFile(bookTextXlsxRequest );
     

        var request = new model.SearchContentInRemoteRangeRequest();
        request.name =  bookTextXlsx;
        request.worksheet =  "Sales";
        request.cellArea =  "A1:A10";
        request.searchText =  "Bike";
        request.ignoringCase =  false;
        request.folder =  remoteFolder;
        return cellsApi.searchContentInRemoteRange(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('replace_text_in_local_file test', function(){
      it("should call ReplaceSpreadsheetContent successfully" , function(){
      
        var bookTextXlsx = "BookText.xlsx"

     

        var request = new model.ReplaceSpreadsheetContentRequest();
        request.spreadsheet =  "TestData/" + bookTextXlsx;
        request.searchText =  "Bike";
        request.replaceText =  "****";
        return cellsApi.replaceSpreadsheetContent(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('replace_text_from_worksheet_in_local_file test', function(){
      it("should call ReplaceSpreadsheetContent successfully" , function(){
      
        var bookTextXlsx = "BookText.xlsx"

     

        var request = new model.ReplaceSpreadsheetContentRequest();
        request.spreadsheet =  "TestData/" + bookTextXlsx;
        request.searchText =  "Bike";
        request.replaceText =  "****";
        request.worksheet =  "Sales";
        return cellsApi.replaceSpreadsheetContent(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('replace_text_in_remote_range test', function(){
      it("should call ReplaceContentInRemoteRange successfully" , function(){
      
        var remoteFolder = "TestData/In"
        var bookTextXlsx = "BookText.xlsx"

        var bookTextXlsxRequest = new  model.UploadFileRequest();
        bookTextXlsxRequest.uploadFiles ={bookTextXlsx:fs.createReadStream(localPath  + bookTextXlsx)};
        bookTextXlsxRequest.path = remoteFolder + "/" + bookTextXlsx ;
        bookTextXlsxRequest.storageName ="";
        cellsApi.uploadFile(bookTextXlsxRequest );
     

        var request = new model.ReplaceContentInRemoteRangeRequest();
        request.name =  bookTextXlsx;
        request.searchText =  "Bike";
        request.replaceText =  "****";
        request.worksheet =  "Sales";
        request.cellArea =  "A1:A10";
        request.folder =  remoteFolder;
        return cellsApi.replaceContentInRemoteRange(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('search_spreadsheet_broken_links test', function(){
      it("should call SearchSpreadsheetBrokenLinks successfully" , function(){
      
        var bookFormulaXlsx = "BookFormula.xlsx"

     

        var request = new model.SearchSpreadsheetBrokenLinksRequest();
        request.spreadsheet =  "TestData/" + bookFormulaXlsx;
        return cellsApi.searchSpreadsheetBrokenLinks(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('search_broken_links_in_remote_spreadsheet test', function(){
      it("should call SearchBrokenLinksInRemoteSpreadsheet successfully" , function(){
      
        var remoteFolder = "TestData/In"
        var bookFormulaXlsx = "BookFormula.xlsx"

        var bookFormulaXlsxRequest = new  model.UploadFileRequest();
        bookFormulaXlsxRequest.uploadFiles ={bookFormulaXlsx:fs.createReadStream(localPath  + bookFormulaXlsx)};
        bookFormulaXlsxRequest.path = remoteFolder + "/" + bookFormulaXlsx ;
        bookFormulaXlsxRequest.storageName ="";
        cellsApi.uploadFile(bookFormulaXlsxRequest );
     

        var request = new model.SearchBrokenLinksInRemoteSpreadsheetRequest();
        request.name =  bookFormulaXlsx;
        request.folder =  remoteFolder;
        return cellsApi.searchBrokenLinksInRemoteSpreadsheet(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('search_broken_links_in_remote_worksheet test', function(){
      it("should call SearchBrokenLinksInRemoteWorksheet successfully" , function(){
      
        var remoteFolder = "TestData/In"
        var bookFormulaXlsx = "BookFormula.xlsx"

        var bookFormulaXlsxRequest = new  model.UploadFileRequest();
        bookFormulaXlsxRequest.uploadFiles ={bookFormulaXlsx:fs.createReadStream(localPath  + bookFormulaXlsx)};
        bookFormulaXlsxRequest.path = remoteFolder + "/" + bookFormulaXlsx ;
        bookFormulaXlsxRequest.storageName ="";
        cellsApi.uploadFile(bookFormulaXlsxRequest );
     

        var request = new model.SearchBrokenLinksInRemoteWorksheetRequest();
        request.name =  bookFormulaXlsx;
        request.worksheet =  "Sheet1";
        request.folder =  remoteFolder;
        return cellsApi.searchBrokenLinksInRemoteWorksheet(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('search_broken_links_in_remote_range test', function(){
      it("should call SearchBrokenLinksInRemoteRange successfully" , function(){
      
        var remoteFolder = "TestData/In"
        var bookFormulaXlsx = "BookFormula.xlsx"

        var bookFormulaXlsxRequest = new  model.UploadFileRequest();
        bookFormulaXlsxRequest.uploadFiles ={bookFormulaXlsx:fs.createReadStream(localPath  + bookFormulaXlsx)};
        bookFormulaXlsxRequest.path = remoteFolder + "/" + bookFormulaXlsx ;
        bookFormulaXlsxRequest.storageName ="";
        cellsApi.uploadFile(bookFormulaXlsxRequest );
     

        var request = new model.SearchBrokenLinksInRemoteRangeRequest();
        request.name =  bookFormulaXlsx;
        request.worksheet =  "Sheet1";
        request.cellArea =  "A1:F40";
        request.folder =  remoteFolder;
        return cellsApi.searchBrokenLinksInRemoteRange(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
});