/*
* MIT License

* Copyright (c) 2022 Aspose Pty Ltd

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

import http = require("http");
import request = require("request");

import { Configuration } from "./internal/configuration";
import { ObjectSerializer } from "./internal/objectSerializer";
import { addQueryParameterToUrl, invokeApiMethod } from "./internal/requestHelper";
import * as model from "./model/model";

export * from "./model/model";

/**
 * Library for communicating with the Aspose.Cells Cloud API
 */
export class CellsApi {
    /**
     * API configuration
     */
    public configuration: Configuration;

    /**
     * @param clientId client Id.
     * @param clientSecret client Secret.
     * @param baseUrl Base api Url.
     * @param debugMode A value indicating whether debug mode. In debug mode all requests and responses are logged to console.
     */
    constructor(clientId: string, clientSecret: string, apiVersion?:string, baseUrl?: string, debugMode?: boolean) {
        this.configuration = new Configuration(clientId, clientSecret,apiVersion, baseUrl, debugMode);
    }

    /**
     * Removes a date filter.             
     * @param requestObj contains request parameters
     */
    public async cellsAutoFilterDeleteWorksheetDateFilter(requestObj: model.CellsAutoFilter_DeleteWorksheetDateFilterRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsAutoFilterDeleteWorksheetDateFilter.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/autoFilter/dateFilter"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsAutoFilterDeleteWorksheetDateFilter.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsAutoFilterDeleteWorksheetDateFilter.');
        }

        // verify required parameter 'requestObj.fieldIndex' is not null or undefined
        if (requestObj.fieldIndex === null || requestObj.fieldIndex === undefined) {
            throw new Error('Required parameter "requestObj.fieldIndex" was null or undefined when calling cellsAutoFilterDeleteWorksheetDateFilter.');
        }

