# Aspose.Cells Cloud SDK for Node.js — API Reference

## Package & Import

```js
// ES modules (default)
import {
  CellsCloudClient,
  Configuration,
  SDKError,
  RequestOption,
  RichResponse,
} from 'aspose-cells-cloud';

// Individual classes
import AddTextRequest from 'aspose-cells-cloud/lib/request/add-text-request.js';
import Font from 'aspose-cells-cloud/lib/model/font.js';
```

## Client Initialization

```js
import { CellsCloudClient } from 'aspose-cells-cloud';

const client = new CellsCloudClient(
  process.env.CellsCloudClientId,      // clientId
  process.env.CellsCloudClientSecret,  // clientSecret
  'https://api.aspose.cloud'              // baseUrl (optional, default)
);

// Or via Configuration
const client2 = new CellsCloudClient(new Configuration({
  clientId: '...',
  clientSecret: '...',
  baseUrl: 'https://api.aspose.cloud',
}));
```

## Executing a Request

```js
import { SDKError } from 'aspose-cells-cloud';
import PostClearContentsRequest from 'aspose-cells-cloud/lib/request/post-clear-contents-request.js';

async function run() {
  try {
    const request = new PostClearContentsRequest('Book1.xlsx', 'Sheet1');
    request.range = 'A1:C10';
    request.folder = 'TestData/In';

    const response = await client.do(request);   // Promise<RichResponse>
    console.log(response.statusCode);            // 200
    console.log(response.body);
  } catch (e) {
    if (e instanceof SDKError) {
      console.error(e.message, e.statusCode);
    } else {
      throw e;
    }
  }
}
```

## Core Types

### `CellsCloudClient`

| Member | Signature | Description |
|--------|-----------|-------------|
| `constructor` | `(clientId, clientSecret, baseUrl?)` or `(Configuration)` | Create a client. |
| `do` | `async do(request) → Promise<RichResponse>` | Execute one request (throws `SDKError` on failure). |
| `doBatch` | `async doBatch(requests[]) → Promise<RichResponse[]>` | Execute several requests. |
| `requestOauthToken` | `async requestOauthToken() → Promise<string>` | Obtain an OAuth2 access token. |
| `uploadFile` | `async uploadFile(path, file, storage?)` | Upload a file to storage (`file` may be a path, File/Blob, Buffer, or `{value, filename}`). |
| `configuration` | `Configuration` | The client's runtime configuration. |

### Multipart form values

Any request that uploads a file (`getMultipartForm()` non-null) — and `uploadFile` — accepts
these input forms for a file field:

| Input | Meaning |
|-------|---------|
| `'testdata/Book1.xlsx'` | Local file path (read from disk, filename = basename). |
| `new File([bytes], 'a.xlsx')` | `File` (Node 20+) — used directly, keeps its own `name`. |
| `new Blob([bytes])` | `Blob` — used directly, filename = field name. |
| `Buffer.from(...)` / `Uint8Array` / `ArrayBuffer` | Raw bytes, filename = field name. |
| `{ value, filename }` | Any of the above plus an explicit filename (in-memory uploads). |

```js
const req = new AddTextRequest(
  { value: Buffer.from(xlsxBytes), filename: 'Book1.xlsx' }, // in-memory upload
  'prefix',
  'AtTheBeginning',
);
req.folder = 'TestData/In';
```

### `RequestOption` (base class)

Every request subclasses `RequestOption` and overrides these methods:

| Method | Returns | Purpose |
|--------|---------|---------|
| `getMethod()` | `string` | HTTP verb: `'GET'`, `'POST'`, `'PUT'`, `'DELETE'`. |
| `getPath()` | `string` | Request path with `{param}` placeholders substituted. |
| `getQueryParameters()` | `object` | Query string params (only present ones). |
| `getHeaderParameters()` | `object` | Headers, incl. `Content-Type`. |
| `getJsonBody()` | `object\|null` | JSON body, or `null` if none. |
| `getMultipartForm()` | `object\|null` | Multipart form fields, or `null` if none. |

### `RichResponse`

| Member | Type | Description |
|--------|------|-------------|
| `statusCode` | `number` | HTTP status code. |
| `headers` | `object` | Response headers. |
| `body` | `string` | Raw response body. |
| `toString()` | `string` | Body as string. |
| `toBytes()` | `Buffer` | Body as bytes. |
| `getJson()` | `object` | Parsed JSON body. |

### `SDKError extends Error`

| Member | Type | Description |
|--------|------|-------------|
| `message` | `string` | Error message. |
| `statusCode` | `number` | HTTP status code (when available). |
| `code` | `string` | Server error code. |

## Controllers (42)

Each controller corresponds to a set of request classes under `lib/request/` and models under
`lib/model/`. Representative controllers:

| Controller | Example operations |
|------------|--------------------|
| `CellsController` | `postClearContents`, `getWorksheetCells`, `postCellCharacters` |
| `WorkbookController` | `postWorkbookSaveAs`, `getWorkbook`, `postWorkbookMerge` |
| `WorksheetController` | `putAddNewWorksheet`, `postUpdateWorksheetProperty` |
| `RangeController` | `postWorksheetCellsRangeValue`, `getWorksheetCellsRangeValue` |
| `ConversionController` | `putConvertWorkbook`, `postConvertWorkbook` |
| `StorageController` | `getFilesList`, `uploadFile`, `deleteFile` |
| `OauthController` | `postOauthToken` |

The full controller set is enumerated in the OpenAPI spec (`aspose.cells.cloud.specification.json`).

## Common (Optional) Parameters

These appear on most request classes as assignable properties. Omitted/`undefined` values are dropped
from the request.

| Property | Type | Description |
|----------|------|-------------|
| `folder` | `string` | Folder in storage. |
| `storageName` | `string` | Storage name (default storage when omitted). |
| `password` | `string` | Document password. |
| `region` | `string` | Storage region. |
| `outPath` | `string` | Output path for save-as operations. |
| `outStorageName` | `string` | Output storage name. |

## Error Handling

```js
try {
  const res = await client.do(request);
} catch (e) {
  if (e instanceof SDKError && e.statusCode === 404) {
    // handle not-found
  }
  // HTTP failures, network errors, and OAuth failures all throw SDKError
}
```

The Go SDK's `(response, error)` return becomes: `await client.do(...)` either resolves to a
`RichResponse` or rejects with an `SDKError`.
