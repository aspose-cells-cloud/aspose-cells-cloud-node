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

const localPath = "TestData/";
var fs = require('fs');
var path = require('path');
var assert = require('assert');

describe('CellsPageBreaksApi', function() {
  this.timeout(200000);
  describe('cellsPageBreaksDeleteHorizontalPageBreak', function() {
    it('should call cellsPageBreaksDeleteHorizontalPageBreak successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsPageBreaks_DeleteHorizontalPageBreakRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.index = 0;
          req.folder = "Temp";
          
          return cellsApi.cellsPageBreaksDeleteHorizontalPageBreak(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPageBreaksDeleteHorizontalPageBreaks', function() {
    it('should call cellsPageBreaksDeleteHorizontalPageBreaks successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsPageBreaks_DeleteHorizontalPageBreaksRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.row = 0;
          req.folder = "Temp";
          
          return cellsApi.cellsPageBreaksDeleteHorizontalPageBreaks(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPageBreaksDeleteVerticalPageBreak', function() {
    it('should call cellsPageBreaksDeleteVerticalPageBreak successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsPageBreaks_DeleteVerticalPageBreakRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.index = 0;
          req.folder = "Temp";
          
          return cellsApi.cellsPageBreaksDeleteVerticalPageBreak(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPageBreaksDeleteVerticalPageBreaks', function() {
    it('should call cellsPageBreaksDeleteVerticalPageBreaks successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsPageBreaks_DeleteVerticalPageBreaksRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.column = 0;
          req.folder = "Temp";
          
          return cellsApi.cellsPageBreaksDeleteVerticalPageBreaks(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPageBreaksGetHorizontalPageBreak', function() {
    it('should call cellsPageBreaksGetHorizontalPageBreak successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsPageBreaks_GetHorizontalPageBreakRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.index = 0;
          req.folder = "Temp";
          
          return cellsApi.cellsPageBreaksGetHorizontalPageBreak(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPageBreaksGetHorizontalPageBreaks', function() {
    it('should call cellsPageBreaksGetHorizontalPageBreaks successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsPageBreaks_GetHorizontalPageBreaksRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.folder = "Temp";
          
          return cellsApi.cellsPageBreaksGetHorizontalPageBreaks(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPageBreaksGetVerticalPageBreak', function() {
    it('should call cellsPageBreaksGetVerticalPageBreak successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsPageBreaks_GetVerticalPageBreakRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.index = 0;
          req.folder = "Temp";
          
          return cellsApi.cellsPageBreaksGetVerticalPageBreak(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPageBreaksGetVerticalPageBreaks', function() {
    it('should call cellsPageBreaksGetVerticalPageBreaks successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsPageBreaks_GetVerticalPageBreaksRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.folder = "Temp";
          
          return cellsApi.cellsPageBreaksGetVerticalPageBreaks(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPageBreaksPutHorizontalPageBreak', function() {
    it('should call cellsPageBreaksPutHorizontalPageBreak successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsPageBreaks_PutHorizontalPageBreakRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.cellname = "A1";
          req.row = 1;
          req.column = 1;
          req.startColumn = 1;
          req.endColumn = 1;
          req.folder = "Temp";
          
          return cellsApi.cellsPageBreaksPutHorizontalPageBreak(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPageBreaksPutVerticalPageBreak', function() {
    it('should call cellsPageBreaksPutVerticalPageBreak successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsPageBreaks_PutVerticalPageBreakRequest();
          req.name = filename;
          req.sheetName = "Sheet1";
          req.cellname = "A1";
          req.row = 1;
          req.column = 1;
          req.startRow = 1;
          req.endRow = 1;
          req.folder = "Temp";
          
          return cellsApi.cellsPageBreaksPutVerticalPageBreak(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
});