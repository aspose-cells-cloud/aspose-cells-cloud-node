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
describe('CellsMetadataApi', function() {
  this.timeout(200000);
  describe('deleteMetadata', function() {
    it('should call deleteMetadata successfully', function() {
      const cellsApi = BaseTest.initializeLiteCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.DeleteMetadataRequest();
      req.file = {filename :data };

      return cellsApi.deleteMetadata(req)
        .then((result) => {
          expect(result.response.statusCode).to.equal(200);
        });
    });
  });

  describe('getMetadata', function() {
    it('should call getMetadata successfully', function() {
      const cellsApi = BaseTest.initializeLiteCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.GetMetadataRequest();
      req.file = {filename:data };

  
      return cellsApi.getMetadata(req)
        .then((result) => {
          expect(result.response.statusCode).to.equal(200);
        });
    });
  });
  
  describe('updateMetadata', function() {
    it('should call updatreetadata successfully', function() {
      const cellsApi = BaseTest.initializeLiteCellsApi();
      const filename = "Book1.xlsx";
      var data =fs.createReadStream(localPath  + filename);
      var req = new model.PostMetadataRequest();
      req.file = {filename : data };
      var documentProperty =new  model.CellsDocumentProperty();
      documentProperty.name = 'test';
      documentProperty.value = 'test';
      req.documentProperties = new Array<model.CellsDocumentProperty>();
      req.documentProperties.push(documentProperty);

      return cellsApi.postMetadata(req)
        .then((result) => {
          expect(result.response.statusCode).to.equal(200);
        });
    });
  });
});
