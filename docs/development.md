# Aspose.Cells Cloud SDK for Node.js — Development Guide

## Directory Layout

```
lib/
├── index.js                  # public re-exports
├── cells-cloud-client.js
├── configuration.js
├── request-option.js         # base class
├── rich-response.js
├── sdk-error.js
├── version.js
├── model/                    # 483 model classes (one per file)
└── request/                  # 461 request classes (one per operation)
```

## Module System

`package.json` sets `"type": "module"`. Every file is an ES module:

- One class per file, exported with `export default`.
- `lib/index.js` re-exports the public API with named exports.

```js
// lib/index.js
export { default as CellsCloudClient } from './cells-cloud-client.js';
export { default as Configuration } from './configuration.js';
export { default as RequestOption } from './request-option.js';
export { default as RichResponse } from './rich-response.js';
export { default as SDKError } from './sdk-error.js';
```

## `RequestOption` Base Class (interface analog)

JavaScript has no interfaces. The Go `RequestOption` interface becomes an abstract-like base class whose
methods throw `new Error('Not implemented')` unless overridden:

```js
// lib/request-option.js
class RequestOption {
  /** @returns {string} HTTP verb. */
  getMethod() {
    throw new Error('Not implemented: getMethod()');
  }

  /** @returns {string} URL path with placeholders substituted. */
  getPath() {
    throw new Error('Not implemented: getPath()');
  }

  /** @returns {Object<string, string>} query parameters. */
  getQueryParameters() {
    return {};
  }

  /** @returns {Object<string, string>} headers. */
  getHeaderParameters() {
    return {};
  }

  /** @returns {Object|null} JSON body. */
  getJsonBody() {
    return null;
  }

  /** @returns {Object<string, *>|null} multipart form fields. */
  getMultipartForm() {
    return null;
  }
}

export default RequestOption;
```

## Request Class Idiom

Required parameters are constructor arguments; optional parameters are assignable properties. The
Go SDK's `WithCommonParameter(...)` functional options become plain property assignment.

```js
import RequestOption from '../request-option.js';

class PostClearContentsRequest extends RequestOption {
  /**
   * @param {string} name       File name (required).
   * @param {string} sheetName  Worksheet name (required).
   */
  constructor(name, sheetName) {
    super();
    if (!name) throw new Error('name is required');
    if (!sheetName) throw new Error('sheetName is required');
    this.name = name;
    this.sheetName = sheetName;
    this.range = undefined;   // optional
    this.folder = undefined;  // optional
  }

  getMethod() {
    return 'POST';
  }

  getPath() {
    return `/v3.0/cells/${encodeURIComponent(this.name)}/worksheets/${encodeURIComponent(this.sheetName)}/cells/clearcontents`;
  }

  getQueryParameters() {
    const query = {};
    if (this.folder !== undefined) query.folder = this.folder;
    return query;
  }

  getHeaderParameters() {
    return { 'Content-Type': 'application/json' };
  }

  getJsonBody() {
    return this.range !== undefined ? { range: this.range } : null;
  }

  getMultipartForm() {
    return null;
  }
}

export default PostClearContentsRequest;
```

## Model Class Idiom

Models are data carriers: a constructor accepting a `data` object plus a `toJSON()` that emits only the
present fields under their **wire** names (the `omitempty` analog).

```js
// lib/model/font.js
class Font {
  /**
   * @param {Object} [data]  Raw API object.
   */
  constructor(data = {}) {
    /** @type {Color} */
    this.color = data.Color;
    /** @type {number} */
    this.doubleSize = data.DoubleSize;
    /** @type {boolean} */
    this.isBold = data.IsBold;
    /** @type {string} */
    this.name = data.Name;
    /** @type {number} */
    this.size = data.Size;
  }

  /** @returns {Object} wire-format object (omits null/undefined). */
  toJSON() {
    const json = {};
    if (this.color !== undefined && this.color !== null) json.Color = this.color;
    if (this.doubleSize !== undefined && this.doubleSize !== null) json.DoubleSize = this.doubleSize;
    if (this.isBold !== undefined && this.isBold !== null) json.IsBold = this.isBold;
    if (this.name !== undefined && this.name !== null) json.Name = this.name;
    if (this.size !== undefined && this.size !== null) json.Size = this.size;
    return json;
  }
}

export default Font;
```

## `Configuration`

```js
// lib/configuration.js
class Configuration {
  /**
   * @param {Object} [config]
   */
  constructor(config = {}) {
    this.clientId = config.clientId;
    this.clientSecret = config.clientSecret;
    this.baseUrl = config.baseUrl || 'https://api.aspose.cloud';
    this.timeout = config.timeout || 30000;          // ms
    this.retries = config.retries || 0;
    this.headerParameters = config.headerParameters || {};
  }

  addDefaultHeader(key, value) {
    this.headerParameters[key] = value;
  }
}

export default Configuration;
```

## Code Generation

Generation scripts read `aspose.cells.cloud.specification.json` and emit `lib/model/*.js` and
`lib/request/*.js`:

```bash
node generate-models.js     # emit lib/model/*.js
node generate-requests.js   # emit lib/request/*.js
node generate-tests.js      # emit integration-tests/*.test.js
npm run lint                # verify with ESLint
npm test                    # verify with Jest
```

## Adding a New API Operation

1. Add the operation to the OpenAPI spec (or regenerate from the source of truth).
2. Run `node generate-requests.js` to emit `<operation-name>-request.js` extending `RequestOption`.
3. Implement the six methods: `getMethod`, `getPath` (with `encodeURIComponent` on path params),
   `getQueryParameters` (present-only), `getHeaderParameters` (`Content-Type`), `getJsonBody`
   (`null` if none), `getMultipartForm` (`null` if none).
4. Re-export from `lib/index.js`.
5. Add a Jest test; run `npm test`.

## Versioning

`lib/version.js` mirrors the Go SDK's `version.go`:

```js
export const API_VERSION = '4.0';   // REST API path version (`/v4.0/...`)
export const SDK_VERSION = '26.6.4'; // SDK release version
```

`API_VERSION` is the REST API major version embedded in request paths; `SDK_VERSION`
is this package's release number (kept in sync with `package.json`).
