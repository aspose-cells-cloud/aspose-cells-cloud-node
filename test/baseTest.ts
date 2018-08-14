/*
* MIT License

* Copyright (c) 2018 Aspose Pty Ltd

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

import * as api from "../src/api";

let storageApi;

const AppSid = "66164C51-693E-4904-A121-545961673EC1";
const AppKey = "536e76768419db9585afdd37bb5f7533";
const ApiURL = "https://api.aspose.cloud/v1.1"

/**
 * Initialize CellsApi
 */
export function initializeCellsApi() {
    const cellsApi = new api.CellsApi(AppSid, AppKey);
    return cellsApi;
}

/**
 * Initialize CellsAutoFilterApi
 */
export function initializeCellsAutoFilterApi() {
    const cellsApi = new api.CellsAutoFilterApi(AppSid, AppKey);
    return cellsApi;
}

/**
 * Initialize CellsAutoshapesApi
 */
export function initializeCellsAutoshapesApi() {
    const cellsApi = new api.CellsAutoshapesApi(AppSid, AppKey);
    return cellsApi;
}

/**
 * Initialize CellsChartAreaApi
 */
export function initializeCellsChartAreaApi() {
    const cellsApi = new api.CellsChartAreaApi(AppSid, AppKey);
    return cellsApi;
}

/**
 * Initialize CellsChartsApi
 */
export function initializeCellsChartsApi() {
    const cellsApi = new api.CellsChartsApi(AppSid, AppKey);
    return cellsApi;
}

/**
 * Initialize CellsConditionalFormattingsApi
 */
export function initializeCellsConditionalFormattingsApi() {
    const cellsApi = new api.CellsConditionalFormattingsApi(AppSid, AppKey);
    return cellsApi;
}

/**
 * Initialize CellsHypelinksApi
 */
export function initializeCellsHypelinksApi() {
    const cellsApi = new api.CellsHypelinksApi(AppSid, AppKey);
    return cellsApi;
}

/**
 * Initialize CellsListObjectsApi
 */
export function initializeCellsListObjectsApi() {
    const cellsApi = new api.CellsListObjectsApi(AppSid, AppKey);
    return cellsApi;
}

/**
 * Initialize CellsOleObjectsApi
 */
export function initializeCellsOleObjectsApi() {
    const cellsApi = new api.CellsOleObjectsApi(AppSid, AppKey);
    return cellsApi;
}

/**
 * Initialize CellsPageBreaksApi
 */
export function initializeCellsPageBreaksApi() {
    const cellsApi = new api.CellsPageBreaksApi(AppSid, AppKey);
    return cellsApi;
}

/**
 * Initialize CellsPageSetupApi
 */
export function initializeCellsPageSetupApi() {
    const cellsApi = new api.CellsPageSetupApi(AppSid, AppKey);
    return cellsApi;
}

/**
 * Initialize CellsPicturesApi
 */
export function initializeCellsPicturesApi() {
    const cellsApi = new api.CellsPicturesApi(AppSid, AppKey);
    return cellsApi;
}

/**
 * Initialize CellsPivotTablesApi
 */
export function initializeCellsPivotTablesApi() {
    const cellsApi = new api.CellsPivotTablesApi(AppSid, AppKey);
    return cellsApi;
}

/**
 * Initialize CellsPropertiesApi
 */
export function initializeCellsPropertiesApi() {
    const cellsApi = new api.CellsPropertiesApi(AppSid, AppKey);
    return cellsApi;
}

/**
 * Initialize CellsRangesApi
 */
export function initializeCellsRangesApi() {
    const cellsApi = new api.CellsRangesApi(AppSid, AppKey);
    return cellsApi;
}

/**
 * Initialize CellsSaveAsApi
 */
export function initializeCellsSaveAsApi() {
    const cellsApi = new api.CellsSaveAsApi(AppSid, AppKey);
    return cellsApi;
}

/**
 * Initialize CellsShapesApi
 */
export function initializeCellsShapesApi() {
    const cellsApi = new api.CellsShapesApi(AppSid, AppKey);
    return cellsApi;
}

/**
 * Initialize CellsTaskApi
 */
export function initializeCellsTaskApi() {
    const cellsApi = new api.CellsTaskApi(AppSid, AppKey);
    return cellsApi;
}

/**
 * Initialize CellsWorkbookApi
 */
export function initializeCellsWorkbookApi() {
    const cellsApi = new api.CellsWorkbookApi(AppSid, AppKey);
    return cellsApi;
}

/**
 * Initialize CellsWorksheetsApi
 */
export function initializeCellsWorksheetsApi() {
    const cellsApi = new api.CellsWorksheetsApi(AppSid, AppKey);
    return cellsApi;
}

/**
 * Initialize CellsWorksheetValidationsApi
 */
export function initializeCellsWorksheetValidationsApi() {
    const cellsApi = new api.CellsWorksheetValidationsApi(AppSid, AppKey);
    return cellsApi;
}

/**
 * Initialize StorageApi
 */
export function initializeStorageApi() {
    if (!storageApi) {
        const StorageApi = require("asposestoragecloud");

        storageApi = new StorageApi({ appSid: AppSid, apiKey: AppKey, baseURI: ApiURL });
    }

    return storageApi;
}
