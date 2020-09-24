/*
* MIT License

* Copyright (c) 2020 Aspose Pty Ltd

* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:

* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.

* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

import { expect } from "chai";
import "mocha";

import * as model from "../src/model/model";
import * as BaseTest from "./baseTest";

const localPath = "../TestData/";
var fs = require('fs');
var path = require('path');
var assert = require('assert');

describe('CellsChartsApi', function() {
  this.timeout(200000);
  describe('cellsChartsDeleteWorksheetChartLegend', function() {
    it('should call cellsChartsDeleteWorksheetChartLegend successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "myDocument.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsCharts_DeleteWorksheetChartLegendRequest();
          req.name = filename;
          req.sheetName = "Sheet3";
          req.chartIndex = 1;
          req.folder = "Temp";
          
          return cellsApi.cellsChartsDeleteWorksheetChartLegend(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsChartsDeleteWorksheetChartTitle', function() {
    it('should call cellsChartsDeleteWorksheetChartTitle successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "myDocument.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsCharts_DeleteWorksheetChartTitleRequest();
          req.name = filename;
          req.sheetName = "Sheet3";
          req.chartIndex = 0;
          req.folder = "Temp";
          
          return cellsApi.cellsChartsDeleteWorksheetChartTitle(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsChartsDeleteWorksheetClearCharts', function() {
    it('should call cellsChartsDeleteWorksheetClearCharts successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "myDocument.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsCharts_DeleteWorksheetClearChartsRequest();
          req.name = filename;
          req.sheetName = "Sheet3";
          req.folder = "Temp";
          
          return cellsApi.cellsChartsDeleteWorksheetClearCharts(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsChartsDeleteWorksheetDeleteChart', function() {
    it('should call cellsChartsDeleteWorksheetDeleteChart successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "myDocument.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsCharts_DeleteWorksheetDeleteChartRequest();
          req.name = filename;
          req.sheetName = "Sheet3";
          req.chartIndex = 0;
          req.folder = "Temp";
          
          return cellsApi.cellsChartsDeleteWorksheetDeleteChart(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsChartsGetWorksheetChart', function() {
    it('should call cellsChartsGetWorksheetChart successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "myDocument.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsCharts_GetWorksheetChartRequest();
          req.name = filename;
          req.sheetName = "Sheet3";
          req.chartNumber = 0;
          req.format = "png";
          req.folder = "Temp";
          
          return cellsApi.cellsChartsGetWorksheetChart(req)
            .then((result) => {
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsChartsGetWorksheetChartLegend', function() {
    it('should call cellsChartsGetWorksheetChartLegend successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "myDocument.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsCharts_GetWorksheetChartLegendRequest();
          req.name = filename;
          req.sheetName = "Sheet3";
          req.chartIndex = 0;
          req.folder = "Temp";
          
          return cellsApi.cellsChartsGetWorksheetChartLegend(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsChartsGetWorksheetChartTitle', function() {
    it('should call cellsChartsGetWorksheetChartTitle successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsCharts_GetWorksheetChartTitleRequest();
          req.name = filename;
          req.sheetName = "Sheet4";
          req.chartIndex = 0;
          req.folder = "Temp";
          
          return cellsApi.cellsChartsGetWorksheetChartTitle(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsChartsGetWorksheetCharts', function() {
    it('should call cellsChartsGetWorksheetCharts successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "myDocument.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsCharts_GetWorksheetChartsRequest();
          req.name = filename;
          req.sheetName = "Sheet3";
          req.folder = "Temp";
          
          return cellsApi.cellsChartsGetWorksheetCharts(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsChartsPostWorksheetChart', function() {
    it('should call cellsChartsPostWorksheetChart successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "myDocument.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsCharts_PostWorksheetChartRequest();
          req.name = filename;
          req.sheetName = "Sheet3";
          req.chartIndex = 0;
          req.folder = "Temp";
          var chart = new model.Chart();
          chart.autoScaling = true;
          req.chart = chart;
          
          return cellsApi.cellsChartsPostWorksheetChart(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsChartsPostWorksheetChartLegend', function() {
    it('should call cellsChartsPostWorksheetChartLegend successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "myDocument.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsCharts_PostWorksheetChartLegendRequest();
          req.name = filename;
          req.sheetName = "Sheet3";
          req.chartIndex = 0;
          req.folder = "Temp";
          var legend = new model.Legend();
          legend.width = 10;
          req.legend = legend;
          
          return cellsApi.cellsChartsPostWorksheetChartLegend(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsChartsPostWorksheetChartTitle', function() {
    it('should call cellsChartsPostWorksheetChartTitle successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "myDocument.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsCharts_PostWorksheetChartTitleRequest();
          req.name = filename;
          req.sheetName = "Sheet3";
          req.chartIndex = 0;
          req.folder = "Temp";
          var title = new model.Title();
          title.text = "Post title";
          req.title = title;
          
          return cellsApi.cellsChartsPostWorksheetChartTitle(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsChartsPutWorksheetAddChart', function() {
    it('should call cellsChartsPutWorksheetAddChart successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "myDocument.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsCharts_PutWorksheetAddChartRequest();
          req.name = filename;
          req.sheetName = "Sheet4";
          req.chartType = "Pie";
          req.upperLeftRow = 5;
          req.upperLeftColumn = 5;
          req.lowerRightRow = 10;
          req.lowerRightColumn = 10;
          req.area = "C7:D11";
          req.isVertical = true;
          req.isAutoGetSerialName = null;
          req.folder = "Temp";
          
          return cellsApi.cellsChartsPutWorksheetAddChart(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsChartsPutWorksheetChartLegend', function() {
    it('should call cellsChartsPutWorksheetChartLegend successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "myDocument.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsCharts_PutWorksheetChartLegendRequest();
          req.name = filename;
          req.sheetName = "Sheet3";
          req.chartIndex = 0;
          req.folder = "Temp";
          
          return cellsApi.cellsChartsPutWorksheetChartLegend(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsChartsPutWorksheetChartTitle', function() {
    it('should call cellsChartsPutWorksheetChartTitle successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "myDocument.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsCharts_PutWorksheetChartTitleRequest();
          req.name = filename;
          req.sheetName = "Sheet3";
          req.chartIndex = 0;
          req.folder = "Temp";
          var title = new model.Title();
          title.text = "New title";
          req.title = title;
          
          return cellsApi.cellsChartsPutWorksheetChartTitle(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
});