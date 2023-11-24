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


describe('ConversionJson test', function() {
    this.timeout(200000);
    const cellsApi = new api.CellsApi(clientId, clientSecret,"v3.0",ApiURL);

    describe('convert_workbook_csv test', function(){
      it("should call PutConvertWorkbook successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localName = "codegen-spec.json";
        var remoteName = "codegen-spec.json";

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "csv";

        var mapFiles = {};           

         mapFiles[localName]= fs.createReadStream(localPath  +localName) ;

        var request = new model.PutConvertWorkbookRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.putConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('convert_workbook_xls test', function(){
      it("should call PutConvertWorkbook successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localName = "codegen-spec.json";
        var remoteName = "codegen-spec.json";

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "xls";

        var mapFiles = {};           

         mapFiles[localName]= fs.createReadStream(localPath  +localName) ;

        var request = new model.PutConvertWorkbookRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.putConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('convert_workbook_html test', function(){
      it("should call PutConvertWorkbook successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localName = "codegen-spec.json";
        var remoteName = "codegen-spec.json";

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "html";

        var mapFiles = {};           

         mapFiles[localName]= fs.createReadStream(localPath  +localName) ;

        var request = new model.PutConvertWorkbookRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.putConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('convert_workbook_mhtml test', function(){
      it("should call PutConvertWorkbook successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localName = "codegen-spec.json";
        var remoteName = "codegen-spec.json";

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "mhtml";

        var mapFiles = {};           

         mapFiles[localName]= fs.createReadStream(localPath  +localName) ;

        var request = new model.PutConvertWorkbookRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.putConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('convert_workbook_ods test', function(){
      it("should call PutConvertWorkbook successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localName = "codegen-spec.json";
        var remoteName = "codegen-spec.json";

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "ods";

        var mapFiles = {};           

         mapFiles[localName]= fs.createReadStream(localPath  +localName) ;

        var request = new model.PutConvertWorkbookRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.putConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('convert_workbook_pdf test', function(){
      it("should call PutConvertWorkbook successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localName = "codegen-spec.json";
        var remoteName = "codegen-spec.json";

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "pdf";

        var mapFiles = {};           

         mapFiles[localName]= fs.createReadStream(localPath  +localName) ;

        var request = new model.PutConvertWorkbookRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.putConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('convert_workbook_xml test', function(){
      it("should call PutConvertWorkbook successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localName = "codegen-spec.json";
        var remoteName = "codegen-spec.json";

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "xml";

        var mapFiles = {};           

         mapFiles[localName]= fs.createReadStream(localPath  +localName) ;

        var request = new model.PutConvertWorkbookRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.putConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('convert_workbook_txt test', function(){
      it("should call PutConvertWorkbook successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localName = "codegen-spec.json";
        var remoteName = "codegen-spec.json";

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "txt";

        var mapFiles = {};           

         mapFiles[localName]= fs.createReadStream(localPath  +localName) ;

        var request = new model.PutConvertWorkbookRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.putConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('convert_workbook_xlsb test', function(){
      it("should call PutConvertWorkbook successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localName = "codegen-spec.json";
        var remoteName = "codegen-spec.json";

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "xlsb";

        var mapFiles = {};           

         mapFiles[localName]= fs.createReadStream(localPath  +localName) ;

        var request = new model.PutConvertWorkbookRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.putConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('convert_workbook_xlsx test', function(){
      it("should call PutConvertWorkbook successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localName = "codegen-spec.json";
        var remoteName = "codegen-spec.json";

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "xlsx";

        var mapFiles = {};           

         mapFiles[localName]= fs.createReadStream(localPath  +localName) ;

        var request = new model.PutConvertWorkbookRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.putConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('convert_workbook_xps test', function(){
      it("should call PutConvertWorkbook successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localName = "codegen-spec.json";
        var remoteName = "codegen-spec.json";

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "xps";

        var mapFiles = {};           

         mapFiles[localName]= fs.createReadStream(localPath  +localName) ;

        var request = new model.PutConvertWorkbookRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.putConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('convert_workbook_png test', function(){
      it("should call PutConvertWorkbook successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localName = "codegen-spec.json";
        var remoteName = "codegen-spec.json";

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "png";

        var mapFiles = {};           

         mapFiles[localName]= fs.createReadStream(localPath  +localName) ;

        var request = new model.PutConvertWorkbookRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.putConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('convert_workbook_md test', function(){
      it("should call PutConvertWorkbook successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localName = "codegen-spec.json";
        var remoteName = "codegen-spec.json";

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "md";

        var mapFiles = {};           

         mapFiles[localName]= fs.createReadStream(localPath  +localName) ;

        var request = new model.PutConvertWorkbookRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.putConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('convert_workbook_numbers test', function(){
      it("should call PutConvertWorkbook successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localName = "codegen-spec.json";
        var remoteName = "codegen-spec.json";

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "numbers";

        var mapFiles = {};           

         mapFiles[localName]= fs.createReadStream(localPath  +localName) ;

        var request = new model.PutConvertWorkbookRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.putConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('convert_workbook_svg test', function(){
      it("should call PutConvertWorkbook successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localName = "codegen-spec.json";
        var remoteName = "codegen-spec.json";

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "svg";

        var mapFiles = {};           

         mapFiles[localName]= fs.createReadStream(localPath  +localName) ;

        var request = new model.PutConvertWorkbookRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.putConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('convert_workbook_docx test', function(){
      it("should call PutConvertWorkbook successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localName = "codegen-spec.json";
        var remoteName = "codegen-spec.json";

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "docx";

        var mapFiles = {};           

         mapFiles[localName]= fs.createReadStream(localPath  +localName) ;

        var request = new model.PutConvertWorkbookRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.putConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('convert_workbook_pptx test', function(){
      it("should call PutConvertWorkbook successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localName = "codegen-spec.json";
        var remoteName = "codegen-spec.json";

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "pptx";

        var mapFiles = {};           

         mapFiles[localName]= fs.createReadStream(localPath  +localName) ;

        var request = new model.PutConvertWorkbookRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.putConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('convert_workbook_json test', function(){
      it("should call PutConvertWorkbook successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localName = "codegen-spec.json";
        var remoteName = "codegen-spec.json";

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "json";

        var mapFiles = {};           

         mapFiles[localName]= fs.createReadStream(localPath  +localName) ;

        var request = new model.PutConvertWorkbookRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.putConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('convert_workbook_sql test', function(){
      it("should call PutConvertWorkbook successfully" , function(){
        var remoteFolder = "TestData/In";
      
        var localName = "codegen-spec.json";
        var remoteName = "codegen-spec.json";

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "sql";

        var mapFiles = {};           

         mapFiles[localName]= fs.createReadStream(localPath  +localName) ;

        var request = new model.PutConvertWorkbookRequest();
        request.file =  mapFiles;
        request.format =  format;
        return cellsApi.putConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
});