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

describe('CellsOleObjectsApi', function() {
  this.timeout(20000);
  describe('cellsOleObjectsDeleteWorksheetOleObject', function() {
    it('should call cellsOleObjectsDeleteWorksheetOleObject successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsOleObjects_DeleteWorksheetOleObjectRequest();
          req.name = filename;
          req.sheetName = "Sheet6";
          req.oleObjectIndex = 0;
          req.folder = "Temp";
          
          return cellsApi.cellsOleObjectsDeleteWorksheetOleObject(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsOleObjectsDeleteWorksheetOleObjects', function() {
    it('should call cellsOleObjectsDeleteWorksheetOleObjects successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsOleObjects_DeleteWorksheetOleObjectsRequest();
          req.name = filename;
          req.sheetName = "Sheet6";
          req.folder = "Temp";
          
          return cellsApi.cellsOleObjectsDeleteWorksheetOleObjects(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsOleObjectsGetWorksheetOleObject', function() {
    it('should call cellsOleObjectsGetWorksheetOleObject successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsOleObjects_GetWorksheetOleObjectRequest();
          req.name = filename;
          req.sheetName = "Sheet6";
          req.objectNumber = 0;
          req.folder = "Temp";
          
          return cellsApi.cellsOleObjectsGetWorksheetOleObject(req)
            .then((result) => {
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsOleObjectsGetWorksheetOleObjectFormat', function() {
    it('should call cellsOleObjectsGetWorksheetOleObjectFormat successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsOleObjects_GetWorksheetOleObjectRequest();
          req.name = filename;
          req.sheetName = "Sheet6";
          req.objectNumber = 0;
          req.folder = "Temp";
          req.format = "png";
          
          return cellsApi.cellsOleObjectsGetWorksheetOleObject(req)
            .then((result) => {
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsOleObjectsGetWorksheetOleObjects', function() {
    it('should call cellsOleObjectsGetWorksheetOleObjects successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsOleObjects_GetWorksheetOleObjectsRequest();
          req.name = filename;
          req.sheetName = "Sheet6";
          req.folder = "Temp";
          
          return cellsApi.cellsOleObjectsGetWorksheetOleObjects(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsOleObjectsPostUpdateWorksheetOleObject', function() {
    it('should call cellsOleObjectsPostUpdateWorksheetOleObject successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsOleObjects_PostUpdateWorksheetOleObjectRequest();
          req.name = filename;
          req.sheetName = "Sheet6";
          req.folder = "Temp";
          req.oleObjectIndex = 0;
          var ole = new model.OleObject();
          ole.left = 10;
          ole.right = 10;
          ole.height = 90;
          ole.width = 78;
          req.ole = ole;
          
          return cellsApi.cellsOleObjectsPostUpdateWorksheetOleObject(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsOleObjectsPutWorksheetOleObject', function() {
    it('should call cellsOleObjectsPutWorksheetOleObject successfully', function() {

      const filename = "Book1.xlsx";
      const filename1 = "OLEDoc.docx";
      const filename2 = "word.jpg";
      const cellsApi = BaseTest.initializeCellsApi();
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          const filename1= "word.jpg";
          const cellsApi = BaseTest.initializeCellsApi();
          var data =fs.createReadStream(localPath  + filename1);
          var req = new model.UploadFileRequest();
          req.path = "Temp/" + filename1;
          req.file = data;
      
          return cellsApi.uploadFile(req)
            .then((result) => {
              expect(result.body.uploaded.length).greaterThan(0);
              const filename2 = "OLEDoc.docx";
              const cellsApi = BaseTest.initializeCellsApi();
              var data =fs.createReadStream(localPath  + filename2);
              var req = new model.UploadFileRequest();
              req.path = "Temp/" + filename2;
              req.file = data;
          
              return cellsApi.uploadFile(req)
                .then((result) => {
                  expect(result.body.uploaded.length).greaterThan(0);                       
                  var req = new model.CellsOleObjects_PutWorksheetOleObjectRequest();
                  req.name = filename;
                  req.sheetName = "Sheet6";
                  req.folder = "Temp";
                  req.oleObject = null;
                  req.upperLeftRow = 1;
                  req.upperLeftColumn = 1;
                  req.height = 100;
                  req.width = 80;
                  req.oleFile = filename1;
                  req.imageFile = filename2;
                  
                  return cellsApi.cellsOleObjectsPutWorksheetOleObject(req)
                    .then((result) => {
                      expect(result.body.code).to.equal(200);
                      expect(result.response.statusCode).to.equal(200);
                    });
                 });
            });
          });
        });
    });
});