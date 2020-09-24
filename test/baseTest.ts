/*
* MIT License

* Copyright (c) 2020 Aspose Pty Ltd

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

const AppSid = "91A2FD07-BBA1-4B32-9112-ABFB1FE8AEBD";
const AppKey = "0fbf678c5ecabdb5caca48452a736dd0";
const ApiURL = "https://api-qa.aspose.cloud/v3.0"

/**
 * Initialize CellsApi
 */
export function initializeCellsApi() {
    const cellsApi = new api.CellsApi(AppSid, AppKey,"v3.0","https://api-qa.aspose.cloud");
    return cellsApi;
}

