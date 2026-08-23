# Aspose.Cells Cloud SDK for Node.js — Testing Guide

## Framework

Tests use [Jest](https://jestjs.io/) (`describe`/`test`/`expect`). Mocha + Chai is an accepted
equivalent. Integration tests are async and read credentials from environment variables — never
hardcoded.

## Test File Layout

```
test/                          # unit tests (models, request option methods)
integration-tests/             # integration tests (JSON-driven, live API)
testdata/                      # sample XLSX/CSV files
```

## Unit Test Pattern (model)

```js
import Font from '../lib/model/font.js';

describe('Font', () => {
  test('omits absent fields from toJSON', () => {
    const font = new Font({ Name: 'Arial', Size: 11 });
    expect(font.name).toBe('Arial');
    expect(font.size).toBe(11);
    expect(font.toJSON()).toEqual({ Name: 'Arial', Size: 11 }); // Color/IsBold omitted
  });
});
```

## Integration Test Pattern (client)

```js
import { CellsCloudClient } from 'aspose-cells-cloud';
import PostClearContentsRequest from 'aspose-cells-cloud/lib/request/post-clear-contents-request.js';

let client;

beforeAll(() => {
  client = new CellsCloudClient(
    process.env.CellsCloudClientId,
    process.env.CellsCloudClientSecret,
    process.env.CellsCloudApiBaseUrl,
  );
});

describe('CellsController', () => {
  test('PostClearContents', async () => {
    const request = new PostClearContentsRequest('Book1.xlsx', 'Sheet1');
    request.range = 'A1:C10';
    request.folder = 'TestData/In';

    const response = await client.do(request);   // rejects (fails test) on error

    expect(response.statusCode).toBe(200);
  });
});
```

## Async & Error Handling

- Test methods are `async`; `await client.do(request)`.
- On API failure, `client.do` rejects with `SDKError`; an unhandled rejection fails the test. Assert
  failure scenarios with `await expect(...).rejects.toThrow(SDKError)`.

```js
test('throws SDKError on bad input', async () => {
  const request = new PostClearContentsRequest('', ''); // constructor throws
  expect(() => new PostClearContentsRequest('', '')).toThrow('name is required');
});
```

## Assertion Mapping

| Go assertion | Jest |
|--------------|------|
| `if got := r.Code; got != 200` | `expect(response.statusCode).toBe(200)` |
| `if err != nil { t.Fatal }` | `await expect(client.do(req)).rejects.toThrow(SDKError)` |
| `t.Errorf("...")` | `expect(actual).toEqual(expected)` |
| `-run ^Xxx$` | `npm test -- -t "Xxx"` |

## Credentials & Configuration

- Read `CellsCloudClientId`, `CellsCloudClientSecret`, `CellsCloudApiBaseUrl` from
  `process.env` in `beforeAll`.
- Never embed secrets in test source. Provide a `.env` file (loaded by `dotenv`) or shell env vars.
- Use `jest.setup.js` / `beforeAll` for shared, expensive setup (e.g. OAuth warm-up).

## File Uploads

When a case uploads a file before the API call, invoke `client.uploadFile` first:

```js
await client.uploadFile('/TestData/In/Book1.xlsx', 'testdata/Book1.xlsx');
```

## Running Tests

```bash
npm test                                  # full suite
npm test -- -t "PostClearContents"        # single test
npm test -- integration-tests             # integration only
npm test -- --runInBand                   # serial (avoid rate limits)
```
