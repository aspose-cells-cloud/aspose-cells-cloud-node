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


describe('DataProcessingController test', function() {
    this.timeout(200000);
    const cellsApi = new api.CellsApi(clientId, clientSecret,"v3.0",ApiURL);

    describe('post_workbook_data_cleansing test', function(){
      it("should call PostWorkbookDataCleansing successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "BookCsvDuplicateData.csv"
        var remoteName = "BookCsvDuplicateData.csv"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var dataCleansingDataFillDataFillDefaultValue = new model.DataFillValue();
         dataCleansingDataFillDataFillDefaultValue.defaultDate = "2024-01-01"  ;
         dataCleansingDataFillDataFillDefaultValue.defaultNumber = 0  ;
         dataCleansingDataFillDataFillDefaultValue.defaultBoolean = false  ;
        var dataCleansingDataFill = new model.DataFill();
         dataCleansingDataFill.dataFillDefaultValue = dataCleansingDataFillDataFillDefaultValue  ;
        var dataCleansing = new model.DataCleansing();
         dataCleansing.needFillData = true  ;
         dataCleansing.dataFill = dataCleansingDataFill  ;

        var request = new model.PostWorkbookDataCleansingRequest();
        request.name =  remoteName;
        request.dataCleansing =  dataCleansing;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorkbookDataCleansing(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_workbook_data_deduplication test', function(){
      it("should call PostWorkbookDataDeduplication successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "BookCsvDuplicateData.csv"
        var remoteName = "BookCsvDuplicateData.csv"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var deduplicationRegion = new model.DeduplicationRegion();


        var request = new model.PostWorkbookDataDeduplicationRequest();
        request.name =  remoteName;
        request.deduplicationRegion =  deduplicationRegion;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorkbookDataDeduplication(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_workbook_data_fill test', function(){
      it("should call PostWorkbookDataFill successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "BookCsvDuplicateData.csv"
        var remoteName = "BookCsvDuplicateData.csv"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var dataFillDataFillDefaultValue = new model.DataFillValue();
         dataFillDataFillDefaultValue.defaultDate = "2024-01-01"  ;
         dataFillDataFillDefaultValue.defaultNumber = 0  ;
         dataFillDataFillDefaultValue.defaultBoolean = false  ;
        var dataFill = new model.DataFill();
         dataFill.dataFillDefaultValue = dataFillDataFillDefaultValue  ;

        var request = new model.PostWorkbookDataFillRequest();
        request.name =  remoteName;
        request.dataFill =  dataFill;
        request.folder =  remoteFolder;
        request.storageName =  "";
        return cellsApi.postWorkbookDataFill(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
    describe('post_data_transformation test', function(){
      it("should call PostDataTransformation successfully" , function(){
        var remoteFolder = "TestData/In"
      
        var localName = "BookTableL2W.xlsx"
        var remoteName = "BookTableL2W.xlsx"

        var localNameRequest = new  model.UploadFileRequest();
        localNameRequest.uploadFiles ={localName:fs.createReadStream(localPath  + localName)};
        localNameRequest.path = remoteFolder + "/" + remoteName ;
        localNameRequest.storageName ="";
        cellsApi.uploadFile(localNameRequest );
     
        var dataTransformationRequestLoadDataLoadTo = new model.LoadTo();
         dataTransformationRequestLoadDataLoadTo.beginColumnIndex = 2  ;
         dataTransformationRequestLoadDataLoadTo.beginRowIndex = 3  ;
         dataTransformationRequestLoadDataLoadTo.worksheet = "L2W"  ;
        var dataTransformationRequestLoadDataDataQueryDataItem = new model.DataItem();
         dataTransformationRequestLoadDataDataQueryDataItem.dataItemType = "Table"  ;
         dataTransformationRequestLoadDataDataQueryDataItem.value = "Table1"  ;
        var dataTransformationRequestLoadDataDataQueryDataSource = new model.DataSource();
         dataTransformationRequestLoadDataDataQueryDataSource.dataSourceType = "CloudFileSystem"  ;
         dataTransformationRequestLoadDataDataQueryDataSource.dataPath = "BookTableL2W.xlsx"  ;
        var dataTransformationRequestLoadDataDataQuery = new model.DataQuery();
         dataTransformationRequestLoadDataDataQuery.name = "DataQuery"  ;
         dataTransformationRequestLoadDataDataQuery.dataItem = dataTransformationRequestLoadDataDataQueryDataItem  ;
         dataTransformationRequestLoadDataDataQuery.dataSource = dataTransformationRequestLoadDataDataQueryDataSource  ;
         dataTransformationRequestLoadDataDataQuery.dataSourceDataType = "ListObject"  ;
        var dataTransformationRequestLoadData = new model.LoadData();
         dataTransformationRequestLoadData.loadTo = dataTransformationRequestLoadDataLoadTo  ;
         dataTransformationRequestLoadData.dataQuery = dataTransformationRequestLoadDataDataQuery  ;
        var dataTransformationRequestAppliedStepsAppliedStep0AppliedOperateUnpivotColumnNames = new Array<string>();dataTransformationRequestAppliedStepsAppliedStep0AppliedOperateUnpivotColumnNames.push("2017");
        dataTransformationRequestAppliedStepsAppliedStep0AppliedOperateUnpivotColumnNames.push("2018");
        dataTransformationRequestAppliedStepsAppliedStep0AppliedOperateUnpivotColumnNames.push("2019");
        var dataTransformationRequestAppliedStepsAppliedStep0AppliedOperate = new model.UnpivotColumn();
         dataTransformationRequestAppliedStepsAppliedStep0AppliedOperate.appliedOperateType = "UnpivotColumn"  ;
         dataTransformationRequestAppliedStepsAppliedStep0AppliedOperate.valueMapName = "Count"  ;
         dataTransformationRequestAppliedStepsAppliedStep0AppliedOperate.columnMapName = "Date"  ;
         dataTransformationRequestAppliedStepsAppliedStep0AppliedOperate.unpivotColumnNames = dataTransformationRequestAppliedStepsAppliedStep0AppliedOperateUnpivotColumnNames  ;
        var dataTransformationRequestAppliedStepsAppliedStep0 = new model.AppliedStep();
         dataTransformationRequestAppliedStepsAppliedStep0.stepName = "UnpivotColumn"  ;
         dataTransformationRequestAppliedStepsAppliedStep0.appliedOperate = dataTransformationRequestAppliedStepsAppliedStep0AppliedOperate  ;
        var dataTransformationRequestAppliedSteps = new Array<model.AppliedStep>();dataTransformationRequestAppliedSteps.push(dataTransformationRequestAppliedStepsAppliedStep0);
        var dataTransformationRequest = new model.DataTransformationRequest();
         dataTransformationRequest.loadData = dataTransformationRequestLoadData  ;
         dataTransformationRequest.appliedSteps = dataTransformationRequestAppliedSteps  ;

        var request = new model.PostDataTransformationRequest();
        request.dataTransformationRequest =  dataTransformationRequest;
        return cellsApi.postDataTransformation(request).then((result) => {
            expect(result.response.statusCode).to.equal(200);
        });
      });
    }); 
});