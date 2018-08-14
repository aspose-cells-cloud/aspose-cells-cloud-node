# Aspose.Cells Cloud SDK for Node.js [![npm](https://badge.fury.io/js/asposecellscloud.svg)](https://www.npmjs.com/package/asposecellscloud)
This repository contains Aspose.Cells Cloud SDK for Node.js source code. This SDK allows you to work with Aspose.Cells Cloud REST APIs in your nodejs applications quickly and easily, with zero initial cost.

# Key Features
* Convert spreadsheets to different formats
* Create spreadsheets from templates, XML or smart markers
* Split spreadsheets to single worksheet spreadsheets
* Manipulate rows, columns, cells & data
* Set complex formulae
* Extract charts, pictures, shapes & other objects as images
* Export worksheets to images

See [API Reference](https://apireference.aspose.cloud/cells/) for full API specification.

## How to use the SDK?
The complete source code is available in this repository folder. You can either directly use it in your project via source code or get [nmpjs distribution](https://www.npmjs.com/package/asposecellscloud) (recommended). For more details, please visit our [documentation website](https://docs.aspose.cloud/display/cellscloud/Available+SDKs).

### Prerequisites

To use Aspose Cells for Cloud SDK you need to register an account with [Aspose Cloud](https://www.aspose.cloud/) and lookup/create App Key and SID at [Cloud Dashboard](https://dashboard.aspose.cloud/#/apps). There is free quota available. For more details, see [Aspose Cloud Pricing](https://purchase.aspose.cloud/pricing).

Required version of Node.js is 4.8.7 or higher.

### Installation

#### Install Aspose.Cells-Cloud via NPM

From the command line:

	npm install asposecellscloud --save
	
### Sample usage

The examples below show how your application have to initiate and convert "xlsx file to "pdf" using asposecellscloud library:
``` js
const {CellsSaveAsApi, CellsSaveAs_PostDocumentSaveAsRequest, PdfSaveOptions} = require("asposecellscloud");

const AppSid = "your clientId";
const AppKey = "your clientSecret";

const cellsSaveAsApi = new CellsSaveAsApi(AppSid, AppKey);
const filename = "Book1.xlsx";
var req = new CellsSaveAs_PostDocumentSaveAsRequest();
req.name = filename;
var saveOptions = new PdfSaveOptions();
saveOptions.onePagePerSheet = true;
saveOptions.saveFormat = "pdf"
req.saveOptions = saveOptions;
req.newfilename = "newbook.pdf";
req.isAutoFitRows = true;
req.isAutoFitColumns = true;
req.folder = "Temp";
        
cellsSaveAsApi.cellsSaveAsPostDocumentSaveAs(req)
    .then((result) => {
    console.log(result.body.code);
    });

```

## Contact Us
Your feedback is very important to us. Please feel free to contact us using our [Support Forums](https://forum.aspose.cloud/c/cells).
