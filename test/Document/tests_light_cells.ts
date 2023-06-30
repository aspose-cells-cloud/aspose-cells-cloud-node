import { expect } from "chai";
import "mocha";

import * as model from "../../src/model/model";
import * as api from "../../src/api";
const clientId = process.env.CellsCloudClientId;
const clientSecret = process.env.CellsCloudClientSecret;
const ApiURL = process.env.CellsCloudApiBaseUrl;

const localPath = "TestData/";

var fs = require('fs');
var path = require('path');
var assert = require('assert');


describe('LightCells test', function() {
    this.timeout(200000);
    const cellsApi = new api.CellsApi(clientId, clientSecret,"v3.0",ApiURL);

    describe('post_split_csv test', function(){
      it("should call PostSplit successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "csv"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostSplitRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_split_xls test', function(){
      it("should call PostSplit successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "xls"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostSplitRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_split_html test', function(){
      it("should call PostSplit successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "html"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostSplitRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_split_mhtml test', function(){
      it("should call PostSplit successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "mhtml"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostSplitRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_split_ods test', function(){
      it("should call PostSplit successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "ods"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostSplitRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_split_pdf test', function(){
      it("should call PostSplit successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "pdf"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostSplitRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_split_xml test', function(){
      it("should call PostSplit successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "xml"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostSplitRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_split_txt test', function(){
      it("should call PostSplit successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "txt"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostSplitRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_split_tif test', function(){
      it("should call PostSplit successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "tif"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostSplitRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_split_xlsb test', function(){
      it("should call PostSplit successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "xlsb"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostSplitRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_split_xlsm test', function(){
      it("should call PostSplit successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "xlsm"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostSplitRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_split_xlsx test', function(){
      it("should call PostSplit successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "xlsx"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostSplitRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_split_xltm test', function(){
      it("should call PostSplit successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "xltm"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostSplitRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_split_xltx test', function(){
      it("should call PostSplit successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "xltx"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostSplitRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_split_xps test', function(){
      it("should call PostSplit successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "xps"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostSplitRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_split_png test', function(){
      it("should call PostSplit successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "png"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostSplitRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_split_jpg test', function(){
      it("should call PostSplit successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "jpg"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostSplitRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_split_gif test', function(){
      it("should call PostSplit successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "gif"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostSplitRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_split_emf test', function(){
      it("should call PostSplit successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "emf"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostSplitRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_split_bmp test', function(){
      it("should call PostSplit successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "bmp"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostSplitRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_split_md test', function(){
      it("should call PostSplit successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "md"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostSplitRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_split_numbers test', function(){
      it("should call PostSplit successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "numbers"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostSplitRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_split_wmf test', function(){
      it("should call PostSplit successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "wmf"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostSplitRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_split_svg test', function(){
      it("should call PostSplit successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "svg"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostSplitRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_split_docx test', function(){
      it("should call PostSplit successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "docx"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostSplitRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_split_pptx test', function(){
      it("should call PostSplit successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "pptx"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostSplitRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_split_json test', function(){
      it("should call PostSplit successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "json"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostSplitRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_split_sql test', function(){
      it("should call PostSplit successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "sql"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostSplitRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_assemble_csv test', function(){
      it("should call PostAssemble successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "csv"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostAssembleRequest();
        request.file =  mapFiles;
        request.datasource =  "ds";
        request.format =  format;
        return cellsApi.postAssemble(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_assemble_xls test', function(){
      it("should call PostAssemble successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "xls"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostAssembleRequest();
        request.file =  mapFiles;
        request.datasource =  "ds";
        request.format =  format;
        return cellsApi.postAssemble(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_assemble_html test', function(){
      it("should call PostAssemble successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "html"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostAssembleRequest();
        request.file =  mapFiles;
        request.datasource =  "ds";
        request.format =  format;
        return cellsApi.postAssemble(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_assemble_mhtml test', function(){
      it("should call PostAssemble successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "mhtml"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostAssembleRequest();
        request.file =  mapFiles;
        request.datasource =  "ds";
        request.format =  format;
        return cellsApi.postAssemble(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_assemble_ods test', function(){
      it("should call PostAssemble successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "ods"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostAssembleRequest();
        request.file =  mapFiles;
        request.datasource =  "ds";
        request.format =  format;
        return cellsApi.postAssemble(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_assemble_pdf test', function(){
      it("should call PostAssemble successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "pdf"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostAssembleRequest();
        request.file =  mapFiles;
        request.datasource =  "ds";
        request.format =  format;
        return cellsApi.postAssemble(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_assemble_xml test', function(){
      it("should call PostAssemble successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "xml"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostAssembleRequest();
        request.file =  mapFiles;
        request.datasource =  "ds";
        request.format =  format;
        return cellsApi.postAssemble(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_assemble_txt test', function(){
      it("should call PostAssemble successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "txt"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostAssembleRequest();
        request.file =  mapFiles;
        request.datasource =  "ds";
        request.format =  format;
        return cellsApi.postAssemble(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_assemble_tif test', function(){
      it("should call PostAssemble successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "tif"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostAssembleRequest();
        request.file =  mapFiles;
        request.datasource =  "ds";
        request.format =  format;
        return cellsApi.postAssemble(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_assemble_xlsb test', function(){
      it("should call PostAssemble successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "xlsb"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostAssembleRequest();
        request.file =  mapFiles;
        request.datasource =  "ds";
        request.format =  format;
        return cellsApi.postAssemble(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_assemble_xlsm test', function(){
      it("should call PostAssemble successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "xlsm"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostAssembleRequest();
        request.file =  mapFiles;
        request.datasource =  "ds";
        request.format =  format;
        return cellsApi.postAssemble(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_assemble_xlsx test', function(){
      it("should call PostAssemble successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "xlsx"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostAssembleRequest();
        request.file =  mapFiles;
        request.datasource =  "ds";
        request.format =  format;
        return cellsApi.postAssemble(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_assemble_xltm test', function(){
      it("should call PostAssemble successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "xltm"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostAssembleRequest();
        request.file =  mapFiles;
        request.datasource =  "ds";
        request.format =  format;
        return cellsApi.postAssemble(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_assemble_xltx test', function(){
      it("should call PostAssemble successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "xltx"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostAssembleRequest();
        request.file =  mapFiles;
        request.datasource =  "ds";
        request.format =  format;
        return cellsApi.postAssemble(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_assemble_xps test', function(){
      it("should call PostAssemble successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "xps"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostAssembleRequest();
        request.file =  mapFiles;
        request.datasource =  "ds";
        request.format =  format;
        return cellsApi.postAssemble(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_assemble_png test', function(){
      it("should call PostAssemble successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "png"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostAssembleRequest();
        request.file =  mapFiles;
        request.datasource =  "ds";
        request.format =  format;
        return cellsApi.postAssemble(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_assemble_jpg test', function(){
      it("should call PostAssemble successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "jpg"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostAssembleRequest();
        request.file =  mapFiles;
        request.datasource =  "ds";
        request.format =  format;
        return cellsApi.postAssemble(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_assemble_gif test', function(){
      it("should call PostAssemble successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "gif"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostAssembleRequest();
        request.file =  mapFiles;
        request.datasource =  "ds";
        request.format =  format;
        return cellsApi.postAssemble(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_assemble_emf test', function(){
      it("should call PostAssemble successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "emf"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostAssembleRequest();
        request.file =  mapFiles;
        request.datasource =  "ds";
        request.format =  format;
        return cellsApi.postAssemble(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_assemble_bmp test', function(){
      it("should call PostAssemble successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "bmp"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostAssembleRequest();
        request.file =  mapFiles;
        request.datasource =  "ds";
        request.format =  format;
        return cellsApi.postAssemble(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_assemble_md test', function(){
      it("should call PostAssemble successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "md"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostAssembleRequest();
        request.file =  mapFiles;
        request.datasource =  "ds";
        request.format =  format;
        return cellsApi.postAssemble(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_assemble_numbers test', function(){
      it("should call PostAssemble successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "numbers"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostAssembleRequest();
        request.file =  mapFiles;
        request.datasource =  "ds";
        request.format =  format;
        return cellsApi.postAssemble(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_assemble_wmf test', function(){
      it("should call PostAssemble successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "wmf"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostAssembleRequest();
        request.file =  mapFiles;
        request.datasource =  "ds";
        request.format =  format;
        return cellsApi.postAssemble(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_assemble_svg test', function(){
      it("should call PostAssemble successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "svg"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostAssembleRequest();
        request.file =  mapFiles;
        request.datasource =  "ds";
        request.format =  format;
        return cellsApi.postAssemble(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_assemble_docx test', function(){
      it("should call PostAssemble successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "docx"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostAssembleRequest();
        request.file =  mapFiles;
        request.datasource =  "ds";
        request.format =  format;
        return cellsApi.postAssemble(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_assemble_pptx test', function(){
      it("should call PostAssemble successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "pptx"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostAssembleRequest();
        request.file =  mapFiles;
        request.datasource =  "ds";
        request.format =  format;
        return cellsApi.postAssemble(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_assemble_json test', function(){
      it("should call PostAssemble successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "json"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostAssembleRequest();
        request.file =  mapFiles;
        request.datasource =  "ds";
        request.format =  format;
        return cellsApi.postAssemble(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_assemble_sql test', function(){
      it("should call PostAssemble successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "sql"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostAssembleRequest();
        request.file =  mapFiles;
        request.datasource =  "ds";
        request.format =  format;
        return cellsApi.postAssemble(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_csv_workbook test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "csv"
        var objectType = "workbook"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_xls_workbook test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "xls"
        var objectType = "workbook"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_html_workbook test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "html"
        var objectType = "workbook"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_mhtml_workbook test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "mhtml"
        var objectType = "workbook"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_ods_workbook test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "ods"
        var objectType = "workbook"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_pdf_workbook test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "pdf"
        var objectType = "workbook"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_xml_workbook test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "xml"
        var objectType = "workbook"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_txt_workbook test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "txt"
        var objectType = "workbook"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_tif_workbook test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "tif"
        var objectType = "workbook"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_xlsb_workbook test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "xlsb"
        var objectType = "workbook"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_xlsm_workbook test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "xlsm"
        var objectType = "workbook"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_xlsx_workbook test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "xlsx"
        var objectType = "workbook"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_xltm_workbook test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "xltm"
        var objectType = "workbook"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_xltx_workbook test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "xltx"
        var objectType = "workbook"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_xps_workbook test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "xps"
        var objectType = "workbook"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_png_workbook test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "png"
        var objectType = "workbook"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_jpg_workbook test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "jpg"
        var objectType = "workbook"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_gif_workbook test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "gif"
        var objectType = "workbook"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_emf_workbook test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "emf"
        var objectType = "workbook"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_bmp_workbook test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "bmp"
        var objectType = "workbook"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_md_workbook test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "md"
        var objectType = "workbook"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_numbers_workbook test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "numbers"
        var objectType = "workbook"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_wmf_workbook test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "wmf"
        var objectType = "workbook"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_svg_workbook test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "svg"
        var objectType = "workbook"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_docx_workbook test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "docx"
        var objectType = "workbook"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_pptx_workbook test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "pptx"
        var objectType = "workbook"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_json_workbook test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "json"
        var objectType = "workbook"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_sql_workbook test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "sql"
        var objectType = "workbook"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_csv_worksheet test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "csv"
        var objectType = "worksheet"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_xls_worksheet test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "xls"
        var objectType = "worksheet"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_html_worksheet test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "html"
        var objectType = "worksheet"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_mhtml_worksheet test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "mhtml"
        var objectType = "worksheet"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_ods_worksheet test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "ods"
        var objectType = "worksheet"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_pdf_worksheet test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "pdf"
        var objectType = "worksheet"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_xml_worksheet test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "xml"
        var objectType = "worksheet"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_txt_worksheet test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "txt"
        var objectType = "worksheet"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_tif_worksheet test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "tif"
        var objectType = "worksheet"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_xlsb_worksheet test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "xlsb"
        var objectType = "worksheet"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_xlsm_worksheet test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "xlsm"
        var objectType = "worksheet"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_xlsx_worksheet test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "xlsx"
        var objectType = "worksheet"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_xltm_worksheet test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "xltm"
        var objectType = "worksheet"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_xltx_worksheet test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "xltx"
        var objectType = "worksheet"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_xps_worksheet test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "xps"
        var objectType = "worksheet"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_png_worksheet test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "png"
        var objectType = "worksheet"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_jpg_worksheet test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "jpg"
        var objectType = "worksheet"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_gif_worksheet test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "gif"
        var objectType = "worksheet"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_emf_worksheet test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "emf"
        var objectType = "worksheet"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_bmp_worksheet test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "bmp"
        var objectType = "worksheet"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_md_worksheet test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "md"
        var objectType = "worksheet"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_numbers_worksheet test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "numbers"
        var objectType = "worksheet"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_wmf_worksheet test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "wmf"
        var objectType = "worksheet"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_svg_worksheet test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "svg"
        var objectType = "worksheet"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_docx_worksheet test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "docx"
        var objectType = "worksheet"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_pptx_worksheet test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "pptx"
        var objectType = "worksheet"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_json_worksheet test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "json"
        var objectType = "worksheet"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_sql_worksheet test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "sql"
        var objectType = "worksheet"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_pdf_chart test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "pdf"
        var objectType = "chart"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_tif_chart test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "tif"
        var objectType = "chart"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_png_chart test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "png"
        var objectType = "chart"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_jpg_chart test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "jpg"
        var objectType = "chart"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_gif_chart test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "gif"
        var objectType = "chart"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_emf_chart test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "emf"
        var objectType = "chart"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_bmp_chart test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "bmp"
        var objectType = "chart"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_png_picture test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "png"
        var objectType = "picture"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_jpg_picture test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "jpg"
        var objectType = "picture"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_gif_picture test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "gif"
        var objectType = "picture"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_emf_picture test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "emf"
        var objectType = "picture"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_bmp_picture test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "bmp"
        var objectType = "picture"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_csv_listobject test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "csv"
        var objectType = "listobject"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_xls_listobject test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "xls"
        var objectType = "listobject"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_html_listobject test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "html"
        var objectType = "listobject"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_mhtml_listobject test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "mhtml"
        var objectType = "listobject"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_ods_listobject test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "ods"
        var objectType = "listobject"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_pdf_listobject test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "pdf"
        var objectType = "listobject"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_xml_listobject test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "xml"
        var objectType = "listobject"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_txt_listobject test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "txt"
        var objectType = "listobject"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_tif_listobject test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "tif"
        var objectType = "listobject"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_xlsb_listobject test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "xlsb"
        var objectType = "listobject"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_xlsm_listobject test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "xlsm"
        var objectType = "listobject"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_xlsx_listobject test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "xlsx"
        var objectType = "listobject"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_xltm_listobject test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "xltm"
        var objectType = "listobject"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_xltx_listobject test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "xltx"
        var objectType = "listobject"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_xps_listobject test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "xps"
        var objectType = "listobject"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_png_listobject test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "png"
        var objectType = "listobject"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_jpg_listobject test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "jpg"
        var objectType = "listobject"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_gif_listobject test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "gif"
        var objectType = "listobject"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_emf_listobject test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "emf"
        var objectType = "listobject"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_bmp_listobject test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "bmp"
        var objectType = "listobject"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_md_listobject test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "md"
        var objectType = "listobject"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_numbers_listobject test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "numbers"
        var objectType = "listobject"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_wmf_listobject test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "wmf"
        var objectType = "listobject"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_svg_listobject test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "svg"
        var objectType = "listobject"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_docx_listobject test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "docx"
        var objectType = "listobject"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_pptx_listobject test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "pptx"
        var objectType = "listobject"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_json_listobject test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "json"
        var objectType = "listobject"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_sql_listobject test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "sql"
        var objectType = "listobject"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_png_oleobject test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "png"
        var objectType = "oleobject"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_jpg_oleobject test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "jpg"
        var objectType = "oleobject"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_gif_oleobject test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "gif"
        var objectType = "oleobject"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_emf_oleobject test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "emf"
        var objectType = "oleobject"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_bmp_oleobject test', function(){
      it("should call PostExport successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var book1Xlsx = "Book1.xlsx"

     
        var format = "bmp"
        var objectType = "oleobject"

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostExportRequest();
        request.file =  mapFiles;
        request.objectType =  objectType;
        request.format =  format;
        return cellsApi.postExport(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_compress_50 test', function(){
      it("should call PostCompress successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var compressLevel = 50

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostCompressRequest();
        request.file =  mapFiles;
        request.compressLevel =  compressLevel;
        return cellsApi.postCompress(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_compress_90 test', function(){
      it("should call PostCompress successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var compressLevel = 90

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostCompressRequest();
        request.file =  mapFiles;
        request.compressLevel =  compressLevel;
        return cellsApi.postCompress(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_merge_csv_true test', function(){
      it("should call PostMerge successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "csv"
        var mergeToOneSheet = true

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostMergeRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.mergeToOneSheet =  mergeToOneSheet;
        return cellsApi.postMerge(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_merge_xls_true test', function(){
      it("should call PostMerge successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "xls"
        var mergeToOneSheet = true

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostMergeRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.mergeToOneSheet =  mergeToOneSheet;
        return cellsApi.postMerge(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_merge_html_true test', function(){
      it("should call PostMerge successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "html"
        var mergeToOneSheet = true

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostMergeRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.mergeToOneSheet =  mergeToOneSheet;
        return cellsApi.postMerge(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_merge_mhtml_true test', function(){
      it("should call PostMerge successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "mhtml"
        var mergeToOneSheet = true

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostMergeRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.mergeToOneSheet =  mergeToOneSheet;
        return cellsApi.postMerge(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_merge_ods_true test', function(){
      it("should call PostMerge successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "ods"
        var mergeToOneSheet = true

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostMergeRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.mergeToOneSheet =  mergeToOneSheet;
        return cellsApi.postMerge(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_merge_pdf_true test', function(){
      it("should call PostMerge successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "pdf"
        var mergeToOneSheet = true

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostMergeRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.mergeToOneSheet =  mergeToOneSheet;
        return cellsApi.postMerge(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_merge_xml_true test', function(){
      it("should call PostMerge successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "xml"
        var mergeToOneSheet = true

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostMergeRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.mergeToOneSheet =  mergeToOneSheet;
        return cellsApi.postMerge(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_merge_txt_true test', function(){
      it("should call PostMerge successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "txt"
        var mergeToOneSheet = true

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostMergeRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.mergeToOneSheet =  mergeToOneSheet;
        return cellsApi.postMerge(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_merge_tif_true test', function(){
      it("should call PostMerge successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "tif"
        var mergeToOneSheet = true

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostMergeRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.mergeToOneSheet =  mergeToOneSheet;
        return cellsApi.postMerge(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_merge_xlsb_true test', function(){
      it("should call PostMerge successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "xlsb"
        var mergeToOneSheet = true

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostMergeRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.mergeToOneSheet =  mergeToOneSheet;
        return cellsApi.postMerge(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_merge_xlsm_true test', function(){
      it("should call PostMerge successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "xlsm"
        var mergeToOneSheet = true

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostMergeRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.mergeToOneSheet =  mergeToOneSheet;
        return cellsApi.postMerge(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_merge_xlsx_true test', function(){
      it("should call PostMerge successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "xlsx"
        var mergeToOneSheet = true

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostMergeRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.mergeToOneSheet =  mergeToOneSheet;
        return cellsApi.postMerge(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_merge_xltm_true test', function(){
      it("should call PostMerge successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "xltm"
        var mergeToOneSheet = true

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostMergeRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.mergeToOneSheet =  mergeToOneSheet;
        return cellsApi.postMerge(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_merge_xltx_true test', function(){
      it("should call PostMerge successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "xltx"
        var mergeToOneSheet = true

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostMergeRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.mergeToOneSheet =  mergeToOneSheet;
        return cellsApi.postMerge(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_merge_xps_true test', function(){
      it("should call PostMerge successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "xps"
        var mergeToOneSheet = true

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostMergeRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.mergeToOneSheet =  mergeToOneSheet;
        return cellsApi.postMerge(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_merge_png_true test', function(){
      it("should call PostMerge successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "png"
        var mergeToOneSheet = true

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostMergeRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.mergeToOneSheet =  mergeToOneSheet;
        return cellsApi.postMerge(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_merge_jpg_true test', function(){
      it("should call PostMerge successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "jpg"
        var mergeToOneSheet = true

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostMergeRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.mergeToOneSheet =  mergeToOneSheet;
        return cellsApi.postMerge(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_merge_gif_true test', function(){
      it("should call PostMerge successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "gif"
        var mergeToOneSheet = true

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostMergeRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.mergeToOneSheet =  mergeToOneSheet;
        return cellsApi.postMerge(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_merge_emf_true test', function(){
      it("should call PostMerge successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "emf"
        var mergeToOneSheet = true

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostMergeRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.mergeToOneSheet =  mergeToOneSheet;
        return cellsApi.postMerge(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_merge_bmp_true test', function(){
      it("should call PostMerge successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "bmp"
        var mergeToOneSheet = true

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostMergeRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.mergeToOneSheet =  mergeToOneSheet;
        return cellsApi.postMerge(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_merge_md_true test', function(){
      it("should call PostMerge successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "md"
        var mergeToOneSheet = true

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostMergeRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.mergeToOneSheet =  mergeToOneSheet;
        return cellsApi.postMerge(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_merge_numbers_true test', function(){
      it("should call PostMerge successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "numbers"
        var mergeToOneSheet = true

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostMergeRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.mergeToOneSheet =  mergeToOneSheet;
        return cellsApi.postMerge(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_merge_wmf_true test', function(){
      it("should call PostMerge successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "wmf"
        var mergeToOneSheet = true

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostMergeRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.mergeToOneSheet =  mergeToOneSheet;
        return cellsApi.postMerge(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_merge_svg_true test', function(){
      it("should call PostMerge successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "svg"
        var mergeToOneSheet = true

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostMergeRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.mergeToOneSheet =  mergeToOneSheet;
        return cellsApi.postMerge(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_merge_docx_false test', function(){
      it("should call PostMerge successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "docx"
        var mergeToOneSheet = false

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostMergeRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.mergeToOneSheet =  mergeToOneSheet;
        return cellsApi.postMerge(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_merge_pptx_false test', function(){
      it("should call PostMerge successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "pptx"
        var mergeToOneSheet = false

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostMergeRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.mergeToOneSheet =  mergeToOneSheet;
        return cellsApi.postMerge(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_merge_json_false test', function(){
      it("should call PostMerge successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "json"
        var mergeToOneSheet = false

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostMergeRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.mergeToOneSheet =  mergeToOneSheet;
        return cellsApi.postMerge(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_merge_sql_false test', function(){
      it("should call PostMerge successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var format = "sql"
        var mergeToOneSheet = false

        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostMergeRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.mergeToOneSheet =  mergeToOneSheet;
        return cellsApi.postMerge(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_unlock test', function(){
      it("should call PostUnlock successfully" , function(){
      
        var needUnlockXlsx = "needUnlock.xlsx"

     
        var mapFiles = {};           

         mapFiles[needUnlockXlsx]= fs.createReadStream(localPath  +needUnlockXlsx) ;

        var request = new model.PostUnlockRequest();
        request.file =  mapFiles;
        request.password =  "123456";
        return cellsApi.postUnlock(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_protect test', function(){
      it("should call PostProtect successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostProtectRequest();
        request.file =  mapFiles;
        request.password =  "123456";
        return cellsApi.postProtect(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_search test', function(){
      it("should call PostSearch successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostSearchRequest();
        request.file =  mapFiles;
        request.text =  "12";
        return cellsApi.postSearch(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_replace test', function(){
      it("should call PostReplace successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostReplaceRequest();
        request.file =  mapFiles;
        request.text =  "12";
        request.newtext =  "newtext";
        return cellsApi.postReplace(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_replace_only_sheetname test', function(){
      it("should call PostReplace successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostReplaceRequest();
        request.file =  mapFiles;
        request.text =  "12";
        request.newtext =  "newtext";
        request.sheetname =  "Sheet1";
        return cellsApi.postReplace(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_watermark test', function(){
      it("should call PostWatermark successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var mapFiles = {};           

         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostWatermarkRequest();
        request.file =  mapFiles;
        request.text =  "aspose.cells cloud sdk";
        request.color =  "#773322";
        return cellsApi.postWatermark(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_clear_objects_chart test', function(){
      it("should call PostClearObjects successfully" , function(){
      
        var book1Xlsx = "Book1.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var objecttype = "chart"

        var mapFiles = {};           

         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostClearObjectsRequest();
        request.file =  mapFiles;
        request.objecttype =  objecttype;
        return cellsApi.postClearObjects(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_clear_objects_comment test', function(){
      it("should call PostClearObjects successfully" , function(){
      
        var book1Xlsx = "Book1.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var objecttype = "comment"

        var mapFiles = {};           

         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostClearObjectsRequest();
        request.file =  mapFiles;
        request.objecttype =  objecttype;
        return cellsApi.postClearObjects(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_clear_objects_picture test', function(){
      it("should call PostClearObjects successfully" , function(){
      
        var book1Xlsx = "Book1.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var objecttype = "picture"

        var mapFiles = {};           

         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostClearObjectsRequest();
        request.file =  mapFiles;
        request.objecttype =  objecttype;
        return cellsApi.postClearObjects(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_clear_objects_shape test', function(){
      it("should call PostClearObjects successfully" , function(){
      
        var book1Xlsx = "Book1.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var objecttype = "shape"

        var mapFiles = {};           

         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostClearObjectsRequest();
        request.file =  mapFiles;
        request.objecttype =  objecttype;
        return cellsApi.postClearObjects(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_clear_objects_listobject test', function(){
      it("should call PostClearObjects successfully" , function(){
      
        var book1Xlsx = "Book1.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var objecttype = "listobject"

        var mapFiles = {};           

         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostClearObjectsRequest();
        request.file =  mapFiles;
        request.objecttype =  objecttype;
        return cellsApi.postClearObjects(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_clear_objects_hyperlink test', function(){
      it("should call PostClearObjects successfully" , function(){
      
        var book1Xlsx = "Book1.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var objecttype = "hyperlink"

        var mapFiles = {};           

         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostClearObjectsRequest();
        request.file =  mapFiles;
        request.objecttype =  objecttype;
        return cellsApi.postClearObjects(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_clear_objects_oleobject test', function(){
      it("should call PostClearObjects successfully" , function(){
      
        var book1Xlsx = "Book1.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var objecttype = "oleobject"

        var mapFiles = {};           

         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostClearObjectsRequest();
        request.file =  mapFiles;
        request.objecttype =  objecttype;
        return cellsApi.postClearObjects(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_clear_objects_pivottable test', function(){
      it("should call PostClearObjects successfully" , function(){
      
        var book1Xlsx = "Book1.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var objecttype = "pivottable"

        var mapFiles = {};           

         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostClearObjectsRequest();
        request.file =  mapFiles;
        request.objecttype =  objecttype;
        return cellsApi.postClearObjects(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_clear_objects_validation test', function(){
      it("should call PostClearObjects successfully" , function(){
      
        var book1Xlsx = "Book1.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var objecttype = "validation"

        var mapFiles = {};           

         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostClearObjectsRequest();
        request.file =  mapFiles;
        request.objecttype =  objecttype;
        return cellsApi.postClearObjects(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_clear_objects__background test', function(){
      it("should call PostClearObjects successfully" , function(){
      
        var book1Xlsx = "Book1.xlsx"
        var dataSourceXlsx = "datasource.xlsx"

     
        var objecttype = "Background"

        var mapFiles = {};           

         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostClearObjectsRequest();
        request.file =  mapFiles;
        request.objecttype =  objecttype;
        return cellsApi.postClearObjects(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_reverse_rows_pdf test', function(){
      it("should call PostReverse successfully" , function(){
      
        var book1Xlsx = "Book1.xlsx"

     
        var rotateType = "rows"
        var format = "pdf"

        var mapFiles = {};           

         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostReverseRequest();
        request.file =  mapFiles;
        request.rotateType =  rotateType;
        request.format =  format;
        return cellsApi.postReverse(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_reverse_cols_pdf test', function(){
      it("should call PostReverse successfully" , function(){
      
        var book1Xlsx = "Book1.xlsx"

     
        var rotateType = "cols"
        var format = "pdf"

        var mapFiles = {};           

         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostReverseRequest();
        request.file =  mapFiles;
        request.rotateType =  rotateType;
        request.format =  format;
        return cellsApi.postReverse(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_reverse_both_pdf test', function(){
      it("should call PostReverse successfully" , function(){
      
        var book1Xlsx = "Book1.xlsx"

     
        var rotateType = "both"
        var format = "pdf"

        var mapFiles = {};           

         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostReverseRequest();
        request.file =  mapFiles;
        request.rotateType =  rotateType;
        request.format =  format;
        return cellsApi.postReverse(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_reverse_rows_csv test', function(){
      it("should call PostReverse successfully" , function(){
      
        var book1Xlsx = "Book1.xlsx"

     
        var rotateType = "rows"
        var format = "csv"

        var mapFiles = {};           

         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostReverseRequest();
        request.file =  mapFiles;
        request.rotateType =  rotateType;
        request.format =  format;
        return cellsApi.postReverse(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_reverse_cols_png test', function(){
      it("should call PostReverse successfully" , function(){
      
        var book1Xlsx = "Book1.xlsx"

     
        var rotateType = "cols"
        var format = "png"

        var mapFiles = {};           

         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostReverseRequest();
        request.file =  mapFiles;
        request.rotateType =  rotateType;
        request.format =  format;
        return cellsApi.postReverse(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_reverse_both_xlsx test', function(){
      it("should call PostReverse successfully" , function(){
      
        var book1Xlsx = "Book1.xlsx"

     
        var rotateType = "both"
        var format = "xlsx"

        var mapFiles = {};           

         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostReverseRequest();
        request.file =  mapFiles;
        request.rotateType =  rotateType;
        request.format =  format;
        return cellsApi.postReverse(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_metadata test', function(){
      it("should call GetMetadata successfully" , function(){
      
        var book1Xlsx = "Book1.xlsx"

     
        var mapFiles = {};           

         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.GetMetadataRequest();
        request.file =  mapFiles;
        request.type =  "all";
        return cellsApi.getMetadata(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('delete_metadata test', function(){
      it("should call DeleteMetadata successfully" , function(){
      
        var book1Xlsx = "Book1.xlsx"

     
        var mapFiles = {};           

         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.DeleteMetadataRequest();
        request.file =  mapFiles;
        request.type =  "all";
        return cellsApi.deleteMetadata(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_metadata test', function(){
      it("should call PostMetadata successfully" , function(){
      
        var book1Xlsx = "Book1.xlsx"

     
        var mapFiles = {};           

        var cellsDocumentscellsDocument0 = new model.CellsDocumentProperty();
        cellsDocumentscellsDocument0.name = "Author"  ;
        cellsDocumentscellsDocument0.value = "roy.wang"  ;
        var cellsDocuments = new Array<model.CellsDocumentProperty>();
        cellsDocuments.push(cellsDocumentscellsDocument0);
        mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostMetadataRequest();
        request.file =  mapFiles;
        request.cellsDocuments =  cellsDocuments;
        return cellsApi.postMetadata(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
});