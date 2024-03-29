# **postMoveWorksheet API**

Move worksheet in the workbook. 

```bash

POST http://api.aspose.cloud/v3.0//cells/{name}/worksheets/{sheetName}/position

```

## The request parameters of **postMoveWorksheet** API are: 

| Parameter Name | Type | Path/Query String/HTTPBody | Description | 
| :- | :- | :- |:- | 
|name|String|Path|The file name.|
|sheetName|String|Path|The worksheet name.|
|moving|Class|Body|WorksheetMovingRequest with moving parameters.|
|folder|String|Query|The folder where the file is situated.|
|storageName|String|Query|The storage name where the file is situated.|


The [OpenAPI Specification](https://reference.aspose.cloud/cells/#/WorksheetsController/PostMoveWorksheet) defines a publicly accessible programming interface and lets you carry out REST interactions directly from a web browser.
