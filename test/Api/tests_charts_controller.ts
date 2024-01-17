import { expect } from "chai";
import "mocha";

import * as model from "../../src/model/model";
import * as api from "../../src/api";
const clientId = process.env.CellsCloudClientId;
const clientSecret = process.env.CellsCloudClientSecret;
const ApiURL = process.env.CellsCloudApiBaseUrl;

const localPath = "TestData/";

var fs = require('fs');
var path = require('path');
var assert = require('assert');


describe('ChartsController test', function() {
    this.timeout(200000);
    const cellsApi = new api.CellsApi(clientId, clientSecret,"v3.0",ApiURL);

    describe('get_worksheet_charts test', function(){
      it("should call GetWorksheetCharts successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetWorksheetChartsRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet4";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorksheetCharts(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_worksheet_chart test', function(){
      it("should call GetWorksheetChart successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetWorksheetChartRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet4";
        request.chartNumber =  0;
        request.format =  "png";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorksheetChart(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('put_worksheet_chart test', function(){
      it("should call PutWorksheetChart successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PutWorksheetChartRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet4";
        request.chartType =  "Pie";
        request.upperLeftRow =  5;
        request.upperLeftColumn =  5;
        request.lowerRightRow =  10;
        request.lowerRightColumn =  10;
        request.area =  "C7:D11";
        request.isVertical =  true;
        request.title =  "Aspose Chart";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.putWorksheetChart(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_worksheet_chart test', function(){
      it("should call DeleteWorksheetChart successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.DeleteWorksheetChartRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet4";
        request.chartIndex =  0;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteWorksheetChart(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_worksheet_chart test', function(){
      it("should call PostWorksheetChart successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var chart = new model.Chart();
         chart.showLegend = true  ;
         chart.showDataTable = true  ;

        var request = new model.PostWorksheetChartRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet4";
        request.chartIndex =  0;
        request.chart =  chart;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorksheetChart(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_worksheet_chart_legend test', function(){
      it("should call GetWorksheetChartLegend successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetWorksheetChartLegendRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet4";
        request.chartIndex =  0;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorksheetChartLegend(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_worksheet_chart_legend test', function(){
      it("should call PostWorksheetChartLegend successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var legend = new model.Legend();
         legend.position = "Top"  ;

        var request = new model.PostWorksheetChartLegendRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet4";
        request.chartIndex =  0;
        request.legend =  legend;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorksheetChartLegend(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('put_worksheet_chart_legend test', function(){
      it("should call PutWorksheetChartLegend successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.PutWorksheetChartLegendRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet4";
        request.chartIndex =  0;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.putWorksheetChartLegend(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_worksheet_chart_legend test', function(){
      it("should call DeleteWorksheetChartLegend successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.DeleteWorksheetChartLegendRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet4";
        request.chartIndex =  0;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteWorksheetChartLegend(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_worksheet_charts test', function(){
      it("should call DeleteWorksheetCharts successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.DeleteWorksheetChartsRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet4";
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteWorksheetCharts(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_worksheet_chart_title test', function(){
      it("should call GetWorksheetChartTitle successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.GetWorksheetChartTitleRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet4";
        request.chartIndex =  0;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.getWorksheetChartTitle(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_worksheet_chart_title test', function(){
      it("should call PostWorksheetChartTitle successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var title = new model.Title();
         title.isVisible = true  ;

        var request = new model.PostWorksheetChartTitleRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet4";
        request.chartIndex =  0;
        request.title =  title;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorksheetChartTitle(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('put_worksheet_chart_title test', function(){
      it("should call PutWorksheetChartTitle successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var title = new model.Title();
         title.isVisible = true  ;

        var request = new model.PutWorksheetChartTitleRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet4";
        request.chartIndex =  0;
        request.title =  title;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.putWorksheetChartTitle(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_worksheet_chart_title test', function(){
      it("should call DeleteWorksheetChartTitle successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     

        var request = new model.DeleteWorksheetChartTitleRequest();
        request.name =  remoteName;
        request.sheetName =  "Sheet4";
        request.chartIndex =  0;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.deleteWorksheetChartTitle(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
});