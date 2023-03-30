/*
* MIT License

* Copyright (c) 2021 Aspose Pty Ltd

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

const localPath = "TestData/";
var fs = require('fs');
var path = require('path');
var assert = require('assert');

describe('CellsChartAxisApi', function() {
  this.timeout(200000);
  describe('cellsChartsGetChartCategoryAxis', function() {
    it('should call cellsChartsGetChartCategoryAxis successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsCharts_GetChartCategoryAxisRequest();
          req.name = filename;
          req.sheetName = "Sheet4";
          req.chartIndex = 0;
          req.folder = "Temp";
          
          return cellsApi.cellsChartsGetChartCategoryAxis(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsChartsGetChartSecondCategoryAxis', function() {
    it('should call cellsChartsGetChartSecondCategoryAxis successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsCharts_GetChartSecondCategoryAxisRequest();
          req.name = filename;
          req.sheetName = "Sheet4";
          req.chartIndex = 0;
          req.folder = "Temp";
          
          return cellsApi.cellsChartsGetChartSecondCategoryAxis(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsChartsGetChartValueAxis', function() {
    it('should call cellsChartsGetChartValueAxis successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsCharts_GetChartValueAxisRequest();
          req.name = filename;
          req.sheetName = "Sheet4";
          req.chartIndex = 0;
          req.folder = "Temp";
          
          return cellsApi.cellsChartsGetChartValueAxis(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsChartsGetChartSecondValueAxis', function() {
    it('should call cellsChartsGetChartSecondValueAxis successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsCharts_GetChartSecondValueAxisRequest();
          req.name = filename;
          req.sheetName = "Sheet4";
          req.chartIndex = 0;
          req.folder = "Temp";
          
          return cellsApi.cellsChartsGetChartSecondValueAxis(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsChartsGetChartSeriesAxis', function() {
    it('should call cellsChartsGetChartSeriesAxis successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsCharts_GetChartSeriesAxisRequest();
          req.name = filename;
          req.sheetName = "Sheet4";
          req.chartIndex = 0;
          req.folder = "Temp";
          
          return cellsApi.cellsChartsGetChartSeriesAxis(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsChartsPostChartCategoryAxis', function() {
    it('should call cellsChartsPostChartCategoryAxis successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsCharts_PostChartCategoryAxisRequest();
          req.name = filename;
          req.sheetName = "Sheet4";
          req.chartIndex = 0;
          req.folder = "Temp";
          req.axis = new model.Axis();
          req.axis.minValue = 10.0
          
          return cellsApi.cellsChartsPostChartCategoryAxis(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsChartsPostChartSecondCategoryAxis', function() {
    it('should call cellsChartsPostChartSecondCategoryAxis successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsCharts_PostChartSecondCategoryAxisRequest();
          req.name = filename;
          req.sheetName = "Sheet4";
          req.chartIndex = 0;
          req.folder = "Temp";
          req.axis = new model.Axis();
          req.axis.minValue = 10.0

          return cellsApi.cellsChartsPostChartSecondCategoryAxis(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsChartsPostChartValueAxis', function() {
    it('should call cellsChartsPostChartValueAxis successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsCharts_PostChartValueAxisRequest();
          req.name = filename;
          req.sheetName = "Sheet4";
          req.chartIndex = 0;
          req.folder = "Temp";
          req.axis = new model.Axis();
          req.axis.minValue = 10.0
          return cellsApi.cellsChartsPostChartValueAxis(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsChartsPostChartSecondValueAxis', function() {
    it('should call cellsChartsPostChartSecondValueAxis successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsCharts_PostChartSecondValueAxisRequest();
          req.name = filename;
          req.sheetName = "Sheet4";
          req.chartIndex = 0;
          req.folder = "Temp";
          req.axis = new model.Axis();
          req.axis.minValue = 10.0
          
          return cellsApi.cellsChartsPostChartSecondValueAxis(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsChartsPostChartSeriesAxis', function() {
    it('should call cellsChartsPostChartSeriesAxis successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;

      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsCharts_PostChartSeriesAxisRequest();
          req.name = filename;
          req.sheetName = "Sheet4";
          req.chartIndex = 0;
          req.folder = "Temp";
          req.axis = new model.Axis();
          req.axis.minValue = 10.0

          return cellsApi.cellsChartsPostChartSeriesAxis(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });  
});