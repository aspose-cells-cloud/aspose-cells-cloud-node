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

describe('CellsPicturesApi', function() {
  this.timeout(20000);
  describe('cellsPicturesDeleteWorksheetPicture', function() {
    it('should call cellsPicturesDeleteWorksheetPicture successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsPicturesApi = BaseTest.initializeCellsPicturesApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsPictures_DeleteWorksheetPictureRequest();
          req.name = filename;
          req.sheetName = "Sheet6";
          req.pictureIndex = 0;
          req.folder = "Temp";
          
          return cellsPicturesApi.cellsPicturesDeleteWorksheetPicture(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPicturesDeleteWorksheetPictures', function() {
    it('should call cellsPicturesDeleteWorksheetPictures successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsPicturesApi = BaseTest.initializeCellsPicturesApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsPictures_DeleteWorksheetPicturesRequest();
          req.name = filename;
          req.sheetName = "Sheet6";
          req.folder = "Temp";
          
          return cellsPicturesApi.cellsPicturesDeleteWorksheetPictures(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPicturesGetWorksheetPicture', function() {
    it('should call cellsPicturesGetWorksheetPicture successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsPicturesApi = BaseTest.initializeCellsPicturesApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsPictures_GetWorksheetPictureRequest();
          req.name = filename;
          req.sheetName = "Sheet6";
          req.pictureIndex = 0;
          req.folder = "Temp";
          
          return cellsPicturesApi.cellsPicturesGetWorksheetPicture(req)
            .then((result) => {
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPicturesGetWorksheetPictureFormat', function() {
    it('should call cellsPicturesGetWorksheetPictureFormat successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsPicturesApi = BaseTest.initializeCellsPicturesApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsPictures_GetWorksheetPictureRequest();
          req.name = filename;
          req.sheetName = "Sheet6";
          req.pictureIndex = 0;
          req.folder = "Temp";
          req.format = "png";
          
          return cellsPicturesApi.cellsPicturesGetWorksheetPicture(req)
            .then((result) => {
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPicturesGetWorksheetPictures', function() {
    it('should call cellsPicturesGetWorksheetPictures successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsPicturesApi = BaseTest.initializeCellsPicturesApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsPictures_GetWorksheetPicturesRequest();
          req.name = filename;
          req.sheetName = "Sheet6";
          req.folder = "Temp";
          
          return cellsPicturesApi.cellsPicturesGetWorksheetPictures(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPicturesPostWorksheetPicture', function() {
    it('should call cellsPicturesPostWorksheetPicture successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsPicturesApi = BaseTest.initializeCellsPicturesApi();
      const filename = "Book1.xlsx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.CellsPictures_PostWorksheetPictureRequest();
          req.name = filename;
          req.sheetName = "Sheet6";
          req.pictureIndex = 0;
          req.picture = new model.Picture();
          req.picture.left = 10;
          req.folder = "Temp";
          
          return cellsPicturesApi.cellsPicturesPostWorksheetPicture(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('cellsPicturesPutWorksheetAddPicture', function() {
    it('should call cellsPicturesPutWorksheetAddPicture successfully', function() {
      const storageApi = BaseTest.initializeStorageApi();
      const cellsPicturesApi = BaseTest.initializeCellsPicturesApi();
      const filename = "Book1.xlsx";
      const picturePath = "WaterMark.png";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
        storageApi.PutCreate("Temp/" + picturePath, null, null, localPath + picturePath, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
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
          
          return cellsPicturesApi.cellsPicturesPutWorksheetAddPicture(req)
            .then((result) => {
              expect(result.body.code).to.equal(200);
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
});