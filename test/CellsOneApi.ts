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
const localPath = "../TestData/";

describe('Cells sdk for NodeJS test ok.', function() {
  it('should call cellsWorksheetsDeleteWorksheets successfully', function() {
    const cellsApi = BaseTest.initializeCellsApi();
    const filename = "Book1.xlsx";
    var data =fs.createReadStream(localPath  + filename);
    var req = new model.UploadFileRequest();
    req.path = "Temp/" + filename;
    req.file = data;

    return cellsApi.uploadFile(req)
      .then((result) => {
        expect(result.body.uploaded.length).greaterThan(0);
        var req = new model.CellsWorksheets_DeleteWorksheetsRequest();
        req.name = filename;
        req.matchCondition = new model.MatchConditionRequest();
        req.matchCondition.fullMatchConditions =new Array<string>() ; 
        req.matchCondition.fullMatchConditions.push("Sheet1");
        req.matchCondition.fullMatchConditions.push("Sheet2");
        req.folder = "Temp";
        
        return cellsApi.cellsWorksheetsDeleteWorksheets(req)
          .then((result) => {
            // expect(result.response.statusCode).to.equal(200);
            expect(result.body.toString().length).to.greaterThan(0);
          });
      });
  });
  // it('should call cellsWorkbookPutConvertWorkbook successfully', function() {
  //   const cellsApi = BaseTest.initializeCellsApi();
  //   const filename = "Book1.xlsx";
    
  //   var req = new model.CellsWorkbook_PutConvertWorkbookRequest({
  //     file : fs.createReadStream(localPath  + filename),
  //     format : "pdf",
  //   });

  //   return cellsApi.cellsWorkbookPutConvertWorkbook(req)
  //     .then((result) => {         
  //       // console.log(result);
  //       fs.writeFile('test.pdf',result['body'],'binary', err => {
  //         if (err) {
  //           console.error(err);
  //         }
  //       });        
  //     });
  // });
  // it('should call down file successfully', function() {
  //   const cellsApi = BaseTest.initializeCellsApi();
  //   const filename = "Book1.xlsx";
    
  //   var req = new model.DownloadFileRequest({
  //     path:'CellsTests/Book1.xlsx',
  //     storageName:'Cells',
  //   });

  //   return cellsApi.downloadFile(req)
  //     .then((result) => {         
  //       // console.log(result);
  //       fs.writeFile('Book1.xlsx',result['body'],'binary', err => {
  //         if (err) {
  //           console.error(err);
  //         }
  //       })     ;        
  //     });
  // });
});
