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


describe('Conversion30 test', function() {
    this.timeout(200000);
    const cellsApi = new api.CellsApi(clientId, clientSecret,"v3.0",ApiURL);

    describe('workbook_save_as_csv__out_result_post_excel_save_ascsv test', function(){
      it("should call PostWorkbookSaveAs successfully" , function(){
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"
        var remoteFolder = "TestData/In"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "csv"
        var newfilename = "OutResult/PostExcelSaveAs.csv"

        var saveOptions = new model.SaveOptions();
         saveOptions.saveFormat = format  ;

        var request = new model.PostWorkbookSaveAsRequest();
        request.name =  remoteName;
        request.newfilename =  newfilename;
        request.saveOptions =  saveOptions;
        request.folder =  remoteFolder;
        return cellsApi.postWorkbookSaveAs(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('workbook_save_as_html__out_result_post_excel_save_ashtml test', function(){
      it("should call PostWorkbookSaveAs successfully" , function(){
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"
        var remoteFolder = "TestData/In"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "html"
        var newfilename = "OutResult/PostExcelSaveAs.html"

        var saveOptions = new model.SaveOptions();
         saveOptions.saveFormat = format  ;

        var request = new model.PostWorkbookSaveAsRequest();
        request.name =  remoteName;
        request.newfilename =  newfilename;
        request.saveOptions =  saveOptions;
        request.folder =  remoteFolder;
        return cellsApi.postWorkbookSaveAs(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('workbook_save_as_mhtml__out_result_post_excel_save_asmhtml test', function(){
      it("should call PostWorkbookSaveAs successfully" , function(){
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"
        var remoteFolder = "TestData/In"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "mhtml"
        var newfilename = "OutResult/PostExcelSaveAs.mhtml"

        var saveOptions = new model.SaveOptions();
         saveOptions.saveFormat = format  ;

        var request = new model.PostWorkbookSaveAsRequest();
        request.name =  remoteName;
        request.newfilename =  newfilename;
        request.saveOptions =  saveOptions;
        request.folder =  remoteFolder;
        return cellsApi.postWorkbookSaveAs(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('workbook_save_as_ods__out_result_post_excel_save_asods test', function(){
      it("should call PostWorkbookSaveAs successfully" , function(){
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"
        var remoteFolder = "TestData/In"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "ods"
        var newfilename = "OutResult/PostExcelSaveAs.ods"

        var saveOptions = new model.SaveOptions();
         saveOptions.saveFormat = format  ;

        var request = new model.PostWorkbookSaveAsRequest();
        request.name =  remoteName;
        request.newfilename =  newfilename;
        request.saveOptions =  saveOptions;
        request.folder =  remoteFolder;
        return cellsApi.postWorkbookSaveAs(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('workbook_save_as_pdf__out_result_post_excel_save_aspdf test', function(){
      it("should call PostWorkbookSaveAs successfully" , function(){
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"
        var remoteFolder = "TestData/In"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "pdf"
        var newfilename = "OutResult/PostExcelSaveAs.pdf"

        var saveOptions = new model.SaveOptions();
         saveOptions.saveFormat = format  ;

        var request = new model.PostWorkbookSaveAsRequest();
        request.name =  remoteName;
        request.newfilename =  newfilename;
        request.saveOptions =  saveOptions;
        request.folder =  remoteFolder;
        return cellsApi.postWorkbookSaveAs(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('workbook_save_as_xml__out_result_post_excel_save_asxml test', function(){
      it("should call PostWorkbookSaveAs successfully" , function(){
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"
        var remoteFolder = "TestData/In"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "xml"
        var newfilename = "OutResult/PostExcelSaveAs.xml"

        var saveOptions = new model.SaveOptions();
         saveOptions.saveFormat = format  ;

        var request = new model.PostWorkbookSaveAsRequest();
        request.name =  remoteName;
        request.newfilename =  newfilename;
        request.saveOptions =  saveOptions;
        request.folder =  remoteFolder;
        return cellsApi.postWorkbookSaveAs(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('workbook_save_as_txt__out_result_post_excel_save_astxt test', function(){
      it("should call PostWorkbookSaveAs successfully" , function(){
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"
        var remoteFolder = "TestData/In"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "txt"
        var newfilename = "OutResult/PostExcelSaveAs.txt"

        var saveOptions = new model.SaveOptions();
         saveOptions.saveFormat = format  ;

        var request = new model.PostWorkbookSaveAsRequest();
        request.name =  remoteName;
        request.newfilename =  newfilename;
        request.saveOptions =  saveOptions;
        request.folder =  remoteFolder;
        return cellsApi.postWorkbookSaveAs(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('workbook_save_as_tif__out_result_post_excel_save_astif test', function(){
      it("should call PostWorkbookSaveAs successfully" , function(){
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"
        var remoteFolder = "TestData/In"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "tif"
        var newfilename = "OutResult/PostExcelSaveAs.tif"

        var saveOptions = new model.SaveOptions();
         saveOptions.saveFormat = format  ;

        var request = new model.PostWorkbookSaveAsRequest();
        request.name =  remoteName;
        request.newfilename =  newfilename;
        request.saveOptions =  saveOptions;
        request.folder =  remoteFolder;
        return cellsApi.postWorkbookSaveAs(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('workbook_save_as_xlsb__out_result_post_excel_save_asxlsb test', function(){
      it("should call PostWorkbookSaveAs successfully" , function(){
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"
        var remoteFolder = "TestData/In"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "xlsb"
        var newfilename = "OutResult/PostExcelSaveAs.xlsb"

        var saveOptions = new model.SaveOptions();
         saveOptions.saveFormat = format  ;

        var request = new model.PostWorkbookSaveAsRequest();
        request.name =  remoteName;
        request.newfilename =  newfilename;
        request.saveOptions =  saveOptions;
        request.folder =  remoteFolder;
        return cellsApi.postWorkbookSaveAs(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('workbook_save_as_xps__out_result_post_excel_save_asxps test', function(){
      it("should call PostWorkbookSaveAs successfully" , function(){
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"
        var remoteFolder = "TestData/In"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "xps"
        var newfilename = "OutResult/PostExcelSaveAs.xps"

        var saveOptions = new model.SaveOptions();
         saveOptions.saveFormat = format  ;

        var request = new model.PostWorkbookSaveAsRequest();
        request.name =  remoteName;
        request.newfilename =  newfilename;
        request.saveOptions =  saveOptions;
        request.folder =  remoteFolder;
        return cellsApi.postWorkbookSaveAs(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('workbook_save_as_png__out_result_post_excel_save_aspng test', function(){
      it("should call PostWorkbookSaveAs successfully" , function(){
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"
        var remoteFolder = "TestData/In"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "png"
        var newfilename = "OutResult/PostExcelSaveAs.png"

        var saveOptions = new model.SaveOptions();
         saveOptions.saveFormat = format  ;

        var request = new model.PostWorkbookSaveAsRequest();
        request.name =  remoteName;
        request.newfilename =  newfilename;
        request.saveOptions =  saveOptions;
        request.folder =  remoteFolder;
        return cellsApi.postWorkbookSaveAs(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('workbook_save_as_md__out_result_post_excel_save_asmd test', function(){
      it("should call PostWorkbookSaveAs successfully" , function(){
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"
        var remoteFolder = "TestData/In"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "md"
        var newfilename = "OutResult/PostExcelSaveAs.md"

        var saveOptions = new model.SaveOptions();
         saveOptions.saveFormat = format  ;

        var request = new model.PostWorkbookSaveAsRequest();
        request.name =  remoteName;
        request.newfilename =  newfilename;
        request.saveOptions =  saveOptions;
        request.folder =  remoteFolder;
        return cellsApi.postWorkbookSaveAs(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('workbook_save_as_svg__out_result_post_excel_save_assvg test', function(){
      it("should call PostWorkbookSaveAs successfully" , function(){
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"
        var remoteFolder = "TestData/In"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "svg"
        var newfilename = "OutResult/PostExcelSaveAs.svg"

        var saveOptions = new model.SaveOptions();
         saveOptions.saveFormat = format  ;

        var request = new model.PostWorkbookSaveAsRequest();
        request.name =  remoteName;
        request.newfilename =  newfilename;
        request.saveOptions =  saveOptions;
        request.folder =  remoteFolder;
        return cellsApi.postWorkbookSaveAs(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('workbook_save_as_docx__out_result_post_excel_save_asdocx test', function(){
      it("should call PostWorkbookSaveAs successfully" , function(){
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"
        var remoteFolder = "TestData/In"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "docx"
        var newfilename = "OutResult/PostExcelSaveAs.docx"

        var saveOptions = new model.SaveOptions();
         saveOptions.saveFormat = format  ;

        var request = new model.PostWorkbookSaveAsRequest();
        request.name =  remoteName;
        request.newfilename =  newfilename;
        request.saveOptions =  saveOptions;
        request.folder =  remoteFolder;
        return cellsApi.postWorkbookSaveAs(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('workbook_save_as_pptx__out_result_post_excel_save_aspptx test', function(){
      it("should call PostWorkbookSaveAs successfully" , function(){
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"
        var remoteFolder = "TestData/In"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "pptx"
        var newfilename = "OutResult/PostExcelSaveAs.pptx"

        var saveOptions = new model.SaveOptions();
         saveOptions.saveFormat = format  ;

        var request = new model.PostWorkbookSaveAsRequest();
        request.name =  remoteName;
        request.newfilename =  newfilename;
        request.saveOptions =  saveOptions;
        request.folder =  remoteFolder;
        return cellsApi.postWorkbookSaveAs(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('workbook_save_as_json__out_result_post_excel_save_asjson test', function(){
      it("should call PostWorkbookSaveAs successfully" , function(){
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"
        var remoteFolder = "TestData/In"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "json"
        var newfilename = "OutResult/PostExcelSaveAs.json"

        var saveOptions = new model.SaveOptions();
         saveOptions.saveFormat = format  ;

        var request = new model.PostWorkbookSaveAsRequest();
        request.name =  remoteName;
        request.newfilename =  newfilename;
        request.saveOptions =  saveOptions;
        request.folder =  remoteFolder;
        return cellsApi.postWorkbookSaveAs(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('workbook_save_as_sql__out_result_post_excel_save_assql test', function(){
      it("should call PostWorkbookSaveAs successfully" , function(){
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"
        var remoteFolder = "TestData/In"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "sql"
        var newfilename = "OutResult/PostExcelSaveAs.sql"

        var saveOptions = new model.SaveOptions();
         saveOptions.saveFormat = format  ;

        var request = new model.PostWorkbookSaveAsRequest();
        request.name =  remoteName;
        request.newfilename =  newfilename;
        request.saveOptions =  saveOptions;
        request.folder =  remoteFolder;
        return cellsApi.postWorkbookSaveAs(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_workbook_format_csv test', function(){
      it("should call GetWorkbook successfully" , function(){
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"
        var remoteFolder = "TestData/In"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "csv"


        var request = new model.GetWorkbookRequest();
        request.name =  remoteName;
        request.format =  format;
        request.folder =  remoteFolder;
        return cellsApi.getWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_workbook_format_html test', function(){
      it("should call GetWorkbook successfully" , function(){
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"
        var remoteFolder = "TestData/In"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "html"


        var request = new model.GetWorkbookRequest();
        request.name =  remoteName;
        request.format =  format;
        request.folder =  remoteFolder;
        return cellsApi.getWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_workbook_format_mhtml test', function(){
      it("should call GetWorkbook successfully" , function(){
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"
        var remoteFolder = "TestData/In"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "mhtml"


        var request = new model.GetWorkbookRequest();
        request.name =  remoteName;
        request.format =  format;
        request.folder =  remoteFolder;
        return cellsApi.getWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_workbook_format_ods test', function(){
      it("should call GetWorkbook successfully" , function(){
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"
        var remoteFolder = "TestData/In"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "ods"


        var request = new model.GetWorkbookRequest();
        request.name =  remoteName;
        request.format =  format;
        request.folder =  remoteFolder;
        return cellsApi.getWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_workbook_format_pdf test', function(){
      it("should call GetWorkbook successfully" , function(){
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"
        var remoteFolder = "TestData/In"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "pdf"


        var request = new model.GetWorkbookRequest();
        request.name =  remoteName;
        request.format =  format;
        request.folder =  remoteFolder;
        return cellsApi.getWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_workbook_format_xml test', function(){
      it("should call GetWorkbook successfully" , function(){
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"
        var remoteFolder = "TestData/In"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "xml"


        var request = new model.GetWorkbookRequest();
        request.name =  remoteName;
        request.format =  format;
        request.folder =  remoteFolder;
        return cellsApi.getWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_workbook_format_txt test', function(){
      it("should call GetWorkbook successfully" , function(){
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"
        var remoteFolder = "TestData/In"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "txt"


        var request = new model.GetWorkbookRequest();
        request.name =  remoteName;
        request.format =  format;
        request.folder =  remoteFolder;
        return cellsApi.getWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_workbook_format_tif test', function(){
      it("should call GetWorkbook successfully" , function(){
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"
        var remoteFolder = "TestData/In"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "tif"


        var request = new model.GetWorkbookRequest();
        request.name =  remoteName;
        request.format =  format;
        request.folder =  remoteFolder;
        return cellsApi.getWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_workbook_format_xps test', function(){
      it("should call GetWorkbook successfully" , function(){
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"
        var remoteFolder = "TestData/In"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "xps"


        var request = new model.GetWorkbookRequest();
        request.name =  remoteName;
        request.format =  format;
        request.folder =  remoteFolder;
        return cellsApi.getWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_workbook_format_png test', function(){
      it("should call GetWorkbook successfully" , function(){
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"
        var remoteFolder = "TestData/In"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "png"


        var request = new model.GetWorkbookRequest();
        request.name =  remoteName;
        request.format =  format;
        request.folder =  remoteFolder;
        return cellsApi.getWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_workbook_format_md test', function(){
      it("should call GetWorkbook successfully" , function(){
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"
        var remoteFolder = "TestData/In"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "md"


        var request = new model.GetWorkbookRequest();
        request.name =  remoteName;
        request.format =  format;
        request.folder =  remoteFolder;
        return cellsApi.getWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_workbook_format_svg test', function(){
      it("should call GetWorkbook successfully" , function(){
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"
        var remoteFolder = "TestData/In"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "svg"


        var request = new model.GetWorkbookRequest();
        request.name =  remoteName;
        request.format =  format;
        request.folder =  remoteFolder;
        return cellsApi.getWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_workbook_format_docx test', function(){
      it("should call GetWorkbook successfully" , function(){
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"
        var remoteFolder = "TestData/In"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "docx"


        var request = new model.GetWorkbookRequest();
        request.name =  remoteName;
        request.format =  format;
        request.folder =  remoteFolder;
        return cellsApi.getWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_workbook_format_pptx test', function(){
      it("should call GetWorkbook successfully" , function(){
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"
        var remoteFolder = "TestData/In"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "pptx"


        var request = new model.GetWorkbookRequest();
        request.name =  remoteName;
        request.format =  format;
        request.folder =  remoteFolder;
        return cellsApi.getWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_workbook_format_json test', function(){
      it("should call GetWorkbook successfully" , function(){
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"
        var remoteFolder = "TestData/In"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "json"


        var request = new model.GetWorkbookRequest();
        request.name =  remoteName;
        request.format =  format;
        request.folder =  remoteFolder;
        return cellsApi.getWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_workbook_format_sql test', function(){
      it("should call GetWorkbook successfully" , function(){
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"
        var remoteFolder = "TestData/In"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "sql"


        var request = new model.GetWorkbookRequest();
        request.name =  remoteName;
        request.format =  format;
        request.folder =  remoteFolder;
        return cellsApi.getWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('convert_workbook_csv test', function(){
      it("should call PutConvertWorkbook successfully" , function(){
      
        var localName = "Book1.xlsx"

     
        var format = "csv"

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
      
        var localName = "Book1.xlsx"

     
        var format = "xls"

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
      
        var localName = "Book1.xlsx"

     
        var format = "html"

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
      
        var localName = "Book1.xlsx"

     
        var format = "mhtml"

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
      
        var localName = "Book1.xlsx"

     
        var format = "ods"

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
      
        var localName = "Book1.xlsx"

     
        var format = "pdf"

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
      
        var localName = "Book1.xlsx"

     
        var format = "xml"

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
      
        var localName = "Book1.xlsx"

     
        var format = "txt"

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
    describe('convert_workbook_tif test', function(){
      it("should call PutConvertWorkbook successfully" , function(){
      
        var localName = "Book1.xlsx"

     
        var format = "tif"

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
      
        var localName = "Book1.xlsx"

     
        var format = "xlsb"

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
      
        var localName = "Book1.xlsx"

     
        var format = "xps"

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
      
        var localName = "Book1.xlsx"

     
        var format = "png"

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
      
        var localName = "Book1.xlsx"

     
        var format = "md"

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
      
        var localName = "Book1.xlsx"

     
        var format = "svg"

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
      
        var localName = "Book1.xlsx"

     
        var format = "docx"

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
      
        var localName = "Book1.xlsx"

     
        var format = "pptx"

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
      
        var localName = "Book1.xlsx"

     
        var format = "json"

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
      
        var localName = "Book1.xlsx"

     
        var format = "sql"

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
    describe('convert_workbook_save_cloud_csv__out_result_convert_workbookcsv test', function(){
      it("should call PutConvertWorkbook successfully" , function(){
      
        var localName = "Book1.xlsx"

     
        var format = "csv"
        var outPath = "OutResult/ConvertWorkbook.csv"

        var mapFiles = {};           

         mapFiles[localName]= fs.createReadStream(localPath  +localName) ;

        var request = new model.PutConvertWorkbookRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.outPath =  outPath;
        return cellsApi.putConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('convert_workbook_save_cloud_xls__out_result_convert_workbookxls test', function(){
      it("should call PutConvertWorkbook successfully" , function(){
      
        var localName = "Book1.xlsx"

     
        var format = "xls"
        var outPath = "OutResult/ConvertWorkbook.xls"

        var mapFiles = {};           

         mapFiles[localName]= fs.createReadStream(localPath  +localName) ;

        var request = new model.PutConvertWorkbookRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.outPath =  outPath;
        return cellsApi.putConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('convert_workbook_save_cloud_html__out_result_convert_workbookhtml test', function(){
      it("should call PutConvertWorkbook successfully" , function(){
      
        var localName = "Book1.xlsx"

     
        var format = "html"
        var outPath = "OutResult/ConvertWorkbook.html"

        var mapFiles = {};           

         mapFiles[localName]= fs.createReadStream(localPath  +localName) ;

        var request = new model.PutConvertWorkbookRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.outPath =  outPath;
        return cellsApi.putConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('convert_workbook_save_cloud_mhtml__out_result_convert_workbookmhtml test', function(){
      it("should call PutConvertWorkbook successfully" , function(){
      
        var localName = "Book1.xlsx"

     
        var format = "mhtml"
        var outPath = "OutResult/ConvertWorkbook.mhtml"

        var mapFiles = {};           

         mapFiles[localName]= fs.createReadStream(localPath  +localName) ;

        var request = new model.PutConvertWorkbookRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.outPath =  outPath;
        return cellsApi.putConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('convert_workbook_save_cloud_ods__out_result_convert_workbookods test', function(){
      it("should call PutConvertWorkbook successfully" , function(){
      
        var localName = "Book1.xlsx"

     
        var format = "ods"
        var outPath = "OutResult/ConvertWorkbook.ods"

        var mapFiles = {};           

         mapFiles[localName]= fs.createReadStream(localPath  +localName) ;

        var request = new model.PutConvertWorkbookRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.outPath =  outPath;
        return cellsApi.putConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('convert_workbook_save_cloud_pdf__out_result_convert_workbookpdf test', function(){
      it("should call PutConvertWorkbook successfully" , function(){
      
        var localName = "Book1.xlsx"

     
        var format = "pdf"
        var outPath = "OutResult/ConvertWorkbook.pdf"

        var mapFiles = {};           

         mapFiles[localName]= fs.createReadStream(localPath  +localName) ;

        var request = new model.PutConvertWorkbookRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.outPath =  outPath;
        return cellsApi.putConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('convert_workbook_save_cloud_xml__out_result_convert_workbookxml test', function(){
      it("should call PutConvertWorkbook successfully" , function(){
      
        var localName = "Book1.xlsx"

     
        var format = "xml"
        var outPath = "OutResult/ConvertWorkbook.xml"

        var mapFiles = {};           

         mapFiles[localName]= fs.createReadStream(localPath  +localName) ;

        var request = new model.PutConvertWorkbookRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.outPath =  outPath;
        return cellsApi.putConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('convert_workbook_save_cloud_txt__out_result_convert_workbooktxt test', function(){
      it("should call PutConvertWorkbook successfully" , function(){
      
        var localName = "Book1.xlsx"

     
        var format = "txt"
        var outPath = "OutResult/ConvertWorkbook.txt"

        var mapFiles = {};           

         mapFiles[localName]= fs.createReadStream(localPath  +localName) ;

        var request = new model.PutConvertWorkbookRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.outPath =  outPath;
        return cellsApi.putConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('convert_workbook_save_cloud_tif__out_result_convert_workbooktif test', function(){
      it("should call PutConvertWorkbook successfully" , function(){
      
        var localName = "Book1.xlsx"

     
        var format = "tif"
        var outPath = "OutResult/ConvertWorkbook.tif"

        var mapFiles = {};           

         mapFiles[localName]= fs.createReadStream(localPath  +localName) ;

        var request = new model.PutConvertWorkbookRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.outPath =  outPath;
        return cellsApi.putConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('convert_workbook_save_cloud_xlsb__out_result_convert_workbookxlsb test', function(){
      it("should call PutConvertWorkbook successfully" , function(){
      
        var localName = "Book1.xlsx"

     
        var format = "xlsb"
        var outPath = "OutResult/ConvertWorkbook.xlsb"

        var mapFiles = {};           

         mapFiles[localName]= fs.createReadStream(localPath  +localName) ;

        var request = new model.PutConvertWorkbookRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.outPath =  outPath;
        return cellsApi.putConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('convert_workbook_save_cloud_xltm__out_result_convert_workbookxltm test', function(){
      it("should call PutConvertWorkbook successfully" , function(){
      
        var localName = "Book1.xlsx"

     
        var format = "xltm"
        var outPath = "OutResult/ConvertWorkbook.xltm"

        var mapFiles = {};           

         mapFiles[localName]= fs.createReadStream(localPath  +localName) ;

        var request = new model.PutConvertWorkbookRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.outPath =  outPath;
        return cellsApi.putConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('convert_workbook_save_cloud_xps__out_result_convert_workbookxps test', function(){
      it("should call PutConvertWorkbook successfully" , function(){
      
        var localName = "Book1.xlsx"

     
        var format = "xps"
        var outPath = "OutResult/ConvertWorkbook.xps"

        var mapFiles = {};           

         mapFiles[localName]= fs.createReadStream(localPath  +localName) ;

        var request = new model.PutConvertWorkbookRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.outPath =  outPath;
        return cellsApi.putConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('convert_workbook_save_cloud_png__out_result_convert_workbookpng test', function(){
      it("should call PutConvertWorkbook successfully" , function(){
      
        var localName = "Book1.xlsx"

     
        var format = "png"
        var outPath = "OutResult/ConvertWorkbook.png"

        var mapFiles = {};           

         mapFiles[localName]= fs.createReadStream(localPath  +localName) ;

        var request = new model.PutConvertWorkbookRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.outPath =  outPath;
        return cellsApi.putConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('convert_workbook_save_cloud_md__out_result_convert_workbookmd test', function(){
      it("should call PutConvertWorkbook successfully" , function(){
      
        var localName = "Book1.xlsx"

     
        var format = "md"
        var outPath = "OutResult/ConvertWorkbook.md"

        var mapFiles = {};           

         mapFiles[localName]= fs.createReadStream(localPath  +localName) ;

        var request = new model.PutConvertWorkbookRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.outPath =  outPath;
        return cellsApi.putConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('convert_workbook_save_cloud_svg__out_result_convert_workbooksvg test', function(){
      it("should call PutConvertWorkbook successfully" , function(){
      
        var localName = "Book1.xlsx"

     
        var format = "svg"
        var outPath = "OutResult/ConvertWorkbook.svg"

        var mapFiles = {};           

         mapFiles[localName]= fs.createReadStream(localPath  +localName) ;

        var request = new model.PutConvertWorkbookRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.outPath =  outPath;
        return cellsApi.putConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('convert_workbook_save_cloud_docx__out_result_convert_workbookdocx test', function(){
      it("should call PutConvertWorkbook successfully" , function(){
      
        var localName = "Book1.xlsx"

     
        var format = "docx"
        var outPath = "OutResult/ConvertWorkbook.docx"

        var mapFiles = {};           

         mapFiles[localName]= fs.createReadStream(localPath  +localName) ;

        var request = new model.PutConvertWorkbookRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.outPath =  outPath;
        return cellsApi.putConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('convert_workbook_save_cloud_pptx__out_result_convert_workbookpptx test', function(){
      it("should call PutConvertWorkbook successfully" , function(){
      
        var localName = "Book1.xlsx"

     
        var format = "pptx"
        var outPath = "OutResult/ConvertWorkbook.pptx"

        var mapFiles = {};           

         mapFiles[localName]= fs.createReadStream(localPath  +localName) ;

        var request = new model.PutConvertWorkbookRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.outPath =  outPath;
        return cellsApi.putConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('convert_workbook_save_cloud_json__out_result_convert_workbookjson test', function(){
      it("should call PutConvertWorkbook successfully" , function(){
      
        var localName = "Book1.xlsx"

     
        var format = "json"
        var outPath = "OutResult/ConvertWorkbook.json"

        var mapFiles = {};           

         mapFiles[localName]= fs.createReadStream(localPath  +localName) ;

        var request = new model.PutConvertWorkbookRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.outPath =  outPath;
        return cellsApi.putConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('convert_workbook_save_cloud_sql__out_result_convert_workbooksql test', function(){
      it("should call PutConvertWorkbook successfully" , function(){
      
        var localName = "Book1.xlsx"

     
        var format = "sql"
        var outPath = "OutResult/ConvertWorkbook.sql"

        var mapFiles = {};           

         mapFiles[localName]= fs.createReadStream(localPath  +localName) ;

        var request = new model.PutConvertWorkbookRequest();
        request.file =  mapFiles;
        request.format =  format;
        request.outPath =  outPath;
        return cellsApi.putConvertWorkbook(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
});