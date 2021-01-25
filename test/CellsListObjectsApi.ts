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
var fs = require('fs');
var path = require('path');
var assert = require('assert');
const localPath = "TestData/";

describe('CellsListObjectsApi', function() {
  this.timeout(200000);
  describe('cellsListObjectsDeleteWorksheetListObject', function() {
    it('should call cellsListObjectsDeleteWorksheetListObject successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsListObjects_DeleteWorksheetListObjectRequest();
          req.name = filename;
          req.sheetName = "Sheet7";
          req.listObjectIndex = 0;
          req.folder = "Temp";
          
          return cellsApi.cellsListObjectsDeleteWorksheetListObject(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsListObjectsDeleteWorksheetListObjects', function() {
    it('should call cellsListObjectsDeleteWorksheetListObjects successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsListObjects_DeleteWorksheetListObjectsRequest();
          req.name = filename;
          req.sheetName = "Sheet7";
          req.folder = "Temp";
          
          return cellsApi.cellsListObjectsDeleteWorksheetListObjects(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsListObjectsGetWorksheetListObject', function() {
    it('should call cellsListObjectsGetWorksheetListObject successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsListObjects_GetWorksheetListObjectRequest();
          req.name = filename;
          req.sheetName = "Sheet7";
          req.listobjectindex = 0;
          req.folder = "Temp";
          
          return cellsApi.cellsListObjectsGetWorksheetListObject(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsListObjectsGetWorksheetListObjects', function() {
    it('should call cellsListObjectsGetWorksheetListObjects successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsListObjects_GetWorksheetListObjectsRequest();
          req.name = filename;
          req.sheetName = "Sheet7";
          req.folder = "Temp";
          
          return cellsApi.cellsListObjectsGetWorksheetListObjects(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsListObjectsPostWorksheetListObject', function() {
    it('should call cellsListObjectsPostWorksheetListObject successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsListObjects_PostWorksheetListObjectRequest();
          req.name = filename;
          req.sheetName = "Sheet7";
          req.listObjectIndex = 0;
          req.listObject = new model.ListObject();
          req.listObject.showHeaderRow = true;
          req.folder = "Temp";
          
          return cellsApi.cellsListObjectsPostWorksheetListObject(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsListObjectsPostWorksheetListObjectConvertToRange', function() {
    it('should call cellsListObjectsPostWorksheetListObjectConvertToRange successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsListObjects_PostWorksheetListObjectConvertToRangeRequest();
          req.name = filename;
          req.sheetName = "Sheet7";
          req.listObjectIndex = 0;
          req.folder = "Temp";
          
          return cellsApi.cellsListObjectsPostWorksheetListObjectConvertToRange(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsListObjectsPostWorksheetListObjectSortTable', function() {
    it('should call cellsListObjectsPostWorksheetListObjectSortTable successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsListObjects_PostWorksheetListObjectSortTableRequest();
          req.name = filename;
          req.sheetName = "Sheet7";
          req.listObjectIndex = 0;
          req.dataSorter = new model.DataSorter();
          req.dataSorter.caseSensitive = true;
          req.folder = "Temp";
          
          return cellsApi.cellsListObjectsPostWorksheetListObjectSortTable(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsListObjectsPostWorksheetListObjectSummarizeWithPivotTable', function() {
    it('should call cellsListObjectsPostWorksheetListObjectSummarizeWithPivotTable successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsListObjects_PostWorksheetListObjectSummarizeWithPivotTableRequest();
          req.name = filename;
          req.sheetName = "Sheet7";
          req.listObjectIndex = 0;
          req.destsheetName = "Sheet2";
          var request = new model.CreatePivotTableRequest();
          request.destCellName = "C1";
          request.name = "testp";
          request.pivotFieldColumns = [2];
          request.pivotFieldData = [1];
          request.pivotFieldRows = [0];
          request.sourceData = "=Sheet2!A1:E8";
          request.useSameSource = true;
          req.request = request;
          req.folder = "Temp";
          
          return cellsApi.cellsListObjectsPostWorksheetListObjectSummarizeWithPivotTable(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsListObjectsPutWorksheetListObject', function() {
    it('should call cellsListObjectsPutWorksheetListObject successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsListObjects_PutWorksheetListObjectRequest();
          req.name = filename;
          req.sheetName = "Sheet7";
          req.startRow = 1;
          req.startColumn = 1;
          req.endRow = 6;
          req.endColumn = 6;
          req.folder = "Temp";
          
          return cellsApi.cellsListObjectsPutWorksheetListObject(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
});