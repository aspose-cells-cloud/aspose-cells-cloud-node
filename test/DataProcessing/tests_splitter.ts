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


describe('Splitter test', function() {
    this.timeout(200000);
    const cellsApi = new api.CellsApi(clientId, clientSecret,"v3.0",ApiURL);

    describe('split_local_file test', function(){
      it("should call SplitFile successfully" , function(){
      
        var book1Xlsx = "Book1.xlsx"
        var outFormat = "PDF"

     

        var request = new model.SplitFileRequest();
        request.spreadsheet =  "TestData/" + book1Xlsx;
        request.outFormat =  outFormat;
        return cellsApi.splitFile(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('split_local_file_to_remote_folder test', function(){
      it("should call SplitFile successfully" , function(){
      
        var book1Xlsx = "Book1.xlsx"
        var outFormat = "PDF"

     

        var request = new model.SplitFileRequest();
        request.spreadsheet =  "TestData/" + book1Xlsx;
        request.outFormat =  outFormat;
        request.outPath =  "TestData/Out";
        return cellsApi.splitFile(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('split_file_in_remote test', function(){
      it("should call SplitFileInRemote successfully" , function(){
      
        var remoteFolder = "TestData/In"
        var book1Xlsx = "Book1.xlsx"
        var outFormat = "PDF"

     

        var request = new model.SplitFileInRemoteRequest();
        request.name =  book1Xlsx;
        request.folder =  remoteFolder;
        request.outFormat =  outFormat;
        request.outPath =  "TestData/Out";
        return cellsApi.splitFileInRemote(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
});