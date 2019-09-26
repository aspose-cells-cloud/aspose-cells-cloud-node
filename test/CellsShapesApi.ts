/*
* MIT License

* Copyright (c) 2018 Aspose Pty Ltd

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

describe('CellsShapesApi', function() {
  this.timeout(20000);
  describe('cellsShapesDeleteWorksheetShape', function() {
    it('should call cellsShapesDeleteWorksheetShape successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then(() => {
          var req = new model.CellsShapes_DeleteWorksheetShapeRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.shapeindex = 0;
          req.folder = "Temp";
          
          return cellsApi.cellsShapesDeleteWorksheetShape(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsShapesDeleteWorksheetShapes', function() {
    it('should call cellsShapesDeleteWorksheetShapes successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then(() => {
          var req = new model.CellsShapes_DeleteWorksheetShapesRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.folder = "Temp";
          
          return cellsApi.cellsShapesDeleteWorksheetShapes(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsShapesGetWorksheetShape', function() {
    it('should call cellsShapesGetWorksheetShape successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then(() => {
          var req = new model.CellsShapes_GetWorksheetShapeRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.shapeindex = 0;
          req.folder = "Temp";
          
          return cellsApi.cellsShapesGetWorksheetShape(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsShapesGetWorksheetShapes', function() {
    it('should call cellsShapesGetWorksheetShapes successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then(() => {
          var req = new model.CellsShapes_GetWorksheetShapesRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.folder = "Temp";
          
          return cellsApi.cellsShapesGetWorksheetShapes(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsShapesPostWorksheetShape', function() {
    it('should call cellsShapesPostWorksheetShape successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then(() => {
          var req = new model.CellsShapes_PostWorksheetShapeRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.shapeindex = 0;
          req.dto = new model.Shape();
          req.dto.lowerRightColumn = 10;
          req.folder = "Temp";
          
          return cellsApi.cellsShapesPostWorksheetShape(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsShapesPutWorksheetShape', function() {
    it('should call cellsShapesPutWorksheetShape successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then(() => {
          var req = new model.CellsShapes_PutWorksheetShapeRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.drawingType = "button";
          req.upperLeftRow = 1;
          req.upperLeftColumn = 1;
          req.top = 10;
          req.left = 10;
          req.width = 100;
          req.height = 90;
          req.folder = "Temp";
          
          return cellsApi.cellsShapesPutWorksheetShape(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
});