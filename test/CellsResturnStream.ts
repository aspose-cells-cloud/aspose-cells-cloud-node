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

describe('Cells sdk for NodeJS test ok.', function() {
  it('should call cellsWorkbookPutConvertWorkbook successfully', function() {
    const cellsApi = BaseTest.initializeCellsApi();
    const filename = "Book1.xlsx";
    
    var req = new model.CellsWorkbook_PutConvertWorkbookRequest({
      file : fs.createReadStream(localPath  + filename),
      format : "pdf",
    });

    return cellsApi.cellsWorkbookPutConvertWorkbook(req)
      .then((result) => {         
        // console.log(result);
        fs.writeFile('test.pdf',result['body'],'binary', err => {
          if (err) {
            console.error(err);
          }
        })     ;        
      });
  });
  it('should call down file successfully', function() {
    const cellsApi = BaseTest.initializeCellsApi();
    const filename = "Book1.xlsx";
    
    var req = new model.DownloadFileRequest({
      path:'CellsTests/Book1.xlsx',
      storageName:'Cells',
    });

    return cellsApi.downloadFile(req)
      .then((result) => {         
        // console.log(result);
        fs.writeFile('Book1.xlsx',result['body'],'binary', err => {
          if (err) {
            console.error(err);
          }
        })     ;        
      });
  });
  it('should call down file successfully', function() {
    const cellsApi = BaseTest.initializeCellsApi();
    const filename = "Book1.xlsx";
    
    var req = new model.DownloadFileRequest({
      path:'CellsTests/Book1.xlsx',
      storageName:'Cells',
    });

    return cellsApi.downloadFile(req)
      .then((result) => {         
        // console.log(result);
        fs.writeFile('Book1.xlsx',result['body'],'binary', err => {
          if (err) {
            console.error(err);
          }
        })     ;        
      });
  });
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
            fs.writeFile('myDocument_Sheet3_chart0.png',result['body'],'binary', err => {
              if (err) {
                console.error(err);
              }
            })     ;
          });
      });
  });
  it('should call cellsAutoshapesGetWorksheetAutoshape successfully', function() {
    const cellsApi = BaseTest.initializeCellsApi();
    const filename = "myDocument.xlsx";
    var data =fs.createReadStream(localPath  + filename);
    var req = new model.UploadFileRequest();
    req.path = "Temp/" + filename;
    req.file = data;

    return cellsApi.uploadFile(req)
      .then((result) => {
        expect(result.body.uploaded.length).greaterThan(0);
        var req = new model.CellsAutoshapes_GetWorksheetAutoshapeRequest();
        req.name = filename;
        req.sheetName = "Sheet2";
        req.autoshapeNumber = 4;
        req.folder = "Temp";
        req.format ="png";
        
        return cellsApi.cellsAutoshapesGetWorksheetAutoshape(req)
          .then((result) => {
            expect(result.response.statusCode).to.equal(200);
            fs.writeFile('myDocument_Sheet2_autoshape4.png',result['body'],'binary', err => {
              if (err) {
                console.error(err);
              }
            })     ;
          });
      });
  });
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
        req.format = "png"
        return cellsApi.cellsOleObjectsGetWorksheetOleObject(req)
          .then((result) => {
            expect(result.response.statusCode).to.equal(200);
            fs.writeFile('Book1_Sheet6_ole0.png',result['body'],'binary', err => {
              if (err) {
                console.error(err);
              }
            })     ;
          });
      });
  });
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
        req.format = "xlsx";
        return cellsApi.cellsListObjectsGetWorksheetListObject(req)
          .then((result) => {
            expect(result.response.statusCode).to.equal(200);
            fs.writeFile('Book1_Sheet7_ListObject0.xlsx',result['body'],'binary', err => {
              if (err) {
                console.error(err);
              }
            });
          });
      });
  });
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
        req.format = "png";
        return cellsApi.cellsPicturesGetWorksheetPicture(req)
          .then((result) => {
            expect(result.response.statusCode).to.equal(200);
            fs.writeFile('Book1_Sheet6_Picture0.png',result['body'],'binary', err => {
              if (err) {
                console.error(err);
              }
            });
          });
      });
  });
  it('should call cellsWorkbookGetWorkbook successfully', function() {
    const cellsApi = BaseTest.initializeCellsApi();
    const filename = "Book1.xlsx";
    var data =fs.createReadStream(localPath  + filename);
    var req = new model.UploadFileRequest();
    req.path = "Temp/" + filename;
    req.file = data;

    return cellsApi.uploadFile(req)
      .then((result) => {
        expect(result.body.uploaded.length).greaterThan(0);
        var req = new model.CellsWorkbook_GetWorkbookRequest();
        req.name = filename;
        req.password = null;
        req.isAutoFit = true;
        req.folder = "Temp";
        req.format = "pdf";
        return cellsApi.cellsWorkbookGetWorkbook(req)
          .then((result) => {
            expect(result.response.statusCode).to.equal(200);
            fs.writeFile('Book1_1.pdf',result['body'],'binary', err => {
              if (err) {
                console.error(err);
              }
            });
          });
      });
  });
  it('should call cellsWorkbookPostWorkbookGetSmartMarkerResult successfully', function() {
    const cellsApi = BaseTest.initializeCellsApi();
    const filename = "Book1.xlsx";
    var data =fs.createReadStream(localPath  + filename);
    var req = new model.UploadFileRequest();
    req.path = "Temp/" + filename;
    req.file = data;

    return cellsApi.uploadFile(req)
      .then((result) => {
        expect(result.body.uploaded.length).greaterThan(0);
        var req = new model.CellsWorkbook_PostWorkbookGetSmartMarkerResultRequest();
        req.name = filename;
        req.xmlFile = "ReportData.xml";
        req.folder = "Temp";
        
        return cellsApi.cellsWorkbookPostWorkbookGetSmartMarkerResult(req)
          .then((result) => {
            expect(result.response.statusCode).to.equal(200);
            fs.writeFile('Book1_SmartMarker.xlsx',result['body'],'binary', err => {
              if (err) {
                console.error(err);
              }
            });
          });
      });
  });
  it('should call cellsWorksheetsGetWorksheet successfully', function() {
    const cellsApi = BaseTest.initializeCellsApi();
    const filename = "Book1.xlsx";
    var data =fs.createReadStream(localPath  + filename);
    var req = new model.UploadFileRequest();
    req.path = "Temp/" + filename;
    req.file = data;

    return cellsApi.uploadFile(req)
      .then((result) => {
        expect(result.body.uploaded.length).greaterThan(0);
        var req = new model.CellsWorksheets_GetWorksheetRequest();
        req.name = filename;
        req.sheetName = "Sheet1";
        req.verticalResolution = 100;
        req.horizontalResolution = 90;
        req.format = "png";
        req.folder = "Temp";
        req.format = "pdf";
        return cellsApi.cellsWorksheetsGetWorksheet(req)
          .then((result) => {
            expect(result.response.statusCode).to.equal(200);
            fs.writeFile('Book1_worksheet1.pdf',result['body'],'binary', err => {
              if (err) {
                console.error(err);
              }
            });
          });
      });
  });
});
