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


describe('Conversion test', function() {
    this.timeout(200000);
    const cellsApi = new api.CellsApi(clientId, clientSecret,"v3.0",ApiURL);

    describe('workbook_save_as_csv__out_result_post_excel_save_ascsv test', function(){
      it("should call SaveSpreadsheetAs successfully" , function(){
      
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

        var saveOptionsData = new model.SaveOptionsData();
         saveOptionsData.filename = newfilename  ;

        var request = new model.SaveSpreadsheetAsRequest();
        request.name =  remoteName;
        request.format =  format;
        request.saveOptionsData =  saveOptionsData;
        request.folder =  remoteFolder;
        return cellsApi.saveSpreadsheetAs(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('workbook_save_as_pdf__out_result_post_excel_save_aspdf test', function(){
      it("should call SaveSpreadsheetAs successfully" , function(){
      
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

        var saveOptionsData = new model.SaveOptionsData();
         saveOptionsData.filename = newfilename  ;

        var request = new model.SaveSpreadsheetAsRequest();
        request.name =  remoteName;
        request.format =  format;
        request.saveOptionsData =  saveOptionsData;
        request.folder =  remoteFolder;
        return cellsApi.saveSpreadsheetAs(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_workbook_with_format_pdf test', function(){
      it("should call ExportSpreadsheetAsFormat successfully" , function(){
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"
        var remoteFolder = "TestData/In"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "pdf"


        var request = new model.ExportSpreadsheetAsFormatRequest();
        request.name =  remoteName;
        request.format =  format;
        request.folder =  remoteFolder;
        return cellsApi.exportSpreadsheetAsFormat(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_workbook_with_format_pptx test', function(){
      it("should call ExportSpreadsheetAsFormat successfully" , function(){
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"
        var remoteFolder = "TestData/In"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "pptx"


        var request = new model.ExportSpreadsheetAsFormatRequest();
        request.name =  remoteName;
        request.format =  format;
        request.folder =  remoteFolder;
        return cellsApi.exportSpreadsheetAsFormat(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('get_workbook_with_format_json test', function(){
      it("should call ExportSpreadsheetAsFormat successfully" , function(){
      
        var localName = "Book1.xlsx"
        var remoteName = "Book1.xlsx"
        var remoteFolder = "TestData/In"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "json"


        var request = new model.ExportSpreadsheetAsFormatRequest();
        request.name =  remoteName;
        request.format =  format;
        request.folder =  remoteFolder;
        return cellsApi.exportSpreadsheetAsFormat(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('convert_workbook_png test', function(){
      it("should call ConvertSpreadsheet successfully" , function(){
      
        var localName = "Book1.xlsx"

     
        var format = "png"


        var request = new model.ConvertSpreadsheetRequest();
        request.spreadsheet =  "TestData/" + localName;
        request.format =  format;
        return cellsApi.convertSpreadsheet(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('convert_workbook_sql test', function(){
      it("should call ConvertSpreadsheet successfully" , function(){
      
        var localName = "Book1.xlsx"

     
        var format = "sql"


        var request = new model.ConvertSpreadsheetRequest();
        request.spreadsheet =  "TestData/" + localName;
        request.format =  format;
        return cellsApi.convertSpreadsheet(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('convert_workbook_save_cloud_csv__out_result_convert_workbookcsv test', function(){
      it("should call ConvertSpreadsheet successfully" , function(){
      
        var localName = "Book1.xlsx"

     
        var format = "csv"
        var outPath = "OutResult/ConvertWorkbook.csv"


        var request = new model.ConvertSpreadsheetRequest();
        request.spreadsheet =  "TestData/" + localName;
        request.format =  format;
        request.outPath =  outPath;
        return cellsApi.convertSpreadsheet(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('convert_chart_to_image_svg test', function(){
      it("should call ConvertChartToImage successfully" , function(){
      
        var localName = "EmployeeSalesSummary.xlsx"

     
        var format = "svg"


        var request = new model.ConvertChartToImageRequest();
        request.spreadsheet =  "TestData/" + localName;
        request.worksheet =  "Sales";
        request.chartIndex =  0;
        request.format =  format;
        return cellsApi.convertChartToImage(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('convert_chart_to_pdf test', function(){
      it("should call ConvertChartToPdf successfully" , function(){
      
        var localName = "EmployeeSalesSummary.xlsx"

     

        var request = new model.ConvertChartToPdfRequest();
        request.spreadsheet =  "TestData/" + localName;
        request.worksheet =  "Sales";
        request.chartIndex =  0;
        return cellsApi.convertChartToPdf(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('export_chart_as_format_svg test', function(){
      it("should call ExportChartAsFormat successfully" , function(){
      
        var localName = "EmployeeSalesSummary.xlsx"
        var remoteName = "EmployeeSalesSummary.xlsx"
        var remoteFolder = "TestData/In"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var format = "svg"


        var request = new model.ExportChartAsFormatRequest();
        request.name =  localName;
        request.worksheet =  "Sales";
        request.chartIndex =  0;
        request.format =  format;
        request.folder =  remoteFolder;
        return cellsApi.exportChartAsFormat(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
});