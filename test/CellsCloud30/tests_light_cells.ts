import { expect } from "chai";
import "mocha";

import * as model from "../../src/model/model";
import * as api from "../../src/api";
const clientId = process.env.CellsCloudClientId;
const clientSecret = process.env.CellsCloudClientSecret;
const ApiURL = process.env.CellsCloudApiBaseUrl;

//const localPath = "TestData/CellsCloud/";
const localPath = "TestData/";
var fs = require('fs');
var path = require('path');
var assert = require('assert');


describe('LightCells test', function() {
    this.timeout(200000);
    const cellsApi = new api.CellsApi(clientId, clientSecret,"v3.0",ApiURL);

    describe('post_split_csv test', function(){
      it("should call PostSplit successfully" , function(){
      
        var book1Xlsx = "Book1.xlsx"

     
        var outFormat = "csv"

        var mapFiles = {};           

         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostSplitRequest();
        request.file =  mapFiles;
        request.outFormat =  outFormat;
        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_split_html test', function(){
      it("should call PostSplit successfully" , function(){
      
        var book1Xlsx = "Book1.xlsx"

     
        var outFormat = "html"

        var mapFiles = {};           

         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostSplitRequest();
        request.file =  mapFiles;
        request.outFormat =  outFormat;
        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_split_ods test', function(){
      it("should call PostSplit successfully" , function(){
      
        var book1Xlsx = "Book1.xlsx"

     
        var outFormat = "ods"

        var mapFiles = {};           

         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostSplitRequest();
        request.file =  mapFiles;
        request.outFormat =  outFormat;
        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_split_pdf test', function(){
      it("should call PostSplit successfully" , function(){
      
        var book1Xlsx = "Book1.xlsx"

     
        var outFormat = "pdf"

        var mapFiles = {};           

         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostSplitRequest();
        request.file =  mapFiles;
        request.outFormat =  outFormat;
        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_split_xps test', function(){
      it("should call PostSplit successfully" , function(){
      
        var book1Xlsx = "Book1.xlsx"

     
        var outFormat = "xps"

        var mapFiles = {};           

         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostSplitRequest();
        request.file =  mapFiles;
        request.outFormat =  outFormat;
        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_split_md test', function(){
      it("should call PostSplit successfully" , function(){
      
        var book1Xlsx = "Book1.xlsx"

     
        var outFormat = "md"

        var mapFiles = {};           

         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostSplitRequest();
        request.file =  mapFiles;
        request.outFormat =  outFormat;
        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_split_svg test', function(){
      it("should call PostSplit successfully" , function(){
      
        var book1Xlsx = "Book1.xlsx"

     
        var outFormat = "svg"

        var mapFiles = {};           

         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostSplitRequest();
        request.file =  mapFiles;
        request.outFormat =  outFormat;
        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_split_docx test', function(){
      it("should call PostSplit successfully" , function(){
      
        var book1Xlsx = "Book1.xlsx"

     
        var outFormat = "docx"

        var mapFiles = {};           

         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostSplitRequest();
        request.file =  mapFiles;
        request.outFormat =  outFormat;
        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_split_pptx test', function(){
      it("should call PostSplit successfully" , function(){
      
        var book1Xlsx = "Book1.xlsx"

     
        var outFormat = "pptx"

        var mapFiles = {};           

         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostSplitRequest();
        request.file =  mapFiles;
        request.outFormat =  outFormat;
        return cellsApi.postSplit(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_split_json test', function(){
      it("should call PostSplit successfully" , function(){
      
        var book1Xlsx = "Book1.xlsx"

     
        var outFormat = "json"

        var mapFiles = {};           

         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostSplitRequest();
        request.file =  mapFiles;
        request.outFormat =  outFormat;
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
        request.outFormat =  format;
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
        request.outFormat =  format;
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
        request.outFormat =  format;
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
        request.outFormat =  format;
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
        request.outFormat =  format;
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
        request.outFormat =  format;
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
        request.outFormat =  format;
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
        request.outFormat =  format;
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
        request.outFormat =  format;
        return cellsApi.postAssemble(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_export_csv_workbook test', function(){
      it("should call PostExport successfully" , function(){
      
        var book1Xlsx = "Book1.xlsx"

     
        var format = "csv"
        var objectType = "workbook"

        var mapFiles = {};           

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
      
        var book1Xlsx = "Book1.xlsx"

     
        var format = "html"
        var objectType = "workbook"

        var mapFiles = {};           

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
      
        var book1Xlsx = "Book1.xlsx"

     
        var format = "pdf"
        var objectType = "workbook"

        var mapFiles = {};           

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
      
        var book1Xlsx = "Book1.xlsx"

     
        var format = "pptx"
        var objectType = "workbook"

        var mapFiles = {};           

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
      
        var book1Xlsx = "Book1.xlsx"

     
        var format = "json"
        var objectType = "workbook"

        var mapFiles = {};           

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
      
        var book1Xlsx = "Book1.xlsx"

     
        var format = "html"
        var objectType = "worksheet"

        var mapFiles = {};           

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
      
        var book1Xlsx = "Book1.xlsx"

     
        var format = "docx"
        var objectType = "worksheet"

        var mapFiles = {};           

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
      
        var book1Xlsx = "Book1.xlsx"

     
        var format = "json"
        var objectType = "worksheet"

        var mapFiles = {};           

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
      
        var book1Xlsx = "Book1.xlsx"

     
        var format = "pdf"
        var objectType = "chart"

        var mapFiles = {};           

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
      
        var book1Xlsx = "Book1.xlsx"

     
        var format = "png"
        var objectType = "chart"

        var mapFiles = {};           

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
      
        var book1Xlsx = "Book1.xlsx"

     
        var format = "png"
        var objectType = "picture"

        var mapFiles = {};           

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
      
        var book1Xlsx = "Book1.xlsx"

     
        var format = "csv"
        var objectType = "listobject"

        var mapFiles = {};           

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
      
        var book1Xlsx = "Book1.xlsx"

     
        var format = "ods"
        var objectType = "listobject"

        var mapFiles = {};           

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
      
        var book1Xlsx = "Book1.xlsx"

     
        var format = "pdf"
        var objectType = "listobject"

        var mapFiles = {};           

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
      
        var book1Xlsx = "Book1.xlsx"

     
        var format = "md"
        var objectType = "listobject"

        var mapFiles = {};           

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
      
        var book1Xlsx = "Book1.xlsx"

     
        var format = "docx"
        var objectType = "listobject"

        var mapFiles = {};           

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
      
        var book1Xlsx = "Book1.xlsx"

     
        var format = "pptx"
        var objectType = "listobject"

        var mapFiles = {};           

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
      
        var book1Xlsx = "Book1.xlsx"

     
        var format = "json"
        var objectType = "listobject"

        var mapFiles = {};           

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
      
        var dataSourceXlsx = "datasource.xlsx"

     
        var compressLevel = 50

        var mapFiles = {};           

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
      
        var dataSourceXlsx = "datasource.xlsx"

     
        var compressLevel = 90

        var mapFiles = {};           

         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostCompressRequest();
        request.file =  mapFiles;
        request.compressLevel =  compressLevel;
        return cellsApi.postCompress(request).then((result) => {
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
        request.outFormat =  format;
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
        request.outFormat =  format;
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
        request.outFormat =  format;
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
        request.outFormat =  format;
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
    describe('post_lock test', function(){
      it("should call PostLock successfully" , function(){
      
        var needlockXlsx = "needlock.xlsx"

     
        var mapFiles = {};           

         mapFiles[needlockXlsx]= fs.createReadStream(localPath  +needlockXlsx) ;

        var request = new model.PostLockRequest();
        request.file =  mapFiles;
        request.password =  "123456";
        return cellsApi.postLock(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_protect test', function(){
      it("should call PostProtect successfully" , function(){
      
        var assemblyTestXlsx = "assemblytest.xlsx"

     
        var mapFiles = {};           

        var protectWorkbookRequest = new model.ProtectWorkbookRequest();
         protectWorkbookRequest.awaysOpenReadOnly = true  ;
         protectWorkbookRequest.encryptWithPassword = "123456"  ;
         mapFiles[assemblyTestXlsx]= fs.createReadStream(localPath  +assemblyTestXlsx) ;

        var request = new model.PostProtectRequest();
        request.file =  mapFiles;
        request.protectWorkbookRequest =  protectWorkbookRequest;
        request.password =  "123456";
        return cellsApi.postProtect(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_protect__protect_workbook_request test', function(){
      it("should call PostProtect successfully" , function(){
      
        var dataSourceXlsx = "datasource.xlsx"

     
        var mapFiles = {};           

        var protectWorkbookRequest = new model.ProtectWorkbookRequest();
         protectWorkbookRequest.awaysOpenReadOnly = true  ;
         protectWorkbookRequest.encryptWithPassword = "123456"  ;
         mapFiles[dataSourceXlsx]= fs.createReadStream(localPath  +dataSourceXlsx) ;

        var request = new model.PostProtectRequest();
        request.file =  mapFiles;
        request.protectWorkbookRequest =  protectWorkbookRequest;
        return cellsApi.postProtect(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_search test', function(){
      it("should call PostSearch successfully" , function(){
      
        var dataSourceXlsx = "datasource.xlsx"

     
        var mapFiles = {};           

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
      
        var dataSourceXlsx = "datasource.xlsx"

     
        var mapFiles = {};           

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
      
        var dataSourceXlsx = "datasource.xlsx"

     
        var mapFiles = {};           

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
      
        var dataSourceXlsx = "datasource.xlsx"

     
        var mapFiles = {};           

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

     
        var objecttype = "chart"

        var mapFiles = {};           

         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

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

     
        var objecttype = "comment"

        var mapFiles = {};           

         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

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

     
        var objecttype = "picture"

        var mapFiles = {};           

         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

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

     
        var objecttype = "shape"

        var mapFiles = {};           

         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

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

     
        var objecttype = "listobject"

        var mapFiles = {};           

         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

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

     
        var objecttype = "hyperlink"

        var mapFiles = {};           

         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

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

     
        var objecttype = "oleobject"

        var mapFiles = {};           

         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

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

     
        var objecttype = "pivottable"

        var mapFiles = {};           

         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

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

     
        var objecttype = "validation"

        var mapFiles = {};           

         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

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

     
        var objecttype = "Background"

        var mapFiles = {};           

         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostClearObjectsRequest();
        request.file =  mapFiles;
        request.objecttype =  objecttype;
        return cellsApi.postClearObjects(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_repair_xlsx test', function(){
      it("should call PostRepair successfully" , function(){
      
        var book1Xlsx = "Book1.xlsx"

     
        var format = "xlsx"

        var mapFiles = {};           

         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostRepairRequest();
        request.file =  mapFiles;
        request.outFormat =  format;
        return cellsApi.postRepair(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_repair_pdf test', function(){
      it("should call PostRepair successfully" , function(){
      
        var book1Xlsx = "Book1.xlsx"

     
        var format = "pdf"

        var mapFiles = {};           

         mapFiles[book1Xlsx]= fs.createReadStream(localPath  +book1Xlsx) ;

        var request = new model.PostRepairRequest();
        request.file =  mapFiles;
        request.outFormat =  format;
        return cellsApi.postRepair(request).then((result) => {
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
        request.outFormat =  format;
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
        request.outFormat =  format;
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
        request.outFormat =  format;
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
        request.outFormat =  format;
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
        request.outFormat =  format;
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
        request.outFormat =  format;
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
        var cellsDocuments = new Array<model.CellsDocumentProperty>();cellsDocuments.push(cellsDocumentscellsDocument0);
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