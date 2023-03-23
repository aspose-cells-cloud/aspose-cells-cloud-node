import { expect } from "chai";
import "mocha";

import * as model from "../../src/model/model";
import * as api from "../../src/api";
const clientId = process.env.CellsCloudTestClientId;
const clientSecret = process.env.CellsCloudTestClientSecret;
const ApiURL = process.env.CellsCloudTestApiBaseUrl;

const localPath = "TestData/";

var fs = require('fs');
var path = require('path');
var assert = require('assert');


describe('ChartAreaController test', function() {
    this.timeout(200000);
    const cellsApi = new api.CellsApi(clientId, clientSecret,"v3.0",ApiURL);

    describe('get_chart_area test', function(){
      it("should call GetChartArea successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetChartAreaRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet4";
        request.chartIndex =  0;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getChartArea(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_chart_area_fill_format test', function(){
      it("should call GetChartAreaFillFormat successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetChartAreaFillFormatRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet4";
        request.chartIndex =  0;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getChartAreaFillFormat(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_chart_area_border test', function(){
      it("should call GetChartAreaBorder successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetChartAreaBorderRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet4";
        request.chartIndex =  0;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getChartAreaBorder(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
});