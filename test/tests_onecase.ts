import { expect } from "chai";
import "mocha";

import * as model from "../src/model/model";
import * as api from "../src/api";
const clientId = process.env.CellsCloudClientId;
const clientSecret = process.env.CellsCloudClientSecret;
const ApiURL = process.env.CellsCloudApiBaseUrl;

const localPath = "TestData/";

var fs = require('fs');
var path = require('path');
var assert = require('assert');


describe('LightCells test', function() {
    this.timeout(200000);
    const cellsApi = new api.CellsApi(clientId, clientSecret,"v3.0",ApiURL);

    describe('post_metadata test', function(){
      it("should call PostMetadata successfully" , function(){
      
        var book1Xlsx = "Book1.xlsx"

     
        var mapFiles = {};           

        var cellsDocumentscellsDocument0 = new model.CellsDocumentProperty();
        cellsDocumentscellsDocument0.name = "Author"  ;
        cellsDocumentscellsDocument0.value = "roy.wang"  ;
        var cellsDocuments = new Array<model.CellsDocumentProperty>();
        cellsDocuments.push(cellsDocumentscellsDocument0);
        mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostMetadataRequest();
        request.file =  mapFiles;
        request.cellsDocuments =  cellsDocuments;
        return cellsApi.postMetadata(request).then((result) => {
        });
      });
    });

});