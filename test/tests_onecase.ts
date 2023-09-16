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

    describe('convert_workbook_csv test', function(){
      it("should call PutConvertWorkbook successfully" , function(){
        var remoteFolder = "htmlToExcelFilesData/"
      
        var localName = "ToxXlsx.html"
        var remoteName = "output-fje5tj.xlsx"
     
        var format = "html"

        var mapFiles = {};           

        mapFiles[localName]= fs.createReadStream(localPath  +localName) ;

        var request = new model.PutConvertWorkbookRequest();
        request.file =  mapFiles;
        request.format = "xlsx";
        request.streamFormat =  format;
        request.outPath = remoteFolder + remoteName;
        return cellsApi.putConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 

});