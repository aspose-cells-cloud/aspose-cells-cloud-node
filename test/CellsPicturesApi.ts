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

describe('CellsPicturesApi', function() {
  this.timeout(20000);
  describe('cellsPicturesDeleteWorksheetPicture', function() {
    it('should call cellsPicturesDeleteWorksheetPicture successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsPictures_DeleteWorksheetPictureRequest();
          req.name = filename;
          req.sheetName = "Sheet6";
          req.pictureIndex = 0;
          req.folder = "Temp";
          
          return cellsApi.cellsPicturesDeleteWorksheetPicture(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPicturesDeleteWorksheetPictures', function() {
    it('should call cellsPicturesDeleteWorksheetPictures successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsPictures_DeleteWorksheetPicturesRequest();
          req.name = filename;
          req.sheetName = "Sheet6";
          req.folder = "Temp";
          
          return cellsApi.cellsPicturesDeleteWorksheetPictures(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPicturesGetWorksheetPicture', function() {
    it('should call cellsPicturesGetWorksheetPicture successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsPictures_GetWorksheetPictureRequest();
          req.name = filename;
          req.sheetName = "Sheet6";
          req.pictureIndex = 0;
          req.folder = "Temp";
          
          return cellsApi.cellsPicturesGetWorksheetPicture(req)
            .then((result) => {
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPicturesGetWorksheetPictureFormat', function() {
    it('should call cellsPicturesGetWorksheetPictureFormat successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsPictures_GetWorksheetPictureRequest();
          req.name = filename;
          req.sheetName = "Sheet6";
          req.pictureIndex = 0;
          req.folder = "Temp";
          req.format = "png";
          
          return cellsApi.cellsPicturesGetWorksheetPicture(req)
            .then((result) => {
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPicturesGetWorksheetPictures', function() {
    it('should call cellsPicturesGetWorksheetPictures successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsPictures_GetWorksheetPicturesRequest();
          req.name = filename;
          req.sheetName = "Sheet6";
          req.folder = "Temp";
          
          return cellsApi.cellsPicturesGetWorksheetPictures(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPicturesPostWorksheetPicture', function() {
    it('should call cellsPicturesPostWorksheetPicture successfully', function() {
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var req = new model.CellsPictures_PostWorksheetPictureRequest();
          req.name = filename;
          req.sheetName = "Sheet6";
          req.pictureIndex = 0;
          req.picture = new model.Picture();
          req.picture.left = 10;
          req.folder = "Temp";
          
          return cellsApi.cellsPicturesPostWorksheetPicture(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPicturesPutWorksheetAddPicture', function() {
    it('should call cellsPicturesPutWorksheetAddPicture successfully', function() {
      const picturePath = "WaterMark.png";
      const cellsApi = BaseTest.initializeCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.UploadFileRequest();
      req.path = "Temp/" + filename;
      req.file = data;
  
      return cellsApi.uploadFile(req)
        .then((result) => {
          expect(result.body.uploaded.length).greaterThan(0);
          var data =fs.createReadStream(localPath  + picturePath);
          var req = new model.UploadFileRequest();
          req.path = "Temp/" + picturePath;
          req.file = data;
      
          return cellsApi.uploadFile(req)
            .then(() => { 
          var req = new model.CellsPictures_PutWorksheetAddPictureRequest();
          req.name = filename;
          req.sheetName = "Sheet6";
          req.picture = null;
          req.upperLeftRow = 1;
          req.upperLeftColumn = 1;
          req.lowerRightRow = 10;
          req.lowerRightColumn = 10;
          req.picturePath = "WaterMark.png";
          req.folder = "Temp";
          
          return cellsApi.cellsPicturesPutWorksheetAddPicture(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
});
});