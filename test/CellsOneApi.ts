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
describe('cellsShapesPutWorksheetShape', function() {
  it('should call cellsShapesPutWorksheetShape successfully', function() {
    const cellsApi = BaseTest.initializeCellsApi();
    const filename = "Book1.xlsx";
    var data =fs.createReadStream(localPath  + filename);
    var req = new model.UploadFileRequest();
    req.path = "Temp/" + filename;
    req.file = data;

    return cellsApi.uploadFile(req)
      .then((result) => {
        expect(result.body.uploaded.length).greaterThan(0);
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
// describe('cellsWorkbookPutConvertWorkbook', function() {
//   it('should call cellsWorkbookPutConvertWorkbook successfully', function() {
//     const cellsApi = BaseTest.initializeCellsApi();
//     const filename = "Book1.xlsx";
//     // var data =fs.createReadStream(localPath  + filename);
//     var req = new model.CellsWorkbook_PutConvertWorkbookRequest({
//       workbook : fs.createReadStream(localPath  + filename),
//       format : "pdf",
//     });

//     return cellsApi.cellsWorkbookPutConvertWorkbook(req)
//       .then(() => {
//         var req = new model.CellsWorkbook_PutConvertWorkbookRequest({
//           workbook : fs.createReadStream(localPath  + filename),
//           format : "pdf",
//         });

//         return cellsApi.cellsWorkbookPutConvertWorkbook(req)
//           .then((result) => {
//             expect(result.body.toString().length).to.greaterThan(0);
//           });
//       });
//   });
// });


// describe('cellsSaveAsPostDocumentSaveAs 1', function() {
//   it('should call cellsSaveAsPostDocumentSaveAs successfully', function() {
//     const cellsApi = BaseTest.initializeCellsApi();
//     const filename = "Book1.xlsx";
//     var data =fs.createReadStream(localPath  + filename);
//     var req = new model.UploadFileRequest();
//     req.path = "Temp/" + filename;
//     req.file = data;

//     return cellsApi.uploadFile(req)
//       .then(() => {
//         var req = new model.CellsSaveAs_PostDocumentSaveAsRequest();
//         req.name = filename;
//         req.saveOptions = new model.OoxmlSaveOptions();
//         req.newfilename = "newbook1.xlsx";
//         req.isAutoFitRows = true;
//         req.isAutoFitColumns = true;
//         req.folder = "Temp";
        
//         return cellsApi.cellsSaveAsPostDocumentSaveAs(req)
//           .then((result) => {
//             expect(result.body.code).to.equal(200);
//             expect(result.response.statusCode).to.equal(200);
//           });
//       });
//   });
// });  

// describe('cellsOleObjectsPutWorksheetOleObject', function() {
//   it('should call cellsOleObjectsPutWorksheetOleObject successfully', function() {

//     const filename = "Book1.xlsx";
//     const filename1 = "OLEDoc.docx";
//     const filename2 = "word.jpg";
//     const cellsApi = BaseTest.initializeCellsApi();
//     var data =fs.createReadStream(localPath  + filename);
//     var req = new model.UploadFileRequest();
//     req.path = "Temp/" + filename;
//     req.file = data;

//     return cellsApi.uploadFile(req)
//       .then(() => {
//         const filename1 = "word.jpg";
//         const cellsApi = BaseTest.initializeCellsApi();
//         var data =fs.createReadStream(localPath  + filename1);
//         var req = new model.UploadFileRequest();
//         req.path = "Temp/" + filename1;
//         req.file = data;
    
//         return cellsApi.uploadFile(req)
//           .then(() => {
//             const filename2 = "OLEDoc.docx";
//             const cellsApi = BaseTest.initializeCellsApi();
//             var data =fs.createReadStream(localPath  + filename2);
//             var req = new model.UploadFileRequest();
//             req.path = "Temp/" + filename2;
//             req.file = data;
        
//             return cellsApi.uploadFile(req)
//               .then(() => {                        
//         var req = new model.CellsOleObjects_PutWorksheetOleObjectRequest();
//         req.name = filename;
//         req.sheetName = "Sheet6";
//         req.folder = "Temp";
//         req.oleObject = null;
//         req.upperLeftRow = 1;
//         req.upperLeftColumn = 1;
//         req.height = 100;
//         req.width = 80;
//         req.oleFile = filename1;
//         req.imageFile = filename2;
        
//         return cellsApi.cellsOleObjectsPutWorksheetOleObject(req)
//           .then((result) => {
//             expect(result.body.code).to.equal(200);
//             expect(result.response.statusCode).to.equal(200);
//           });
//       });
//   });
// });
// });
// });



// describe('cellsChartsGetWorksheetChartTitle', function() {
//   it('should call cellsChartsGetWorksheetChartTitle successfully', function() {
//     const cellsApi = BaseTest.initializeCellsApi();
//     const filename = "Book1.xlsx";
//     var data =fs.createReadStream(localPath  + filename);
//     var req = new model.UploadFileRequest();
//     req.path = "Temp/" + filename;
//     req.file = data;

//     return cellsApi.uploadFile(req)
//       .then(() => {
//         var req = new model.CellsCharts_GetWorksheetChartTitleRequest();
//         req.name = filename;
//         req.sheetName = "Sheet4";
//         req.chartIndex = 0;
//         req.folder = "Temp";
        
//         return cellsApi.cellsChartsGetWorksheetChartTitle(req)
//           .then((result) => {
//             expect(result.body.code).to.equal(200);
//             expect(result.response.statusCode).to.equal(200);
//           });
//       });
//   });
// });


// describe('CellsWorkbookApi', function() {
//   this.timeout(20000);
//   describe('cellsWorkbookPutConvertWorkbook', function() {
//     it('should call cellsWorkbookPutConvertWorkbook successfully', function() {
//       const cellsApi = BaseTest.initializeCellsApi();
//       const filename = "Book1.xlsx";
//       var req = new model.UploadFileRequest();
//       req.path = "Temp/" + filename;
//       req.file = fs.readFileSync(localPath  + filename);
//       return new Promise((resolve) => {
//         cellsApi.uploadFile(req);
//         resolve();
//       })
//         .then(() => {
//           // var req = new model.CellsWorkbook_PutConvertWorkbookRequest();
//           // req.workbook = fs.readFileSync(localPath  + filename);
//           // req.format = "pdf";
//           var req = new model.CellsWorkbook_PutConvertWorkbookRequest({
//             workbook : fs.readFileSync(localPath  + filename),
//             format : "pdf",
//           });

//           return cellsApi.cellsWorkbookPutConvertWorkbook(req)
//             .then((result) => {
//               expect(result.body.toString().length).to.greaterThan(0);
//             });
//         });
//     });
//   });
// });