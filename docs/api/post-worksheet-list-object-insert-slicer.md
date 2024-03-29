# **postWorksheetListObjectInsertSlicer API**

Insert slicer for list object. 

```bash

POST http://api.aspose.cloud/v3.0//cells/{name}/worksheets/{sheetName}/listobjects/{listObjectIndex}/InsertSlicer

```

## The request parameters of **postWorksheetListObjectInsertSlicer** API are: 

| Parameter Name | Type | Path/Query String/HTTPBody | Description | 
| :- | :- | :- |:- | 
|name|String|Path|The file name.|
|sheetName|String|Path|The worksheet name.|
|listObjectIndex|Integer|Path|List object index.|
|columnIndex|Integer|Query|The index of ListColumn in ListObject.ListColumns |
|destCellName|String|Query|The cell in the upper-left corner of the Slicer range. |
|folder|String|Query|The folder where the file is situated.|
|storageName|String|Query|The storage name where the file is situated.|


The [OpenAPI Specification](https://reference.aspose.cloud/cells/#/ListObjectsController/PostWorksheetListObjectInsertSlicer) defines a publicly accessible programming interface and lets you carry out REST interactions directly from a web browser.