        // verify required parameter 'requestObj.dateTimeGroupingType' is not null or undefined
        if (requestObj.dateTimeGroupingType === null || requestObj.dateTimeGroupingType === undefined) {
            throw new Error('Required parameter "requestObj.dateTimeGroupingType" was null or undefined when calling cellsAutoFilterDeleteWorksheetDateFilter.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fieldIndex", requestObj.fieldIndex);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "dateTimeGroupingType", requestObj.dateTimeGroupingType);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "year", requestObj.year);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "month", requestObj.month);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "day", requestObj.day);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "hour", requestObj.hour);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "minute", requestObj.minute);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "second", requestObj.second);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete a filter for a filter column.             
     * @param requestObj contains request parameters
     */
    public async cellsAutoFilterDeleteWorksheetFilter(requestObj: model.CellsAutoFilter_DeleteWorksheetFilterRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsAutoFilterDeleteWorksheetFilter.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/autoFilter/filter"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsAutoFilterDeleteWorksheetFilter.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsAutoFilterDeleteWorksheetFilter.');
        }

        // verify required parameter 'requestObj.fieldIndex' is not null or undefined
        if (requestObj.fieldIndex === null || requestObj.fieldIndex === undefined) {
            throw new Error('Required parameter "requestObj.fieldIndex" was null or undefined when calling cellsAutoFilterDeleteWorksheetFilter.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fieldIndex", requestObj.fieldIndex);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "criteria", requestObj.criteria);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get Auto filter Description
     * @param requestObj contains request parameters
     */
    public async cellsAutoFilterGetWorksheetAutoFilter(requestObj: model.CellsAutoFilter_GetWorksheetAutoFilterRequest): Promise<{response: http.ClientResponse, body: model.AutoFilterResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsAutoFilterGetWorksheetAutoFilter.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/autoFilter"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsAutoFilterGetWorksheetAutoFilter.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsAutoFilterGetWorksheetAutoFilter.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AutoFilterResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async cellsAutoFilterPostWorksheetAutoFilterRefresh(requestObj: model.CellsAutoFilter_PostWorksheetAutoFilterRefreshRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsAutoFilterPostWorksheetAutoFilterRefresh.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/autoFilter/refresh"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsAutoFilterPostWorksheetAutoFilterRefresh.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsAutoFilterPostWorksheetAutoFilterRefresh.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Match all blank cell in the list.
     * @param requestObj contains request parameters
     */
    public async cellsAutoFilterPostWorksheetMatchBlanks(requestObj: model.CellsAutoFilter_PostWorksheetMatchBlanksRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsAutoFilterPostWorksheetMatchBlanks.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/autoFilter/matchBlanks"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsAutoFilterPostWorksheetMatchBlanks.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsAutoFilterPostWorksheetMatchBlanks.');
        }

        // verify required parameter 'requestObj.fieldIndex' is not null or undefined
        if (requestObj.fieldIndex === null || requestObj.fieldIndex === undefined) {
            throw new Error('Required parameter "requestObj.fieldIndex" was null or undefined when calling cellsAutoFilterPostWorksheetMatchBlanks.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fieldIndex", requestObj.fieldIndex);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Match all not blank cell in the list.             
     * @param requestObj contains request parameters
     */
    public async cellsAutoFilterPostWorksheetMatchNonBlanks(requestObj: model.CellsAutoFilter_PostWorksheetMatchNonBlanksRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsAutoFilterPostWorksheetMatchNonBlanks.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/autoFilter/matchNonBlanks"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsAutoFilterPostWorksheetMatchNonBlanks.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsAutoFilterPostWorksheetMatchNonBlanks.');
        }

        // verify required parameter 'requestObj.fieldIndex' is not null or undefined
        if (requestObj.fieldIndex === null || requestObj.fieldIndex === undefined) {
            throw new Error('Required parameter "requestObj.fieldIndex" was null or undefined when calling cellsAutoFilterPostWorksheetMatchNonBlanks.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fieldIndex", requestObj.fieldIndex);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async cellsAutoFilterPutWorksheetColorFilter(requestObj: model.CellsAutoFilter_PutWorksheetColorFilterRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsAutoFilterPutWorksheetColorFilter.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/autoFilter/colorFilter"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsAutoFilterPutWorksheetColorFilter.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsAutoFilterPutWorksheetColorFilter.');
        }

        // verify required parameter 'requestObj.range' is not null or undefined
        if (requestObj.range === null || requestObj.range === undefined) {
            throw new Error('Required parameter "requestObj.range" was null or undefined when calling cellsAutoFilterPutWorksheetColorFilter.');
        }

        // verify required parameter 'requestObj.fieldIndex' is not null or undefined
        if (requestObj.fieldIndex === null || requestObj.fieldIndex === undefined) {
            throw new Error('Required parameter "requestObj.fieldIndex" was null or undefined when calling cellsAutoFilterPutWorksheetColorFilter.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "range", requestObj.range);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fieldIndex", requestObj.fieldIndex);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "matchBlanks", requestObj.matchBlanks);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "refresh", requestObj.refresh);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.colorFilter == null) ? "" : ObjectSerializer.serialize(requestObj.colorFilter, requestObj.colorFilter.constructor.name === "Object" ? "ColorFilterRequest" : requestObj.colorFilter.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Filters a list with a custom criteria.             
     * @param requestObj contains request parameters
     */
    public async cellsAutoFilterPutWorksheetCustomFilter(requestObj: model.CellsAutoFilter_PutWorksheetCustomFilterRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsAutoFilterPutWorksheetCustomFilter.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/autoFilter/custom"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsAutoFilterPutWorksheetCustomFilter.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsAutoFilterPutWorksheetCustomFilter.');
        }

        // verify required parameter 'requestObj.range' is not null or undefined
        if (requestObj.range === null || requestObj.range === undefined) {
            throw new Error('Required parameter "requestObj.range" was null or undefined when calling cellsAutoFilterPutWorksheetCustomFilter.');
        }

        // verify required parameter 'requestObj.fieldIndex' is not null or undefined
        if (requestObj.fieldIndex === null || requestObj.fieldIndex === undefined) {
            throw new Error('Required parameter "requestObj.fieldIndex" was null or undefined when calling cellsAutoFilterPutWorksheetCustomFilter.');
        }

        // verify required parameter 'requestObj.operatorType1' is not null or undefined
        if (requestObj.operatorType1 === null || requestObj.operatorType1 === undefined) {
            throw new Error('Required parameter "requestObj.operatorType1" was null or undefined when calling cellsAutoFilterPutWorksheetCustomFilter.');
        }

        // verify required parameter 'requestObj.criteria1' is not null or undefined
        if (requestObj.criteria1 === null || requestObj.criteria1 === undefined) {
            throw new Error('Required parameter "requestObj.criteria1" was null or undefined when calling cellsAutoFilterPutWorksheetCustomFilter.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "range", requestObj.range);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fieldIndex", requestObj.fieldIndex);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "operatorType1", requestObj.operatorType1);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "criteria1", requestObj.criteria1);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "isAnd", requestObj.isAnd);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "operatorType2", requestObj.operatorType2);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "criteria2", requestObj.criteria2);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "matchBlanks", requestObj.matchBlanks);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "refresh", requestObj.refresh);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * add date filter in worksheet 
     * @param requestObj contains request parameters
     */
    public async cellsAutoFilterPutWorksheetDateFilter(requestObj: model.CellsAutoFilter_PutWorksheetDateFilterRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsAutoFilterPutWorksheetDateFilter.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/autoFilter/dateFilter"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsAutoFilterPutWorksheetDateFilter.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsAutoFilterPutWorksheetDateFilter.');
        }

        // verify required parameter 'requestObj.range' is not null or undefined
        if (requestObj.range === null || requestObj.range === undefined) {
            throw new Error('Required parameter "requestObj.range" was null or undefined when calling cellsAutoFilterPutWorksheetDateFilter.');
        }

        // verify required parameter 'requestObj.fieldIndex' is not null or undefined
        if (requestObj.fieldIndex === null || requestObj.fieldIndex === undefined) {
            throw new Error('Required parameter "requestObj.fieldIndex" was null or undefined when calling cellsAutoFilterPutWorksheetDateFilter.');
        }

        // verify required parameter 'requestObj.dateTimeGroupingType' is not null or undefined
        if (requestObj.dateTimeGroupingType === null || requestObj.dateTimeGroupingType === undefined) {
            throw new Error('Required parameter "requestObj.dateTimeGroupingType" was null or undefined when calling cellsAutoFilterPutWorksheetDateFilter.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "range", requestObj.range);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fieldIndex", requestObj.fieldIndex);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "dateTimeGroupingType", requestObj.dateTimeGroupingType);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "year", requestObj.year);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "month", requestObj.month);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "day", requestObj.day);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "hour", requestObj.hour);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "minute", requestObj.minute);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "second", requestObj.second);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "matchBlanks", requestObj.matchBlanks);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "refresh", requestObj.refresh);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async cellsAutoFilterPutWorksheetDynamicFilter(requestObj: model.CellsAutoFilter_PutWorksheetDynamicFilterRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsAutoFilterPutWorksheetDynamicFilter.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/autoFilter/dynamicFilter"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsAutoFilterPutWorksheetDynamicFilter.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsAutoFilterPutWorksheetDynamicFilter.');
        }

        // verify required parameter 'requestObj.range' is not null or undefined
        if (requestObj.range === null || requestObj.range === undefined) {
            throw new Error('Required parameter "requestObj.range" was null or undefined when calling cellsAutoFilterPutWorksheetDynamicFilter.');
        }

        // verify required parameter 'requestObj.fieldIndex' is not null or undefined
        if (requestObj.fieldIndex === null || requestObj.fieldIndex === undefined) {
            throw new Error('Required parameter "requestObj.fieldIndex" was null or undefined when calling cellsAutoFilterPutWorksheetDynamicFilter.');
        }

        // verify required parameter 'requestObj.dynamicFilterType' is not null or undefined
        if (requestObj.dynamicFilterType === null || requestObj.dynamicFilterType === undefined) {
            throw new Error('Required parameter "requestObj.dynamicFilterType" was null or undefined when calling cellsAutoFilterPutWorksheetDynamicFilter.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "range", requestObj.range);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fieldIndex", requestObj.fieldIndex);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "dynamicFilterType", requestObj.dynamicFilterType);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "matchBlanks", requestObj.matchBlanks);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "refresh", requestObj.refresh);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Adds a filter for a filter column.             
     * @param requestObj contains request parameters
     */
    public async cellsAutoFilterPutWorksheetFilter(requestObj: model.CellsAutoFilter_PutWorksheetFilterRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsAutoFilterPutWorksheetFilter.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/autoFilter/filter"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsAutoFilterPutWorksheetFilter.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsAutoFilterPutWorksheetFilter.');
        }

        // verify required parameter 'requestObj.range' is not null or undefined
        if (requestObj.range === null || requestObj.range === undefined) {
            throw new Error('Required parameter "requestObj.range" was null or undefined when calling cellsAutoFilterPutWorksheetFilter.');
        }

        // verify required parameter 'requestObj.fieldIndex' is not null or undefined
        if (requestObj.fieldIndex === null || requestObj.fieldIndex === undefined) {
            throw new Error('Required parameter "requestObj.fieldIndex" was null or undefined when calling cellsAutoFilterPutWorksheetFilter.');
        }

        // verify required parameter 'requestObj.criteria' is not null or undefined
        if (requestObj.criteria === null || requestObj.criteria === undefined) {
            throw new Error('Required parameter "requestObj.criteria" was null or undefined when calling cellsAutoFilterPutWorksheetFilter.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "range", requestObj.range);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fieldIndex", requestObj.fieldIndex);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "criteria", requestObj.criteria);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "matchBlanks", requestObj.matchBlanks);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "refresh", requestObj.refresh);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Filter the top 10 item in the list
     * @param requestObj contains request parameters
     */
    public async cellsAutoFilterPutWorksheetFilterTop10(requestObj: model.CellsAutoFilter_PutWorksheetFilterTop10Request): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsAutoFilterPutWorksheetFilterTop10.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/autoFilter/filterTop10"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsAutoFilterPutWorksheetFilterTop10.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsAutoFilterPutWorksheetFilterTop10.');
        }

        // verify required parameter 'requestObj.range' is not null or undefined
        if (requestObj.range === null || requestObj.range === undefined) {
            throw new Error('Required parameter "requestObj.range" was null or undefined when calling cellsAutoFilterPutWorksheetFilterTop10.');
        }

        // verify required parameter 'requestObj.fieldIndex' is not null or undefined
        if (requestObj.fieldIndex === null || requestObj.fieldIndex === undefined) {
            throw new Error('Required parameter "requestObj.fieldIndex" was null or undefined when calling cellsAutoFilterPutWorksheetFilterTop10.');
        }

        // verify required parameter 'requestObj.isTop' is not null or undefined
        if (requestObj.isTop === null || requestObj.isTop === undefined) {
            throw new Error('Required parameter "requestObj.isTop" was null or undefined when calling cellsAutoFilterPutWorksheetFilterTop10.');
        }

        // verify required parameter 'requestObj.isPercent' is not null or undefined
        if (requestObj.isPercent === null || requestObj.isPercent === undefined) {
            throw new Error('Required parameter "requestObj.isPercent" was null or undefined when calling cellsAutoFilterPutWorksheetFilterTop10.');
        }

        // verify required parameter 'requestObj.itemCount' is not null or undefined
        if (requestObj.itemCount === null || requestObj.itemCount === undefined) {
            throw new Error('Required parameter "requestObj.itemCount" was null or undefined when calling cellsAutoFilterPutWorksheetFilterTop10.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "range", requestObj.range);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fieldIndex", requestObj.fieldIndex);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "isTop", requestObj.isTop);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "isPercent", requestObj.isPercent);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "itemCount", requestObj.itemCount);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "matchBlanks", requestObj.matchBlanks);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "refresh", requestObj.refresh);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Adds an icon filter.
     * @param requestObj contains request parameters
     */
    public async cellsAutoFilterPutWorksheetIconFilter(requestObj: model.CellsAutoFilter_PutWorksheetIconFilterRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsAutoFilterPutWorksheetIconFilter.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/autoFilter/iconFilter"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsAutoFilterPutWorksheetIconFilter.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsAutoFilterPutWorksheetIconFilter.');
        }

        // verify required parameter 'requestObj.range' is not null or undefined
        if (requestObj.range === null || requestObj.range === undefined) {
            throw new Error('Required parameter "requestObj.range" was null or undefined when calling cellsAutoFilterPutWorksheetIconFilter.');
        }

        // verify required parameter 'requestObj.fieldIndex' is not null or undefined
        if (requestObj.fieldIndex === null || requestObj.fieldIndex === undefined) {
            throw new Error('Required parameter "requestObj.fieldIndex" was null or undefined when calling cellsAutoFilterPutWorksheetIconFilter.');
        }

        // verify required parameter 'requestObj.iconSetType' is not null or undefined
        if (requestObj.iconSetType === null || requestObj.iconSetType === undefined) {
            throw new Error('Required parameter "requestObj.iconSetType" was null or undefined when calling cellsAutoFilterPutWorksheetIconFilter.');
        }

        // verify required parameter 'requestObj.iconId' is not null or undefined
        if (requestObj.iconId === null || requestObj.iconId === undefined) {
            throw new Error('Required parameter "requestObj.iconId" was null or undefined when calling cellsAutoFilterPutWorksheetIconFilter.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "range", requestObj.range);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fieldIndex", requestObj.fieldIndex);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "iconSetType", requestObj.iconSetType);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "iconId", requestObj.iconId);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "matchBlanks", requestObj.matchBlanks);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "refresh", requestObj.refresh);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get autoshape info.
     * @param requestObj contains request parameters
     */
    public async cellsAutoshapesGetWorksheetAutoshape(requestObj: model.CellsAutoshapes_GetWorksheetAutoshapeRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsAutoshapesGetWorksheetAutoshape.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/autoshapes/{autoshapeNumber}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "autoshapeNumber" + "}", String(requestObj.autoshapeNumber));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsAutoshapesGetWorksheetAutoshape.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsAutoshapesGetWorksheetAutoshape.');
        }

        // verify required parameter 'requestObj.autoshapeNumber' is not null or undefined
        if (requestObj.autoshapeNumber === null || requestObj.autoshapeNumber === undefined) {
            throw new Error('Required parameter "requestObj.autoshapeNumber" was null or undefined when calling cellsAutoshapesGetWorksheetAutoshape.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get worksheet autoshapes info.
     * @param requestObj contains request parameters
     */
    public async cellsAutoshapesGetWorksheetAutoshapes(requestObj: model.CellsAutoshapes_GetWorksheetAutoshapesRequest): Promise<{response: http.ClientResponse, body: model.AutoShapesResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsAutoshapesGetWorksheetAutoshapes.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/autoshapes"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsAutoshapesGetWorksheetAutoshapes.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsAutoshapesGetWorksheetAutoshapes.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AutoShapesResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get chart area info.
     * @param requestObj contains request parameters
     */
    public async cellsChartAreaGetChartArea(requestObj: model.CellsChartArea_GetChartAreaRequest): Promise<{response: http.ClientResponse, body: model.ChartAreaResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsChartAreaGetChartArea.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/charts/{chartIndex}/chartArea"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "chartIndex" + "}", String(requestObj.chartIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsChartAreaGetChartArea.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsChartAreaGetChartArea.');
        }

        // verify required parameter 'requestObj.chartIndex' is not null or undefined
        if (requestObj.chartIndex === null || requestObj.chartIndex === undefined) {
            throw new Error('Required parameter "requestObj.chartIndex" was null or undefined when calling cellsChartAreaGetChartArea.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ChartAreaResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get chart area border info.
     * @param requestObj contains request parameters
     */
    public async cellsChartAreaGetChartAreaBorder(requestObj: model.CellsChartArea_GetChartAreaBorderRequest): Promise<{response: http.ClientResponse, body: model.LineResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsChartAreaGetChartAreaBorder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/charts/{chartIndex}/chartArea/border"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "chartIndex" + "}", String(requestObj.chartIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsChartAreaGetChartAreaBorder.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsChartAreaGetChartAreaBorder.');
        }

        // verify required parameter 'requestObj.chartIndex' is not null or undefined
        if (requestObj.chartIndex === null || requestObj.chartIndex === undefined) {
            throw new Error('Required parameter "requestObj.chartIndex" was null or undefined when calling cellsChartAreaGetChartAreaBorder.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "LineResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get chart area fill format info.
     * @param requestObj contains request parameters
     */
    public async cellsChartAreaGetChartAreaFillFormat(requestObj: model.CellsChartArea_GetChartAreaFillFormatRequest): Promise<{response: http.ClientResponse, body: model.FillFormatResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsChartAreaGetChartAreaFillFormat.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/charts/{chartIndex}/chartArea/fillFormat"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "chartIndex" + "}", String(requestObj.chartIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsChartAreaGetChartAreaFillFormat.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsChartAreaGetChartAreaFillFormat.');
        }

        // verify required parameter 'requestObj.chartIndex' is not null or undefined
        if (requestObj.chartIndex === null || requestObj.chartIndex === undefined) {
            throw new Error('Required parameter "requestObj.chartIndex" was null or undefined when calling cellsChartAreaGetChartAreaFillFormat.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FillFormatResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Hide legend in chart
     * @param requestObj contains request parameters
     */
    public async cellsChartsDeleteWorksheetChartLegend(requestObj: model.CellsCharts_DeleteWorksheetChartLegendRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsChartsDeleteWorksheetChartLegend.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/charts/{chartIndex}/legend"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "chartIndex" + "}", String(requestObj.chartIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsChartsDeleteWorksheetChartLegend.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsChartsDeleteWorksheetChartLegend.');
        }

        // verify required parameter 'requestObj.chartIndex' is not null or undefined
        if (requestObj.chartIndex === null || requestObj.chartIndex === undefined) {
            throw new Error('Required parameter "requestObj.chartIndex" was null or undefined when calling cellsChartsDeleteWorksheetChartLegend.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Hide title in chart
     * @param requestObj contains request parameters
     */
    public async cellsChartsDeleteWorksheetChartTitle(requestObj: model.CellsCharts_DeleteWorksheetChartTitleRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsChartsDeleteWorksheetChartTitle.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/charts/{chartIndex}/title"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "chartIndex" + "}", String(requestObj.chartIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsChartsDeleteWorksheetChartTitle.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsChartsDeleteWorksheetChartTitle.');
        }

        // verify required parameter 'requestObj.chartIndex' is not null or undefined
        if (requestObj.chartIndex === null || requestObj.chartIndex === undefined) {
            throw new Error('Required parameter "requestObj.chartIndex" was null or undefined when calling cellsChartsDeleteWorksheetChartTitle.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Clear the charts.
     * @param requestObj contains request parameters
     */
    public async cellsChartsDeleteWorksheetClearCharts(requestObj: model.CellsCharts_DeleteWorksheetClearChartsRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsChartsDeleteWorksheetClearCharts.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/charts"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsChartsDeleteWorksheetClearCharts.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsChartsDeleteWorksheetClearCharts.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete worksheet chart by index.
     * @param requestObj contains request parameters
     */
    public async cellsChartsDeleteWorksheetDeleteChart(requestObj: model.CellsCharts_DeleteWorksheetDeleteChartRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsChartsDeleteWorksheetDeleteChart.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/charts/{chartIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "chartIndex" + "}", String(requestObj.chartIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsChartsDeleteWorksheetDeleteChart.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsChartsDeleteWorksheetDeleteChart.');
        }

        // verify required parameter 'requestObj.chartIndex' is not null or undefined
        if (requestObj.chartIndex === null || requestObj.chartIndex === undefined) {
            throw new Error('Required parameter "requestObj.chartIndex" was null or undefined when calling cellsChartsDeleteWorksheetDeleteChart.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get chart info.
     * @param requestObj contains request parameters
     */
    public async cellsChartsGetWorksheetChart(requestObj: model.CellsCharts_GetWorksheetChartRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsChartsGetWorksheetChart.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/charts/{chartNumber}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "chartNumber" + "}", String(requestObj.chartNumber));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsChartsGetWorksheetChart.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsChartsGetWorksheetChart.');
        }

        // verify required parameter 'requestObj.chartNumber' is not null or undefined
        if (requestObj.chartNumber === null || requestObj.chartNumber === undefined) {
            throw new Error('Required parameter "requestObj.chartNumber" was null or undefined when calling cellsChartsGetWorksheetChart.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get chart legend
     * @param requestObj contains request parameters
     */
    public async cellsChartsGetWorksheetChartLegend(requestObj: model.CellsCharts_GetWorksheetChartLegendRequest): Promise<{response: http.ClientResponse, body: model.LegendResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsChartsGetWorksheetChartLegend.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/charts/{chartIndex}/legend"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "chartIndex" + "}", String(requestObj.chartIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsChartsGetWorksheetChartLegend.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsChartsGetWorksheetChartLegend.');
        }

        // verify required parameter 'requestObj.chartIndex' is not null or undefined
        if (requestObj.chartIndex === null || requestObj.chartIndex === undefined) {
            throw new Error('Required parameter "requestObj.chartIndex" was null or undefined when calling cellsChartsGetWorksheetChartLegend.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "LegendResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get chart title
     * @param requestObj contains request parameters
     */
    public async cellsChartsGetWorksheetChartTitle(requestObj: model.CellsCharts_GetWorksheetChartTitleRequest): Promise<{response: http.ClientResponse, body: model.TitleResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsChartsGetWorksheetChartTitle.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/charts/{chartIndex}/title"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "chartIndex" + "}", String(requestObj.chartIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsChartsGetWorksheetChartTitle.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsChartsGetWorksheetChartTitle.');
        }

        // verify required parameter 'requestObj.chartIndex' is not null or undefined
        if (requestObj.chartIndex === null || requestObj.chartIndex === undefined) {
            throw new Error('Required parameter "requestObj.chartIndex" was null or undefined when calling cellsChartsGetWorksheetChartTitle.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "TitleResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get worksheet charts info.
     * @param requestObj contains request parameters
     */
    public async cellsChartsGetWorksheetCharts(requestObj: model.CellsCharts_GetWorksheetChartsRequest): Promise<{response: http.ClientResponse, body: model.ChartsResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsChartsGetWorksheetCharts.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/charts"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsChartsGetWorksheetCharts.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsChartsGetWorksheetCharts.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ChartsResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Update chart propreties
     * @param requestObj contains request parameters
     */
    public async cellsChartsPostWorksheetChart(requestObj: model.CellsCharts_PostWorksheetChartRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsChartsPostWorksheetChart.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/charts/{chartIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "chartIndex" + "}", String(requestObj.chartIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsChartsPostWorksheetChart.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsChartsPostWorksheetChart.');
        }

        // verify required parameter 'requestObj.chartIndex' is not null or undefined
        if (requestObj.chartIndex === null || requestObj.chartIndex === undefined) {
            throw new Error('Required parameter "requestObj.chartIndex" was null or undefined when calling cellsChartsPostWorksheetChart.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.chart == null) ? "" : ObjectSerializer.serialize(requestObj.chart, requestObj.chart.constructor.name === "Object" ? "Chart" : requestObj.chart.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Update chart legend
     * @param requestObj contains request parameters
     */
    public async cellsChartsPostWorksheetChartLegend(requestObj: model.CellsCharts_PostWorksheetChartLegendRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsChartsPostWorksheetChartLegend.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/charts/{chartIndex}/legend"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "chartIndex" + "}", String(requestObj.chartIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsChartsPostWorksheetChartLegend.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsChartsPostWorksheetChartLegend.');
        }

        // verify required parameter 'requestObj.chartIndex' is not null or undefined
        if (requestObj.chartIndex === null || requestObj.chartIndex === undefined) {
            throw new Error('Required parameter "requestObj.chartIndex" was null or undefined when calling cellsChartsPostWorksheetChartLegend.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.legend == null) ? "" : ObjectSerializer.serialize(requestObj.legend, requestObj.legend.constructor.name === "Object" ? "Legend" : requestObj.legend.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Update chart title
     * @param requestObj contains request parameters
     */
    public async cellsChartsPostWorksheetChartTitle(requestObj: model.CellsCharts_PostWorksheetChartTitleRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsChartsPostWorksheetChartTitle.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/charts/{chartIndex}/title"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "chartIndex" + "}", String(requestObj.chartIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsChartsPostWorksheetChartTitle.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsChartsPostWorksheetChartTitle.');
        }

        // verify required parameter 'requestObj.chartIndex' is not null or undefined
        if (requestObj.chartIndex === null || requestObj.chartIndex === undefined) {
            throw new Error('Required parameter "requestObj.chartIndex" was null or undefined when calling cellsChartsPostWorksheetChartTitle.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.title == null) ? "" : ObjectSerializer.serialize(requestObj.title, requestObj.title.constructor.name === "Object" ? "Title" : requestObj.title.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Add new chart to worksheet.
     * @param requestObj contains request parameters
     */
    public async cellsChartsPutWorksheetAddChart(requestObj: model.CellsCharts_PutWorksheetAddChartRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsChartsPutWorksheetAddChart.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/charts"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsChartsPutWorksheetAddChart.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsChartsPutWorksheetAddChart.');
        }

        // verify required parameter 'requestObj.chartType' is not null or undefined
        if (requestObj.chartType === null || requestObj.chartType === undefined) {
            throw new Error('Required parameter "requestObj.chartType" was null or undefined when calling cellsChartsPutWorksheetAddChart.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "chartType", requestObj.chartType);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "upperLeftRow", requestObj.upperLeftRow);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "upperLeftColumn", requestObj.upperLeftColumn);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "lowerRightRow", requestObj.lowerRightRow);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "lowerRightColumn", requestObj.lowerRightColumn);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "area", requestObj.area);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "isVertical", requestObj.isVertical);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "categoryData", requestObj.categoryData);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "isAutoGetSerialName", requestObj.isAutoGetSerialName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "title", requestObj.title);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "dataLabels", requestObj.dataLabels);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "dataLabelsPosition", requestObj.dataLabelsPosition);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pivotTableSheet", requestObj.pivotTableSheet);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pivotTableName", requestObj.pivotTableName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Show legend in chart
     * @param requestObj contains request parameters
     */
    public async cellsChartsPutWorksheetChartLegend(requestObj: model.CellsCharts_PutWorksheetChartLegendRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsChartsPutWorksheetChartLegend.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/charts/{chartIndex}/legend"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "chartIndex" + "}", String(requestObj.chartIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsChartsPutWorksheetChartLegend.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsChartsPutWorksheetChartLegend.');
        }

        // verify required parameter 'requestObj.chartIndex' is not null or undefined
        if (requestObj.chartIndex === null || requestObj.chartIndex === undefined) {
            throw new Error('Required parameter "requestObj.chartIndex" was null or undefined when calling cellsChartsPutWorksheetChartLegend.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Add chart title / Set chart title visible
     * @param requestObj contains request parameters
     */
    public async cellsChartsPutWorksheetChartTitle(requestObj: model.CellsCharts_PutWorksheetChartTitleRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsChartsPutWorksheetChartTitle.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/charts/{chartIndex}/title"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "chartIndex" + "}", String(requestObj.chartIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsChartsPutWorksheetChartTitle.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsChartsPutWorksheetChartTitle.');
        }

        // verify required parameter 'requestObj.chartIndex' is not null or undefined
        if (requestObj.chartIndex === null || requestObj.chartIndex === undefined) {
            throw new Error('Required parameter "requestObj.chartIndex" was null or undefined when calling cellsChartsPutWorksheetChartTitle.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.title == null) ? "" : ObjectSerializer.serialize(requestObj.title, requestObj.title.constructor.name === "Object" ? "Title" : requestObj.title.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Remove conditional formatting
     * @param requestObj contains request parameters
     */
    public async cellsConditionalFormattingsDeleteWorksheetConditionalFormatting(requestObj: model.CellsConditionalFormattings_DeleteWorksheetConditionalFormattingRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsConditionalFormattingsDeleteWorksheetConditionalFormatting.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/conditionalFormattings/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsConditionalFormattingsDeleteWorksheetConditionalFormatting.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsConditionalFormattingsDeleteWorksheetConditionalFormatting.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling cellsConditionalFormattingsDeleteWorksheetConditionalFormatting.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Remove cell area from conditional formatting.
     * @param requestObj contains request parameters
     */
    public async cellsConditionalFormattingsDeleteWorksheetConditionalFormattingArea(requestObj: model.CellsConditionalFormattings_DeleteWorksheetConditionalFormattingAreaRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsConditionalFormattingsDeleteWorksheetConditionalFormattingArea.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/conditionalFormattings/area"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsConditionalFormattingsDeleteWorksheetConditionalFormattingArea.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsConditionalFormattingsDeleteWorksheetConditionalFormattingArea.');
        }

        // verify required parameter 'requestObj.startRow' is not null or undefined
        if (requestObj.startRow === null || requestObj.startRow === undefined) {
            throw new Error('Required parameter "requestObj.startRow" was null or undefined when calling cellsConditionalFormattingsDeleteWorksheetConditionalFormattingArea.');
        }

        // verify required parameter 'requestObj.startColumn' is not null or undefined
        if (requestObj.startColumn === null || requestObj.startColumn === undefined) {
            throw new Error('Required parameter "requestObj.startColumn" was null or undefined when calling cellsConditionalFormattingsDeleteWorksheetConditionalFormattingArea.');
        }

        // verify required parameter 'requestObj.totalRows' is not null or undefined
        if (requestObj.totalRows === null || requestObj.totalRows === undefined) {
            throw new Error('Required parameter "requestObj.totalRows" was null or undefined when calling cellsConditionalFormattingsDeleteWorksheetConditionalFormattingArea.');
        }

        // verify required parameter 'requestObj.totalColumns' is not null or undefined
        if (requestObj.totalColumns === null || requestObj.totalColumns === undefined) {
            throw new Error('Required parameter "requestObj.totalColumns" was null or undefined when calling cellsConditionalFormattingsDeleteWorksheetConditionalFormattingArea.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "startRow", requestObj.startRow);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "startColumn", requestObj.startColumn);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "totalRows", requestObj.totalRows);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "totalColumns", requestObj.totalColumns);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Clear all condition formattings
     * @param requestObj contains request parameters
     */
    public async cellsConditionalFormattingsDeleteWorksheetConditionalFormattings(requestObj: model.CellsConditionalFormattings_DeleteWorksheetConditionalFormattingsRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsConditionalFormattingsDeleteWorksheetConditionalFormattings.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/conditionalFormattings"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsConditionalFormattingsDeleteWorksheetConditionalFormattings.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsConditionalFormattingsDeleteWorksheetConditionalFormattings.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get conditional formatting
     * @param requestObj contains request parameters
     */
    public async cellsConditionalFormattingsGetWorksheetConditionalFormatting(requestObj: model.CellsConditionalFormattings_GetWorksheetConditionalFormattingRequest): Promise<{response: http.ClientResponse, body: model.ConditionalFormattingResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsConditionalFormattingsGetWorksheetConditionalFormatting.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/conditionalFormattings/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsConditionalFormattingsGetWorksheetConditionalFormatting.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsConditionalFormattingsGetWorksheetConditionalFormatting.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling cellsConditionalFormattingsGetWorksheetConditionalFormatting.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ConditionalFormattingResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get conditional formattings 
     * @param requestObj contains request parameters
     */
    public async cellsConditionalFormattingsGetWorksheetConditionalFormattings(requestObj: model.CellsConditionalFormattings_GetWorksheetConditionalFormattingsRequest): Promise<{response: http.ClientResponse, body: model.ConditionalFormattingsResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsConditionalFormattingsGetWorksheetConditionalFormattings.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/conditionalFormattings"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsConditionalFormattingsGetWorksheetConditionalFormattings.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsConditionalFormattingsGetWorksheetConditionalFormattings.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ConditionalFormattingsResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Add a condition formatting.
     * @param requestObj contains request parameters
     */
    public async cellsConditionalFormattingsPutWorksheetConditionalFormatting(requestObj: model.CellsConditionalFormattings_PutWorksheetConditionalFormattingRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsConditionalFormattingsPutWorksheetConditionalFormatting.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/conditionalFormattings"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsConditionalFormattingsPutWorksheetConditionalFormatting.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsConditionalFormattingsPutWorksheetConditionalFormatting.');
        }

        // verify required parameter 'requestObj.cellArea' is not null or undefined
        if (requestObj.cellArea === null || requestObj.cellArea === undefined) {
            throw new Error('Required parameter "requestObj.cellArea" was null or undefined when calling cellsConditionalFormattingsPutWorksheetConditionalFormatting.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "cellArea", requestObj.cellArea);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.formatCondition == null) ? "" : ObjectSerializer.serialize(requestObj.formatCondition, requestObj.formatCondition.constructor.name === "Object" ? "FormatCondition" : requestObj.formatCondition.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Add a format condition.
     * @param requestObj contains request parameters
     */
    public async cellsConditionalFormattingsPutWorksheetFormatCondition(requestObj: model.CellsConditionalFormattings_PutWorksheetFormatConditionRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsConditionalFormattingsPutWorksheetFormatCondition.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/conditionalFormattings/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsConditionalFormattingsPutWorksheetFormatCondition.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsConditionalFormattingsPutWorksheetFormatCondition.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling cellsConditionalFormattingsPutWorksheetFormatCondition.');
        }

        // verify required parameter 'requestObj.cellArea' is not null or undefined
        if (requestObj.cellArea === null || requestObj.cellArea === undefined) {
            throw new Error('Required parameter "requestObj.cellArea" was null or undefined when calling cellsConditionalFormattingsPutWorksheetFormatCondition.');
        }

        // verify required parameter 'requestObj.type' is not null or undefined
        if (requestObj.type === null || requestObj.type === undefined) {
            throw new Error('Required parameter "requestObj.type" was null or undefined when calling cellsConditionalFormattingsPutWorksheetFormatCondition.');
        }

        // verify required parameter 'requestObj.operatorType' is not null or undefined
        if (requestObj.operatorType === null || requestObj.operatorType === undefined) {
            throw new Error('Required parameter "requestObj.operatorType" was null or undefined when calling cellsConditionalFormattingsPutWorksheetFormatCondition.');
        }

        // verify required parameter 'requestObj.formula1' is not null or undefined
        if (requestObj.formula1 === null || requestObj.formula1 === undefined) {
            throw new Error('Required parameter "requestObj.formula1" was null or undefined when calling cellsConditionalFormattingsPutWorksheetFormatCondition.');
        }

        // verify required parameter 'requestObj.formula2' is not null or undefined
        if (requestObj.formula2 === null || requestObj.formula2 === undefined) {
            throw new Error('Required parameter "requestObj.formula2" was null or undefined when calling cellsConditionalFormattingsPutWorksheetFormatCondition.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "cellArea", requestObj.cellArea);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "type", requestObj.type);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "operatorType", requestObj.operatorType);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "formula1", requestObj.formula1);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "formula2", requestObj.formula2);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * add a cell area for format condition             
     * @param requestObj contains request parameters
     */
    public async cellsConditionalFormattingsPutWorksheetFormatConditionArea(requestObj: model.CellsConditionalFormattings_PutWorksheetFormatConditionAreaRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsConditionalFormattingsPutWorksheetFormatConditionArea.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/conditionalFormattings/{index}/area"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsConditionalFormattingsPutWorksheetFormatConditionArea.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsConditionalFormattingsPutWorksheetFormatConditionArea.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling cellsConditionalFormattingsPutWorksheetFormatConditionArea.');
        }

        // verify required parameter 'requestObj.cellArea' is not null or undefined
        if (requestObj.cellArea === null || requestObj.cellArea === undefined) {
            throw new Error('Required parameter "requestObj.cellArea" was null or undefined when calling cellsConditionalFormattingsPutWorksheetFormatConditionArea.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "cellArea", requestObj.cellArea);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Add a condition for format condition.
     * @param requestObj contains request parameters
     */
    public async cellsConditionalFormattingsPutWorksheetFormatConditionCondition(requestObj: model.CellsConditionalFormattings_PutWorksheetFormatConditionConditionRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsConditionalFormattingsPutWorksheetFormatConditionCondition.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/conditionalFormattings/{index}/condition"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsConditionalFormattingsPutWorksheetFormatConditionCondition.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsConditionalFormattingsPutWorksheetFormatConditionCondition.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling cellsConditionalFormattingsPutWorksheetFormatConditionCondition.');
        }

        // verify required parameter 'requestObj.type' is not null or undefined
        if (requestObj.type === null || requestObj.type === undefined) {
            throw new Error('Required parameter "requestObj.type" was null or undefined when calling cellsConditionalFormattingsPutWorksheetFormatConditionCondition.');
        }

        // verify required parameter 'requestObj.operatorType' is not null or undefined
        if (requestObj.operatorType === null || requestObj.operatorType === undefined) {
            throw new Error('Required parameter "requestObj.operatorType" was null or undefined when calling cellsConditionalFormattingsPutWorksheetFormatConditionCondition.');
        }

        // verify required parameter 'requestObj.formula1' is not null or undefined
        if (requestObj.formula1 === null || requestObj.formula1 === undefined) {
            throw new Error('Required parameter "requestObj.formula1" was null or undefined when calling cellsConditionalFormattingsPutWorksheetFormatConditionCondition.');
        }

        // verify required parameter 'requestObj.formula2' is not null or undefined
        if (requestObj.formula2 === null || requestObj.formula2 === undefined) {
            throw new Error('Required parameter "requestObj.formula2" was null or undefined when calling cellsConditionalFormattingsPutWorksheetFormatConditionCondition.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "type", requestObj.type);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "operatorType", requestObj.operatorType);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "formula1", requestObj.formula1);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "formula2", requestObj.formula2);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete worksheet columns.
     * @param requestObj contains request parameters
     */
    public async cellsDeleteWorksheetColumns(requestObj: model.Cells_DeleteWorksheetColumnsRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsDeleteWorksheetColumns.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/cells/columns/{columnIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "columnIndex" + "}", String(requestObj.columnIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsDeleteWorksheetColumns.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsDeleteWorksheetColumns.');
        }

        // verify required parameter 'requestObj.columnIndex' is not null or undefined
        if (requestObj.columnIndex === null || requestObj.columnIndex === undefined) {
            throw new Error('Required parameter "requestObj.columnIndex" was null or undefined when calling cellsDeleteWorksheetColumns.');
        }

        // verify required parameter 'requestObj.columns' is not null or undefined
        if (requestObj.columns === null || requestObj.columns === undefined) {
            throw new Error('Required parameter "requestObj.columns" was null or undefined when calling cellsDeleteWorksheetColumns.');
        }

        // verify required parameter 'requestObj.updateReference' is not null or undefined
        if (requestObj.updateReference === null || requestObj.updateReference === undefined) {
            throw new Error('Required parameter "requestObj.updateReference" was null or undefined when calling cellsDeleteWorksheetColumns.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "columns", requestObj.columns);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "updateReference", requestObj.updateReference);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete worksheet row.
     * @param requestObj contains request parameters
     */
    public async cellsDeleteWorksheetRow(requestObj: model.Cells_DeleteWorksheetRowRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsDeleteWorksheetRow.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/cells/rows/{rowIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "rowIndex" + "}", String(requestObj.rowIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsDeleteWorksheetRow.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsDeleteWorksheetRow.');
        }

        // verify required parameter 'requestObj.rowIndex' is not null or undefined
        if (requestObj.rowIndex === null || requestObj.rowIndex === undefined) {
            throw new Error('Required parameter "requestObj.rowIndex" was null or undefined when calling cellsDeleteWorksheetRow.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete several worksheet rows.
     * @param requestObj contains request parameters
     */
    public async cellsDeleteWorksheetRows(requestObj: model.Cells_DeleteWorksheetRowsRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsDeleteWorksheetRows.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/cells/rows"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsDeleteWorksheetRows.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsDeleteWorksheetRows.');
        }

        // verify required parameter 'requestObj.startrow' is not null or undefined
        if (requestObj.startrow === null || requestObj.startrow === undefined) {
            throw new Error('Required parameter "requestObj.startrow" was null or undefined when calling cellsDeleteWorksheetRows.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "startrow", requestObj.startrow);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "totalRows", requestObj.totalRows);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "updateReference", requestObj.updateReference);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read cell data by cell's name.
     * @param requestObj contains request parameters
     */
    public async cellsGetCellHtmlString(requestObj: model.Cells_GetCellHtmlStringRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsGetCellHtmlString.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/cells/{cellName}/htmlstring"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "cellName" + "}", String(requestObj.cellName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsGetCellHtmlString.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsGetCellHtmlString.');
        }

        // verify required parameter 'requestObj.cellName' is not null or undefined
        if (requestObj.cellName === null || requestObj.cellName === undefined) {
            throw new Error('Required parameter "requestObj.cellName" was null or undefined when calling cellsGetCellHtmlString.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "any");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read cell data by cell's name.
     * @param requestObj contains request parameters
     */
    public async cellsGetWorksheetCell(requestObj: model.Cells_GetWorksheetCellRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsGetWorksheetCell.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/cells/{cellOrMethodName}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "cellOrMethodName" + "}", String(requestObj.cellOrMethodName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsGetWorksheetCell.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsGetWorksheetCell.');
        }

        // verify required parameter 'requestObj.cellOrMethodName' is not null or undefined
        if (requestObj.cellOrMethodName === null || requestObj.cellOrMethodName === undefined) {
            throw new Error('Required parameter "requestObj.cellOrMethodName" was null or undefined when calling cellsGetWorksheetCell.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "any");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read cell's style info.
     * @param requestObj contains request parameters
     */
    public async cellsGetWorksheetCellStyle(requestObj: model.Cells_GetWorksheetCellStyleRequest): Promise<{response: http.ClientResponse, body: model.StyleResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsGetWorksheetCellStyle.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/cells/{cellName}/style"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "cellName" + "}", String(requestObj.cellName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsGetWorksheetCellStyle.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsGetWorksheetCellStyle.');
        }

        // verify required parameter 'requestObj.cellName' is not null or undefined
        if (requestObj.cellName === null || requestObj.cellName === undefined) {
            throw new Error('Required parameter "requestObj.cellName" was null or undefined when calling cellsGetWorksheetCellStyle.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "StyleResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get cells info.
     * @param requestObj contains request parameters
     */
    public async cellsGetWorksheetCells(requestObj: model.Cells_GetWorksheetCellsRequest): Promise<{response: http.ClientResponse, body: model.CellsResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsGetWorksheetCells.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/cells"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsGetWorksheetCells.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsGetWorksheetCells.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "offest", requestObj.offest);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "count", requestObj.count);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read worksheet column data by column's index.
     * @param requestObj contains request parameters
     */
    public async cellsGetWorksheetColumn(requestObj: model.Cells_GetWorksheetColumnRequest): Promise<{response: http.ClientResponse, body: model.ColumnResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsGetWorksheetColumn.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/cells/columns/{columnIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "columnIndex" + "}", String(requestObj.columnIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsGetWorksheetColumn.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsGetWorksheetColumn.');
        }

        // verify required parameter 'requestObj.columnIndex' is not null or undefined
        if (requestObj.columnIndex === null || requestObj.columnIndex === undefined) {
            throw new Error('Required parameter "requestObj.columnIndex" was null or undefined when calling cellsGetWorksheetColumn.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ColumnResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read worksheet columns info.
     * @param requestObj contains request parameters
     */
    public async cellsGetWorksheetColumns(requestObj: model.Cells_GetWorksheetColumnsRequest): Promise<{response: http.ClientResponse, body: model.ColumnsResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsGetWorksheetColumns.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/cells/columns"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsGetWorksheetColumns.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsGetWorksheetColumns.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ColumnsResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read worksheet row data by row's index.
     * @param requestObj contains request parameters
     */
    public async cellsGetWorksheetRow(requestObj: model.Cells_GetWorksheetRowRequest): Promise<{response: http.ClientResponse, body: model.RowResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsGetWorksheetRow.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/cells/rows/{rowIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "rowIndex" + "}", String(requestObj.rowIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsGetWorksheetRow.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsGetWorksheetRow.');
        }

        // verify required parameter 'requestObj.rowIndex' is not null or undefined
        if (requestObj.rowIndex === null || requestObj.rowIndex === undefined) {
            throw new Error('Required parameter "requestObj.rowIndex" was null or undefined when calling cellsGetWorksheetRow.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "RowResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read worksheet rows info.
     * @param requestObj contains request parameters
     */
    public async cellsGetWorksheetRows(requestObj: model.Cells_GetWorksheetRowsRequest): Promise<{response: http.ClientResponse, body: model.RowsResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsGetWorksheetRows.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/cells/rows"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsGetWorksheetRows.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsGetWorksheetRows.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "RowsResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete worksheet hyperlink by index.
     * @param requestObj contains request parameters
     */
    public async cellsHypelinksDeleteWorksheetHyperlink(requestObj: model.CellsHypelinks_DeleteWorksheetHyperlinkRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsHypelinksDeleteWorksheetHyperlink.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/hyperlinks/{hyperlinkIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "hyperlinkIndex" + "}", String(requestObj.hyperlinkIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsHypelinksDeleteWorksheetHyperlink.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsHypelinksDeleteWorksheetHyperlink.');
        }

        // verify required parameter 'requestObj.hyperlinkIndex' is not null or undefined
        if (requestObj.hyperlinkIndex === null || requestObj.hyperlinkIndex === undefined) {
            throw new Error('Required parameter "requestObj.hyperlinkIndex" was null or undefined when calling cellsHypelinksDeleteWorksheetHyperlink.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete all hyperlinks in worksheet.
     * @param requestObj contains request parameters
     */
    public async cellsHypelinksDeleteWorksheetHyperlinks(requestObj: model.CellsHypelinks_DeleteWorksheetHyperlinksRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsHypelinksDeleteWorksheetHyperlinks.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/hyperlinks"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsHypelinksDeleteWorksheetHyperlinks.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsHypelinksDeleteWorksheetHyperlinks.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get worksheet hyperlink by index.
     * @param requestObj contains request parameters
     */
    public async cellsHypelinksGetWorksheetHyperlink(requestObj: model.CellsHypelinks_GetWorksheetHyperlinkRequest): Promise<{response: http.ClientResponse, body: model.HyperlinkResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsHypelinksGetWorksheetHyperlink.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/hyperlinks/{hyperlinkIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "hyperlinkIndex" + "}", String(requestObj.hyperlinkIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsHypelinksGetWorksheetHyperlink.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsHypelinksGetWorksheetHyperlink.');
        }

        // verify required parameter 'requestObj.hyperlinkIndex' is not null or undefined
        if (requestObj.hyperlinkIndex === null || requestObj.hyperlinkIndex === undefined) {
            throw new Error('Required parameter "requestObj.hyperlinkIndex" was null or undefined when calling cellsHypelinksGetWorksheetHyperlink.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "HyperlinkResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get worksheet hyperlinks.
     * @param requestObj contains request parameters
     */
    public async cellsHypelinksGetWorksheetHyperlinks(requestObj: model.CellsHypelinks_GetWorksheetHyperlinksRequest): Promise<{response: http.ClientResponse, body: model.HyperlinksResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsHypelinksGetWorksheetHyperlinks.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/hyperlinks"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsHypelinksGetWorksheetHyperlinks.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsHypelinksGetWorksheetHyperlinks.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "HyperlinksResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Update worksheet hyperlink by index.
     * @param requestObj contains request parameters
     */
    public async cellsHypelinksPostWorksheetHyperlink(requestObj: model.CellsHypelinks_PostWorksheetHyperlinkRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsHypelinksPostWorksheetHyperlink.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/hyperlinks/{hyperlinkIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "hyperlinkIndex" + "}", String(requestObj.hyperlinkIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsHypelinksPostWorksheetHyperlink.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsHypelinksPostWorksheetHyperlink.');
        }

        // verify required parameter 'requestObj.hyperlinkIndex' is not null or undefined
        if (requestObj.hyperlinkIndex === null || requestObj.hyperlinkIndex === undefined) {
            throw new Error('Required parameter "requestObj.hyperlinkIndex" was null or undefined when calling cellsHypelinksPostWorksheetHyperlink.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.hyperlink == null) ? "" : ObjectSerializer.serialize(requestObj.hyperlink, requestObj.hyperlink.constructor.name === "Object" ? "Hyperlink" : requestObj.hyperlink.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Add worksheet hyperlink.
     * @param requestObj contains request parameters
     */
    public async cellsHypelinksPutWorksheetHyperlink(requestObj: model.CellsHypelinks_PutWorksheetHyperlinkRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsHypelinksPutWorksheetHyperlink.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/hyperlinks"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsHypelinksPutWorksheetHyperlink.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsHypelinksPutWorksheetHyperlink.');
        }

        // verify required parameter 'requestObj.firstRow' is not null or undefined
        if (requestObj.firstRow === null || requestObj.firstRow === undefined) {
            throw new Error('Required parameter "requestObj.firstRow" was null or undefined when calling cellsHypelinksPutWorksheetHyperlink.');
        }

        // verify required parameter 'requestObj.firstColumn' is not null or undefined
        if (requestObj.firstColumn === null || requestObj.firstColumn === undefined) {
            throw new Error('Required parameter "requestObj.firstColumn" was null or undefined when calling cellsHypelinksPutWorksheetHyperlink.');
        }

        // verify required parameter 'requestObj.totalRows' is not null or undefined
        if (requestObj.totalRows === null || requestObj.totalRows === undefined) {
            throw new Error('Required parameter "requestObj.totalRows" was null or undefined when calling cellsHypelinksPutWorksheetHyperlink.');
        }

        // verify required parameter 'requestObj.totalColumns' is not null or undefined
        if (requestObj.totalColumns === null || requestObj.totalColumns === undefined) {
            throw new Error('Required parameter "requestObj.totalColumns" was null or undefined when calling cellsHypelinksPutWorksheetHyperlink.');
        }

        // verify required parameter 'requestObj.address' is not null or undefined
        if (requestObj.address === null || requestObj.address === undefined) {
            throw new Error('Required parameter "requestObj.address" was null or undefined when calling cellsHypelinksPutWorksheetHyperlink.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "firstRow", requestObj.firstRow);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "firstColumn", requestObj.firstColumn);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "totalRows", requestObj.totalRows);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "totalColumns", requestObj.totalColumns);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "address", requestObj.address);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete worksheet list object by index
     * @param requestObj contains request parameters
     */
    public async cellsListObjectsDeleteWorksheetListObject(requestObj: model.CellsListObjects_DeleteWorksheetListObjectRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsListObjectsDeleteWorksheetListObject.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/listobjects/{listObjectIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "listObjectIndex" + "}", String(requestObj.listObjectIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsListObjectsDeleteWorksheetListObject.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsListObjectsDeleteWorksheetListObject.');
        }

        // verify required parameter 'requestObj.listObjectIndex' is not null or undefined
        if (requestObj.listObjectIndex === null || requestObj.listObjectIndex === undefined) {
            throw new Error('Required parameter "requestObj.listObjectIndex" was null or undefined when calling cellsListObjectsDeleteWorksheetListObject.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete worksheet list objects
     * @param requestObj contains request parameters
     */
    public async cellsListObjectsDeleteWorksheetListObjects(requestObj: model.CellsListObjects_DeleteWorksheetListObjectsRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsListObjectsDeleteWorksheetListObjects.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/listobjects"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsListObjectsDeleteWorksheetListObjects.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsListObjectsDeleteWorksheetListObjects.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get worksheet list object info by index.
     * @param requestObj contains request parameters
     */
    public async cellsListObjectsGetWorksheetListObject(requestObj: model.CellsListObjects_GetWorksheetListObjectRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsListObjectsGetWorksheetListObject.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/listobjects/{listobjectindex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "listobjectindex" + "}", String(requestObj.listobjectindex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsListObjectsGetWorksheetListObject.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsListObjectsGetWorksheetListObject.');
        }

        // verify required parameter 'requestObj.listobjectindex' is not null or undefined
        if (requestObj.listobjectindex === null || requestObj.listobjectindex === undefined) {
            throw new Error('Required parameter "requestObj.listobjectindex" was null or undefined when calling cellsListObjectsGetWorksheetListObject.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get worksheet listobjects info.
     * @param requestObj contains request parameters
     */
    public async cellsListObjectsGetWorksheetListObjects(requestObj: model.CellsListObjects_GetWorksheetListObjectsRequest): Promise<{response: http.ClientResponse, body: model.ListObjectsResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsListObjectsGetWorksheetListObjects.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/listobjects"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsListObjectsGetWorksheetListObjects.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsListObjectsGetWorksheetListObjects.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ListObjectsResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async cellsListObjectsPostWorksheetListColumn(requestObj: model.CellsListObjects_PostWorksheetListColumnRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsListObjectsPostWorksheetListColumn.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/listobjects/{listObjectIndex}/listcolumns/{columnIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "listObjectIndex" + "}", String(requestObj.listObjectIndex))
            .replace("{" + "columnIndex" + "}", String(requestObj.columnIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsListObjectsPostWorksheetListColumn.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsListObjectsPostWorksheetListColumn.');
        }

        // verify required parameter 'requestObj.listObjectIndex' is not null or undefined
        if (requestObj.listObjectIndex === null || requestObj.listObjectIndex === undefined) {
            throw new Error('Required parameter "requestObj.listObjectIndex" was null or undefined when calling cellsListObjectsPostWorksheetListColumn.');
        }

        // verify required parameter 'requestObj.columnIndex' is not null or undefined
        if (requestObj.columnIndex === null || requestObj.columnIndex === undefined) {
            throw new Error('Required parameter "requestObj.columnIndex" was null or undefined when calling cellsListObjectsPostWorksheetListColumn.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.listColumn == null) ? "" : ObjectSerializer.serialize(requestObj.listColumn, requestObj.listColumn.constructor.name === "Object" ? "ListColumn" : requestObj.listColumn.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async cellsListObjectsPostWorksheetListColumnsTotal(requestObj: model.CellsListObjects_PostWorksheetListColumnsTotalRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsListObjectsPostWorksheetListColumnsTotal.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/listobjects/{listObjectIndex}/listcolumns/total"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "listObjectIndex" + "}", String(requestObj.listObjectIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsListObjectsPostWorksheetListColumnsTotal.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsListObjectsPostWorksheetListColumnsTotal.');
        }

        // verify required parameter 'requestObj.listObjectIndex' is not null or undefined
        if (requestObj.listObjectIndex === null || requestObj.listObjectIndex === undefined) {
            throw new Error('Required parameter "requestObj.listObjectIndex" was null or undefined when calling cellsListObjectsPostWorksheetListColumnsTotal.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.tableTotalRequests == null) ? "" : ObjectSerializer.serialize(requestObj.tableTotalRequests, requestObj.tableTotalRequests.constructor.name === "Object" ? "Array<TableTotalRequest>" : requestObj.tableTotalRequests.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Update  list object 
     * @param requestObj contains request parameters
     */
    public async cellsListObjectsPostWorksheetListObject(requestObj: model.CellsListObjects_PostWorksheetListObjectRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsListObjectsPostWorksheetListObject.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/listobjects/{listObjectIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "listObjectIndex" + "}", String(requestObj.listObjectIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsListObjectsPostWorksheetListObject.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsListObjectsPostWorksheetListObject.');
        }

        // verify required parameter 'requestObj.listObjectIndex' is not null or undefined
        if (requestObj.listObjectIndex === null || requestObj.listObjectIndex === undefined) {
            throw new Error('Required parameter "requestObj.listObjectIndex" was null or undefined when calling cellsListObjectsPostWorksheetListObject.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.listObject == null) ? "" : ObjectSerializer.serialize(requestObj.listObject, requestObj.listObject.constructor.name === "Object" ? "ListObject" : requestObj.listObject.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async cellsListObjectsPostWorksheetListObjectConvertToRange(requestObj: model.CellsListObjects_PostWorksheetListObjectConvertToRangeRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsListObjectsPostWorksheetListObjectConvertToRange.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/listobjects/{listObjectIndex}/ConvertToRange"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "listObjectIndex" + "}", String(requestObj.listObjectIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsListObjectsPostWorksheetListObjectConvertToRange.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsListObjectsPostWorksheetListObjectConvertToRange.');
        }

        // verify required parameter 'requestObj.listObjectIndex' is not null or undefined
        if (requestObj.listObjectIndex === null || requestObj.listObjectIndex === undefined) {
            throw new Error('Required parameter "requestObj.listObjectIndex" was null or undefined when calling cellsListObjectsPostWorksheetListObjectConvertToRange.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async cellsListObjectsPostWorksheetListObjectSortTable(requestObj: model.CellsListObjects_PostWorksheetListObjectSortTableRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsListObjectsPostWorksheetListObjectSortTable.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/listobjects/{listObjectIndex}/sort"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "listObjectIndex" + "}", String(requestObj.listObjectIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsListObjectsPostWorksheetListObjectSortTable.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsListObjectsPostWorksheetListObjectSortTable.');
        }

        // verify required parameter 'requestObj.listObjectIndex' is not null or undefined
        if (requestObj.listObjectIndex === null || requestObj.listObjectIndex === undefined) {
            throw new Error('Required parameter "requestObj.listObjectIndex" was null or undefined when calling cellsListObjectsPostWorksheetListObjectSortTable.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.dataSorter == null) ? "" : ObjectSerializer.serialize(requestObj.dataSorter, requestObj.dataSorter.constructor.name === "Object" ? "DataSorter" : requestObj.dataSorter.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async cellsListObjectsPostWorksheetListObjectSummarizeWithPivotTable(requestObj: model.CellsListObjects_PostWorksheetListObjectSummarizeWithPivotTableRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsListObjectsPostWorksheetListObjectSummarizeWithPivotTable.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/listobjects/{listObjectIndex}/SummarizeWithPivotTable"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "listObjectIndex" + "}", String(requestObj.listObjectIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsListObjectsPostWorksheetListObjectSummarizeWithPivotTable.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsListObjectsPostWorksheetListObjectSummarizeWithPivotTable.');
        }

        // verify required parameter 'requestObj.listObjectIndex' is not null or undefined
        if (requestObj.listObjectIndex === null || requestObj.listObjectIndex === undefined) {
            throw new Error('Required parameter "requestObj.listObjectIndex" was null or undefined when calling cellsListObjectsPostWorksheetListObjectSummarizeWithPivotTable.');
        }

        // verify required parameter 'requestObj.destsheetName' is not null or undefined
        if (requestObj.destsheetName === null || requestObj.destsheetName === undefined) {
            throw new Error('Required parameter "requestObj.destsheetName" was null or undefined when calling cellsListObjectsPostWorksheetListObjectSummarizeWithPivotTable.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destsheetName", requestObj.destsheetName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.request == null) ? "" : ObjectSerializer.serialize(requestObj.request, requestObj.request.constructor.name === "Object" ? "CreatePivotTableRequest" : requestObj.request.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Add a list object into worksheet.
     * @param requestObj contains request parameters
     */
    public async cellsListObjectsPutWorksheetListObject(requestObj: model.CellsListObjects_PutWorksheetListObjectRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsListObjectsPutWorksheetListObject.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/listobjects"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsListObjectsPutWorksheetListObject.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsListObjectsPutWorksheetListObject.');
        }

        // verify required parameter 'requestObj.startRow' is not null or undefined
        if (requestObj.startRow === null || requestObj.startRow === undefined) {
            throw new Error('Required parameter "requestObj.startRow" was null or undefined when calling cellsListObjectsPutWorksheetListObject.');
        }

        // verify required parameter 'requestObj.startColumn' is not null or undefined
        if (requestObj.startColumn === null || requestObj.startColumn === undefined) {
            throw new Error('Required parameter "requestObj.startColumn" was null or undefined when calling cellsListObjectsPutWorksheetListObject.');
        }

        // verify required parameter 'requestObj.endRow' is not null or undefined
        if (requestObj.endRow === null || requestObj.endRow === undefined) {
            throw new Error('Required parameter "requestObj.endRow" was null or undefined when calling cellsListObjectsPutWorksheetListObject.');
        }

        // verify required parameter 'requestObj.endColumn' is not null or undefined
        if (requestObj.endColumn === null || requestObj.endColumn === undefined) {
            throw new Error('Required parameter "requestObj.endColumn" was null or undefined when calling cellsListObjectsPutWorksheetListObject.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "startRow", requestObj.startRow);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "startColumn", requestObj.startColumn);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "endRow", requestObj.endRow);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "endColumn", requestObj.endColumn);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "hasHeaders", requestObj.hasHeaders);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "displayName", requestObj.displayName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "showTotals", requestObj.showTotals);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.listObject == null) ? "" : ObjectSerializer.serialize(requestObj.listObject, requestObj.listObject.constructor.name === "Object" ? "ListObject" : requestObj.listObject.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete OLE object.
     * @param requestObj contains request parameters
     */
    public async cellsOleObjectsDeleteWorksheetOleObject(requestObj: model.CellsOleObjects_DeleteWorksheetOleObjectRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsOleObjectsDeleteWorksheetOleObject.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/oleobjects/{oleObjectIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "oleObjectIndex" + "}", String(requestObj.oleObjectIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsOleObjectsDeleteWorksheetOleObject.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsOleObjectsDeleteWorksheetOleObject.');
        }

        // verify required parameter 'requestObj.oleObjectIndex' is not null or undefined
        if (requestObj.oleObjectIndex === null || requestObj.oleObjectIndex === undefined) {
            throw new Error('Required parameter "requestObj.oleObjectIndex" was null or undefined when calling cellsOleObjectsDeleteWorksheetOleObject.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete all OLE objects.
     * @param requestObj contains request parameters
     */
    public async cellsOleObjectsDeleteWorksheetOleObjects(requestObj: model.CellsOleObjects_DeleteWorksheetOleObjectsRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsOleObjectsDeleteWorksheetOleObjects.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/oleobjects"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsOleObjectsDeleteWorksheetOleObjects.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsOleObjectsDeleteWorksheetOleObjects.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get OLE object info.
     * @param requestObj contains request parameters
     */
    public async cellsOleObjectsGetWorksheetOleObject(requestObj: model.CellsOleObjects_GetWorksheetOleObjectRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsOleObjectsGetWorksheetOleObject.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/oleobjects/{objectNumber}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "objectNumber" + "}", String(requestObj.objectNumber));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsOleObjectsGetWorksheetOleObject.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsOleObjectsGetWorksheetOleObject.');
        }

        // verify required parameter 'requestObj.objectNumber' is not null or undefined
        if (requestObj.objectNumber === null || requestObj.objectNumber === undefined) {
            throw new Error('Required parameter "requestObj.objectNumber" was null or undefined when calling cellsOleObjectsGetWorksheetOleObject.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get worksheet OLE objects info.
     * @param requestObj contains request parameters
     */
    public async cellsOleObjectsGetWorksheetOleObjects(requestObj: model.CellsOleObjects_GetWorksheetOleObjectsRequest): Promise<{response: http.ClientResponse, body: model.OleObjectsResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsOleObjectsGetWorksheetOleObjects.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/oleobjects"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsOleObjectsGetWorksheetOleObjects.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsOleObjectsGetWorksheetOleObjects.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "OleObjectsResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Update OLE object.
     * @param requestObj contains request parameters
     */
    public async cellsOleObjectsPostUpdateWorksheetOleObject(requestObj: model.CellsOleObjects_PostUpdateWorksheetOleObjectRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsOleObjectsPostUpdateWorksheetOleObject.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/oleobjects/{oleObjectIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "oleObjectIndex" + "}", String(requestObj.oleObjectIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsOleObjectsPostUpdateWorksheetOleObject.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsOleObjectsPostUpdateWorksheetOleObject.');
        }

        // verify required parameter 'requestObj.oleObjectIndex' is not null or undefined
        if (requestObj.oleObjectIndex === null || requestObj.oleObjectIndex === undefined) {
            throw new Error('Required parameter "requestObj.oleObjectIndex" was null or undefined when calling cellsOleObjectsPostUpdateWorksheetOleObject.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.ole == null) ? "" : ObjectSerializer.serialize(requestObj.ole, requestObj.ole.constructor.name === "Object" ? "OleObject" : requestObj.ole.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Add OLE object
     * @param requestObj contains request parameters
     */
    public async cellsOleObjectsPutWorksheetOleObject(requestObj: model.CellsOleObjects_PutWorksheetOleObjectRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsOleObjectsPutWorksheetOleObject.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/oleobjects"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsOleObjectsPutWorksheetOleObject.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsOleObjectsPutWorksheetOleObject.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "upperLeftRow", requestObj.upperLeftRow);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "upperLeftColumn", requestObj.upperLeftColumn);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "height", requestObj.height);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "width", requestObj.width);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "oleFile", requestObj.oleFile);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "imageFile", requestObj.imageFile);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.oleObject == null) ? "" : ObjectSerializer.serialize(requestObj.oleObject, requestObj.oleObject.constructor.name === "Object" ? "OleObject" : requestObj.oleObject.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async cellsPageBreaksDeleteHorizontalPageBreak(requestObj: model.CellsPageBreaks_DeleteHorizontalPageBreakRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPageBreaksDeleteHorizontalPageBreak.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/horizontalpagebreaks/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPageBreaksDeleteHorizontalPageBreak.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPageBreaksDeleteHorizontalPageBreak.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling cellsPageBreaksDeleteHorizontalPageBreak.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async cellsPageBreaksDeleteHorizontalPageBreaks(requestObj: model.CellsPageBreaks_DeleteHorizontalPageBreaksRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPageBreaksDeleteHorizontalPageBreaks.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/horizontalpagebreaks"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPageBreaksDeleteHorizontalPageBreaks.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPageBreaksDeleteHorizontalPageBreaks.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "row", requestObj.row);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async cellsPageBreaksDeleteVerticalPageBreak(requestObj: model.CellsPageBreaks_DeleteVerticalPageBreakRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPageBreaksDeleteVerticalPageBreak.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/verticalpagebreaks/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPageBreaksDeleteVerticalPageBreak.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPageBreaksDeleteVerticalPageBreak.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling cellsPageBreaksDeleteVerticalPageBreak.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async cellsPageBreaksDeleteVerticalPageBreaks(requestObj: model.CellsPageBreaks_DeleteVerticalPageBreaksRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPageBreaksDeleteVerticalPageBreaks.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/verticalpagebreaks"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPageBreaksDeleteVerticalPageBreaks.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPageBreaksDeleteVerticalPageBreaks.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "column", requestObj.column);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async cellsPageBreaksGetHorizontalPageBreak(requestObj: model.CellsPageBreaks_GetHorizontalPageBreakRequest): Promise<{response: http.ClientResponse, body: model.HorizontalPageBreakResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPageBreaksGetHorizontalPageBreak.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/horizontalpagebreaks/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPageBreaksGetHorizontalPageBreak.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPageBreaksGetHorizontalPageBreak.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling cellsPageBreaksGetHorizontalPageBreak.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "HorizontalPageBreakResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async cellsPageBreaksGetHorizontalPageBreaks(requestObj: model.CellsPageBreaks_GetHorizontalPageBreaksRequest): Promise<{response: http.ClientResponse, body: model.HorizontalPageBreaksResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPageBreaksGetHorizontalPageBreaks.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/horizontalpagebreaks"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPageBreaksGetHorizontalPageBreaks.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPageBreaksGetHorizontalPageBreaks.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "HorizontalPageBreaksResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async cellsPageBreaksGetVerticalPageBreak(requestObj: model.CellsPageBreaks_GetVerticalPageBreakRequest): Promise<{response: http.ClientResponse, body: model.VerticalPageBreakResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPageBreaksGetVerticalPageBreak.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/verticalpagebreaks/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPageBreaksGetVerticalPageBreak.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPageBreaksGetVerticalPageBreak.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling cellsPageBreaksGetVerticalPageBreak.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "VerticalPageBreakResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async cellsPageBreaksGetVerticalPageBreaks(requestObj: model.CellsPageBreaks_GetVerticalPageBreaksRequest): Promise<{response: http.ClientResponse, body: model.VerticalPageBreaksResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPageBreaksGetVerticalPageBreaks.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/verticalpagebreaks"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPageBreaksGetVerticalPageBreaks.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPageBreaksGetVerticalPageBreaks.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "VerticalPageBreaksResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async cellsPageBreaksPutHorizontalPageBreak(requestObj: model.CellsPageBreaks_PutHorizontalPageBreakRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPageBreaksPutHorizontalPageBreak.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/horizontalpagebreaks"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPageBreaksPutHorizontalPageBreak.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPageBreaksPutHorizontalPageBreak.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "cellname", requestObj.cellname);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "row", requestObj.row);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "column", requestObj.column);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "startColumn", requestObj.startColumn);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "endColumn", requestObj.endColumn);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async cellsPageBreaksPutVerticalPageBreak(requestObj: model.CellsPageBreaks_PutVerticalPageBreakRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPageBreaksPutVerticalPageBreak.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/verticalpagebreaks"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPageBreaksPutVerticalPageBreak.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPageBreaksPutVerticalPageBreak.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "cellname", requestObj.cellname);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "column", requestObj.column);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "row", requestObj.row);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "startRow", requestObj.startRow);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "endRow", requestObj.endRow);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * clear header footer
     * @param requestObj contains request parameters
     */
    public async cellsPageSetupDeleteHeaderFooter(requestObj: model.CellsPageSetup_DeleteHeaderFooterRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPageSetupDeleteHeaderFooter.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/pagesetup/clearheaderfooter"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPageSetupDeleteHeaderFooter.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPageSetupDeleteHeaderFooter.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * get page footer information
     * @param requestObj contains request parameters
     */
    public async cellsPageSetupGetFooter(requestObj: model.CellsPageSetup_GetFooterRequest): Promise<{response: http.ClientResponse, body: model.PageSectionsResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPageSetupGetFooter.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/pagesetup/footer"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPageSetupGetFooter.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPageSetupGetFooter.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "PageSectionsResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * get page header information
     * @param requestObj contains request parameters
     */
    public async cellsPageSetupGetHeader(requestObj: model.CellsPageSetup_GetHeaderRequest): Promise<{response: http.ClientResponse, body: model.PageSectionsResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPageSetupGetHeader.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/pagesetup/header"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPageSetupGetHeader.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPageSetupGetHeader.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "PageSectionsResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get Page Setup information.             
     * @param requestObj contains request parameters
     */
    public async cellsPageSetupGetPageSetup(requestObj: model.CellsPageSetup_GetPageSetupRequest): Promise<{response: http.ClientResponse, body: model.PageSetupResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPageSetupGetPageSetup.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/pagesetup"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPageSetupGetPageSetup.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPageSetupGetPageSetup.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "PageSetupResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * update  page footer information 
     * @param requestObj contains request parameters
     */
    public async cellsPageSetupPostFooter(requestObj: model.CellsPageSetup_PostFooterRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPageSetupPostFooter.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/pagesetup/footer"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPageSetupPostFooter.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPageSetupPostFooter.');
        }

        // verify required parameter 'requestObj.section' is not null or undefined
        if (requestObj.section === null || requestObj.section === undefined) {
            throw new Error('Required parameter "requestObj.section" was null or undefined when calling cellsPageSetupPostFooter.');
        }

        // verify required parameter 'requestObj.script' is not null or undefined
        if (requestObj.script === null || requestObj.script === undefined) {
            throw new Error('Required parameter "requestObj.script" was null or undefined when calling cellsPageSetupPostFooter.');
        }

        // verify required parameter 'requestObj.isFirstPage' is not null or undefined
        if (requestObj.isFirstPage === null || requestObj.isFirstPage === undefined) {
            throw new Error('Required parameter "requestObj.isFirstPage" was null or undefined when calling cellsPageSetupPostFooter.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "section", requestObj.section);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "script", requestObj.script);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "isFirstPage", requestObj.isFirstPage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * update  page header information 
     * @param requestObj contains request parameters
     */
    public async cellsPageSetupPostHeader(requestObj: model.CellsPageSetup_PostHeaderRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPageSetupPostHeader.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/pagesetup/header"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPageSetupPostHeader.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPageSetupPostHeader.');
        }

        // verify required parameter 'requestObj.section' is not null or undefined
        if (requestObj.section === null || requestObj.section === undefined) {
            throw new Error('Required parameter "requestObj.section" was null or undefined when calling cellsPageSetupPostHeader.');
        }

        // verify required parameter 'requestObj.script' is not null or undefined
        if (requestObj.script === null || requestObj.script === undefined) {
            throw new Error('Required parameter "requestObj.script" was null or undefined when calling cellsPageSetupPostHeader.');
        }

        // verify required parameter 'requestObj.isFirstPage' is not null or undefined
        if (requestObj.isFirstPage === null || requestObj.isFirstPage === undefined) {
            throw new Error('Required parameter "requestObj.isFirstPage" was null or undefined when calling cellsPageSetupPostHeader.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "section", requestObj.section);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "script", requestObj.script);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "isFirstPage", requestObj.isFirstPage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Update Page Setup information.
     * @param requestObj contains request parameters
     */
    public async cellsPageSetupPostPageSetup(requestObj: model.CellsPageSetup_PostPageSetupRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPageSetupPostPageSetup.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/pagesetup"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPageSetupPostPageSetup.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPageSetupPostPageSetup.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.pageSetup == null) ? "" : ObjectSerializer.serialize(requestObj.pageSetup, requestObj.pageSetup.constructor.name === "Object" ? "PageSetup" : requestObj.pageSetup.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete a picture object in worksheet
     * @param requestObj contains request parameters
     */
    public async cellsPicturesDeleteWorksheetPicture(requestObj: model.CellsPictures_DeleteWorksheetPictureRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPicturesDeleteWorksheetPicture.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/pictures/{pictureIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "pictureIndex" + "}", String(requestObj.pictureIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPicturesDeleteWorksheetPicture.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPicturesDeleteWorksheetPicture.');
        }

        // verify required parameter 'requestObj.pictureIndex' is not null or undefined
        if (requestObj.pictureIndex === null || requestObj.pictureIndex === undefined) {
            throw new Error('Required parameter "requestObj.pictureIndex" was null or undefined when calling cellsPicturesDeleteWorksheetPicture.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete all pictures in worksheet.
     * @param requestObj contains request parameters
     */
    public async cellsPicturesDeleteWorksheetPictures(requestObj: model.CellsPictures_DeleteWorksheetPicturesRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPicturesDeleteWorksheetPictures.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/pictures"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPicturesDeleteWorksheetPictures.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPicturesDeleteWorksheetPictures.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * GRead worksheet picture by number.
     * @param requestObj contains request parameters
     */
    public async cellsPicturesGetWorksheetPicture(requestObj: model.CellsPictures_GetWorksheetPictureRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPicturesGetWorksheetPicture.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/pictures/{pictureIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "pictureIndex" + "}", String(requestObj.pictureIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPicturesGetWorksheetPicture.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPicturesGetWorksheetPicture.');
        }

        // verify required parameter 'requestObj.pictureIndex' is not null or undefined
        if (requestObj.pictureIndex === null || requestObj.pictureIndex === undefined) {
            throw new Error('Required parameter "requestObj.pictureIndex" was null or undefined when calling cellsPicturesGetWorksheetPicture.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read worksheet pictures.
     * @param requestObj contains request parameters
     */
    public async cellsPicturesGetWorksheetPictures(requestObj: model.CellsPictures_GetWorksheetPicturesRequest): Promise<{response: http.ClientResponse, body: model.PicturesResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPicturesGetWorksheetPictures.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/pictures"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPicturesGetWorksheetPictures.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPicturesGetWorksheetPictures.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "PicturesResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Update worksheet picture by index.
     * @param requestObj contains request parameters
     */
    public async cellsPicturesPostWorksheetPicture(requestObj: model.CellsPictures_PostWorksheetPictureRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPicturesPostWorksheetPicture.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/pictures/{pictureIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "pictureIndex" + "}", String(requestObj.pictureIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPicturesPostWorksheetPicture.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPicturesPostWorksheetPicture.');
        }

        // verify required parameter 'requestObj.pictureIndex' is not null or undefined
        if (requestObj.pictureIndex === null || requestObj.pictureIndex === undefined) {
            throw new Error('Required parameter "requestObj.pictureIndex" was null or undefined when calling cellsPicturesPostWorksheetPicture.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.picture == null) ? "" : ObjectSerializer.serialize(requestObj.picture, requestObj.picture.constructor.name === "Object" ? "Picture" : requestObj.picture.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Add a new worksheet picture.
     * @param requestObj contains request parameters
     */
    public async cellsPicturesPutWorksheetAddPicture(requestObj: model.CellsPictures_PutWorksheetAddPictureRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPicturesPutWorksheetAddPicture.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/pictures"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPicturesPutWorksheetAddPicture.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPicturesPutWorksheetAddPicture.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "upperLeftRow", requestObj.upperLeftRow);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "upperLeftColumn", requestObj.upperLeftColumn);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "lowerRightRow", requestObj.lowerRightRow);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "lowerRightColumn", requestObj.lowerRightColumn);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "picturePath", requestObj.picturePath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.picture == null) ? "" : ObjectSerializer.serialize(requestObj.picture, requestObj.picture.constructor.name === "Object" ? "Picture" : requestObj.picture.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete pivot field into into pivot table
     * @param requestObj contains request parameters
     */
    public async cellsPivotTablesDeletePivotTableField(requestObj: model.CellsPivotTables_DeletePivotTableFieldRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPivotTablesDeletePivotTableField.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/pivottables/{pivotTableIndex}/PivotField"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "pivotTableIndex" + "}", String(requestObj.pivotTableIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPivotTablesDeletePivotTableField.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPivotTablesDeletePivotTableField.');
        }

        // verify required parameter 'requestObj.pivotTableIndex' is not null or undefined
        if (requestObj.pivotTableIndex === null || requestObj.pivotTableIndex === undefined) {
            throw new Error('Required parameter "requestObj.pivotTableIndex" was null or undefined when calling cellsPivotTablesDeletePivotTableField.');
        }

        // verify required parameter 'requestObj.pivotFieldType' is not null or undefined
        if (requestObj.pivotFieldType === null || requestObj.pivotFieldType === undefined) {
            throw new Error('Required parameter "requestObj.pivotFieldType" was null or undefined when calling cellsPivotTablesDeletePivotTableField.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pivotFieldType", requestObj.pivotFieldType);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.request == null) ? "" : ObjectSerializer.serialize(requestObj.request, requestObj.request.constructor.name === "Object" ? "PivotTableFieldRequest" : requestObj.request.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete worksheet pivot table by index
     * @param requestObj contains request parameters
     */
    public async cellsPivotTablesDeleteWorksheetPivotTable(requestObj: model.CellsPivotTables_DeleteWorksheetPivotTableRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPivotTablesDeleteWorksheetPivotTable.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/pivottables/{pivotTableIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "pivotTableIndex" + "}", String(requestObj.pivotTableIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPivotTablesDeleteWorksheetPivotTable.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPivotTablesDeleteWorksheetPivotTable.');
        }

        // verify required parameter 'requestObj.pivotTableIndex' is not null or undefined
        if (requestObj.pivotTableIndex === null || requestObj.pivotTableIndex === undefined) {
            throw new Error('Required parameter "requestObj.pivotTableIndex" was null or undefined when calling cellsPivotTablesDeleteWorksheetPivotTable.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * delete  pivot filter for piovt table             
     * @param requestObj contains request parameters
     */
    public async cellsPivotTablesDeleteWorksheetPivotTableFilter(requestObj: model.CellsPivotTables_DeleteWorksheetPivotTableFilterRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPivotTablesDeleteWorksheetPivotTableFilter.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/pivottables/{pivotTableIndex}/PivotFilters/{fieldIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "pivotTableIndex" + "}", String(requestObj.pivotTableIndex))
            .replace("{" + "fieldIndex" + "}", String(requestObj.fieldIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPivotTablesDeleteWorksheetPivotTableFilter.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPivotTablesDeleteWorksheetPivotTableFilter.');
        }

        // verify required parameter 'requestObj.pivotTableIndex' is not null or undefined
        if (requestObj.pivotTableIndex === null || requestObj.pivotTableIndex === undefined) {
            throw new Error('Required parameter "requestObj.pivotTableIndex" was null or undefined when calling cellsPivotTablesDeleteWorksheetPivotTableFilter.');
        }

        // verify required parameter 'requestObj.fieldIndex' is not null or undefined
        if (requestObj.fieldIndex === null || requestObj.fieldIndex === undefined) {
            throw new Error('Required parameter "requestObj.fieldIndex" was null or undefined when calling cellsPivotTablesDeleteWorksheetPivotTableFilter.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "needReCalculate", requestObj.needReCalculate);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * delete all pivot filters for piovt table
     * @param requestObj contains request parameters
     */
    public async cellsPivotTablesDeleteWorksheetPivotTableFilters(requestObj: model.CellsPivotTables_DeleteWorksheetPivotTableFiltersRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPivotTablesDeleteWorksheetPivotTableFilters.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/pivottables/{pivotTableIndex}/PivotFilters"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "pivotTableIndex" + "}", String(requestObj.pivotTableIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPivotTablesDeleteWorksheetPivotTableFilters.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPivotTablesDeleteWorksheetPivotTableFilters.');
        }

        // verify required parameter 'requestObj.pivotTableIndex' is not null or undefined
        if (requestObj.pivotTableIndex === null || requestObj.pivotTableIndex === undefined) {
            throw new Error('Required parameter "requestObj.pivotTableIndex" was null or undefined when calling cellsPivotTablesDeleteWorksheetPivotTableFilters.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "needReCalculate", requestObj.needReCalculate);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete worksheet pivot tables
     * @param requestObj contains request parameters
     */
    public async cellsPivotTablesDeleteWorksheetPivotTables(requestObj: model.CellsPivotTables_DeleteWorksheetPivotTablesRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPivotTablesDeleteWorksheetPivotTables.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/pivottables"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPivotTablesDeleteWorksheetPivotTables.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPivotTablesDeleteWorksheetPivotTables.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get pivot field into into pivot table
     * @param requestObj contains request parameters
     */
    public async cellsPivotTablesGetPivotTableField(requestObj: model.CellsPivotTables_GetPivotTableFieldRequest): Promise<{response: http.ClientResponse, body: model.PivotFieldResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPivotTablesGetPivotTableField.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/pivottables/{pivotTableIndex}/PivotField"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "pivotTableIndex" + "}", String(requestObj.pivotTableIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPivotTablesGetPivotTableField.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPivotTablesGetPivotTableField.');
        }

        // verify required parameter 'requestObj.pivotTableIndex' is not null or undefined
        if (requestObj.pivotTableIndex === null || requestObj.pivotTableIndex === undefined) {
            throw new Error('Required parameter "requestObj.pivotTableIndex" was null or undefined when calling cellsPivotTablesGetPivotTableField.');
        }

        // verify required parameter 'requestObj.pivotFieldIndex' is not null or undefined
        if (requestObj.pivotFieldIndex === null || requestObj.pivotFieldIndex === undefined) {
            throw new Error('Required parameter "requestObj.pivotFieldIndex" was null or undefined when calling cellsPivotTablesGetPivotTableField.');
        }

        // verify required parameter 'requestObj.pivotFieldType' is not null or undefined
        if (requestObj.pivotFieldType === null || requestObj.pivotFieldType === undefined) {
            throw new Error('Required parameter "requestObj.pivotFieldType" was null or undefined when calling cellsPivotTablesGetPivotTableField.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pivotFieldIndex", requestObj.pivotFieldIndex);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pivotFieldType", requestObj.pivotFieldType);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "PivotFieldResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get worksheet pivottable info by index.
     * @param requestObj contains request parameters
     */
    public async cellsPivotTablesGetWorksheetPivotTable(requestObj: model.CellsPivotTables_GetWorksheetPivotTableRequest): Promise<{response: http.ClientResponse, body: model.PivotTableResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPivotTablesGetWorksheetPivotTable.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/pivottables/{pivottableIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "pivottableIndex" + "}", String(requestObj.pivottableIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPivotTablesGetWorksheetPivotTable.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPivotTablesGetWorksheetPivotTable.');
        }

        // verify required parameter 'requestObj.pivottableIndex' is not null or undefined
        if (requestObj.pivottableIndex === null || requestObj.pivottableIndex === undefined) {
            throw new Error('Required parameter "requestObj.pivottableIndex" was null or undefined when calling cellsPivotTablesGetWorksheetPivotTable.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "PivotTableResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async cellsPivotTablesGetWorksheetPivotTableFilter(requestObj: model.CellsPivotTables_GetWorksheetPivotTableFilterRequest): Promise<{response: http.ClientResponse, body: model.PivotFilterResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPivotTablesGetWorksheetPivotTableFilter.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/pivottables/{pivotTableIndex}/PivotFilters/{filterIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "pivotTableIndex" + "}", String(requestObj.pivotTableIndex))
            .replace("{" + "filterIndex" + "}", String(requestObj.filterIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPivotTablesGetWorksheetPivotTableFilter.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPivotTablesGetWorksheetPivotTableFilter.');
        }

        // verify required parameter 'requestObj.pivotTableIndex' is not null or undefined
        if (requestObj.pivotTableIndex === null || requestObj.pivotTableIndex === undefined) {
            throw new Error('Required parameter "requestObj.pivotTableIndex" was null or undefined when calling cellsPivotTablesGetWorksheetPivotTableFilter.');
        }

        // verify required parameter 'requestObj.filterIndex' is not null or undefined
        if (requestObj.filterIndex === null || requestObj.filterIndex === undefined) {
            throw new Error('Required parameter "requestObj.filterIndex" was null or undefined when calling cellsPivotTablesGetWorksheetPivotTableFilter.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "PivotFilterResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async cellsPivotTablesGetWorksheetPivotTableFilters(requestObj: model.CellsPivotTables_GetWorksheetPivotTableFiltersRequest): Promise<{response: http.ClientResponse, body: model.PivotFiltersResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPivotTablesGetWorksheetPivotTableFilters.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/pivottables/{pivotTableIndex}/PivotFilters"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "pivotTableIndex" + "}", String(requestObj.pivotTableIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPivotTablesGetWorksheetPivotTableFilters.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPivotTablesGetWorksheetPivotTableFilters.');
        }

        // verify required parameter 'requestObj.pivotTableIndex' is not null or undefined
        if (requestObj.pivotTableIndex === null || requestObj.pivotTableIndex === undefined) {
            throw new Error('Required parameter "requestObj.pivotTableIndex" was null or undefined when calling cellsPivotTablesGetWorksheetPivotTableFilters.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "PivotFiltersResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get worksheet pivottables info.
     * @param requestObj contains request parameters
     */
    public async cellsPivotTablesGetWorksheetPivotTables(requestObj: model.CellsPivotTables_GetWorksheetPivotTablesRequest): Promise<{response: http.ClientResponse, body: model.PivotTablesResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPivotTablesGetWorksheetPivotTables.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/pivottables"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPivotTablesGetWorksheetPivotTables.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPivotTablesGetWorksheetPivotTables.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "PivotTablesResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Update cell style for pivot table
     * @param requestObj contains request parameters
     */
    public async cellsPivotTablesPostPivotTableCellStyle(requestObj: model.CellsPivotTables_PostPivotTableCellStyleRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPivotTablesPostPivotTableCellStyle.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/pivottables/{pivotTableIndex}/Format"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "pivotTableIndex" + "}", String(requestObj.pivotTableIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPivotTablesPostPivotTableCellStyle.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPivotTablesPostPivotTableCellStyle.');
        }

        // verify required parameter 'requestObj.pivotTableIndex' is not null or undefined
        if (requestObj.pivotTableIndex === null || requestObj.pivotTableIndex === undefined) {
            throw new Error('Required parameter "requestObj.pivotTableIndex" was null or undefined when calling cellsPivotTablesPostPivotTableCellStyle.');
        }

        // verify required parameter 'requestObj.column' is not null or undefined
        if (requestObj.column === null || requestObj.column === undefined) {
            throw new Error('Required parameter "requestObj.column" was null or undefined when calling cellsPivotTablesPostPivotTableCellStyle.');
        }

        // verify required parameter 'requestObj.row' is not null or undefined
        if (requestObj.row === null || requestObj.row === undefined) {
            throw new Error('Required parameter "requestObj.row" was null or undefined when calling cellsPivotTablesPostPivotTableCellStyle.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "column", requestObj.column);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "row", requestObj.row);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "needReCalculate", requestObj.needReCalculate);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.style == null) ? "" : ObjectSerializer.serialize(requestObj.style, requestObj.style.constructor.name === "Object" ? "Style" : requestObj.style.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async cellsPivotTablesPostPivotTableFieldHideItem(requestObj: model.CellsPivotTables_PostPivotTableFieldHideItemRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPivotTablesPostPivotTableFieldHideItem.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/pivottables/{pivotTableIndex}/PivotField/Hide"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "pivotTableIndex" + "}", String(requestObj.pivotTableIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPivotTablesPostPivotTableFieldHideItem.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPivotTablesPostPivotTableFieldHideItem.');
        }

        // verify required parameter 'requestObj.pivotTableIndex' is not null or undefined
        if (requestObj.pivotTableIndex === null || requestObj.pivotTableIndex === undefined) {
            throw new Error('Required parameter "requestObj.pivotTableIndex" was null or undefined when calling cellsPivotTablesPostPivotTableFieldHideItem.');
        }

        // verify required parameter 'requestObj.pivotFieldType' is not null or undefined
        if (requestObj.pivotFieldType === null || requestObj.pivotFieldType === undefined) {
            throw new Error('Required parameter "requestObj.pivotFieldType" was null or undefined when calling cellsPivotTablesPostPivotTableFieldHideItem.');
        }

        // verify required parameter 'requestObj.fieldIndex' is not null or undefined
        if (requestObj.fieldIndex === null || requestObj.fieldIndex === undefined) {
            throw new Error('Required parameter "requestObj.fieldIndex" was null or undefined when calling cellsPivotTablesPostPivotTableFieldHideItem.');
        }

        // verify required parameter 'requestObj.itemIndex' is not null or undefined
        if (requestObj.itemIndex === null || requestObj.itemIndex === undefined) {
            throw new Error('Required parameter "requestObj.itemIndex" was null or undefined when calling cellsPivotTablesPostPivotTableFieldHideItem.');
        }

        // verify required parameter 'requestObj.isHide' is not null or undefined
        if (requestObj.isHide === null || requestObj.isHide === undefined) {
            throw new Error('Required parameter "requestObj.isHide" was null or undefined when calling cellsPivotTablesPostPivotTableFieldHideItem.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pivotFieldType", requestObj.pivotFieldType);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fieldIndex", requestObj.fieldIndex);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "itemIndex", requestObj.itemIndex);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "isHide", requestObj.isHide);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "needReCalculate", requestObj.needReCalculate);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async cellsPivotTablesPostPivotTableFieldMoveTo(requestObj: model.CellsPivotTables_PostPivotTableFieldMoveToRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPivotTablesPostPivotTableFieldMoveTo.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/pivottables/{pivotTableIndex}/PivotField/Move"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "pivotTableIndex" + "}", String(requestObj.pivotTableIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPivotTablesPostPivotTableFieldMoveTo.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPivotTablesPostPivotTableFieldMoveTo.');
        }

        // verify required parameter 'requestObj.pivotTableIndex' is not null or undefined
        if (requestObj.pivotTableIndex === null || requestObj.pivotTableIndex === undefined) {
            throw new Error('Required parameter "requestObj.pivotTableIndex" was null or undefined when calling cellsPivotTablesPostPivotTableFieldMoveTo.');
        }

        // verify required parameter 'requestObj.fieldIndex' is not null or undefined
        if (requestObj.fieldIndex === null || requestObj.fieldIndex === undefined) {
            throw new Error('Required parameter "requestObj.fieldIndex" was null or undefined when calling cellsPivotTablesPostPivotTableFieldMoveTo.');
        }

        // verify required parameter 'requestObj.from' is not null or undefined
        if (requestObj.from === null || requestObj.from === undefined) {
            throw new Error('Required parameter "requestObj.from" was null or undefined when calling cellsPivotTablesPostPivotTableFieldMoveTo.');
        }

        // verify required parameter 'requestObj.to' is not null or undefined
        if (requestObj.to === null || requestObj.to === undefined) {
            throw new Error('Required parameter "requestObj.to" was null or undefined when calling cellsPivotTablesPostPivotTableFieldMoveTo.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fieldIndex", requestObj.fieldIndex);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "from", requestObj.from);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "to", requestObj.to);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Update style for pivot table
     * @param requestObj contains request parameters
     */
    public async cellsPivotTablesPostPivotTableStyle(requestObj: model.CellsPivotTables_PostPivotTableStyleRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPivotTablesPostPivotTableStyle.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/pivottables/{pivotTableIndex}/FormatAll"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "pivotTableIndex" + "}", String(requestObj.pivotTableIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPivotTablesPostPivotTableStyle.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPivotTablesPostPivotTableStyle.');
        }

        // verify required parameter 'requestObj.pivotTableIndex' is not null or undefined
        if (requestObj.pivotTableIndex === null || requestObj.pivotTableIndex === undefined) {
            throw new Error('Required parameter "requestObj.pivotTableIndex" was null or undefined when calling cellsPivotTablesPostPivotTableStyle.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "needReCalculate", requestObj.needReCalculate);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.style == null) ? "" : ObjectSerializer.serialize(requestObj.style, requestObj.style.constructor.name === "Object" ? "Style" : requestObj.style.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async cellsPivotTablesPostPivotTableUpdatePivotField(requestObj: model.CellsPivotTables_PostPivotTableUpdatePivotFieldRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPivotTablesPostPivotTableUpdatePivotField.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/pivottables/{pivotTableIndex}/PivotFields/{pivotFieldIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "pivotTableIndex" + "}", String(requestObj.pivotTableIndex))
            .replace("{" + "pivotFieldIndex" + "}", String(requestObj.pivotFieldIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPivotTablesPostPivotTableUpdatePivotField.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPivotTablesPostPivotTableUpdatePivotField.');
        }

        // verify required parameter 'requestObj.pivotTableIndex' is not null or undefined
        if (requestObj.pivotTableIndex === null || requestObj.pivotTableIndex === undefined) {
            throw new Error('Required parameter "requestObj.pivotTableIndex" was null or undefined when calling cellsPivotTablesPostPivotTableUpdatePivotField.');
        }

        // verify required parameter 'requestObj.pivotFieldIndex' is not null or undefined
        if (requestObj.pivotFieldIndex === null || requestObj.pivotFieldIndex === undefined) {
            throw new Error('Required parameter "requestObj.pivotFieldIndex" was null or undefined when calling cellsPivotTablesPostPivotTableUpdatePivotField.');
        }

        // verify required parameter 'requestObj.pivotFieldType' is not null or undefined
        if (requestObj.pivotFieldType === null || requestObj.pivotFieldType === undefined) {
            throw new Error('Required parameter "requestObj.pivotFieldType" was null or undefined when calling cellsPivotTablesPostPivotTableUpdatePivotField.');
        }

        // verify required parameter 'requestObj.pivotField' is not null or undefined
        if (requestObj.pivotField === null || requestObj.pivotField === undefined) {
            throw new Error('Required parameter "requestObj.pivotField" was null or undefined when calling cellsPivotTablesPostPivotTableUpdatePivotField.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pivotFieldType", requestObj.pivotFieldType);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "needReCalculate", requestObj.needReCalculate);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.pivotField == null) ? "" : ObjectSerializer.serialize(requestObj.pivotField, requestObj.pivotField.constructor.name === "Object" ? "PivotField" : requestObj.pivotField.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async cellsPivotTablesPostPivotTableUpdatePivotFields(requestObj: model.CellsPivotTables_PostPivotTableUpdatePivotFieldsRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPivotTablesPostPivotTableUpdatePivotFields.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/pivottables/{pivotTableIndex}/PivotFields"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "pivotTableIndex" + "}", String(requestObj.pivotTableIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPivotTablesPostPivotTableUpdatePivotFields.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPivotTablesPostPivotTableUpdatePivotFields.');
        }

        // verify required parameter 'requestObj.pivotTableIndex' is not null or undefined
        if (requestObj.pivotTableIndex === null || requestObj.pivotTableIndex === undefined) {
            throw new Error('Required parameter "requestObj.pivotTableIndex" was null or undefined when calling cellsPivotTablesPostPivotTableUpdatePivotFields.');
        }

        // verify required parameter 'requestObj.pivotFieldType' is not null or undefined
        if (requestObj.pivotFieldType === null || requestObj.pivotFieldType === undefined) {
            throw new Error('Required parameter "requestObj.pivotFieldType" was null or undefined when calling cellsPivotTablesPostPivotTableUpdatePivotFields.');
        }

        // verify required parameter 'requestObj.pivotField' is not null or undefined
        if (requestObj.pivotField === null || requestObj.pivotField === undefined) {
            throw new Error('Required parameter "requestObj.pivotField" was null or undefined when calling cellsPivotTablesPostPivotTableUpdatePivotFields.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pivotFieldType", requestObj.pivotFieldType);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "needReCalculate", requestObj.needReCalculate);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.pivotField == null) ? "" : ObjectSerializer.serialize(requestObj.pivotField, requestObj.pivotField.constructor.name === "Object" ? "PivotField" : requestObj.pivotField.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Calculates pivottable's data to cells.
     * @param requestObj contains request parameters
     */
    public async cellsPivotTablesPostWorksheetPivotTableCalculate(requestObj: model.CellsPivotTables_PostWorksheetPivotTableCalculateRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPivotTablesPostWorksheetPivotTableCalculate.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/pivottables/{pivotTableIndex}/Calculate"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "pivotTableIndex" + "}", String(requestObj.pivotTableIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPivotTablesPostWorksheetPivotTableCalculate.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPivotTablesPostWorksheetPivotTableCalculate.');
        }

        // verify required parameter 'requestObj.pivotTableIndex' is not null or undefined
        if (requestObj.pivotTableIndex === null || requestObj.pivotTableIndex === undefined) {
            throw new Error('Required parameter "requestObj.pivotTableIndex" was null or undefined when calling cellsPivotTablesPostWorksheetPivotTableCalculate.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async cellsPivotTablesPostWorksheetPivotTableMove(requestObj: model.CellsPivotTables_PostWorksheetPivotTableMoveRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPivotTablesPostWorksheetPivotTableMove.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/pivottables/{pivotTableIndex}/Move"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "pivotTableIndex" + "}", String(requestObj.pivotTableIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPivotTablesPostWorksheetPivotTableMove.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPivotTablesPostWorksheetPivotTableMove.');
        }

        // verify required parameter 'requestObj.pivotTableIndex' is not null or undefined
        if (requestObj.pivotTableIndex === null || requestObj.pivotTableIndex === undefined) {
            throw new Error('Required parameter "requestObj.pivotTableIndex" was null or undefined when calling cellsPivotTablesPostWorksheetPivotTableMove.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "row", requestObj.row);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "column", requestObj.column);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destCellName", requestObj.destCellName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Add pivot field into into pivot table
     * @param requestObj contains request parameters
     */
    public async cellsPivotTablesPutPivotTableField(requestObj: model.CellsPivotTables_PutPivotTableFieldRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPivotTablesPutPivotTableField.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/pivottables/{pivotTableIndex}/PivotField"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "pivotTableIndex" + "}", String(requestObj.pivotTableIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPivotTablesPutPivotTableField.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPivotTablesPutPivotTableField.');
        }

        // verify required parameter 'requestObj.pivotTableIndex' is not null or undefined
        if (requestObj.pivotTableIndex === null || requestObj.pivotTableIndex === undefined) {
            throw new Error('Required parameter "requestObj.pivotTableIndex" was null or undefined when calling cellsPivotTablesPutPivotTableField.');
        }

        // verify required parameter 'requestObj.pivotFieldType' is not null or undefined
        if (requestObj.pivotFieldType === null || requestObj.pivotFieldType === undefined) {
            throw new Error('Required parameter "requestObj.pivotFieldType" was null or undefined when calling cellsPivotTablesPutPivotTableField.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pivotFieldType", requestObj.pivotFieldType);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "needReCalculate", requestObj.needReCalculate);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.request == null) ? "" : ObjectSerializer.serialize(requestObj.request, requestObj.request.constructor.name === "Object" ? "PivotTableFieldRequest" : requestObj.request.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Add a pivot table into worksheet.
     * @param requestObj contains request parameters
     */
    public async cellsPivotTablesPutWorksheetPivotTable(requestObj: model.CellsPivotTables_PutWorksheetPivotTableRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPivotTablesPutWorksheetPivotTable.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/pivottables"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPivotTablesPutWorksheetPivotTable.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPivotTablesPutWorksheetPivotTable.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "sourceData", requestObj.sourceData);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destCellName", requestObj.destCellName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "tableName", requestObj.tableName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "useSameSource", requestObj.useSameSource);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.request == null) ? "" : ObjectSerializer.serialize(requestObj.request, requestObj.request.constructor.name === "Object" ? "CreatePivotTableRequest" : requestObj.request.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Add pivot filter for piovt table index
     * @param requestObj contains request parameters
     */
    public async cellsPivotTablesPutWorksheetPivotTableFilter(requestObj: model.CellsPivotTables_PutWorksheetPivotTableFilterRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPivotTablesPutWorksheetPivotTableFilter.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/pivottables/{pivotTableIndex}/PivotFilters"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "pivotTableIndex" + "}", String(requestObj.pivotTableIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPivotTablesPutWorksheetPivotTableFilter.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPivotTablesPutWorksheetPivotTableFilter.');
        }

        // verify required parameter 'requestObj.pivotTableIndex' is not null or undefined
        if (requestObj.pivotTableIndex === null || requestObj.pivotTableIndex === undefined) {
            throw new Error('Required parameter "requestObj.pivotTableIndex" was null or undefined when calling cellsPivotTablesPutWorksheetPivotTableFilter.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "needReCalculate", requestObj.needReCalculate);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.filter == null) ? "" : ObjectSerializer.serialize(requestObj.filter, requestObj.filter.constructor.name === "Object" ? "PivotFilter" : requestObj.filter.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Cell calculate formula
     * @param requestObj contains request parameters
     */
    public async cellsPostCellCalculate(requestObj: model.Cells_PostCellCalculateRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPostCellCalculate.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/cells/{cellName}/calculate"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "cellName" + "}", String(requestObj.cellName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPostCellCalculate.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPostCellCalculate.');
        }

        // verify required parameter 'requestObj.cellName' is not null or undefined
        if (requestObj.cellName === null || requestObj.cellName === undefined) {
            throw new Error('Required parameter "requestObj.cellName" was null or undefined when calling cellsPostCellCalculate.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.options == null) ? "" : ObjectSerializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "CalculationOptions" : requestObj.options.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Set cell characters 
     * @param requestObj contains request parameters
     */
    public async cellsPostCellCharacters(requestObj: model.Cells_PostCellCharactersRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPostCellCharacters.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/cells/{cellName}/characters"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "cellName" + "}", String(requestObj.cellName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPostCellCharacters.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPostCellCharacters.');
        }

        // verify required parameter 'requestObj.cellName' is not null or undefined
        if (requestObj.cellName === null || requestObj.cellName === undefined) {
            throw new Error('Required parameter "requestObj.cellName" was null or undefined when calling cellsPostCellCharacters.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.options == null) ? "" : ObjectSerializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "Array<FontSetting>" : requestObj.options.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Clear cells contents.
     * @param requestObj contains request parameters
     */
    public async cellsPostClearContents(requestObj: model.Cells_PostClearContentsRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPostClearContents.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/cells/clearcontents"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPostClearContents.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPostClearContents.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "range", requestObj.range);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "startRow", requestObj.startRow);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "startColumn", requestObj.startColumn);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "endRow", requestObj.endRow);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "endColumn", requestObj.endColumn);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Clear cells contents.
     * @param requestObj contains request parameters
     */
    public async cellsPostClearFormats(requestObj: model.Cells_PostClearFormatsRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPostClearFormats.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/cells/clearformats"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPostClearFormats.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPostClearFormats.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "range", requestObj.range);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "startRow", requestObj.startRow);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "startColumn", requestObj.startColumn);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "endRow", requestObj.endRow);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "endColumn", requestObj.endColumn);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Set column style
     * @param requestObj contains request parameters
     */
    public async cellsPostColumnStyle(requestObj: model.Cells_PostColumnStyleRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPostColumnStyle.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/cells/columns/{columnIndex}/style"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "columnIndex" + "}", String(requestObj.columnIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPostColumnStyle.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPostColumnStyle.');
        }

        // verify required parameter 'requestObj.columnIndex' is not null or undefined
        if (requestObj.columnIndex === null || requestObj.columnIndex === undefined) {
            throw new Error('Required parameter "requestObj.columnIndex" was null or undefined when calling cellsPostColumnStyle.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.style == null) ? "" : ObjectSerializer.serialize(requestObj.style, requestObj.style.constructor.name === "Object" ? "Style" : requestObj.style.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Copy cell into cell
     * @param requestObj contains request parameters
     */
    public async cellsPostCopyCellIntoCell(requestObj: model.Cells_PostCopyCellIntoCellRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPostCopyCellIntoCell.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/cells/{destCellName}/copy"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "destCellName" + "}", String(requestObj.destCellName))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPostCopyCellIntoCell.');
        }

        // verify required parameter 'requestObj.destCellName' is not null or undefined
        if (requestObj.destCellName === null || requestObj.destCellName === undefined) {
            throw new Error('Required parameter "requestObj.destCellName" was null or undefined when calling cellsPostCopyCellIntoCell.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPostCopyCellIntoCell.');
        }

        // verify required parameter 'requestObj.worksheet' is not null or undefined
        if (requestObj.worksheet === null || requestObj.worksheet === undefined) {
            throw new Error('Required parameter "requestObj.worksheet" was null or undefined when calling cellsPostCopyCellIntoCell.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "worksheet", requestObj.worksheet);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "cellname", requestObj.cellname);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "row", requestObj.row);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "column", requestObj.column);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Copy worksheet columns.
     * @param requestObj contains request parameters
     */
    public async cellsPostCopyWorksheetColumns(requestObj: model.Cells_PostCopyWorksheetColumnsRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPostCopyWorksheetColumns.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/cells/columns/copy"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPostCopyWorksheetColumns.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPostCopyWorksheetColumns.');
        }

        // verify required parameter 'requestObj.sourceColumnIndex' is not null or undefined
        if (requestObj.sourceColumnIndex === null || requestObj.sourceColumnIndex === undefined) {
            throw new Error('Required parameter "requestObj.sourceColumnIndex" was null or undefined when calling cellsPostCopyWorksheetColumns.');
        }

        // verify required parameter 'requestObj.destinationColumnIndex' is not null or undefined
        if (requestObj.destinationColumnIndex === null || requestObj.destinationColumnIndex === undefined) {
            throw new Error('Required parameter "requestObj.destinationColumnIndex" was null or undefined when calling cellsPostCopyWorksheetColumns.');
        }

        // verify required parameter 'requestObj.columnNumber' is not null or undefined
        if (requestObj.columnNumber === null || requestObj.columnNumber === undefined) {
            throw new Error('Required parameter "requestObj.columnNumber" was null or undefined when calling cellsPostCopyWorksheetColumns.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "sourceColumnIndex", requestObj.sourceColumnIndex);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destinationColumnIndex", requestObj.destinationColumnIndex);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "columnNumber", requestObj.columnNumber);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "worksheet", requestObj.worksheet);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Copy worksheet rows.
     * @param requestObj contains request parameters
     */
    public async cellsPostCopyWorksheetRows(requestObj: model.Cells_PostCopyWorksheetRowsRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPostCopyWorksheetRows.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/cells/rows/copy"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPostCopyWorksheetRows.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPostCopyWorksheetRows.');
        }

        // verify required parameter 'requestObj.sourceRowIndex' is not null or undefined
        if (requestObj.sourceRowIndex === null || requestObj.sourceRowIndex === undefined) {
            throw new Error('Required parameter "requestObj.sourceRowIndex" was null or undefined when calling cellsPostCopyWorksheetRows.');
        }

        // verify required parameter 'requestObj.destinationRowIndex' is not null or undefined
        if (requestObj.destinationRowIndex === null || requestObj.destinationRowIndex === undefined) {
            throw new Error('Required parameter "requestObj.destinationRowIndex" was null or undefined when calling cellsPostCopyWorksheetRows.');
        }

        // verify required parameter 'requestObj.rowNumber' is not null or undefined
        if (requestObj.rowNumber === null || requestObj.rowNumber === undefined) {
            throw new Error('Required parameter "requestObj.rowNumber" was null or undefined when calling cellsPostCopyWorksheetRows.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "sourceRowIndex", requestObj.sourceRowIndex);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destinationRowIndex", requestObj.destinationRowIndex);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "rowNumber", requestObj.rowNumber);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "worksheet", requestObj.worksheet);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Group worksheet columns.
     * @param requestObj contains request parameters
     */
    public async cellsPostGroupWorksheetColumns(requestObj: model.Cells_PostGroupWorksheetColumnsRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPostGroupWorksheetColumns.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/cells/columns/group"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPostGroupWorksheetColumns.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPostGroupWorksheetColumns.');
        }

        // verify required parameter 'requestObj.firstIndex' is not null or undefined
        if (requestObj.firstIndex === null || requestObj.firstIndex === undefined) {
            throw new Error('Required parameter "requestObj.firstIndex" was null or undefined when calling cellsPostGroupWorksheetColumns.');
        }

        // verify required parameter 'requestObj.lastIndex' is not null or undefined
        if (requestObj.lastIndex === null || requestObj.lastIndex === undefined) {
            throw new Error('Required parameter "requestObj.lastIndex" was null or undefined when calling cellsPostGroupWorksheetColumns.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "firstIndex", requestObj.firstIndex);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "lastIndex", requestObj.lastIndex);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "hide", requestObj.hide);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Group worksheet rows.
     * @param requestObj contains request parameters
     */
    public async cellsPostGroupWorksheetRows(requestObj: model.Cells_PostGroupWorksheetRowsRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPostGroupWorksheetRows.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/cells/rows/group"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPostGroupWorksheetRows.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPostGroupWorksheetRows.');
        }

        // verify required parameter 'requestObj.firstIndex' is not null or undefined
        if (requestObj.firstIndex === null || requestObj.firstIndex === undefined) {
            throw new Error('Required parameter "requestObj.firstIndex" was null or undefined when calling cellsPostGroupWorksheetRows.');
        }

        // verify required parameter 'requestObj.lastIndex' is not null or undefined
        if (requestObj.lastIndex === null || requestObj.lastIndex === undefined) {
            throw new Error('Required parameter "requestObj.lastIndex" was null or undefined when calling cellsPostGroupWorksheetRows.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "firstIndex", requestObj.firstIndex);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "lastIndex", requestObj.lastIndex);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "hide", requestObj.hide);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Hide worksheet columns.
     * @param requestObj contains request parameters
     */
    public async cellsPostHideWorksheetColumns(requestObj: model.Cells_PostHideWorksheetColumnsRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPostHideWorksheetColumns.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/cells/columns/hide"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPostHideWorksheetColumns.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPostHideWorksheetColumns.');
        }

        // verify required parameter 'requestObj.startColumn' is not null or undefined
        if (requestObj.startColumn === null || requestObj.startColumn === undefined) {
            throw new Error('Required parameter "requestObj.startColumn" was null or undefined when calling cellsPostHideWorksheetColumns.');
        }

        // verify required parameter 'requestObj.totalColumns' is not null or undefined
        if (requestObj.totalColumns === null || requestObj.totalColumns === undefined) {
            throw new Error('Required parameter "requestObj.totalColumns" was null or undefined when calling cellsPostHideWorksheetColumns.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "startColumn", requestObj.startColumn);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "totalColumns", requestObj.totalColumns);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Hide worksheet rows.
     * @param requestObj contains request parameters
     */
    public async cellsPostHideWorksheetRows(requestObj: model.Cells_PostHideWorksheetRowsRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPostHideWorksheetRows.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/cells/rows/hide"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPostHideWorksheetRows.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPostHideWorksheetRows.');
        }

        // verify required parameter 'requestObj.startrow' is not null or undefined
        if (requestObj.startrow === null || requestObj.startrow === undefined) {
            throw new Error('Required parameter "requestObj.startrow" was null or undefined when calling cellsPostHideWorksheetRows.');
        }

        // verify required parameter 'requestObj.totalRows' is not null or undefined
        if (requestObj.totalRows === null || requestObj.totalRows === undefined) {
            throw new Error('Required parameter "requestObj.totalRows" was null or undefined when calling cellsPostHideWorksheetRows.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "startrow", requestObj.startrow);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "totalRows", requestObj.totalRows);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Set row style.
     * @param requestObj contains request parameters
     */
    public async cellsPostRowStyle(requestObj: model.Cells_PostRowStyleRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPostRowStyle.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/cells/rows/{rowIndex}/style"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "rowIndex" + "}", String(requestObj.rowIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPostRowStyle.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPostRowStyle.');
        }

        // verify required parameter 'requestObj.rowIndex' is not null or undefined
        if (requestObj.rowIndex === null || requestObj.rowIndex === undefined) {
            throw new Error('Required parameter "requestObj.rowIndex" was null or undefined when calling cellsPostRowStyle.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.style == null) ? "" : ObjectSerializer.serialize(requestObj.style, requestObj.style.constructor.name === "Object" ? "Style" : requestObj.style.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Set htmlstring value into cell
     * @param requestObj contains request parameters
     */
    public async cellsPostSetCellHtmlString(requestObj: model.Cells_PostSetCellHtmlStringRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPostSetCellHtmlString.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/cells/{cellName}/htmlstring"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "cellName" + "}", String(requestObj.cellName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPostSetCellHtmlString.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPostSetCellHtmlString.');
        }

        // verify required parameter 'requestObj.cellName' is not null or undefined
        if (requestObj.cellName === null || requestObj.cellName === undefined) {
            throw new Error('Required parameter "requestObj.cellName" was null or undefined when calling cellsPostSetCellHtmlString.');
        }

        // verify required parameter 'requestObj.htmlString' is not null or undefined
        if (requestObj.htmlString === null || requestObj.htmlString === undefined) {
            throw new Error('Required parameter "requestObj.htmlString" was null or undefined when calling cellsPostSetCellHtmlString.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.htmlString == null) ? "" : ObjectSerializer.serialize(requestObj.htmlString, requestObj.htmlString.constructor.name === "Object" ? "string" : requestObj.htmlString.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Set cell range value 
     * @param requestObj contains request parameters
     */
    public async cellsPostSetCellRangeValue(requestObj: model.Cells_PostSetCellRangeValueRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPostSetCellRangeValue.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/cells"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPostSetCellRangeValue.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPostSetCellRangeValue.');
        }

        // verify required parameter 'requestObj.cellarea' is not null or undefined
        if (requestObj.cellarea === null || requestObj.cellarea === undefined) {
            throw new Error('Required parameter "requestObj.cellarea" was null or undefined when calling cellsPostSetCellRangeValue.');
        }

        // verify required parameter 'requestObj.value' is not null or undefined
        if (requestObj.value === null || requestObj.value === undefined) {
            throw new Error('Required parameter "requestObj.value" was null or undefined when calling cellsPostSetCellRangeValue.');
        }

        // verify required parameter 'requestObj.type' is not null or undefined
        if (requestObj.type === null || requestObj.type === undefined) {
            throw new Error('Required parameter "requestObj.type" was null or undefined when calling cellsPostSetCellRangeValue.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "cellarea", requestObj.cellarea);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "value", requestObj.value);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "type", requestObj.type);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Set worksheet column width.
     * @param requestObj contains request parameters
     */
    public async cellsPostSetWorksheetColumnWidth(requestObj: model.Cells_PostSetWorksheetColumnWidthRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPostSetWorksheetColumnWidth.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/cells/columns/{columnIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "columnIndex" + "}", String(requestObj.columnIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPostSetWorksheetColumnWidth.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPostSetWorksheetColumnWidth.');
        }

        // verify required parameter 'requestObj.columnIndex' is not null or undefined
        if (requestObj.columnIndex === null || requestObj.columnIndex === undefined) {
            throw new Error('Required parameter "requestObj.columnIndex" was null or undefined when calling cellsPostSetWorksheetColumnWidth.');
        }

        // verify required parameter 'requestObj.width' is not null or undefined
        if (requestObj.width === null || requestObj.width === undefined) {
            throw new Error('Required parameter "requestObj.width" was null or undefined when calling cellsPostSetWorksheetColumnWidth.');
        }

        // verify required parameter 'requestObj.count' is not null or undefined
        if (requestObj.count === null || requestObj.count === undefined) {
            throw new Error('Required parameter "requestObj.count" was null or undefined when calling cellsPostSetWorksheetColumnWidth.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "width", requestObj.width);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "count", requestObj.count);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Ungroup worksheet columns.
     * @param requestObj contains request parameters
     */
    public async cellsPostUngroupWorksheetColumns(requestObj: model.Cells_PostUngroupWorksheetColumnsRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPostUngroupWorksheetColumns.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/cells/columns/ungroup"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPostUngroupWorksheetColumns.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPostUngroupWorksheetColumns.');
        }

        // verify required parameter 'requestObj.firstIndex' is not null or undefined
        if (requestObj.firstIndex === null || requestObj.firstIndex === undefined) {
            throw new Error('Required parameter "requestObj.firstIndex" was null or undefined when calling cellsPostUngroupWorksheetColumns.');
        }

        // verify required parameter 'requestObj.lastIndex' is not null or undefined
        if (requestObj.lastIndex === null || requestObj.lastIndex === undefined) {
            throw new Error('Required parameter "requestObj.lastIndex" was null or undefined when calling cellsPostUngroupWorksheetColumns.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "firstIndex", requestObj.firstIndex);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "lastIndex", requestObj.lastIndex);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Ungroup worksheet rows.
     * @param requestObj contains request parameters
     */
    public async cellsPostUngroupWorksheetRows(requestObj: model.Cells_PostUngroupWorksheetRowsRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPostUngroupWorksheetRows.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/cells/rows/ungroup"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPostUngroupWorksheetRows.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPostUngroupWorksheetRows.');
        }

        // verify required parameter 'requestObj.firstIndex' is not null or undefined
        if (requestObj.firstIndex === null || requestObj.firstIndex === undefined) {
            throw new Error('Required parameter "requestObj.firstIndex" was null or undefined when calling cellsPostUngroupWorksheetRows.');
        }

        // verify required parameter 'requestObj.lastIndex' is not null or undefined
        if (requestObj.lastIndex === null || requestObj.lastIndex === undefined) {
            throw new Error('Required parameter "requestObj.lastIndex" was null or undefined when calling cellsPostUngroupWorksheetRows.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "firstIndex", requestObj.firstIndex);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "lastIndex", requestObj.lastIndex);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "isAll", requestObj.isAll);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Unhide worksheet columns.
     * @param requestObj contains request parameters
     */
    public async cellsPostUnhideWorksheetColumns(requestObj: model.Cells_PostUnhideWorksheetColumnsRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPostUnhideWorksheetColumns.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/cells/columns/unhide"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPostUnhideWorksheetColumns.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPostUnhideWorksheetColumns.');
        }

        // verify required parameter 'requestObj.startcolumn' is not null or undefined
        if (requestObj.startcolumn === null || requestObj.startcolumn === undefined) {
            throw new Error('Required parameter "requestObj.startcolumn" was null or undefined when calling cellsPostUnhideWorksheetColumns.');
        }

        // verify required parameter 'requestObj.totalColumns' is not null or undefined
        if (requestObj.totalColumns === null || requestObj.totalColumns === undefined) {
            throw new Error('Required parameter "requestObj.totalColumns" was null or undefined when calling cellsPostUnhideWorksheetColumns.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "startcolumn", requestObj.startcolumn);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "totalColumns", requestObj.totalColumns);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "width", requestObj.width);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Unhide worksheet rows.
     * @param requestObj contains request parameters
     */
    public async cellsPostUnhideWorksheetRows(requestObj: model.Cells_PostUnhideWorksheetRowsRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPostUnhideWorksheetRows.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/cells/rows/unhide"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPostUnhideWorksheetRows.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPostUnhideWorksheetRows.');
        }

        // verify required parameter 'requestObj.startrow' is not null or undefined
        if (requestObj.startrow === null || requestObj.startrow === undefined) {
            throw new Error('Required parameter "requestObj.startrow" was null or undefined when calling cellsPostUnhideWorksheetRows.');
        }

        // verify required parameter 'requestObj.totalRows' is not null or undefined
        if (requestObj.totalRows === null || requestObj.totalRows === undefined) {
            throw new Error('Required parameter "requestObj.totalRows" was null or undefined when calling cellsPostUnhideWorksheetRows.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "startrow", requestObj.startrow);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "totalRows", requestObj.totalRows);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "height", requestObj.height);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Update cell's style.
     * @param requestObj contains request parameters
     */
    public async cellsPostUpdateWorksheetCellStyle(requestObj: model.Cells_PostUpdateWorksheetCellStyleRequest): Promise<{response: http.ClientResponse, body: model.StyleResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPostUpdateWorksheetCellStyle.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/cells/{cellName}/style"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "cellName" + "}", String(requestObj.cellName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPostUpdateWorksheetCellStyle.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPostUpdateWorksheetCellStyle.');
        }

        // verify required parameter 'requestObj.cellName' is not null or undefined
        if (requestObj.cellName === null || requestObj.cellName === undefined) {
            throw new Error('Required parameter "requestObj.cellName" was null or undefined when calling cellsPostUpdateWorksheetCellStyle.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.style == null) ? "" : ObjectSerializer.serialize(requestObj.style, requestObj.style.constructor.name === "Object" ? "Style" : requestObj.style.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "StyleResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Update cell's range style.
     * @param requestObj contains request parameters
     */
    public async cellsPostUpdateWorksheetRangeStyle(requestObj: model.Cells_PostUpdateWorksheetRangeStyleRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPostUpdateWorksheetRangeStyle.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/cells/style"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPostUpdateWorksheetRangeStyle.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPostUpdateWorksheetRangeStyle.');
        }

        // verify required parameter 'requestObj.range' is not null or undefined
        if (requestObj.range === null || requestObj.range === undefined) {
            throw new Error('Required parameter "requestObj.range" was null or undefined when calling cellsPostUpdateWorksheetRangeStyle.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "range", requestObj.range);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.style == null) ? "" : ObjectSerializer.serialize(requestObj.style, requestObj.style.constructor.name === "Object" ? "Style" : requestObj.style.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Update worksheet row.
     * @param requestObj contains request parameters
     */
    public async cellsPostUpdateWorksheetRow(requestObj: model.Cells_PostUpdateWorksheetRowRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPostUpdateWorksheetRow.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/cells/rows/{rowIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "rowIndex" + "}", String(requestObj.rowIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPostUpdateWorksheetRow.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPostUpdateWorksheetRow.');
        }

        // verify required parameter 'requestObj.rowIndex' is not null or undefined
        if (requestObj.rowIndex === null || requestObj.rowIndex === undefined) {
            throw new Error('Required parameter "requestObj.rowIndex" was null or undefined when calling cellsPostUpdateWorksheetRow.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "height", requestObj.height);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "count", requestObj.count);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Set cell value.
     * @param requestObj contains request parameters
     */
    public async cellsPostWorksheetCellSetValue(requestObj: model.Cells_PostWorksheetCellSetValueRequest): Promise<{response: http.ClientResponse, body: model.CellResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPostWorksheetCellSetValue.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/cells/{cellName}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "cellName" + "}", String(requestObj.cellName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPostWorksheetCellSetValue.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPostWorksheetCellSetValue.');
        }

        // verify required parameter 'requestObj.cellName' is not null or undefined
        if (requestObj.cellName === null || requestObj.cellName === undefined) {
            throw new Error('Required parameter "requestObj.cellName" was null or undefined when calling cellsPostWorksheetCellSetValue.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "value", requestObj.value);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "type", requestObj.type);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "formula", requestObj.formula);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Merge cells.
     * @param requestObj contains request parameters
     */
    public async cellsPostWorksheetMerge(requestObj: model.Cells_PostWorksheetMergeRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPostWorksheetMerge.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/cells/merge"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPostWorksheetMerge.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPostWorksheetMerge.');
        }

        // verify required parameter 'requestObj.startRow' is not null or undefined
        if (requestObj.startRow === null || requestObj.startRow === undefined) {
            throw new Error('Required parameter "requestObj.startRow" was null or undefined when calling cellsPostWorksheetMerge.');
        }

        // verify required parameter 'requestObj.startColumn' is not null or undefined
        if (requestObj.startColumn === null || requestObj.startColumn === undefined) {
            throw new Error('Required parameter "requestObj.startColumn" was null or undefined when calling cellsPostWorksheetMerge.');
        }

        // verify required parameter 'requestObj.totalRows' is not null or undefined
        if (requestObj.totalRows === null || requestObj.totalRows === undefined) {
            throw new Error('Required parameter "requestObj.totalRows" was null or undefined when calling cellsPostWorksheetMerge.');
        }

        // verify required parameter 'requestObj.totalColumns' is not null or undefined
        if (requestObj.totalColumns === null || requestObj.totalColumns === undefined) {
            throw new Error('Required parameter "requestObj.totalColumns" was null or undefined when calling cellsPostWorksheetMerge.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "startRow", requestObj.startRow);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "startColumn", requestObj.startColumn);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "totalRows", requestObj.totalRows);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "totalColumns", requestObj.totalColumns);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Unmerge cells.
     * @param requestObj contains request parameters
     */
    public async cellsPostWorksheetUnmerge(requestObj: model.Cells_PostWorksheetUnmergeRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPostWorksheetUnmerge.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/cells/unmerge"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPostWorksheetUnmerge.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPostWorksheetUnmerge.');
        }

        // verify required parameter 'requestObj.startRow' is not null or undefined
        if (requestObj.startRow === null || requestObj.startRow === undefined) {
            throw new Error('Required parameter "requestObj.startRow" was null or undefined when calling cellsPostWorksheetUnmerge.');
        }

        // verify required parameter 'requestObj.startColumn' is not null or undefined
        if (requestObj.startColumn === null || requestObj.startColumn === undefined) {
            throw new Error('Required parameter "requestObj.startColumn" was null or undefined when calling cellsPostWorksheetUnmerge.');
        }

        // verify required parameter 'requestObj.totalRows' is not null or undefined
        if (requestObj.totalRows === null || requestObj.totalRows === undefined) {
            throw new Error('Required parameter "requestObj.totalRows" was null or undefined when calling cellsPostWorksheetUnmerge.');
        }

        // verify required parameter 'requestObj.totalColumns' is not null or undefined
        if (requestObj.totalColumns === null || requestObj.totalColumns === undefined) {
            throw new Error('Required parameter "requestObj.totalColumns" was null or undefined when calling cellsPostWorksheetUnmerge.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "startRow", requestObj.startRow);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "startColumn", requestObj.startColumn);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "totalRows", requestObj.totalRows);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "totalColumns", requestObj.totalColumns);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete all custom document properties and clean built-in ones.
     * @param requestObj contains request parameters
     */
    public async cellsPropertiesDeleteDocumentProperties(requestObj: model.CellsProperties_DeleteDocumentPropertiesRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPropertiesDeleteDocumentProperties.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/documentproperties"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPropertiesDeleteDocumentProperties.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete document property.
     * @param requestObj contains request parameters
     */
    public async cellsPropertiesDeleteDocumentProperty(requestObj: model.CellsProperties_DeleteDocumentPropertyRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPropertiesDeleteDocumentProperty.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/documentproperties/{propertyName}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "propertyName" + "}", String(requestObj.propertyName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPropertiesDeleteDocumentProperty.');
        }

        // verify required parameter 'requestObj.propertyName' is not null or undefined
        if (requestObj.propertyName === null || requestObj.propertyName === undefined) {
            throw new Error('Required parameter "requestObj.propertyName" was null or undefined when calling cellsPropertiesDeleteDocumentProperty.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read document properties.
     * @param requestObj contains request parameters
     */
    public async cellsPropertiesGetDocumentProperties(requestObj: model.CellsProperties_GetDocumentPropertiesRequest): Promise<{response: http.ClientResponse, body: model.CellsDocumentPropertiesResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPropertiesGetDocumentProperties.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/documentproperties"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPropertiesGetDocumentProperties.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsDocumentPropertiesResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read document property by name.
     * @param requestObj contains request parameters
     */
    public async cellsPropertiesGetDocumentProperty(requestObj: model.CellsProperties_GetDocumentPropertyRequest): Promise<{response: http.ClientResponse, body: model.CellsDocumentPropertyResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPropertiesGetDocumentProperty.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/documentproperties/{propertyName}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "propertyName" + "}", String(requestObj.propertyName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPropertiesGetDocumentProperty.');
        }

        // verify required parameter 'requestObj.propertyName' is not null or undefined
        if (requestObj.propertyName === null || requestObj.propertyName === undefined) {
            throw new Error('Required parameter "requestObj.propertyName" was null or undefined when calling cellsPropertiesGetDocumentProperty.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsDocumentPropertyResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Set/create document property.
     * @param requestObj contains request parameters
     */
    public async cellsPropertiesPutDocumentProperty(requestObj: model.CellsProperties_PutDocumentPropertyRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPropertiesPutDocumentProperty.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/documentproperties/{propertyName}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "propertyName" + "}", String(requestObj.propertyName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPropertiesPutDocumentProperty.');
        }

        // verify required parameter 'requestObj.propertyName' is not null or undefined
        if (requestObj.propertyName === null || requestObj.propertyName === undefined) {
            throw new Error('Required parameter "requestObj.propertyName" was null or undefined when calling cellsPropertiesPutDocumentProperty.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.property == null) ? "" : ObjectSerializer.serialize(requestObj.property, requestObj.property.constructor.name === "Object" ? "CellsDocumentProperty" : requestObj.property.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Insert worksheet columns.
     * @param requestObj contains request parameters
     */
    public async cellsPutInsertWorksheetColumns(requestObj: model.Cells_PutInsertWorksheetColumnsRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPutInsertWorksheetColumns.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/cells/columns/{columnIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "columnIndex" + "}", String(requestObj.columnIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPutInsertWorksheetColumns.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPutInsertWorksheetColumns.');
        }

        // verify required parameter 'requestObj.columnIndex' is not null or undefined
        if (requestObj.columnIndex === null || requestObj.columnIndex === undefined) {
            throw new Error('Required parameter "requestObj.columnIndex" was null or undefined when calling cellsPutInsertWorksheetColumns.');
        }

        // verify required parameter 'requestObj.columns' is not null or undefined
        if (requestObj.columns === null || requestObj.columns === undefined) {
            throw new Error('Required parameter "requestObj.columns" was null or undefined when calling cellsPutInsertWorksheetColumns.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "columns", requestObj.columns);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "updateReference", requestObj.updateReference);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Insert new worksheet row.
     * @param requestObj contains request parameters
     */
    public async cellsPutInsertWorksheetRow(requestObj: model.Cells_PutInsertWorksheetRowRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPutInsertWorksheetRow.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/cells/rows/{rowIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "rowIndex" + "}", String(requestObj.rowIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPutInsertWorksheetRow.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPutInsertWorksheetRow.');
        }

        // verify required parameter 'requestObj.rowIndex' is not null or undefined
        if (requestObj.rowIndex === null || requestObj.rowIndex === undefined) {
            throw new Error('Required parameter "requestObj.rowIndex" was null or undefined when calling cellsPutInsertWorksheetRow.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Insert several new worksheet rows.
     * @param requestObj contains request parameters
     */
    public async cellsPutInsertWorksheetRows(requestObj: model.Cells_PutInsertWorksheetRowsRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsPutInsertWorksheetRows.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/cells/rows"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsPutInsertWorksheetRows.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsPutInsertWorksheetRows.');
        }

        // verify required parameter 'requestObj.startrow' is not null or undefined
        if (requestObj.startrow === null || requestObj.startrow === undefined) {
            throw new Error('Required parameter "requestObj.startrow" was null or undefined when calling cellsPutInsertWorksheetRows.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "startrow", requestObj.startrow);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "totalRows", requestObj.totalRows);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "updateReference", requestObj.updateReference);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete range in the worksheet
     * @param requestObj contains request parameters
     */
    public async cellsRangesDeleteWorksheetCellsRange(requestObj: model.CellsRanges_DeleteWorksheetCellsRangeRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsRangesDeleteWorksheetCellsRange.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/ranges"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsRangesDeleteWorksheetCellsRange.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsRangesDeleteWorksheetCellsRange.');
        }

        // verify required parameter 'requestObj.range' is not null or undefined
        if (requestObj.range === null || requestObj.range === undefined) {
            throw new Error('Required parameter "requestObj.range" was null or undefined when calling cellsRangesDeleteWorksheetCellsRange.');
        }

        // verify required parameter 'requestObj.shift' is not null or undefined
        if (requestObj.shift === null || requestObj.shift === undefined) {
            throw new Error('Required parameter "requestObj.shift" was null or undefined when calling cellsRangesDeleteWorksheetCellsRange.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "range", requestObj.range);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "shift", requestObj.shift);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get cells list in a range by range name or row column indexes  
     * @param requestObj contains request parameters
     */
    public async cellsRangesGetWorksheetCellsRangeValue(requestObj: model.CellsRanges_GetWorksheetCellsRangeValueRequest): Promise<{response: http.ClientResponse, body: model.RangeValueResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsRangesGetWorksheetCellsRangeValue.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/ranges/value"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsRangesGetWorksheetCellsRangeValue.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsRangesGetWorksheetCellsRangeValue.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "namerange", requestObj.namerange);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "firstRow", requestObj.firstRow);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "firstColumn", requestObj.firstColumn);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "rowCount", requestObj.rowCount);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "columnCount", requestObj.columnCount);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "RangeValueResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Set column width of range
     * @param requestObj contains request parameters
     */
    public async cellsRangesPostWorksheetCellsRangeColumnWidth(requestObj: model.CellsRanges_PostWorksheetCellsRangeColumnWidthRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsRangesPostWorksheetCellsRangeColumnWidth.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/ranges/columnWidth"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsRangesPostWorksheetCellsRangeColumnWidth.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsRangesPostWorksheetCellsRangeColumnWidth.');
        }

        // verify required parameter 'requestObj.value' is not null or undefined
        if (requestObj.value === null || requestObj.value === undefined) {
            throw new Error('Required parameter "requestObj.value" was null or undefined when calling cellsRangesPostWorksheetCellsRangeColumnWidth.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "value", requestObj.value);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.range == null) ? "" : ObjectSerializer.serialize(requestObj.range, requestObj.range.constructor.name === "Object" ? "Range" : requestObj.range.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Combines a range of cells into a single cell.              
     * @param requestObj contains request parameters
     */
    public async cellsRangesPostWorksheetCellsRangeMerge(requestObj: model.CellsRanges_PostWorksheetCellsRangeMergeRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsRangesPostWorksheetCellsRangeMerge.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/ranges/merge"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsRangesPostWorksheetCellsRangeMerge.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsRangesPostWorksheetCellsRangeMerge.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.range == null) ? "" : ObjectSerializer.serialize(requestObj.range, requestObj.range.constructor.name === "Object" ? "Range" : requestObj.range.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Move the current range to the dest range.             
     * @param requestObj contains request parameters
     */
    public async cellsRangesPostWorksheetCellsRangeMoveTo(requestObj: model.CellsRanges_PostWorksheetCellsRangeMoveToRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsRangesPostWorksheetCellsRangeMoveTo.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/ranges/moveto"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsRangesPostWorksheetCellsRangeMoveTo.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsRangesPostWorksheetCellsRangeMoveTo.');
        }

        // verify required parameter 'requestObj.destRow' is not null or undefined
        if (requestObj.destRow === null || requestObj.destRow === undefined) {
            throw new Error('Required parameter "requestObj.destRow" was null or undefined when calling cellsRangesPostWorksheetCellsRangeMoveTo.');
        }

        // verify required parameter 'requestObj.destColumn' is not null or undefined
        if (requestObj.destColumn === null || requestObj.destColumn === undefined) {
            throw new Error('Required parameter "requestObj.destColumn" was null or undefined when calling cellsRangesPostWorksheetCellsRangeMoveTo.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destRow", requestObj.destRow);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destColumn", requestObj.destColumn);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.range == null) ? "" : ObjectSerializer.serialize(requestObj.range, requestObj.range.constructor.name === "Object" ? "Range" : requestObj.range.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Sets outline border around a range of cells.
     * @param requestObj contains request parameters
     */
    public async cellsRangesPostWorksheetCellsRangeOutlineBorder(requestObj: model.CellsRanges_PostWorksheetCellsRangeOutlineBorderRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsRangesPostWorksheetCellsRangeOutlineBorder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/ranges/outlineBorder"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsRangesPostWorksheetCellsRangeOutlineBorder.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsRangesPostWorksheetCellsRangeOutlineBorder.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.rangeOperate == null) ? "" : ObjectSerializer.serialize(requestObj.rangeOperate, requestObj.rangeOperate.constructor.name === "Object" ? "RangeSetOutlineBorderRequest" : requestObj.rangeOperate.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * set row height of range
     * @param requestObj contains request parameters
     */
    public async cellsRangesPostWorksheetCellsRangeRowHeight(requestObj: model.CellsRanges_PostWorksheetCellsRangeRowHeightRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsRangesPostWorksheetCellsRangeRowHeight.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/ranges/rowHeight"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsRangesPostWorksheetCellsRangeRowHeight.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsRangesPostWorksheetCellsRangeRowHeight.');
        }

        // verify required parameter 'requestObj.value' is not null or undefined
        if (requestObj.value === null || requestObj.value === undefined) {
            throw new Error('Required parameter "requestObj.value" was null or undefined when calling cellsRangesPostWorksheetCellsRangeRowHeight.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "value", requestObj.value);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.range == null) ? "" : ObjectSerializer.serialize(requestObj.range, requestObj.range.constructor.name === "Object" ? "Range" : requestObj.range.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Sets the style of the range.             
     * @param requestObj contains request parameters
     */
    public async cellsRangesPostWorksheetCellsRangeStyle(requestObj: model.CellsRanges_PostWorksheetCellsRangeStyleRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsRangesPostWorksheetCellsRangeStyle.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/ranges/style"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsRangesPostWorksheetCellsRangeStyle.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsRangesPostWorksheetCellsRangeStyle.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.rangeOperate == null) ? "" : ObjectSerializer.serialize(requestObj.rangeOperate, requestObj.rangeOperate.constructor.name === "Object" ? "RangeSetStyleRequest" : requestObj.rangeOperate.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Unmerges merged cells of this range.             
     * @param requestObj contains request parameters
     */
    public async cellsRangesPostWorksheetCellsRangeUnmerge(requestObj: model.CellsRanges_PostWorksheetCellsRangeUnmergeRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsRangesPostWorksheetCellsRangeUnmerge.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/ranges/unmerge"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsRangesPostWorksheetCellsRangeUnmerge.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsRangesPostWorksheetCellsRangeUnmerge.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.range == null) ? "" : ObjectSerializer.serialize(requestObj.range, requestObj.range.constructor.name === "Object" ? "Range" : requestObj.range.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Puts a value into the range, if appropriate the value will be converted to other data type and cell's number format will be reset.             
     * @param requestObj contains request parameters
     */
    public async cellsRangesPostWorksheetCellsRangeValue(requestObj: model.CellsRanges_PostWorksheetCellsRangeValueRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsRangesPostWorksheetCellsRangeValue.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/ranges/value"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsRangesPostWorksheetCellsRangeValue.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsRangesPostWorksheetCellsRangeValue.');
        }

        // verify required parameter 'requestObj.value' is not null or undefined
        if (requestObj.value === null || requestObj.value === undefined) {
            throw new Error('Required parameter "requestObj.value" was null or undefined when calling cellsRangesPostWorksheetCellsRangeValue.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "value", requestObj.value);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "isConverted", requestObj.isConverted);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "setStyle", requestObj.setStyle);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.range == null) ? "" : ObjectSerializer.serialize(requestObj.range, requestObj.range.constructor.name === "Object" ? "Range" : requestObj.range.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * copy range in the worksheet
     * @param requestObj contains request parameters
     */
    public async cellsRangesPostWorksheetCellsRanges(requestObj: model.CellsRanges_PostWorksheetCellsRangesRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsRangesPostWorksheetCellsRanges.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/ranges"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsRangesPostWorksheetCellsRanges.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsRangesPostWorksheetCellsRanges.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.rangeOperate == null) ? "" : ObjectSerializer.serialize(requestObj.rangeOperate, requestObj.rangeOperate.constructor.name === "Object" ? "RangeCopyRequest" : requestObj.rangeOperate.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Insert range in the worksheet
     * @param requestObj contains request parameters
     */
    public async cellsRangesPutWorksheetCellsRange(requestObj: model.CellsRanges_PutWorksheetCellsRangeRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsRangesPutWorksheetCellsRange.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/ranges"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsRangesPutWorksheetCellsRange.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsRangesPutWorksheetCellsRange.');
        }

        // verify required parameter 'requestObj.range' is not null or undefined
        if (requestObj.range === null || requestObj.range === undefined) {
            throw new Error('Required parameter "requestObj.range" was null or undefined when calling cellsRangesPutWorksheetCellsRange.');
        }

        // verify required parameter 'requestObj.shift' is not null or undefined
        if (requestObj.shift === null || requestObj.shift === undefined) {
            throw new Error('Required parameter "requestObj.shift" was null or undefined when calling cellsRangesPutWorksheetCellsRange.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "range", requestObj.range);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "shift", requestObj.shift);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Convert document and save result to storage.
     * @param requestObj contains request parameters
     */
    public async cellsSaveAsPostDocumentSaveAs(requestObj: model.CellsSaveAs_PostDocumentSaveAsRequest): Promise<{response: http.ClientResponse, body: model.SaveResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsSaveAsPostDocumentSaveAs.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/SaveAs"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsSaveAsPostDocumentSaveAs.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newfilename", requestObj.newfilename);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "isAutoFitRows", requestObj.isAutoFitRows);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "isAutoFitColumns", requestObj.isAutoFitColumns);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outStorageName", requestObj.outStorageName);

        if (requestObj.extendedQueryParameters !== undefined) {
            for (var key in requestObj.extendedQueryParameters){
                localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, key, requestObj.extendedQueryParameters[key]);
            }
        }        
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.saveOptions == null) ? "" : ObjectSerializer.serialize(requestObj.saveOptions, requestObj.saveOptions.constructor.name === "Object" ? "SaveOptions" : requestObj.saveOptions.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "SaveResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete a shape in worksheet
     * @param requestObj contains request parameters
     */
    public async cellsShapesDeleteWorksheetShape(requestObj: model.CellsShapes_DeleteWorksheetShapeRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsShapesDeleteWorksheetShape.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/shapes/{shapeindex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "shapeindex" + "}", String(requestObj.shapeindex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsShapesDeleteWorksheetShape.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsShapesDeleteWorksheetShape.');
        }

        // verify required parameter 'requestObj.shapeindex' is not null or undefined
        if (requestObj.shapeindex === null || requestObj.shapeindex === undefined) {
            throw new Error('Required parameter "requestObj.shapeindex" was null or undefined when calling cellsShapesDeleteWorksheetShape.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * delete all shapes in worksheet
     * @param requestObj contains request parameters
     */
    public async cellsShapesDeleteWorksheetShapes(requestObj: model.CellsShapes_DeleteWorksheetShapesRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsShapesDeleteWorksheetShapes.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/shapes"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsShapesDeleteWorksheetShapes.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsShapesDeleteWorksheetShapes.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get worksheet shape
     * @param requestObj contains request parameters
     */
    public async cellsShapesGetWorksheetShape(requestObj: model.CellsShapes_GetWorksheetShapeRequest): Promise<{response: http.ClientResponse, body: model.ShapeResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsShapesGetWorksheetShape.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/shapes/{shapeindex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "shapeindex" + "}", String(requestObj.shapeindex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsShapesGetWorksheetShape.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsShapesGetWorksheetShape.');
        }

        // verify required parameter 'requestObj.shapeindex' is not null or undefined
        if (requestObj.shapeindex === null || requestObj.shapeindex === undefined) {
            throw new Error('Required parameter "requestObj.shapeindex" was null or undefined when calling cellsShapesGetWorksheetShape.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ShapeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get worksheet shapes 
     * @param requestObj contains request parameters
     */
    public async cellsShapesGetWorksheetShapes(requestObj: model.CellsShapes_GetWorksheetShapesRequest): Promise<{response: http.ClientResponse, body: model.ShapesResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsShapesGetWorksheetShapes.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/shapes"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsShapesGetWorksheetShapes.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsShapesGetWorksheetShapes.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ShapesResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Update a shape in worksheet
     * @param requestObj contains request parameters
     */
    public async cellsShapesPostWorksheetGroupShape(requestObj: model.CellsShapes_PostWorksheetGroupShapeRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsShapesPostWorksheetGroupShape.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/shapes/group"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsShapesPostWorksheetGroupShape.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsShapesPostWorksheetGroupShape.');
        }

        // verify required parameter 'requestObj.listShape' is not null or undefined
        if (requestObj.listShape === null || requestObj.listShape === undefined) {
            throw new Error('Required parameter "requestObj.listShape" was null or undefined when calling cellsShapesPostWorksheetGroupShape.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.listShape == null) ? "" : ObjectSerializer.serialize(requestObj.listShape, requestObj.listShape.constructor.name === "Object" ? "Array<number>" : requestObj.listShape.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Update a shape in worksheet
     * @param requestObj contains request parameters
     */
    public async cellsShapesPostWorksheetShape(requestObj: model.CellsShapes_PostWorksheetShapeRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsShapesPostWorksheetShape.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/shapes/{shapeindex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "shapeindex" + "}", String(requestObj.shapeindex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsShapesPostWorksheetShape.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsShapesPostWorksheetShape.');
        }

        // verify required parameter 'requestObj.shapeindex' is not null or undefined
        if (requestObj.shapeindex === null || requestObj.shapeindex === undefined) {
            throw new Error('Required parameter "requestObj.shapeindex" was null or undefined when calling cellsShapesPostWorksheetShape.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.dto == null) ? "" : ObjectSerializer.serialize(requestObj.dto, requestObj.dto.constructor.name === "Object" ? "Shape" : requestObj.dto.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Update a shape in worksheet
     * @param requestObj contains request parameters
     */
    public async cellsShapesPostWorksheetUngroupShape(requestObj: model.CellsShapes_PostWorksheetUngroupShapeRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsShapesPostWorksheetUngroupShape.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/shapes/{shapeindex}/ungroup"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "shapeindex" + "}", String(requestObj.shapeindex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsShapesPostWorksheetUngroupShape.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsShapesPostWorksheetUngroupShape.');
        }

        // verify required parameter 'requestObj.shapeindex' is not null or undefined
        if (requestObj.shapeindex === null || requestObj.shapeindex === undefined) {
            throw new Error('Required parameter "requestObj.shapeindex" was null or undefined when calling cellsShapesPostWorksheetUngroupShape.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Add shape in worksheet
     * @param requestObj contains request parameters
     */
    public async cellsShapesPutWorksheetShape(requestObj: model.CellsShapes_PutWorksheetShapeRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsShapesPutWorksheetShape.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/shapes"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsShapesPutWorksheetShape.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsShapesPutWorksheetShape.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "drawingType", requestObj.drawingType);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "upperLeftRow", requestObj.upperLeftRow);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "upperLeftColumn", requestObj.upperLeftColumn);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "top", requestObj.top);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "left", requestObj.left);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "width", requestObj.width);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "height", requestObj.height);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.shapeDTO == null) ? "" : ObjectSerializer.serialize(requestObj.shapeDTO, requestObj.shapeDTO.constructor.name === "Object" ? "Shape" : requestObj.shapeDTO.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async cellsSparklineGroupsDeleteWorksheetSparklineGroup(requestObj: model.CellsSparklineGroups_DeleteWorksheetSparklineGroupRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsSparklineGroupsDeleteWorksheetSparklineGroup.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/sparklinegroups/{sparklineGroupIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "sparklineGroupIndex" + "}", String(requestObj.sparklineGroupIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsSparklineGroupsDeleteWorksheetSparklineGroup.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsSparklineGroupsDeleteWorksheetSparklineGroup.');
        }

        // verify required parameter 'requestObj.sparklineGroupIndex' is not null or undefined
        if (requestObj.sparklineGroupIndex === null || requestObj.sparklineGroupIndex === undefined) {
            throw new Error('Required parameter "requestObj.sparklineGroupIndex" was null or undefined when calling cellsSparklineGroupsDeleteWorksheetSparklineGroup.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async cellsSparklineGroupsDeleteWorksheetSparklineGroups(requestObj: model.CellsSparklineGroups_DeleteWorksheetSparklineGroupsRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsSparklineGroupsDeleteWorksheetSparklineGroups.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/sparklinegroups"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsSparklineGroupsDeleteWorksheetSparklineGroups.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsSparklineGroupsDeleteWorksheetSparklineGroups.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async cellsSparklineGroupsGetWorksheetSparklineGroup(requestObj: model.CellsSparklineGroups_GetWorksheetSparklineGroupRequest): Promise<{response: http.ClientResponse, body: model.SparklineGroupResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsSparklineGroupsGetWorksheetSparklineGroup.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/sparklinegroups/{sparklineGroupIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "sparklineGroupIndex" + "}", String(requestObj.sparklineGroupIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsSparklineGroupsGetWorksheetSparklineGroup.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsSparklineGroupsGetWorksheetSparklineGroup.');
        }

        // verify required parameter 'requestObj.sparklineGroupIndex' is not null or undefined
        if (requestObj.sparklineGroupIndex === null || requestObj.sparklineGroupIndex === undefined) {
            throw new Error('Required parameter "requestObj.sparklineGroupIndex" was null or undefined when calling cellsSparklineGroupsGetWorksheetSparklineGroup.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "SparklineGroupResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get worksheet charts description.
     * @param requestObj contains request parameters
     */
    public async cellsSparklineGroupsGetWorksheetSparklineGroups(requestObj: model.CellsSparklineGroups_GetWorksheetSparklineGroupsRequest): Promise<{response: http.ClientResponse, body: model.SparklineGroupsResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsSparklineGroupsGetWorksheetSparklineGroups.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/sparklinegroups"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsSparklineGroupsGetWorksheetSparklineGroups.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsSparklineGroupsGetWorksheetSparklineGroups.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "SparklineGroupsResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async cellsSparklineGroupsPostWorksheetSparklineGroup(requestObj: model.CellsSparklineGroups_PostWorksheetSparklineGroupRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsSparklineGroupsPostWorksheetSparklineGroup.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/sparklinegroups/{sparklineGroupIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "sparklineGroupIndex" + "}", String(requestObj.sparklineGroupIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsSparklineGroupsPostWorksheetSparklineGroup.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsSparklineGroupsPostWorksheetSparklineGroup.');
        }

        // verify required parameter 'requestObj.sparklineGroupIndex' is not null or undefined
        if (requestObj.sparklineGroupIndex === null || requestObj.sparklineGroupIndex === undefined) {
            throw new Error('Required parameter "requestObj.sparklineGroupIndex" was null or undefined when calling cellsSparklineGroupsPostWorksheetSparklineGroup.');
        }

        // verify required parameter 'requestObj.sparklineGroup' is not null or undefined
        if (requestObj.sparklineGroup === null || requestObj.sparklineGroup === undefined) {
            throw new Error('Required parameter "requestObj.sparklineGroup" was null or undefined when calling cellsSparklineGroupsPostWorksheetSparklineGroup.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.sparklineGroup == null) ? "" : ObjectSerializer.serialize(requestObj.sparklineGroup, requestObj.sparklineGroup.constructor.name === "Object" ? "SparklineGroup" : requestObj.sparklineGroup.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async cellsSparklineGroupsPutWorksheetSparklineGroup(requestObj: model.CellsSparklineGroups_PutWorksheetSparklineGroupRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsSparklineGroupsPutWorksheetSparklineGroup.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/sparklinegroups"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsSparklineGroupsPutWorksheetSparklineGroup.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsSparklineGroupsPutWorksheetSparklineGroup.');
        }

        // verify required parameter 'requestObj.type' is not null or undefined
        if (requestObj.type === null || requestObj.type === undefined) {
            throw new Error('Required parameter "requestObj.type" was null or undefined when calling cellsSparklineGroupsPutWorksheetSparklineGroup.');
        }

        // verify required parameter 'requestObj.dataRange' is not null or undefined
        if (requestObj.dataRange === null || requestObj.dataRange === undefined) {
            throw new Error('Required parameter "requestObj.dataRange" was null or undefined when calling cellsSparklineGroupsPutWorksheetSparklineGroup.');
        }

        // verify required parameter 'requestObj.isVertical' is not null or undefined
        if (requestObj.isVertical === null || requestObj.isVertical === undefined) {
            throw new Error('Required parameter "requestObj.isVertical" was null or undefined when calling cellsSparklineGroupsPutWorksheetSparklineGroup.');
        }

        // verify required parameter 'requestObj.locationRange' is not null or undefined
        if (requestObj.locationRange === null || requestObj.locationRange === undefined) {
            throw new Error('Required parameter "requestObj.locationRange" was null or undefined when calling cellsSparklineGroupsPutWorksheetSparklineGroup.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "type", requestObj.type);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "dataRange", requestObj.dataRange);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "isVertical", requestObj.isVertical);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "locationRange", requestObj.locationRange);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Run tasks  
     * @param requestObj contains request parameters
     */
    public async cellsTaskPostRunTask(requestObj: model.CellsTask_PostRunTaskRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsTaskPostRunTask.');
        }

        const localVarPath = this.configuration.getApiBaseUrl() + "/cells/task/runtask";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.taskData' is not null or undefined
        if (requestObj.taskData === null || requestObj.taskData === undefined) {
            throw new Error('Required parameter "requestObj.taskData" was null or undefined when calling cellsTaskPostRunTask.');
        }
        
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.taskData == null) ? "" : ObjectSerializer.serialize(requestObj.taskData, requestObj.taskData.constructor.name === "Object" ? "TaskData" : requestObj.taskData.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "any");
        return Promise.resolve({body: result, response});
    }

    /**
     * Decrypt document.
     * @param requestObj contains request parameters
     */
    public async cellsWorkbookDeleteDecryptDocument(requestObj: model.CellsWorkbook_DeleteDecryptDocumentRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorkbookDeleteDecryptDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/encryption"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorkbookDeleteDecryptDocument.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.encryption == null) ? "" : ObjectSerializer.serialize(requestObj.encryption, requestObj.encryption.constructor.name === "Object" ? "WorkbookEncryptionRequest" : requestObj.encryption.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Unprotect document from changes.
     * @param requestObj contains request parameters
     */
    public async cellsWorkbookDeleteDocumentUnprotectFromChanges(requestObj: model.CellsWorkbook_DeleteDocumentUnprotectFromChangesRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorkbookDeleteDocumentUnprotectFromChanges.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/writeProtection"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorkbookDeleteDocumentUnprotectFromChanges.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Unprotect document.
     * @param requestObj contains request parameters
     */
    public async cellsWorkbookDeleteUnprotectDocument(requestObj: model.CellsWorkbook_DeleteUnprotectDocumentRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorkbookDeleteUnprotectDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/protection"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorkbookDeleteUnprotectDocument.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.protection == null) ? "" : ObjectSerializer.serialize(requestObj.protection, requestObj.protection.constructor.name === "Object" ? "WorkbookProtectionRequest" : requestObj.protection.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Set worksheet background image.
     * @param requestObj contains request parameters
     */
    public async cellsWorkbookDeleteWorkbookBackground(requestObj: model.CellsWorkbook_DeleteWorkbookBackgroundRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorkbookDeleteWorkbookBackground.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/background"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorkbookDeleteWorkbookBackground.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Clean workbook's names.
     * @param requestObj contains request parameters
     */
    public async cellsWorkbookDeleteWorkbookName(requestObj: model.CellsWorkbook_DeleteWorkbookNameRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorkbookDeleteWorkbookName.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/names/{nameName}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nameName" + "}", String(requestObj.nameName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorkbookDeleteWorkbookName.');
        }

        // verify required parameter 'requestObj.nameName' is not null or undefined
        if (requestObj.nameName === null || requestObj.nameName === undefined) {
            throw new Error('Required parameter "requestObj.nameName" was null or undefined when calling cellsWorkbookDeleteWorkbookName.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Clean workbook's names.
     * @param requestObj contains request parameters
     */
    public async cellsWorkbookDeleteWorkbookNames(requestObj: model.CellsWorkbook_DeleteWorkbookNamesRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorkbookDeleteWorkbookNames.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/names"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorkbookDeleteWorkbookNames.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get page count for workbook.
     * @param requestObj contains request parameters
     */
    public async cellsWorkbookGetPageCount(requestObj: model.CellsWorkbook_GetPageCountRequest): Promise<{response: http.ClientResponse, body: any}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorkbookGetPageCount.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/pagecount"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorkbookGetPageCount.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "any");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read workbook info or export.
     * @param requestObj contains request parameters
     */
    public async cellsWorkbookGetWorkbook(requestObj: model.CellsWorkbook_GetWorkbookRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorkbookGetWorkbook.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorkbookGetWorkbook.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "isAutoFit", requestObj.isAutoFit);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "onlySaveTable", requestObj.onlySaveTable);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outStorageName", requestObj.outStorageName);
        
        if (requestObj.extendedQueryParameters !== undefined) {
            for (var key in requestObj.extendedQueryParameters){
                localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, key, requestObj.extendedQueryParameters[key]);
            }
        }
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read workbook default style info.
     * @param requestObj contains request parameters
     */
    public async cellsWorkbookGetWorkbookDefaultStyle(requestObj: model.CellsWorkbook_GetWorkbookDefaultStyleRequest): Promise<{response: http.ClientResponse, body: model.StyleResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorkbookGetWorkbookDefaultStyle.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/defaultstyle"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorkbookGetWorkbookDefaultStyle.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "StyleResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read workbook's name.
     * @param requestObj contains request parameters
     */
    public async cellsWorkbookGetWorkbookName(requestObj: model.CellsWorkbook_GetWorkbookNameRequest): Promise<{response: http.ClientResponse, body: model.NameResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorkbookGetWorkbookName.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/names/{nameName}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nameName" + "}", String(requestObj.nameName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorkbookGetWorkbookName.');
        }

        // verify required parameter 'requestObj.nameName' is not null or undefined
        if (requestObj.nameName === null || requestObj.nameName === undefined) {
            throw new Error('Required parameter "requestObj.nameName" was null or undefined when calling cellsWorkbookGetWorkbookName.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "NameResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get workbook's name value.
     * @param requestObj contains request parameters
     */
    public async cellsWorkbookGetWorkbookNameValue(requestObj: model.CellsWorkbook_GetWorkbookNameValueRequest): Promise<{response: http.ClientResponse, body: model.RangeValueResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorkbookGetWorkbookNameValue.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/names/{nameName}/value"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nameName" + "}", String(requestObj.nameName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorkbookGetWorkbookNameValue.');
        }

        // verify required parameter 'requestObj.nameName' is not null or undefined
        if (requestObj.nameName === null || requestObj.nameName === undefined) {
            throw new Error('Required parameter "requestObj.nameName" was null or undefined when calling cellsWorkbookGetWorkbookNameValue.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "RangeValueResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read workbook's names.
     * @param requestObj contains request parameters
     */
    public async cellsWorkbookGetWorkbookNames(requestObj: model.CellsWorkbook_GetWorkbookNamesRequest): Promise<{response: http.ClientResponse, body: model.NamesResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorkbookGetWorkbookNames.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/names"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorkbookGetWorkbookNames.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "NamesResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get Workbook Settings DTO
     * @param requestObj contains request parameters
     */
    public async cellsWorkbookGetWorkbookSettings(requestObj: model.CellsWorkbook_GetWorkbookSettingsRequest): Promise<{response: http.ClientResponse, body: model.WorkbookSettingsResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorkbookGetWorkbookSettings.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/settings"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorkbookGetWorkbookSettings.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "WorkbookSettingsResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read workbook's text items.
     * @param requestObj contains request parameters
     */
    public async cellsWorkbookGetWorkbookTextItems(requestObj: model.CellsWorkbook_GetWorkbookTextItemsRequest): Promise<{response: http.ClientResponse, body: model.TextItemsResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorkbookGetWorkbookTextItems.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/textItems"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorkbookGetWorkbookTextItems.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "TextItemsResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Autofit workbook columns.
     * @param requestObj contains request parameters
     */
    public async cellsWorkbookPostAutofitWorkbookColumns(requestObj: model.CellsWorkbook_PostAutofitWorkbookColumnsRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorkbookPostAutofitWorkbookColumns.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/autofitcolumns"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorkbookPostAutofitWorkbookColumns.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "startColumn", requestObj.startColumn);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "endColumn", requestObj.endColumn);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.autoFitterOptions == null) ? "" : ObjectSerializer.serialize(requestObj.autoFitterOptions, requestObj.autoFitterOptions.constructor.name === "Object" ? "AutoFitterOptions" : requestObj.autoFitterOptions.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Autofit workbook rows.
     * @param requestObj contains request parameters
     */
    public async cellsWorkbookPostAutofitWorkbookRows(requestObj: model.CellsWorkbook_PostAutofitWorkbookRowsRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorkbookPostAutofitWorkbookRows.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/autofitrows"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorkbookPostAutofitWorkbookRows.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "startRow", requestObj.startRow);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "endRow", requestObj.endRow);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "onlyAuto", requestObj.onlyAuto);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.autoFitterOptions == null) ? "" : ObjectSerializer.serialize(requestObj.autoFitterOptions, requestObj.autoFitterOptions.constructor.name === "Object" ? "AutoFitterOptions" : requestObj.autoFitterOptions.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Add digital signature.
     * @param requestObj contains request parameters
     */
    public async cellsWorkbookPostDigitalSignature(requestObj: model.CellsWorkbook_PostDigitalSignatureRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorkbookPostDigitalSignature.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/digitalsignature"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorkbookPostDigitalSignature.');
        }

        // verify required parameter 'requestObj.digitalsignaturefile' is not null or undefined
        if (requestObj.digitalsignaturefile === null || requestObj.digitalsignaturefile === undefined) {
            throw new Error('Required parameter "requestObj.digitalsignaturefile" was null or undefined when calling cellsWorkbookPostDigitalSignature.');
        }

        // verify required parameter 'requestObj.password' is not null or undefined
        if (requestObj.password === null || requestObj.password === undefined) {
            throw new Error('Required parameter "requestObj.password" was null or undefined when calling cellsWorkbookPostDigitalSignature.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "digitalsignaturefile", requestObj.digitalsignaturefile);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Encript document.
     * @param requestObj contains request parameters
     */
    public async cellsWorkbookPostEncryptDocument(requestObj: model.CellsWorkbook_PostEncryptDocumentRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorkbookPostEncryptDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/encryption"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorkbookPostEncryptDocument.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.encryption == null) ? "" : ObjectSerializer.serialize(requestObj.encryption, requestObj.encryption.constructor.name === "Object" ? "WorkbookEncryptionRequest" : requestObj.encryption.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async cellsWorkbookPostImportData(requestObj: model.CellsWorkbook_PostImportDataRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorkbookPostImportData.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/importdata"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorkbookPostImportData.');
        }

        // verify required parameter 'requestObj.importData' is not null or undefined
        if (requestObj.importData === null || requestObj.importData === undefined) {
            throw new Error('Required parameter "requestObj.importData" was null or undefined when calling cellsWorkbookPostImportData.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.importData == null) ? "" : ObjectSerializer.serialize(requestObj.importData, requestObj.importData.constructor.name === "Object" ? "ImportOption" : requestObj.importData.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Protect document.
     * @param requestObj contains request parameters
     */
    public async cellsWorkbookPostProtectDocument(requestObj: model.CellsWorkbook_PostProtectDocumentRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorkbookPostProtectDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/protection"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorkbookPostProtectDocument.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.protection == null) ? "" : ObjectSerializer.serialize(requestObj.protection, requestObj.protection.constructor.name === "Object" ? "WorkbookProtectionRequest" : requestObj.protection.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Calculate all formulas in workbook.
     * @param requestObj contains request parameters
     */
    public async cellsWorkbookPostWorkbookCalculateFormula(requestObj: model.CellsWorkbook_PostWorkbookCalculateFormulaRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorkbookPostWorkbookCalculateFormula.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/calculateformula"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorkbookPostWorkbookCalculateFormula.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "ignoreError", requestObj.ignoreError);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.options == null) ? "" : ObjectSerializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "CalculationOptions" : requestObj.options.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Smart marker processing result.
     * @param requestObj contains request parameters
     */
    public async cellsWorkbookPostWorkbookGetSmartMarkerResult(requestObj: model.CellsWorkbook_PostWorkbookGetSmartMarkerResultRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorkbookPostWorkbookGetSmartMarkerResult.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/smartmarker"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorkbookPostWorkbookGetSmartMarkerResult.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "xmlFile", requestObj.xmlFile);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outStorageName", requestObj.outStorageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Update Workbook setting 
     * @param requestObj contains request parameters
     */
    public async cellsWorkbookPostWorkbookSettings(requestObj: model.CellsWorkbook_PostWorkbookSettingsRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorkbookPostWorkbookSettings.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/settings"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorkbookPostWorkbookSettings.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.settings == null) ? "" : ObjectSerializer.serialize(requestObj.settings, requestObj.settings.constructor.name === "Object" ? "WorkbookSettings" : requestObj.settings.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Split workbook.
     * @param requestObj contains request parameters
     */
    public async cellsWorkbookPostWorkbookSplit(requestObj: model.CellsWorkbook_PostWorkbookSplitRequest): Promise<{response: http.ClientResponse, body: model.SplitResultResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorkbookPostWorkbookSplit.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/split"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorkbookPostWorkbookSplit.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "from", requestObj.from);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "to", requestObj.to);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "horizontalResolution", requestObj.horizontalResolution);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "verticalResolution", requestObj.verticalResolution);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outFolder", requestObj.outFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outStorageName", requestObj.outStorageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "SplitResultResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Merge workbooks.
     * @param requestObj contains request parameters
     */
    public async cellsWorkbookPostWorkbooksMerge(requestObj: model.CellsWorkbook_PostWorkbooksMergeRequest): Promise<{response: http.ClientResponse, body: model.WorkbookResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorkbookPostWorkbooksMerge.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/merge"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorkbookPostWorkbooksMerge.');
        }

        // verify required parameter 'requestObj.mergeWith' is not null or undefined
        if (requestObj.mergeWith === null || requestObj.mergeWith === undefined) {
            throw new Error('Required parameter "requestObj.mergeWith" was null or undefined when calling cellsWorkbookPostWorkbooksMerge.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "mergeWith", requestObj.mergeWith);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "mergedStorageName", requestObj.mergedStorageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "WorkbookResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Replace text.
     * @param requestObj contains request parameters
     */
    public async cellsWorkbookPostWorkbooksTextReplace(requestObj: model.CellsWorkbook_PostWorkbooksTextReplaceRequest): Promise<{response: http.ClientResponse, body: model.WorkbookReplaceResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorkbookPostWorkbooksTextReplace.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/replaceText"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorkbookPostWorkbooksTextReplace.');
        }

        // verify required parameter 'requestObj.oldValue' is not null or undefined
        if (requestObj.oldValue === null || requestObj.oldValue === undefined) {
            throw new Error('Required parameter "requestObj.oldValue" was null or undefined when calling cellsWorkbookPostWorkbooksTextReplace.');
        }

        // verify required parameter 'requestObj.newValue' is not null or undefined
        if (requestObj.newValue === null || requestObj.newValue === undefined) {
            throw new Error('Required parameter "requestObj.newValue" was null or undefined when calling cellsWorkbookPostWorkbooksTextReplace.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "oldValue", requestObj.oldValue);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newValue", requestObj.newValue);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "WorkbookReplaceResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Search text.
     * @param requestObj contains request parameters
     */
    public async cellsWorkbookPostWorkbooksTextSearch(requestObj: model.CellsWorkbook_PostWorkbooksTextSearchRequest): Promise<{response: http.ClientResponse, body: model.TextItemsResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorkbookPostWorkbooksTextSearch.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/findText"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorkbookPostWorkbooksTextSearch.');
        }

        // verify required parameter 'requestObj.text' is not null or undefined
        if (requestObj.text === null || requestObj.text === undefined) {
            throw new Error('Required parameter "requestObj.text" was null or undefined when calling cellsWorkbookPostWorkbooksTextSearch.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "text", requestObj.text);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "TextItemsResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Convert workbook from request content to some format.
     * @param requestObj contains request parameters
     */
    public async cellsWorkbookPutConvertWorkbook(requestObj: model.CellsWorkbook_PutConvertWorkbookRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorkbookPutConvertWorkbook.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/convert";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.file' is not null or undefined
        if (requestObj.file === null || requestObj.file === undefined) {
            throw new Error('Required parameter "requestObj.file" was null or undefined when calling cellsWorkbookPutConvertWorkbook.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);

        if (requestObj.extendedQueryParameters !== undefined) {
            for (var key in requestObj.extendedQueryParameters){
                localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, key, requestObj.extendedQueryParameters[key]);
            }
        }        
        if (requestObj.file !== undefined) {
            formParams.file = requestObj.file;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Protect document from changes.
     * @param requestObj contains request parameters
     */
    public async cellsWorkbookPutDocumentProtectFromChanges(requestObj: model.CellsWorkbook_PutDocumentProtectFromChangesRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorkbookPutDocumentProtectFromChanges.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/writeProtection"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorkbookPutDocumentProtectFromChanges.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.password == null) ? "" : ObjectSerializer.serialize(requestObj.password, requestObj.password.constructor.name === "Object" ? "PasswordRequest" : requestObj.password.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Set workbook background image.
     * @param requestObj contains request parameters
     */
    public async cellsWorkbookPutWorkbookBackground(requestObj: model.CellsWorkbook_PutWorkbookBackgroundRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorkbookPutWorkbookBackground.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/background"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorkbookPutWorkbookBackground.');
        }

        // verify required parameter 'requestObj.png' is not null or undefined
        if (requestObj.png === null || requestObj.png === undefined) {
            throw new Error('Required parameter "requestObj.png" was null or undefined when calling cellsWorkbookPutWorkbookBackground.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.png == null) ? "" : ObjectSerializer.serialize(requestObj.png, requestObj.png.constructor.name === "Object" ? "string" : requestObj.png.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Create new workbook using deferent methods.
     * @param requestObj contains request parameters
     */
    public async cellsWorkbookPutWorkbookCreate(requestObj: model.CellsWorkbook_PutWorkbookCreateRequest): Promise<{response: http.ClientResponse, body: model.WorkbookResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorkbookPutWorkbookCreate.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorkbookPutWorkbookCreate.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "templateFile", requestObj.templateFile);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "dataFile", requestObj.dataFile);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "isWriteOver", requestObj.isWriteOver);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "WorkbookResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Set workbook background image.
     * @param requestObj contains request parameters
     */
    public async cellsWorkbookPutWorkbookWaterMarker(requestObj: model.CellsWorkbook_PutWorkbookWaterMarkerRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorkbookPutWorkbookWaterMarker.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/watermarker"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorkbookPutWorkbookWaterMarker.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.textWaterMarkerRequest == null) ? "" : ObjectSerializer.serialize(requestObj.textWaterMarkerRequest, requestObj.textWaterMarkerRequest.constructor.name === "Object" ? "TextWaterMarkerRequest" : requestObj.textWaterMarkerRequest.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete worksheet validation by index.
     * @param requestObj contains request parameters
     */
    public async cellsWorksheetValidationsDeleteWorksheetValidation(requestObj: model.CellsWorksheetValidations_DeleteWorksheetValidationRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorksheetValidationsDeleteWorksheetValidation.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/validations/{validationIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "validationIndex" + "}", String(requestObj.validationIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorksheetValidationsDeleteWorksheetValidation.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsWorksheetValidationsDeleteWorksheetValidation.');
        }

        // verify required parameter 'requestObj.validationIndex' is not null or undefined
        if (requestObj.validationIndex === null || requestObj.validationIndex === undefined) {
            throw new Error('Required parameter "requestObj.validationIndex" was null or undefined when calling cellsWorksheetValidationsDeleteWorksheetValidation.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Clear all validation in worksheet.
     * @param requestObj contains request parameters
     */
    public async cellsWorksheetValidationsDeleteWorksheetValidations(requestObj: model.CellsWorksheetValidations_DeleteWorksheetValidationsRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorksheetValidationsDeleteWorksheetValidations.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/validations"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorksheetValidationsDeleteWorksheetValidations.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsWorksheetValidationsDeleteWorksheetValidations.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get worksheet validation by index.
     * @param requestObj contains request parameters
     */
    public async cellsWorksheetValidationsGetWorksheetValidation(requestObj: model.CellsWorksheetValidations_GetWorksheetValidationRequest): Promise<{response: http.ClientResponse, body: model.ValidationResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorksheetValidationsGetWorksheetValidation.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/validations/{validationIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "validationIndex" + "}", String(requestObj.validationIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorksheetValidationsGetWorksheetValidation.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsWorksheetValidationsGetWorksheetValidation.');
        }

        // verify required parameter 'requestObj.validationIndex' is not null or undefined
        if (requestObj.validationIndex === null || requestObj.validationIndex === undefined) {
            throw new Error('Required parameter "requestObj.validationIndex" was null or undefined when calling cellsWorksheetValidationsGetWorksheetValidation.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ValidationResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get worksheet validations.
     * @param requestObj contains request parameters
     */
    public async cellsWorksheetValidationsGetWorksheetValidations(requestObj: model.CellsWorksheetValidations_GetWorksheetValidationsRequest): Promise<{response: http.ClientResponse, body: model.ValidationsResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorksheetValidationsGetWorksheetValidations.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/validations"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorksheetValidationsGetWorksheetValidations.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsWorksheetValidationsGetWorksheetValidations.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ValidationsResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Update worksheet validation by index.
     * @param requestObj contains request parameters
     */
    public async cellsWorksheetValidationsPostWorksheetValidation(requestObj: model.CellsWorksheetValidations_PostWorksheetValidationRequest): Promise<{response: http.ClientResponse, body: model.ValidationResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorksheetValidationsPostWorksheetValidation.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/validations/{validationIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "validationIndex" + "}", String(requestObj.validationIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorksheetValidationsPostWorksheetValidation.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsWorksheetValidationsPostWorksheetValidation.');
        }

        // verify required parameter 'requestObj.validationIndex' is not null or undefined
        if (requestObj.validationIndex === null || requestObj.validationIndex === undefined) {
            throw new Error('Required parameter "requestObj.validationIndex" was null or undefined when calling cellsWorksheetValidationsPostWorksheetValidation.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.validation == null) ? "" : ObjectSerializer.serialize(requestObj.validation, requestObj.validation.constructor.name === "Object" ? "Validation" : requestObj.validation.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ValidationResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Add worksheet validation at index.
     * @param requestObj contains request parameters
     */
    public async cellsWorksheetValidationsPutWorksheetValidation(requestObj: model.CellsWorksheetValidations_PutWorksheetValidationRequest): Promise<{response: http.ClientResponse, body: model.ValidationResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorksheetValidationsPutWorksheetValidation.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/validations"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorksheetValidationsPutWorksheetValidation.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsWorksheetValidationsPutWorksheetValidation.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "range", requestObj.range);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.validation == null) ? "" : ObjectSerializer.serialize(requestObj.validation, requestObj.validation.constructor.name === "Object" ? "Validation" : requestObj.validation.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ValidationResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Unprotect worksheet.
     * @param requestObj contains request parameters
     */
    public async cellsWorksheetsDeleteUnprotectWorksheet(requestObj: model.CellsWorksheets_DeleteUnprotectWorksheetRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorksheetsDeleteUnprotectWorksheet.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/protection"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorksheetsDeleteUnprotectWorksheet.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsWorksheetsDeleteUnprotectWorksheet.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.protectParameter == null) ? "" : ObjectSerializer.serialize(requestObj.protectParameter, requestObj.protectParameter.constructor.name === "Object" ? "ProtectSheetParameter" : requestObj.protectParameter.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete worksheet.
     * @param requestObj contains request parameters
     */
    public async cellsWorksheetsDeleteWorksheet(requestObj: model.CellsWorksheets_DeleteWorksheetRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorksheetsDeleteWorksheet.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorksheetsDeleteWorksheet.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsWorksheetsDeleteWorksheet.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Set worksheet background image.
     * @param requestObj contains request parameters
     */
    public async cellsWorksheetsDeleteWorksheetBackground(requestObj: model.CellsWorksheets_DeleteWorksheetBackgroundRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorksheetsDeleteWorksheetBackground.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/background"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorksheetsDeleteWorksheetBackground.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsWorksheetsDeleteWorksheetBackground.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete worksheet's cell comment.
     * @param requestObj contains request parameters
     */
    public async cellsWorksheetsDeleteWorksheetComment(requestObj: model.CellsWorksheets_DeleteWorksheetCommentRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorksheetsDeleteWorksheetComment.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/comments/{cellName}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "cellName" + "}", String(requestObj.cellName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorksheetsDeleteWorksheetComment.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsWorksheetsDeleteWorksheetComment.');
        }

        // verify required parameter 'requestObj.cellName' is not null or undefined
        if (requestObj.cellName === null || requestObj.cellName === undefined) {
            throw new Error('Required parameter "requestObj.cellName" was null or undefined when calling cellsWorksheetsDeleteWorksheetComment.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete all comments for worksheet.
     * @param requestObj contains request parameters
     */
    public async cellsWorksheetsDeleteWorksheetComments(requestObj: model.CellsWorksheets_DeleteWorksheetCommentsRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorksheetsDeleteWorksheetComments.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/comments"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorksheetsDeleteWorksheetComments.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsWorksheetsDeleteWorksheetComments.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Unfreeze panes
     * @param requestObj contains request parameters
     */
    public async cellsWorksheetsDeleteWorksheetFreezePanes(requestObj: model.CellsWorksheets_DeleteWorksheetFreezePanesRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorksheetsDeleteWorksheetFreezePanes.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/freezepanes"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorksheetsDeleteWorksheetFreezePanes.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsWorksheetsDeleteWorksheetFreezePanes.');
        }

        // verify required parameter 'requestObj.row' is not null or undefined
        if (requestObj.row === null || requestObj.row === undefined) {
            throw new Error('Required parameter "requestObj.row" was null or undefined when calling cellsWorksheetsDeleteWorksheetFreezePanes.');
        }

        // verify required parameter 'requestObj.column' is not null or undefined
        if (requestObj.column === null || requestObj.column === undefined) {
            throw new Error('Required parameter "requestObj.column" was null or undefined when calling cellsWorksheetsDeleteWorksheetFreezePanes.');
        }

        // verify required parameter 'requestObj.freezedRows' is not null or undefined
        if (requestObj.freezedRows === null || requestObj.freezedRows === undefined) {
            throw new Error('Required parameter "requestObj.freezedRows" was null or undefined when calling cellsWorksheetsDeleteWorksheetFreezePanes.');
        }

        // verify required parameter 'requestObj.freezedColumns' is not null or undefined
        if (requestObj.freezedColumns === null || requestObj.freezedColumns === undefined) {
            throw new Error('Required parameter "requestObj.freezedColumns" was null or undefined when calling cellsWorksheetsDeleteWorksheetFreezePanes.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "row", requestObj.row);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "column", requestObj.column);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "freezedRows", requestObj.freezedRows);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "freezedColumns", requestObj.freezedColumns);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read worksheets info.
     * @param requestObj contains request parameters
     */
    public async cellsWorksheetsDeleteWorksheets(requestObj: model.CellsWorksheets_DeleteWorksheetsRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorksheetsDeleteWorksheets.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorksheetsDeleteWorksheets.');
        }

        // verify required parameter 'requestObj.matchCondition' is not null or undefined
        if (requestObj.matchCondition === null || requestObj.matchCondition === undefined) {
            throw new Error('Required parameter "requestObj.matchCondition" was null or undefined when calling cellsWorksheetsDeleteWorksheets.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.matchCondition == null) ? "" : ObjectSerializer.serialize(requestObj.matchCondition, requestObj.matchCondition.constructor.name === "Object" ? "MatchConditionRequest" : requestObj.matchCondition.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read worksheets ranges info.
     * @param requestObj contains request parameters
     */
    public async cellsWorksheetsGetNamedRanges(requestObj: model.CellsWorksheets_GetNamedRangesRequest): Promise<{response: http.ClientResponse, body: model.RangesResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorksheetsGetNamedRanges.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/ranges"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorksheetsGetNamedRanges.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "RangesResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get page count for worksheet.
     * @param requestObj contains request parameters
     */
    public async cellsWorksheetsGetPageCount(requestObj: model.CellsWorksheets_GetPageCountRequest): Promise<{response: http.ClientResponse, body: any}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorksheetsGetPageCount.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/pagecount"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorksheetsGetPageCount.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsWorksheetsGetPageCount.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "any");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read worksheet info or export.
     * @param requestObj contains request parameters
     */
    public async cellsWorksheetsGetWorksheet(requestObj: model.CellsWorksheets_GetWorksheetRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorksheetsGetWorksheet.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorksheetsGetWorksheet.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsWorksheetsGetWorksheet.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "verticalResolution", requestObj.verticalResolution);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "horizontalResolution", requestObj.horizontalResolution);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "area", requestObj.area);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pageIndex", requestObj.pageIndex);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Calculate formula value.
     * @param requestObj contains request parameters
     */
    public async cellsWorksheetsGetWorksheetCalculateFormula(requestObj: model.CellsWorksheets_GetWorksheetCalculateFormulaRequest): Promise<{response: http.ClientResponse, body: model.SingleValueResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorksheetsGetWorksheetCalculateFormula.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/formulaResult"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorksheetsGetWorksheetCalculateFormula.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsWorksheetsGetWorksheetCalculateFormula.');
        }

        // verify required parameter 'requestObj.formula' is not null or undefined
        if (requestObj.formula === null || requestObj.formula === undefined) {
            throw new Error('Required parameter "requestObj.formula" was null or undefined when calling cellsWorksheetsGetWorksheetCalculateFormula.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "formula", requestObj.formula);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "SingleValueResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get worksheet comment by cell name.
     * @param requestObj contains request parameters
     */
    public async cellsWorksheetsGetWorksheetComment(requestObj: model.CellsWorksheets_GetWorksheetCommentRequest): Promise<{response: http.ClientResponse, body: model.CommentResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorksheetsGetWorksheetComment.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/comments/{cellName}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "cellName" + "}", String(requestObj.cellName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorksheetsGetWorksheetComment.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsWorksheetsGetWorksheetComment.');
        }

        // verify required parameter 'requestObj.cellName' is not null or undefined
        if (requestObj.cellName === null || requestObj.cellName === undefined) {
            throw new Error('Required parameter "requestObj.cellName" was null or undefined when calling cellsWorksheetsGetWorksheetComment.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CommentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get worksheet comments.
     * @param requestObj contains request parameters
     */
    public async cellsWorksheetsGetWorksheetComments(requestObj: model.CellsWorksheets_GetWorksheetCommentsRequest): Promise<{response: http.ClientResponse, body: model.CommentsResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorksheetsGetWorksheetComments.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/comments"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorksheetsGetWorksheetComments.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsWorksheetsGetWorksheetComments.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CommentsResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get worksheet merged cell by its index.
     * @param requestObj contains request parameters
     */
    public async cellsWorksheetsGetWorksheetMergedCell(requestObj: model.CellsWorksheets_GetWorksheetMergedCellRequest): Promise<{response: http.ClientResponse, body: model.MergedCellResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorksheetsGetWorksheetMergedCell.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/mergedCells/{mergedCellIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "mergedCellIndex" + "}", String(requestObj.mergedCellIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorksheetsGetWorksheetMergedCell.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsWorksheetsGetWorksheetMergedCell.');
        }

        // verify required parameter 'requestObj.mergedCellIndex' is not null or undefined
        if (requestObj.mergedCellIndex === null || requestObj.mergedCellIndex === undefined) {
            throw new Error('Required parameter "requestObj.mergedCellIndex" was null or undefined when calling cellsWorksheetsGetWorksheetMergedCell.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "MergedCellResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get worksheet merged cells.
     * @param requestObj contains request parameters
     */
    public async cellsWorksheetsGetWorksheetMergedCells(requestObj: model.CellsWorksheets_GetWorksheetMergedCellsRequest): Promise<{response: http.ClientResponse, body: model.MergedCellsResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorksheetsGetWorksheetMergedCells.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/mergedCells"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorksheetsGetWorksheetMergedCells.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsWorksheetsGetWorksheetMergedCells.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "MergedCellsResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get worksheet text items.
     * @param requestObj contains request parameters
     */
    public async cellsWorksheetsGetWorksheetTextItems(requestObj: model.CellsWorksheets_GetWorksheetTextItemsRequest): Promise<{response: http.ClientResponse, body: model.TextItemsResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorksheetsGetWorksheetTextItems.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/textItems"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorksheetsGetWorksheetTextItems.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsWorksheetsGetWorksheetTextItems.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "TextItemsResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read worksheets info.
     * @param requestObj contains request parameters
     */
    public async cellsWorksheetsGetWorksheets(requestObj: model.CellsWorksheets_GetWorksheetsRequest): Promise<{response: http.ClientResponse, body: model.WorksheetsResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorksheetsGetWorksheets.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorksheetsGetWorksheets.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "WorksheetsResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async cellsWorksheetsPostAutofitWorksheetColumns(requestObj: model.CellsWorksheets_PostAutofitWorksheetColumnsRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorksheetsPostAutofitWorksheetColumns.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/autofitcolumns"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorksheetsPostAutofitWorksheetColumns.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsWorksheetsPostAutofitWorksheetColumns.');
        }

        // verify required parameter 'requestObj.firstColumn' is not null or undefined
        if (requestObj.firstColumn === null || requestObj.firstColumn === undefined) {
            throw new Error('Required parameter "requestObj.firstColumn" was null or undefined when calling cellsWorksheetsPostAutofitWorksheetColumns.');
        }

        // verify required parameter 'requestObj.lastColumn' is not null or undefined
        if (requestObj.lastColumn === null || requestObj.lastColumn === undefined) {
            throw new Error('Required parameter "requestObj.lastColumn" was null or undefined when calling cellsWorksheetsPostAutofitWorksheetColumns.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "firstColumn", requestObj.firstColumn);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "lastColumn", requestObj.lastColumn);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "firstRow", requestObj.firstRow);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "lastRow", requestObj.lastRow);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.autoFitterOptions == null) ? "" : ObjectSerializer.serialize(requestObj.autoFitterOptions, requestObj.autoFitterOptions.constructor.name === "Object" ? "AutoFitterOptions" : requestObj.autoFitterOptions.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async cellsWorksheetsPostAutofitWorksheetRow(requestObj: model.CellsWorksheets_PostAutofitWorksheetRowRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorksheetsPostAutofitWorksheetRow.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/autofitrow"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorksheetsPostAutofitWorksheetRow.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsWorksheetsPostAutofitWorksheetRow.');
        }

        // verify required parameter 'requestObj.rowIndex' is not null or undefined
        if (requestObj.rowIndex === null || requestObj.rowIndex === undefined) {
            throw new Error('Required parameter "requestObj.rowIndex" was null or undefined when calling cellsWorksheetsPostAutofitWorksheetRow.');
        }

        // verify required parameter 'requestObj.firstColumn' is not null or undefined
        if (requestObj.firstColumn === null || requestObj.firstColumn === undefined) {
            throw new Error('Required parameter "requestObj.firstColumn" was null or undefined when calling cellsWorksheetsPostAutofitWorksheetRow.');
        }

        // verify required parameter 'requestObj.lastColumn' is not null or undefined
        if (requestObj.lastColumn === null || requestObj.lastColumn === undefined) {
            throw new Error('Required parameter "requestObj.lastColumn" was null or undefined when calling cellsWorksheetsPostAutofitWorksheetRow.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "rowIndex", requestObj.rowIndex);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "firstColumn", requestObj.firstColumn);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "lastColumn", requestObj.lastColumn);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.autoFitterOptions == null) ? "" : ObjectSerializer.serialize(requestObj.autoFitterOptions, requestObj.autoFitterOptions.constructor.name === "Object" ? "AutoFitterOptions" : requestObj.autoFitterOptions.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Autofit worksheet rows.
     * @param requestObj contains request parameters
     */
    public async cellsWorksheetsPostAutofitWorksheetRows(requestObj: model.CellsWorksheets_PostAutofitWorksheetRowsRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorksheetsPostAutofitWorksheetRows.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/autofitrows"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorksheetsPostAutofitWorksheetRows.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsWorksheetsPostAutofitWorksheetRows.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "startRow", requestObj.startRow);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "endRow", requestObj.endRow);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "onlyAuto", requestObj.onlyAuto);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.autoFitterOptions == null) ? "" : ObjectSerializer.serialize(requestObj.autoFitterOptions, requestObj.autoFitterOptions.constructor.name === "Object" ? "AutoFitterOptions" : requestObj.autoFitterOptions.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async cellsWorksheetsPostCopyWorksheet(requestObj: model.CellsWorksheets_PostCopyWorksheetRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorksheetsPostCopyWorksheet.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/copy"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorksheetsPostCopyWorksheet.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsWorksheetsPostCopyWorksheet.');
        }

        // verify required parameter 'requestObj.sourceSheet' is not null or undefined
        if (requestObj.sourceSheet === null || requestObj.sourceSheet === undefined) {
            throw new Error('Required parameter "requestObj.sourceSheet" was null or undefined when calling cellsWorksheetsPostCopyWorksheet.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "sourceSheet", requestObj.sourceSheet);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "sourceWorkbook", requestObj.sourceWorkbook);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "sourceFolder", requestObj.sourceFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.options == null) ? "" : ObjectSerializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "CopyOptions" : requestObj.options.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Move worksheet.
     * @param requestObj contains request parameters
     */
    public async cellsWorksheetsPostMoveWorksheet(requestObj: model.CellsWorksheets_PostMoveWorksheetRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorksheetsPostMoveWorksheet.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/position"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorksheetsPostMoveWorksheet.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsWorksheetsPostMoveWorksheet.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.moving == null) ? "" : ObjectSerializer.serialize(requestObj.moving, requestObj.moving.constructor.name === "Object" ? "WorksheetMovingRequest" : requestObj.moving.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Rename worksheet
     * @param requestObj contains request parameters
     */
    public async cellsWorksheetsPostRenameWorksheet(requestObj: model.CellsWorksheets_PostRenameWorksheetRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorksheetsPostRenameWorksheet.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/rename"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorksheetsPostRenameWorksheet.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsWorksheetsPostRenameWorksheet.');
        }

        // verify required parameter 'requestObj.newname' is not null or undefined
        if (requestObj.newname === null || requestObj.newname === undefined) {
            throw new Error('Required parameter "requestObj.newname" was null or undefined when calling cellsWorksheetsPostRenameWorksheet.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newname", requestObj.newname);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Update worksheet property
     * @param requestObj contains request parameters
     */
    public async cellsWorksheetsPostUpdateWorksheetProperty(requestObj: model.CellsWorksheets_PostUpdateWorksheetPropertyRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorksheetsPostUpdateWorksheetProperty.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorksheetsPostUpdateWorksheetProperty.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsWorksheetsPostUpdateWorksheetProperty.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.sheet == null) ? "" : ObjectSerializer.serialize(requestObj.sheet, requestObj.sheet.constructor.name === "Object" ? "Worksheet" : requestObj.sheet.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async cellsWorksheetsPostUpdateWorksheetZoom(requestObj: model.CellsWorksheets_PostUpdateWorksheetZoomRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorksheetsPostUpdateWorksheetZoom.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/zoom"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorksheetsPostUpdateWorksheetZoom.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsWorksheetsPostUpdateWorksheetZoom.');
        }

        // verify required parameter 'requestObj.value' is not null or undefined
        if (requestObj.value === null || requestObj.value === undefined) {
            throw new Error('Required parameter "requestObj.value" was null or undefined when calling cellsWorksheetsPostUpdateWorksheetZoom.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "value", requestObj.value);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Update worksheet's cell comment.
     * @param requestObj contains request parameters
     */
    public async cellsWorksheetsPostWorksheetComment(requestObj: model.CellsWorksheets_PostWorksheetCommentRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorksheetsPostWorksheetComment.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/comments/{cellName}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "cellName" + "}", String(requestObj.cellName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorksheetsPostWorksheetComment.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsWorksheetsPostWorksheetComment.');
        }

        // verify required parameter 'requestObj.cellName' is not null or undefined
        if (requestObj.cellName === null || requestObj.cellName === undefined) {
            throw new Error('Required parameter "requestObj.cellName" was null or undefined when calling cellsWorksheetsPostWorksheetComment.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.comment == null) ? "" : ObjectSerializer.serialize(requestObj.comment, requestObj.comment.constructor.name === "Object" ? "Comment" : requestObj.comment.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Sort worksheet range.
     * @param requestObj contains request parameters
     */
    public async cellsWorksheetsPostWorksheetRangeSort(requestObj: model.CellsWorksheets_PostWorksheetRangeSortRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorksheetsPostWorksheetRangeSort.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/sort"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorksheetsPostWorksheetRangeSort.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsWorksheetsPostWorksheetRangeSort.');
        }

        // verify required parameter 'requestObj.cellArea' is not null or undefined
        if (requestObj.cellArea === null || requestObj.cellArea === undefined) {
            throw new Error('Required parameter "requestObj.cellArea" was null or undefined when calling cellsWorksheetsPostWorksheetRangeSort.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "cellArea", requestObj.cellArea);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.dataSorter == null) ? "" : ObjectSerializer.serialize(requestObj.dataSorter, requestObj.dataSorter.constructor.name === "Object" ? "DataSorter" : requestObj.dataSorter.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Search text.
     * @param requestObj contains request parameters
     */
    public async cellsWorksheetsPostWorksheetTextSearch(requestObj: model.CellsWorksheets_PostWorksheetTextSearchRequest): Promise<{response: http.ClientResponse, body: model.TextItemsResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorksheetsPostWorksheetTextSearch.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/findText"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorksheetsPostWorksheetTextSearch.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsWorksheetsPostWorksheetTextSearch.');
        }

        // verify required parameter 'requestObj.text' is not null or undefined
        if (requestObj.text === null || requestObj.text === undefined) {
            throw new Error('Required parameter "requestObj.text" was null or undefined when calling cellsWorksheetsPostWorksheetTextSearch.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "text", requestObj.text);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "TextItemsResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Replace text.
     * @param requestObj contains request parameters
     */
    public async cellsWorksheetsPostWorsheetTextReplace(requestObj: model.CellsWorksheets_PostWorsheetTextReplaceRequest): Promise<{response: http.ClientResponse, body: model.WorksheetReplaceResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorksheetsPostWorsheetTextReplace.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/replaceText"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorksheetsPostWorsheetTextReplace.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsWorksheetsPostWorsheetTextReplace.');
        }

        // verify required parameter 'requestObj.oldValue' is not null or undefined
        if (requestObj.oldValue === null || requestObj.oldValue === undefined) {
            throw new Error('Required parameter "requestObj.oldValue" was null or undefined when calling cellsWorksheetsPostWorsheetTextReplace.');
        }

        // verify required parameter 'requestObj.newValue' is not null or undefined
        if (requestObj.newValue === null || requestObj.newValue === undefined) {
            throw new Error('Required parameter "requestObj.newValue" was null or undefined when calling cellsWorksheetsPostWorsheetTextReplace.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "oldValue", requestObj.oldValue);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newValue", requestObj.newValue);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "WorksheetReplaceResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Add new worksheet.
     * @param requestObj contains request parameters
     */
    public async cellsWorksheetsPutAddNewWorksheet(requestObj: model.CellsWorksheets_PutAddNewWorksheetRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorksheetsPutAddNewWorksheet.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorksheetsPutAddNewWorksheet.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsWorksheetsPutAddNewWorksheet.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "position", requestObj.position);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "sheettype", requestObj.sheettype);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Change worksheet visibility.
     * @param requestObj contains request parameters
     */
    public async cellsWorksheetsPutChangeVisibilityWorksheet(requestObj: model.CellsWorksheets_PutChangeVisibilityWorksheetRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorksheetsPutChangeVisibilityWorksheet.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/visible"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorksheetsPutChangeVisibilityWorksheet.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsWorksheetsPutChangeVisibilityWorksheet.');
        }

        // verify required parameter 'requestObj.isVisible' is not null or undefined
        if (requestObj.isVisible === null || requestObj.isVisible === undefined) {
            throw new Error('Required parameter "requestObj.isVisible" was null or undefined when calling cellsWorksheetsPutChangeVisibilityWorksheet.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "isVisible", requestObj.isVisible);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Protect worksheet.
     * @param requestObj contains request parameters
     */
    public async cellsWorksheetsPutProtectWorksheet(requestObj: model.CellsWorksheets_PutProtectWorksheetRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorksheetsPutProtectWorksheet.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/protection"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorksheetsPutProtectWorksheet.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsWorksheetsPutProtectWorksheet.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.protectParameter == null) ? "" : ObjectSerializer.serialize(requestObj.protectParameter, requestObj.protectParameter.constructor.name === "Object" ? "ProtectSheetParameter" : requestObj.protectParameter.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Set worksheet background image.
     * @param requestObj contains request parameters
     */
    public async cellsWorksheetsPutWorksheetBackground(requestObj: model.CellsWorksheets_PutWorksheetBackgroundRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorksheetsPutWorksheetBackground.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/background"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorksheetsPutWorksheetBackground.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsWorksheetsPutWorksheetBackground.');
        }

        // verify required parameter 'requestObj.png' is not null or undefined
        if (requestObj.png === null || requestObj.png === undefined) {
            throw new Error('Required parameter "requestObj.png" was null or undefined when calling cellsWorksheetsPutWorksheetBackground.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.png == null) ? "" : ObjectSerializer.serialize(requestObj.png, requestObj.png.constructor.name === "Object" ? "string" : requestObj.png.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Add worksheet's cell comment.
     * @param requestObj contains request parameters
     */
    public async cellsWorksheetsPutWorksheetComment(requestObj: model.CellsWorksheets_PutWorksheetCommentRequest): Promise<{response: http.ClientResponse, body: model.CommentResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorksheetsPutWorksheetComment.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/comments/{cellName}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName))
            .replace("{" + "cellName" + "}", String(requestObj.cellName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorksheetsPutWorksheetComment.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsWorksheetsPutWorksheetComment.');
        }

        // verify required parameter 'requestObj.cellName' is not null or undefined
        if (requestObj.cellName === null || requestObj.cellName === undefined) {
            throw new Error('Required parameter "requestObj.cellName" was null or undefined when calling cellsWorksheetsPutWorksheetComment.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.comment == null) ? "" : ObjectSerializer.serialize(requestObj.comment, requestObj.comment.constructor.name === "Object" ? "Comment" : requestObj.comment.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CommentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Set freeze panes
     * @param requestObj contains request parameters
     */
    public async cellsWorksheetsPutWorksheetFreezePanes(requestObj: model.CellsWorksheets_PutWorksheetFreezePanesRequest): Promise<{response: http.ClientResponse, body: model.CellsCloudResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cellsWorksheetsPutWorksheetFreezePanes.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/{name}/worksheets/{sheetName}/freezepanes"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sheetName" + "}", String(requestObj.sheetName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cellsWorksheetsPutWorksheetFreezePanes.');
        }

        // verify required parameter 'requestObj.sheetName' is not null or undefined
        if (requestObj.sheetName === null || requestObj.sheetName === undefined) {
            throw new Error('Required parameter "requestObj.sheetName" was null or undefined when calling cellsWorksheetsPutWorksheetFreezePanes.');
        }

        // verify required parameter 'requestObj.row' is not null or undefined
        if (requestObj.row === null || requestObj.row === undefined) {
            throw new Error('Required parameter "requestObj.row" was null or undefined when calling cellsWorksheetsPutWorksheetFreezePanes.');
        }

        // verify required parameter 'requestObj.column' is not null or undefined
        if (requestObj.column === null || requestObj.column === undefined) {
            throw new Error('Required parameter "requestObj.column" was null or undefined when calling cellsWorksheetsPutWorksheetFreezePanes.');
        }

        // verify required parameter 'requestObj.freezedRows' is not null or undefined
        if (requestObj.freezedRows === null || requestObj.freezedRows === undefined) {
            throw new Error('Required parameter "requestObj.freezedRows" was null or undefined when calling cellsWorksheetsPutWorksheetFreezePanes.');
        }

        // verify required parameter 'requestObj.freezedColumns' is not null or undefined
        if (requestObj.freezedColumns === null || requestObj.freezedColumns === undefined) {
            throw new Error('Required parameter "requestObj.freezedColumns" was null or undefined when calling cellsWorksheetsPutWorksheetFreezePanes.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "row", requestObj.row);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "column", requestObj.column);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "freezedRows", requestObj.freezedRows);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "freezedColumns", requestObj.freezedColumns);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CellsCloudResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Copy file
     * @param requestObj contains request parameters
     */
    public async copyFile(requestObj: model.CopyFileRequest): Promise<{response: http.ClientResponse,  body?: any; }> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling copyFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/storage/file/copy/{srcPath}"
            .replace("{" + "srcPath" + "}", String(requestObj.srcPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling copyFile.');
        }

        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling copyFile.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "");
        return Promise.resolve({body: result, response});
    }

    /**
     * Copy folder
     * @param requestObj contains request parameters
     */
    public async copyFolder(requestObj: model.CopyFolderRequest): Promise<{response: http.ClientResponse,  body?: any; }> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling copyFolder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/storage/folder/copy/{srcPath}"
            .replace("{" + "srcPath" + "}", String(requestObj.srcPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling copyFolder.');
        }

        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling copyFolder.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "");
        return Promise.resolve({body: result, response});
    }

    /**
     * Create the folder
     * @param requestObj contains request parameters
     */
    public async createFolder(requestObj: model.CreateFolderRequest): Promise<{response: http.ClientResponse,  body?: any; }> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createFolder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/storage/folder/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling createFolder.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete file
     * @param requestObj contains request parameters
     */
    public async deleteFile(requestObj: model.DeleteFileRequest): Promise<{response: http.ClientResponse,  body?: any; }> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/storage/file/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling deleteFile.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete folder
     * @param requestObj contains request parameters
     */
    public async deleteFolder(requestObj: model.DeleteFolderRequest): Promise<{response: http.ClientResponse,  body?: any; }> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFolder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/storage/folder/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling deleteFolder.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "recursive", requestObj.recursive);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "");
        return Promise.resolve({body: result, response});
    }

    /**
     * Download file
     * @param requestObj contains request parameters
     */
    public async downloadFile(requestObj: model.DownloadFileRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling downloadFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/storage/file/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling downloadFile.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get disc usage
     * @param requestObj contains request parameters
     */
    public async getDiscUsage(requestObj: model.GetDiscUsageRequest): Promise<{response: http.ClientResponse, body: model.DiscUsage}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDiscUsage.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/storage/disc";
        const queryParameters: any = {};
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DiscUsage");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get file versions
     * @param requestObj contains request parameters
     */
    public async getFileVersions(requestObj: model.GetFileVersionsRequest): Promise<{response: http.ClientResponse, body: model.FileVersions}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFileVersions.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/storage/version/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling getFileVersions.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FileVersions");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get all files and folders within a folder
     * @param requestObj contains request parameters
     */
    public async getFilesList(requestObj: model.GetFilesListRequest): Promise<{response: http.ClientResponse, body: model.FilesList}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFilesList.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/storage/folder/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling getFilesList.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FilesList");
        return Promise.resolve({body: result, response});
    }

    /**
     * Move file
     * @param requestObj contains request parameters
     */
    public async moveFile(requestObj: model.MoveFileRequest): Promise<{response: http.ClientResponse,  body?: any; }> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling moveFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/storage/file/move/{srcPath}"
            .replace("{" + "srcPath" + "}", String(requestObj.srcPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling moveFile.');
        }

        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling moveFile.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "");
        return Promise.resolve({body: result, response});
    }

    /**
     * Move folder
     * @param requestObj contains request parameters
     */
    public async moveFolder(requestObj: model.MoveFolderRequest): Promise<{response: http.ClientResponse,  body?: any; }> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling moveFolder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/storage/folder/move/{srcPath}"
            .replace("{" + "srcPath" + "}", String(requestObj.srcPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling moveFolder.');
        }

        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling moveFolder.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get Access token
     * @param requestObj contains request parameters
     */
    public async oAuthPost(requestObj: model.OAuth_PostRequest): Promise<{response: http.ClientResponse, body: model.AccessTokenResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling oAuthPost.');
        }

        const localVarPath = this.configuration.getApiBaseUrl() + "/connect/token";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.grantType' is not null or undefined
        if (requestObj.grantType === null || requestObj.grantType === undefined) {
            throw new Error('Required parameter "requestObj.grantType" was null or undefined when calling oAuthPost.');
        }

        // verify required parameter 'requestObj.clientId' is not null or undefined
        if (requestObj.clientId === null || requestObj.clientId === undefined) {
            throw new Error('Required parameter "requestObj.clientId" was null or undefined when calling oAuthPost.');
        }

        // verify required parameter 'requestObj.clientSecret' is not null or undefined
        if (requestObj.clientSecret === null || requestObj.clientSecret === undefined) {
            throw new Error('Required parameter "requestObj.clientSecret" was null or undefined when calling oAuthPost.');
        }
        
        if (requestObj.grantType !== undefined) {
            formParams.grant_type = ObjectSerializer.serialize(requestObj.grantType, "string");
        }

        if (requestObj.clientId !== undefined) {
            formParams.client_id = ObjectSerializer.serialize(requestObj.clientId, "string");
        }

        if (requestObj.clientSecret !== undefined) {
            formParams.client_secret = ObjectSerializer.serialize(requestObj.clientSecret, "string");
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AccessTokenResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Check if file or folder exists
     * @param requestObj contains request parameters
     */
    public async objectExists(requestObj: model.ObjectExistsRequest): Promise<{response: http.ClientResponse, body: model.ObjectExist}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling objectExists.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/storage/exist/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling objectExists.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ObjectExist");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async postBatchConvert(requestObj: model.PostBatchConvertRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postBatchConvert.');
        }

        const localVarPath = this.configuration.getApiBaseUrl() + "/cells/batch/convert";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.batchConvertRequest' is not null or undefined
        if (requestObj.batchConvertRequest === null || requestObj.batchConvertRequest === undefined) {
            throw new Error('Required parameter "requestObj.batchConvertRequest" was null or undefined when calling postBatchConvert.');
        }
        
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.batchConvertRequest == null) ? "" : ObjectSerializer.serialize(requestObj.batchConvertRequest, requestObj.batchConvertRequest.constructor.name === "Object" ? "BatchConvertRequest" : requestObj.batchConvertRequest.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Check if storage exists
     * @param requestObj contains request parameters
     */
    public async storageExists(requestObj: model.StorageExistsRequest): Promise<{response: http.ClientResponse, body: model.StorageExist}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling storageExists.');
        }

        const localVarPath = this.configuration.getApiBaseUrl() + "/cells/storage/{storageName}/exist"
            .replace("{" + "storageName" + "}", String(requestObj.storageName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.storageName' is not null or undefined
        if (requestObj.storageName === null || requestObj.storageName === undefined) {
            throw new Error('Required parameter "requestObj.storageName" was null or undefined when calling storageExists.');
        }
        
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "StorageExist");
        return Promise.resolve({body: result, response});
    }

    /**
     * Upload file
     * @param requestObj contains request parameters
     */
    public async uploadFile(requestObj: model.UploadFileRequest): Promise<{response: http.ClientResponse, body: model.FilesUploadResult}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling uploadFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/storage/file/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling uploadFile.');
        }

        // verify required parameter 'requestObj.file' is not null or undefined
        if (requestObj.file === null || requestObj.file === undefined) {
            throw new Error('Required parameter "requestObj.file" was null or undefined when calling uploadFile.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        if (requestObj.file !== undefined) {
            formParams.file = requestObj.file;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FilesUploadResult");
        return Promise.resolve({body: result, response});
    }

}
/**
 * Library for communicating with the Aspose.Cells Cloud API
 */
 
 export class LightCellsApi {
    /**
     * API configuration
     */
    public configuration: Configuration;

    /**
     * @param clientId client Id.
     * @param clientSecret client Secret.
     * @param baseUrl Base api Url.
     * @param debugMode A value indicating whether debug mode. In debug mode all requests and responses are logged to console.
     */
    constructor(clientId: string, clientSecret: string, apiVersion?:string, baseUrl?: string, debugMode?: boolean) {
        this.configuration = new Configuration(clientId, clientSecret,apiVersion, baseUrl, debugMode);
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async deleteMetadata(requestObj: model.DeleteMetadataRequest): Promise<{response: http.ClientResponse, body: model.FilesResult}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteMetadata.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/metadata/delete";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.file' is not null or undefined
        if (requestObj.file === null || requestObj.file === undefined) {
            throw new Error('Required parameter "requestObj.file" was null or undefined when calling deleteMetadata.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "type", requestObj.type);
        if (requestObj.file !== undefined) {
            for (var key in requestObj.file){
                formParams[key] = requestObj.file[key];
            }
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FilesResult");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async getMetadata(requestObj: model.GetMetadataRequest): Promise<{response: http.ClientResponse, body: Array<model.CellsDocumentProperty>}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getMetadata.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/metadata/get";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.file' is not null or undefined
        if (requestObj.file === null || requestObj.file === undefined) {
            throw new Error('Required parameter "requestObj.file" was null or undefined when calling getMetadata.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "type", requestObj.type);
        if (requestObj.file !== undefined) {
            for (var key in requestObj.file){
                formParams[key] = requestObj.file[key];
            }
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Array<CellsDocumentProperty>");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async postAssemble(requestObj: model.PostAssembleRequest): Promise<{response: http.ClientResponse, body: model.FilesResult}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postAssemble.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/assemble";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.file' is not null or undefined
        if (requestObj.file === null || requestObj.file === undefined) {
            throw new Error('Required parameter "requestObj.file" was null or undefined when calling postAssemble.');
        }

        // verify required parameter 'requestObj.datasource' is not null or undefined
        if (requestObj.datasource === null || requestObj.datasource === undefined) {
            throw new Error('Required parameter "requestObj.datasource" was null or undefined when calling postAssemble.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "datasource", requestObj.datasource);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        if (requestObj.file !== undefined) {
            for (var key in requestObj.file){
                formParams[key] = requestObj.file[key];
            }
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FilesResult");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
     public async postCompress(requestObj: model.PostCompressRequest): Promise<{response: http.ClientResponse, body: model.FilesResult}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postCompress.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/compress";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.file' is not null or undefined
        if (requestObj.file === null || requestObj.file === undefined) {
            throw new Error('Required parameter "requestObj.file" was null or undefined when calling postCompress.');
        }

        // verify required parameter 'requestObj.compressLevel' is not null or undefined
        if (requestObj.compressLevel === null || requestObj.compressLevel === undefined) {
            throw new Error('Required parameter "requestObj.compressLevel" was null or undefined when calling postCompress.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "compressLevel", requestObj.compressLevel);
        
        if (requestObj.file !== undefined) {
            for (var key in requestObj.file){
                formParams[key] = requestObj.file[key];
            }
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FilesResult");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async postReplace(requestObj: model.PostReplaceRequest): Promise<{response: http.ClientResponse, body: model.FilesResult}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postReplace.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/replace";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.file' is not null or undefined
        if (requestObj.file === null || requestObj.file === undefined) {
            throw new Error('Required parameter "requestObj.file" was null or undefined when calling postReplace.');
        }

        // verify required parameter 'requestObj.newtext' is not null or undefined
        if (requestObj.newtext === null || requestObj.newtext === undefined) {
            throw new Error('Required parameter "requestObj.newtext" was null or undefined when calling postReplace.');
        }
        if (requestObj.text === null || requestObj.text === undefined) {
            throw new Error('Required parameter "requestObj.text" was null or undefined when calling postReplace.');
        }
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "text", requestObj.text);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newtext", requestObj.newtext);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "sheetname", requestObj.sheetname);
        
        if (requestObj.file !== undefined) {
            for (var key in requestObj.file){
                formParams[key] = requestObj.file[key];
            }
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FilesResult");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async postClearObjects(requestObj: model.PostClearObjectsRequest): Promise<{response: http.ClientResponse, body: model.FilesResult}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postClearObjects.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/clearobjects";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.file' is not null or undefined
        if (requestObj.file === null || requestObj.file === undefined) {
            throw new Error('Required parameter "requestObj.file" was null or undefined when calling postClearObjects.');
        }

        // verify required parameter 'requestObj.objecttype' is not null or undefined
        if (requestObj.objecttype === null || requestObj.objecttype === undefined) {
            throw new Error('Required parameter "requestObj.objecttype" was null or undefined when calling postClearObjects.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "objecttype", requestObj.objecttype);
        if (requestObj.file !== undefined) {
            for (var key in requestObj.file){
                formParams[key] = requestObj.file[key];
            }
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FilesResult");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async postExport(requestObj: model.PostExportRequest): Promise<{response: http.ClientResponse, body: model.FilesResult}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postExport.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/export";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.file' is not null or undefined
        if (requestObj.file === null || requestObj.file === undefined) {
            throw new Error('Required parameter "requestObj.file" was null or undefined when calling postExport.');
        }

        // verify required parameter 'requestObj.objectType' is not null or undefined
        if (requestObj.objectType === null || requestObj.objectType === undefined) {
            throw new Error('Required parameter "requestObj.objectType" was null or undefined when calling postExport.');
        }

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling postExport.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "objectType", requestObj.objectType);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);

        if (requestObj.extendedQueryParameters !== undefined) {
            for (var key in requestObj.extendedQueryParameters){
                localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, key, requestObj.extendedQueryParameters[key]);
            }
        }

        if (requestObj.file !== undefined) {
            for (var key in requestObj.file){
                formParams[key] = requestObj.file[key];
            }
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FilesResult");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async postImport(requestObj: model.PostImportRequest): Promise<{response: http.ClientResponse, body: model.FilesResult}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postImport.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/import";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.file' is not null or undefined
        if (requestObj.file === null || requestObj.file === undefined) {
            throw new Error('Required parameter "requestObj.file" was null or undefined when calling postImport.');
        }

        // verify required parameter 'requestObj.importOption' is not null or undefined
        if (requestObj.importOption === null || requestObj.importOption === undefined) {
            throw new Error('Required parameter "requestObj.objectType" was null or undefined when calling postImport.');
        }


        if (requestObj.file !== undefined) {
            for (var key in requestObj.file){
                formParams[key] = requestObj.file[key];
            }
            if((requestObj.importOption !== null))
            {
                formParams["documentProperties"]  = JSON.stringify(requestObj.importOption);
            }
        }
       
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FilesResult");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async postMerge(requestObj: model.PostMergeRequest): Promise<{response: http.ClientResponse, body: model.FileInfo}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postMerge.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/merge";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.file' is not null or undefined
        if (requestObj.file === null || requestObj.file === undefined) {
            throw new Error('Required parameter "requestObj.file" was null or undefined when calling postMerge.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "mergeToOneSheet", requestObj.mergeToOneSheet);
        if (requestObj.file !== undefined) {
            for (var key in requestObj.file){
                formParams[key] = requestObj.file[key];
            }
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FileInfo");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async postMetadata(requestObj: model.PostMetadataRequest): Promise<{response: http.ClientResponse, body: model.FilesResult}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postMetadata.');
        }

        const localVarPath = this.configuration.getApiBaseUrl() + "/cells/metadata/update";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.file' is not null or undefined
        if (requestObj.file === null || requestObj.file === undefined) {
            throw new Error('Required parameter "requestObj.file" was null or undefined when calling postMetadata.');
        }

        // verify required parameter 'requestObj.documentProperties' is not null or undefined
        if (requestObj.documentProperties === null || requestObj.documentProperties === undefined) {
            throw new Error('Required parameter "requestObj.documentProperties" was null or undefined when calling postMetadata.');
        }
        
        if (requestObj.file !== undefined) {
            for (var key in requestObj.file){
                formParams[key] = requestObj.file[key];
            }
            if((requestObj.documentProperties !== null))
            {
                formParams["documentProperties"]  = JSON.stringify(requestObj.documentProperties);
            }
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,            
            // body:  "[]",//(requestObj.documentProperties == null) ? "" : ObjectSerializer.serialize(requestObj.documentProperties, requestObj.documentProperties.constructor.name === "Object" ? "CellsDocumentProperty" : requestObj.documentProperties.constructor.name),
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FilesResult");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async postProtect(requestObj: model.PostProtectRequest): Promise<{response: http.ClientResponse, body: model.FilesResult}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postProtect.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/protect";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.file' is not null or undefined
        if (requestObj.file === null || requestObj.file === undefined) {
            throw new Error('Required parameter "requestObj.file" was null or undefined when calling postProtect.');
        }

        // verify required parameter 'requestObj.password' is not null or undefined
        if (requestObj.password === null || requestObj.password === undefined) {
            throw new Error('Required parameter "requestObj.password" was null or undefined when calling postProtect.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.file !== undefined) {
            for (var key in requestObj.file){
                formParams[key] = requestObj.file[key];
            }
            // formParams.File = requestObj.file;
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FilesResult");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async postSearch(requestObj: model.PostSearchRequest): Promise<{response: http.ClientResponse, body: Array<model.TextItem>}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postSearch.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/search";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.file' is not null or undefined
        if (requestObj.file === null || requestObj.file === undefined) {
            throw new Error('Required parameter "requestObj.file" was null or undefined when calling postSearch.');
        }

        // verify required parameter 'requestObj.text' is not null or undefined
        if (requestObj.text === null || requestObj.text === undefined) {
            throw new Error('Required parameter "requestObj.text" was null or undefined when calling postSearch.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "text", requestObj.text);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "sheetname", requestObj.sheetname);
        if (requestObj.file !== undefined) {
            for (var key in requestObj.file){
                formParams[key] = requestObj.file[key];
            }
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Array<TextItem>");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async postSplit(requestObj: model.PostSplitRequest): Promise<{response: http.ClientResponse, body: model.FilesResult}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postSplit.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/split";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.file' is not null or undefined
        if (requestObj.file === null || requestObj.file === undefined) {
            throw new Error('Required parameter "requestObj.file" was null or undefined when calling postSplit.');
        }

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling postSplit.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "from", requestObj.from);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "to", requestObj.to);
        
        if (requestObj.file !== undefined) {
            for (var key in requestObj.file){
                formParams[key] = requestObj.file[key];
            }
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FilesResult");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async postUnlock(requestObj: model.PostUnlockRequest): Promise<{response: http.ClientResponse, body: model.FilesResult}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postUnlock.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/unlock";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.file' is not null or undefined
        if (requestObj.file === null || requestObj.file === undefined) {
            throw new Error('Required parameter "requestObj.file" was null or undefined when calling postUnlock.');
        }

        // verify required parameter 'requestObj.password' is not null or undefined
        if (requestObj.password === null || requestObj.password === undefined) {
            throw new Error('Required parameter "requestObj.password" was null or undefined when calling postUnlock.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.file !== undefined) {
            for (var key in requestObj.file){
                formParams[key] = requestObj.file[key];
            }
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FilesResult");
        return Promise.resolve({body: result, response});
    }

    /**
     * 
     * @param requestObj contains request parameters
     */
    public async postWatermark(requestObj: model.PostWatermarkRequest): Promise<{response: http.ClientResponse, body: model.FilesResult}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postWatermark.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/watermark";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.file' is not null or undefined
        if (requestObj.file === null || requestObj.file === undefined) {
            throw new Error('Required parameter "requestObj.file" was null or undefined when calling postWatermark.');
        }

        // verify required parameter 'requestObj.text' is not null or undefined
        if (requestObj.text === null || requestObj.text === undefined) {
            throw new Error('Required parameter "requestObj.text" was null or undefined when calling postWatermark.');
        }

        // verify required parameter 'requestObj.color' is not null or undefined
        if (requestObj.color === null || requestObj.color === undefined) {
            throw new Error('Required parameter "requestObj.color" was null or undefined when calling postWatermark.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "text", requestObj.text);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "color", requestObj.color);
        if (requestObj.file !== undefined) {
            for (var key in requestObj.file){
                formParams[key] = requestObj.file[key];
            }
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FilesResult");
        return Promise.resolve({body: result, response});
    }
    /**
     * 
     * @param requestObj contains request parameters
     */
     public async postReverse(requestObj: model.PostReverseRequest): Promise<{response: http.ClientResponse, body: model.FilesResult}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling PostReverse.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cells/reverse";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.file' is not null or undefined
        if (requestObj.file === null || requestObj.file === undefined) {
            throw new Error('Required parameter "requestObj.file" was null or undefined when calling PostReverse.');
        }

        // verify required parameter 'requestObj.rotateType' is not null or undefined
        if (requestObj.rotateType === null || requestObj.rotateType === undefined) {
            throw new Error('Required parameter "requestObj.rotateType" was null or undefined when calling PostReverse.');
        }

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling PostReverse.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "rotateType", requestObj.rotateType);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        if (requestObj.file !== undefined) {
            for (var key in requestObj.file){
                formParams[key] = requestObj.file[key];
            }
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FilesResult");
        return Promise.resolve({body: result, response});
    }
}
