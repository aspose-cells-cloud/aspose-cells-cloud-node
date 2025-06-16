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


describe('Merger test', function() {
    this.timeout(200000);
    const cellsApi = new api.CellsApi(clientId, clientSecret,"v3.0",ApiURL);

    describe('merge_remote_spreadsheet test', function(){
      it("should call MergeRemoteSpreadsheet successfully" , function(){
        var remoteFolder = "TestData/In"
        var book1Xlsx = "Book1.xlsx"
        var bookTextXlsx = "BookText.xlsx"
      
        var bookTextXlsxRequest = new  model.UploadFileRequest();
        bookTextXlsxRequest.uploadFiles ={bookTextXlsx:fs.createReadStream(localPath  + bookTextXlsx)};
        bookTextXlsxRequest.path = remoteFolder + "/" + bookTextXlsx ;
        bookTextXlsxRequest.storageName ="";
        cellsApi.uploadFile(bookTextXlsxRequest );
        var book1XlsxRequest = new  model.UploadFileRequest();
        book1XlsxRequest.uploadFiles ={book1Xlsx:fs.createReadStream(localPath  + book1Xlsx)};
        book1XlsxRequest.path = remoteFolder + "/" + book1Xlsx ;
        book1XlsxRequest.storageName ="";
        cellsApi.uploadFile(book1XlsxRequest );
     

        var request = new model.MergeRemoteSpreadsheetRequest();
        request.name =  bookTextXlsx;
        request.mergedSpreadsheet =  remoteFolder + "/" + book1Xlsx;
        request.folder =  remoteFolder;
        return cellsApi.mergeRemoteSpreadsheet(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
});