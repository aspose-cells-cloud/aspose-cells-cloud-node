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

/**
 * Describe the AboveAverage conditional formatting rule. This conditional formatting     rule highlights cells that are above or below the average for all values     in the range.
 */
export class AboveAverage {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "isAboveAverage",
            baseName: "IsAboveAverage",
            type: "boolean",
        },        
        {
            name: "isEqualAverage",
            baseName: "IsEqualAverage",
            type: "boolean",
        },        
        {
            name: "stdDev",
            baseName: "StdDev",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return AboveAverage.attributeTypeMap;
    }

    /**
     * Get or set the flag indicating whether the rule is an \"above average\" rule.    'true' indicates 'above average'.  Default value is true.             
     */
    public isAboveAverage: boolean;
    
    /**
     * Get or set the flag indicating whether the 'aboveAverage' and 'belowAverage'    criteria is inclusive of the average itself, or exclusive of that value.    'true' indicates to include the average value in the criteria.  Default value    is false.             
     */
    public isEqualAverage: boolean;
    
    /**
     * Get or set the number of standard deviations to include above or below the   average in the conditional formatting rule. The input value must between   0 and 3 (include 0 and 3). Setting this value to 0 means stdDev is not set.    The default value is 0.             
     */
    public stdDev: number;
    
    public constructor(init?: Partial<AboveAverage>) {
        
        Object.assign(this, init);
    }        
}

export class AccessTokenResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "expires",
            baseName: ".expires",
            type: "string",
        },        
        {
            name: "accessToken",
            baseName: "access_token",
            type: "string",
        },        
        {
            name: "issued",
            baseName: ".issued",
            type: "string",
        },        
        {
            name: "clientRefreshTokenLifeTimeInMinutes",
            baseName: "clientRefreshTokenLifeTimeInMinutes",
            type: "string",
        },        
        {
            name: "expiresIn",
            baseName: "expires_in",
            type: "number",
        },        
        {
            name: "tokenType",
            baseName: "token_type",
            type: "string",
        },        
        {
            name: "clientId",
            baseName: "client_id",
            type: "string",
        },        
        {
            name: "refreshToken",
            baseName: "refresh_token",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return AccessTokenResponse.attributeTypeMap;
    }

    public expires: string;
    
    public accessToken: string;
    
    public issued: string;
    
    public clientRefreshTokenLifeTimeInMinutes: string;
    
    public expiresIn: number;
    
    public tokenType: string;
    
    public clientId: string;
    
    public refreshToken: string;
    
    public constructor(init?: Partial<AccessTokenResponse>) {
        
        Object.assign(this, init);
    }        
}

export class Area {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "foregroundColor",
            baseName: "ForegroundColor",
            type: "Color",
        },        
        {
            name: "backgroundColor",
            baseName: "BackgroundColor",
            type: "Color",
        },        
        {
            name: "format",
            baseName: "Format",
            type: "string",
        },        
        {
            name: "fillFormat",
            baseName: "FillFormat",
            type: "FillFormat",
        },        
        {
            name: "invertIfNegative",
            baseName: "InvertIfNegative",
            type: "boolean",
        },        
        {
            name: "transparency",
            baseName: "Transparency",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Area.attributeTypeMap;
    }

    public foregroundColor: Color;
    
    public backgroundColor: Color;
    
    public format: string;
    
    public fillFormat: FillFormat;
    
    public invertIfNegative: boolean;
    
    public transparency: number;
    
    public constructor(init?: Partial<Area>) {
        
        Object.assign(this, init);
    }        
}

export class AutoFitterOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "ignoreHidden",
            baseName: "IgnoreHidden",
            type: "boolean",
        },        
        {
            name: "onlyAuto",
            baseName: "OnlyAuto",
            type: "boolean",
        },        
        {
            name: "autoFitMergedCells",
            baseName: "AutoFitMergedCells",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return AutoFitterOptions.attributeTypeMap;
    }

    public ignoreHidden: boolean;
    
    public onlyAuto: boolean;
    
    public autoFitMergedCells: boolean;
    
    public constructor(init?: Partial<AutoFitterOptions>) {
        
        Object.assign(this, init);
    }        
}

export class Border {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "color",
            baseName: "Color",
            type: "Color",
        },        
        {
            name: "borderType",
            baseName: "BorderType",
            type: "string",
        },        
        {
            name: "lineStyle",
            baseName: "LineStyle",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Border.attributeTypeMap;
    }

    public color: Color;
    
    public borderType: string;
    
    public lineStyle: string;
    
    public constructor(init?: Partial<Border>) {
        
        Object.assign(this, init);
    }        
}

export class CalculationOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "precisionStrategy",
            baseName: "PrecisionStrategy",
            type: "string",
        },        
        {
            name: "ignoreError",
            baseName: "IgnoreError",
            type: "boolean",
        },        
        {
            name: "recursive",
            baseName: "Recursive",
            type: "boolean",
        },        
        {
            name: "calcStackSize",
            baseName: "CalcStackSize",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return CalculationOptions.attributeTypeMap;
    }

    public precisionStrategy: string;
    
    public ignoreError: boolean;
    
    public recursive: boolean;
    
    public calcStackSize: number;
    
    public constructor(init?: Partial<CalculationOptions>) {
        
        Object.assign(this, init);
    }        
}

export class CellArea {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "startRow",
            baseName: "StartRow",
            type: "number",
        },        
        {
            name: "startColumn",
            baseName: "StartColumn",
            type: "number",
        },        
        {
            name: "endColumn",
            baseName: "EndColumn",
            type: "number",
        },        
        {
            name: "endRow",
            baseName: "EndRow",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return CellArea.attributeTypeMap;
    }

    public startRow: number;
    
    public startColumn: number;
    
    public endColumn: number;
    
    public endRow: number;
    
    public constructor(init?: Partial<CellArea>) {
        
        Object.assign(this, init);
    }        
}

export class CellValue {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "rowIndex",
            baseName: "rowIndex",
            type: "number",
        },        
        {
            name: "columnIndex",
            baseName: "columnIndex",
            type: "number",
        },        
        {
            name: "style",
            baseName: "style",
            type: "Style",
        },        
        {
            name: "type",
            baseName: "type",
            type: "string",
        },        
        {
            name: "value",
            baseName: "value",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return CellValue.attributeTypeMap;
    }

    public rowIndex: number;
    
    public columnIndex: number;
    
    public style: Style;
    
    public type: string;
    
    public value: string;
    
    public constructor(init?: Partial<CellValue>) {
        
        Object.assign(this, init);
    }        
}

export class CellsColor {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "color",
            baseName: "Color",
            type: "Color",
        },        
        {
            name: "type",
            baseName: "Type",
            type: "string",
        },        
        {
            name: "themeColor",
            baseName: "ThemeColor",
            type: "ThemeColor",
        },        
        {
            name: "isShapeColor",
            baseName: "IsShapeColor",
            type: "boolean",
        },        
        {
            name: "colorIndex",
            baseName: "ColorIndex",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return CellsColor.attributeTypeMap;
    }

    public color: Color;
    
    public type: string;
    
    public themeColor: ThemeColor;
    
    public isShapeColor: boolean;
    
    public colorIndex: number;
    
    public constructor(init?: Partial<CellsColor>) {
        
        Object.assign(this, init);
    }        
}

export class Color {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "a",
            baseName: "A",
            type: "number",
        },        
        {
            name: "b",
            baseName: "B",
            type: "number",
        },        
        {
            name: "r",
            baseName: "R",
            type: "number",
        },        
        {
            name: "g",
            baseName: "G",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Color.attributeTypeMap;
    }

    public a: number;
    
    public b: number;
    
    public r: number;
    
    public g: number;
    
    public constructor(init?: Partial<Color>) {
        
        Object.assign(this, init);
    }        
}

export class ColorFilter {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "color",
            baseName: "Color",
            type: "CellsColor",
        },        
        {
            name: "pattern",
            baseName: "Pattern",
            type: "string",
        },        
        {
            name: "backgroundColor",
            baseName: "BackgroundColor",
            type: "CellsColor",
        },        
        {
            name: "foregroundColorColor",
            baseName: "ForegroundColorColor",
            type: "CellsColor",
        },        
        {
            name: "filterByFillColor",
            baseName: "FilterByFillColor",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ColorFilter.attributeTypeMap;
    }

    public color: CellsColor;
    
    public pattern: string;
    
    public backgroundColor: CellsColor;
    
    public foregroundColorColor: CellsColor;
    
    public filterByFillColor: string;
    
    public constructor(init?: Partial<ColorFilter>) {
        
        Object.assign(this, init);
    }        
}

export class ColorFilterRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "pattern",
            baseName: "Pattern",
            type: "string",
        },        
        {
            name: "foregroundColor",
            baseName: "ForegroundColor",
            type: "CellsColor",
        },        
        {
            name: "backgroundColor",
            baseName: "BackgroundColor",
            type: "CellsColor",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ColorFilterRequest.attributeTypeMap;
    }

    public pattern: string;
    
    public foregroundColor: CellsColor;
    
    public backgroundColor: CellsColor;
    
    public constructor(init?: Partial<ColorFilterRequest>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describe the ColorScale conditional formatting rule. This conditional formatting    rule creates a gradated color scale on the cells.             
 */
export class ColorScale {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "maxCfvo",
            baseName: "MaxCfvo",
            type: "ConditionalFormattingValue",
        },        
        {
            name: "midColor",
            baseName: "MidColor",
            type: "Color",
        },        
        {
            name: "minColor",
            baseName: "MinColor",
            type: "Color",
        },        
        {
            name: "midCfvo",
            baseName: "MidCfvo",
            type: "ConditionalFormattingValue",
        },        
        {
            name: "minCfvo",
            baseName: "MinCfvo",
            type: "ConditionalFormattingValue",
        },        
        {
            name: "maxColor",
            baseName: "MaxColor",
            type: "Color",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ColorScale.attributeTypeMap;
    }

    /**
     * Get or set this ColorScale's max value object.  Cannot set null or CFValueObject     with type FormatConditionValueType.Min to it.
     */
    public maxCfvo: ConditionalFormattingValue;
    
    /**
     * Get or set the mid value object's corresponding color.             
     */
    public midColor: Color;
    
    /**
     * Get or set the min value object's corresponding color.
     */
    public minColor: Color;
    
    /**
     * Get or set this ColorScale's mid value object.  Cannot set CFValueObject    with type FormatConditionValueType.Max or FormatConditionValueType.Min to    it.             
     */
    public midCfvo: ConditionalFormattingValue;
    
    /**
     * Get or set this ColorScale's min value object.  Cannot set null or CFValueObject    with type FormatConditionValueType.Max to it.             
     */
    public minCfvo: ConditionalFormattingValue;
    
    /**
     * Get or set the max value object's corresponding color.
     */
    public maxColor: Color;
    
    public constructor(init?: Partial<ColorScale>) {
        
        Object.assign(this, init);
    }        
}

export class ConditionalFormattingIcon {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "index",
            baseName: "Index",
            type: "number",
        },        
        {
            name: "type",
            baseName: "Type",
            type: "string",
        },        
        {
            name: "imageData",
            baseName: "ImageData",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ConditionalFormattingIcon.attributeTypeMap;
    }

    /**
     * Gets and sets the icon's index in the icon set.             
     */
    public index: number;
    
    /**
     * Gets and sets the icon set type.             
     */
    public type: string;
    
    /**
     * Gets the icon set data.             
     */
    public imageData: string;
    
    public constructor(init?: Partial<ConditionalFormattingIcon>) {
        
        Object.assign(this, init);
    }        
}

export class ConditionalFormattingValue {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "isGTE",
            baseName: "IsGTE",
            type: "boolean",
        },        
        {
            name: "type",
            baseName: "Type",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ConditionalFormattingValue.attributeTypeMap;
    }

    /**
     * Get or set the Greater Than Or Equal flag. Use only for icon sets, determines    whether this threshold value uses the greater than or equal to operator.    'false' indicates 'greater than' is used instead of 'greater than or equal    to'.  Default value is true.             
     */
    public isGTE: boolean;
    
    /**
     * Get or set the type of this conditional formatting value object.  Setting      the type to FormatConditionValueType.Min or FormatConditionValueType.Max      will auto set \"Value\" to null.  
     */
    public type: string;
    
    public constructor(init?: Partial<ConditionalFormattingValue>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents the copy options.
 */
export class CopyOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "referToDestinationSheet",
            baseName: "ReferToDestinationSheet",
            type: "boolean",
        },        
        {
            name: "copyNames",
            baseName: "CopyNames",
            type: "boolean",
        },        
        {
            name: "referToSheetWithSameName",
            baseName: "ReferToSheetWithSameName",
            type: "boolean",
        },        
        {
            name: "columnCharacterWidth",
            baseName: "ColumnCharacterWidth",
            type: "boolean",
        },        
        {
            name: "copyInvalidFormulasAsValues",
            baseName: "CopyInvalidFormulasAsValues",
            type: "boolean",
        },        
        {
            name: "extendToAdjacentRange",
            baseName: "ExtendToAdjacentRange",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return CopyOptions.attributeTypeMap;
    }

    /**
     * When copying the range in the same file and the chart refers to the source sheet,   False means the copied chart's data source will not be changed. True means the   copied chart's data source refers to the destination sheet.             
     */
    public referToDestinationSheet: boolean;
    
    /**
     * Indicates whether copying the names.
     */
    public copyNames: boolean;
    
    public referToSheetWithSameName: boolean;
    
    /**
     * Indicates whether copying column width in unit of characters.
     */
    public columnCharacterWidth: boolean;
    
    /**
     * If the formula is not valid for the dest destination, only copy values.
     */
    public copyInvalidFormulasAsValues: boolean;
    
    /**
     * Indicates whether extend ranges when copying the range to adjacent range.
     */
    public extendToAdjacentRange: boolean;
    
    public constructor(init?: Partial<CopyOptions>) {
        
        Object.assign(this, init);
    }        
}

export class CreatePivotTableRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "pivotFieldColumns",
            baseName: "PivotFieldColumns",
            type: "Array<number>",
        },        
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },        
        {
            name: "useSameSource",
            baseName: "UseSameSource",
            type: "boolean",
        },        
        {
            name: "pivotFieldData",
            baseName: "PivotFieldData",
            type: "Array<number>",
        },        
        {
            name: "pivotFieldRows",
            baseName: "PivotFieldRows",
            type: "Array<number>",
        },        
        {
            name: "destCellName",
            baseName: "DestCellName",
            type: "string",
        },        
        {
            name: "sourceData",
            baseName: "SourceData",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return CreatePivotTableRequest.attributeTypeMap;
    }

    public pivotFieldColumns: Array<number>;
    
    public name: string;
    
    public useSameSource: boolean;
    
    public pivotFieldData: Array<number>;
    
    public pivotFieldRows: Array<number>;
    
    public destCellName: string;
    
    public sourceData: string;
    
    public constructor(init?: Partial<CreatePivotTableRequest>) {
        
        Object.assign(this, init);
    }        
}

export class CustomFilter {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "filterOperatorType",
            baseName: "FilterOperatorType",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return CustomFilter.attributeTypeMap;
    }

    public filterOperatorType: string;
    
    public constructor(init?: Partial<CustomFilter>) {
        
        Object.assign(this, init);
    }        
}

export class CustomParserConfig {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "columnIndex",
            baseName: "ColumnIndex",
            type: "number",
        },        
        {
            name: "customStyle",
            baseName: "CustomStyle",
            type: "string",
        },        
        {
            name: "parseMethod",
            baseName: "ParseMethod",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return CustomParserConfig.attributeTypeMap;
    }

    public columnIndex: number;
    
    public customStyle: string;
    
    public parseMethod: string;
    
    public constructor(init?: Partial<CustomParserConfig>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describe the DataBar conditional formatting rule. This conditional formatting    rule displays a gradated data bar in the range of cells.
 */
export class DataBar {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "direction",
            baseName: "Direction",
            type: "string",
        },        
        {
            name: "maxCfvo",
            baseName: "MaxCfvo",
            type: "ConditionalFormattingValue",
        },        
        {
            name: "color",
            baseName: "Color",
            type: "Color",
        },        
        {
            name: "minLength",
            baseName: "MinLength",
            type: "number",
        },        
        {
            name: "barFillType",
            baseName: "BarFillType",
            type: "string",
        },        
        {
            name: "minCfvo",
            baseName: "MinCfvo",
            type: "ConditionalFormattingValue",
        },        
        {
            name: "axisPosition",
            baseName: "AxisPosition",
            type: "string",
        },        
        {
            name: "negativeBarFormat",
            baseName: "NegativeBarFormat",
            type: "NegativeBarFormat",
        },        
        {
            name: "barBorder",
            baseName: "BarBorder",
            type: "DataBarBorder",
        },        
        {
            name: "axisColor",
            baseName: "AxisColor",
            type: "Color",
        },        
        {
            name: "maxLength",
            baseName: "MaxLength",
            type: "number",
        },        
        {
            name: "showValue",
            baseName: "ShowValue",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DataBar.attributeTypeMap;
    }

    /**
     * Gets or sets the direction the databar is displayed.
     */
    public direction: string;
    
    /**
     * Get or set this DataBar's max value object.  Cannot set null or CFValueObject    with type FormatConditionValueType.Min to it.             
     */
    public maxCfvo: ConditionalFormattingValue;
    
    /**
     * Get or set this DataBar's Color.             
     */
    public color: Color;
    
    /**
     * Represents the min length of data bar .             
     */
    public minLength: number;
    
    /**
     * Gets or sets how a data bar is filled with color.
     */
    public barFillType: string;
    
    /**
     * Get or set this DataBar's min value object.  Cannot set null or CFValueObject   with type FormatConditionValueType.Max to it.             
     */
    public minCfvo: ConditionalFormattingValue;
    
    /**
     * Gets or sets the position of the axis of the data bars specified by a conditional    formatting rule.
     */
    public axisPosition: string;
    
    /**
     * Gets the NegativeBarFormat object associated with a data bar conditional     formatting rule.
     */
    public negativeBarFormat: NegativeBarFormat;
    
    /**
     * Gets an object that specifies the border of a data bar.
     */
    public barBorder: DataBarBorder;
    
    /**
     * Gets the color of the axis for cells with conditional formatting as data bars.
     */
    public axisColor: Color;
    
    /**
     * Represents the max length of data bar .
     */
    public maxLength: number;
    
    /**
     * Get or set the flag indicating whether to show the values of the cells on   which this data bar is applied.  Default value is true.             
     */
    public showValue: boolean;
    
    public constructor(init?: Partial<DataBar>) {
        
        Object.assign(this, init);
    }        
}

export class DataBarBorder {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "color",
            baseName: "Color",
            type: "Color",
        },        
        {
            name: "type",
            baseName: "Type",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DataBarBorder.attributeTypeMap;
    }

    /**
     * Gets or sets the border's color of data bars specified by a conditional formatting rule.
     */
    public color: Color;
    
    /**
     * Gets or sets the border's type of data bars specified by a conditional formatting rule.
     */
    public type: string;
    
    public constructor(init?: Partial<DataBarBorder>) {
        
        Object.assign(this, init);
    }        
}

export class DataSorter {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "caseSensitive",
            baseName: "CaseSensitive",
            type: "boolean",
        },        
        {
            name: "keyList",
            baseName: "KeyList",
            type: "Array<SortKey>",
        },        
        {
            name: "hasHeaders",
            baseName: "HasHeaders",
            type: "boolean",
        },        
        {
            name: "sortLeftToRight",
            baseName: "SortLeftToRight",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DataSorter.attributeTypeMap;
    }

    public caseSensitive: boolean;
    
    public keyList: Array<SortKey>;
    
    public hasHeaders: boolean;
    
    public sortLeftToRight: boolean;
    
    public constructor(init?: Partial<DataSorter>) {
        
        Object.assign(this, init);
    }        
}

export class DynamicFilter {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "dynamicFilterType",
            baseName: "DynamicFilterType",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DynamicFilter.attributeTypeMap;
    }

    public dynamicFilterType: string;
    
    public constructor(init?: Partial<DynamicFilter>) {
        
        Object.assign(this, init);
    }        
}

export class FileSource {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "filePath",
            baseName: "FilePath",
            type: "string",
        },        
        {
            name: "fileSourceType",
            baseName: "FileSourceType",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FileSource.attributeTypeMap;
    }

    public filePath: string;
    
    public fileSourceType: string;
    
    public constructor(init?: Partial<FileSource>) {
        
        Object.assign(this, init);
    }        
}

export class FillFormat {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "textureFill",
            baseName: "TextureFill",
            type: "TextureFill",
        },        
        {
            name: "imageData",
            baseName: "ImageData",
            type: "string",
        },        
        {
            name: "patternFill",
            baseName: "PatternFill",
            type: "PatternFill",
        },        
        {
            name: "solidFill",
            baseName: "SolidFill",
            type: "SolidFill",
        },        
        {
            name: "gradientFill",
            baseName: "GradientFill",
            type: "GradientFill",
        },        
        {
            name: "type",
            baseName: "Type",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FillFormat.attributeTypeMap;
    }

    public textureFill: TextureFill;
    
    public imageData: string;
    
    public patternFill: PatternFill;
    
    public solidFill: SolidFill;
    
    public gradientFill: GradientFill;
    
    public type: string;
    
    public constructor(init?: Partial<FillFormat>) {
        
        Object.assign(this, init);
    }        
}

export class FilterColumn {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "filterType",
            baseName: "FilterType",
            type: "string",
        },        
        {
            name: "multipleFilters",
            baseName: "MultipleFilters",
            type: "MultipleFilters",
        },        
        {
            name: "customFilters",
            baseName: "CustomFilters",
            type: "Array<CustomFilter>",
        },        
        {
            name: "dynamicFilter",
            baseName: "DynamicFilter",
            type: "DynamicFilter",
        },        
        {
            name: "colorFilter",
            baseName: "ColorFilter",
            type: "ColorFilter",
        },        
        {
            name: "fieldIndex",
            baseName: "FieldIndex",
            type: "number",
        },        
        {
            name: "top10Filter",
            baseName: "Top10Filter",
            type: "Top10Filter",
        },        
        {
            name: "iconFilter",
            baseName: "IconFilter",
            type: "IconFilter",
        },        
        {
            name: "visibledropdown",
            baseName: "Visibledropdown",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FilterColumn.attributeTypeMap;
    }

    public filterType: string;
    
    public multipleFilters: MultipleFilters;
    
    public customFilters: Array<CustomFilter>;
    
    public dynamicFilter: DynamicFilter;
    
    public colorFilter: ColorFilter;
    
    public fieldIndex: number;
    
    public top10Filter: Top10Filter;
    
    public iconFilter: IconFilter;
    
    public visibledropdown: string;
    
    public constructor(init?: Partial<FilterColumn>) {
        
        Object.assign(this, init);
    }        
}

export class Font {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "isItalic",
            baseName: "IsItalic",
            type: "boolean",
        },        
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },        
        {
            name: "doubleSize",
            baseName: "DoubleSize",
            type: "number",
        },        
        {
            name: "color",
            baseName: "Color",
            type: "Color",
        },        
        {
            name: "isBold",
            baseName: "IsBold",
            type: "boolean",
        },        
        {
            name: "isSubscript",
            baseName: "IsSubscript",
            type: "boolean",
        },        
        {
            name: "isSuperscript",
            baseName: "IsSuperscript",
            type: "boolean",
        },        
        {
            name: "isStrikeout",
            baseName: "IsStrikeout",
            type: "boolean",
        },        
        {
            name: "underline",
            baseName: "Underline",
            type: "string",
        },        
        {
            name: "size",
            baseName: "Size",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Font.attributeTypeMap;
    }

    public isItalic: boolean;
    
    public name: string;
    
    public doubleSize: number;
    
    public color: Color;
    
    public isBold: boolean;
    
    public isSubscript: boolean;
    
    public isSuperscript: boolean;
    
    public isStrikeout: boolean;
    
    public underline: string;
    
    public size: number;
    
    public constructor(init?: Partial<Font>) {
        
        Object.assign(this, init);
    }        
}

export class FontSetting {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "textOptions",
            baseName: "TextOptions",
            type: "TextOptions",
        },        
        {
            name: "length",
            baseName: "Length",
            type: "number",
        },        
        {
            name: "font",
            baseName: "Font",
            type: "Font",
        },        
        {
            name: "type",
            baseName: "Type",
            type: "string",
        },        
        {
            name: "startIndex",
            baseName: "StartIndex",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FontSetting.attributeTypeMap;
    }

    public textOptions: TextOptions;
    
    public length: number;
    
    public font: Font;
    
    public type: string;
    
    public startIndex: number;
    
    public constructor(init?: Partial<FontSetting>) {
        
        Object.assign(this, init);
    }        
}

export class GradientFill {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fillType",
            baseName: "FillType",
            type: "string",
        },        
        {
            name: "angle",
            baseName: "Angle",
            type: "number",
        },        
        {
            name: "gradientStops",
            baseName: "GradientStops",
            type: "Array<GradientFillStop>",
        },        
        {
            name: "directionType",
            baseName: "DirectionType",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return GradientFill.attributeTypeMap;
    }

    public fillType: string;
    
    public angle: number;
    
    public gradientStops: Array<GradientFillStop>;
    
    public directionType: string;
    
    public constructor(init?: Partial<GradientFill>) {
        
        Object.assign(this, init);
    }        
}

export class GradientFillStop {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "color",
            baseName: "Color",
            type: "Color",
        },        
        {
            name: "position",
            baseName: "Position",
            type: "number",
        },        
        {
            name: "transparency",
            baseName: "Transparency",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return GradientFillStop.attributeTypeMap;
    }

    public color: Color;
    
    public position: number;
    
    public transparency: number;
    
    public constructor(init?: Partial<GradientFillStop>) {
        
        Object.assign(this, init);
    }        
}

export class HorizontalPageBreak {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "startColumn",
            baseName: "StartColumn",
            type: "number",
        },        
        {
            name: "endColumn",
            baseName: "EndColumn",
            type: "number",
        },        
        {
            name: "row",
            baseName: "Row",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return HorizontalPageBreak.attributeTypeMap;
    }

    public startColumn: number;
    
    public endColumn: number;
    
    public row: number;
    
    public constructor(init?: Partial<HorizontalPageBreak>) {
        
        Object.assign(this, init);
    }        
}

export class IconFilter {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "iconId",
            baseName: "IconId",
            type: "number",
        },        
        {
            name: "iconSetType",
            baseName: "IconSetType",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return IconFilter.attributeTypeMap;
    }

    public iconId: number;
    
    public iconSetType: string;
    
    public constructor(init?: Partial<IconFilter>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describe the IconSet conditional formatting rule. This conditional formatting     rule applies icons to cells according to their values.
 */
export class IconSet {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "reverse",
            baseName: "Reverse",
            type: "boolean",
        },        
        {
            name: "cfIcons",
            baseName: "CfIcons",
            type: "Array<ConditionalFormattingIcon>",
        },        
        {
            name: "cfvos",
            baseName: "Cfvos",
            type: "Array<ConditionalFormattingValue>",
        },        
        {
            name: "iconSetType",
            baseName: "IconSetType",
            type: "string",
        },        
        {
            name: "isCustom",
            baseName: "IsCustom",
            type: "boolean",
        },        
        {
            name: "showValue",
            baseName: "ShowValue",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return IconSet.attributeTypeMap;
    }

    /**
     * Get or set the flag indicating whether to reverses the default order of the   icons in this icon set.  Default value is false.             
     */
    public reverse: boolean;
    
    /**
     * Get theAspose.Cells.ConditionalFormattingIcon from the collection
     */
    public cfIcons: Array<ConditionalFormattingIcon>;
    
    /**
     * Get the CFValueObjects instance.
     */
    public cfvos: Array<ConditionalFormattingValue>;
    
    /**
     * Get or Set the icon set type to display.  Setting the type will auto check    if the current Cfvos's count is accord with the new type. If not accord,    old Cfvos will be cleaned and default Cfvos will be added.             
     */
    public iconSetType: string;
    
    /**
     * Indicates whether the icon set is custom.  Default value is false.
     */
    public isCustom: boolean;
    
    /**
     * Get or set the flag indicating whether to show the values of the cells on    which this icon set is applied.  Default value is true.             
     */
    public showValue: boolean;
    
    public constructor(init?: Partial<IconSet>) {
        
        Object.assign(this, init);
    }        
}

export class ImportOption {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "source",
            baseName: "Source",
            type: "FileSource",
        },        
        {
            name: "importDataType",
            baseName: "ImportDataType",
            type: "string",
        },        
        {
            name: "destinationWorksheet",
            baseName: "DestinationWorksheet",
            type: "string",
        },        
        {
            name: "isInsert",
            baseName: "IsInsert",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ImportOption.attributeTypeMap;
    }

    public source: FileSource;
    
    public importDataType: string;
    
    public destinationWorksheet: string;
    
    public isInsert: boolean;
    
    public constructor(init?: Partial<ImportOption>) {
        
        Object.assign(this, init);
    }        
}

export class Line {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "style",
            baseName: "Style",
            type: "string",
        },        
        {
            name: "isAuto",
            baseName: "IsAuto",
            type: "boolean",
        },        
        {
            name: "beginArrowLength",
            baseName: "BeginArrowLength",
            type: "string",
        },        
        {
            name: "weight",
            baseName: "Weight",
            type: "string",
        },        
        {
            name: "gradientFill",
            baseName: "GradientFill",
            type: "GradientFill",
        },        
        {
            name: "color",
            baseName: "Color",
            type: "Color",
        },        
        {
            name: "compoundType",
            baseName: "CompoundType",
            type: "string",
        },        
        {
            name: "weightPt",
            baseName: "WeightPt",
            type: "number",
        },        
        {
            name: "isVisible",
            baseName: "IsVisible",
            type: "boolean",
        },        
        {
            name: "joinType",
            baseName: "JoinType",
            type: "string",
        },        
        {
            name: "endArrowLength",
            baseName: "EndArrowLength",
            type: "string",
        },        
        {
            name: "isAutomaticColor",
            baseName: "IsAutomaticColor",
            type: "boolean",
        },        
        {
            name: "dashType",
            baseName: "DashType",
            type: "string",
        },        
        {
            name: "beginType",
            baseName: "BeginType",
            type: "string",
        },        
        {
            name: "capType",
            baseName: "CapType",
            type: "string",
        },        
        {
            name: "endType",
            baseName: "EndType",
            type: "string",
        },        
        {
            name: "beginArrowWidth",
            baseName: "BeginArrowWidth",
            type: "string",
        },        
        {
            name: "endArrowWidth",
            baseName: "EndArrowWidth",
            type: "string",
        },        
        {
            name: "transparency",
            baseName: "Transparency",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Line.attributeTypeMap;
    }

    public style: string;
    
    public isAuto: boolean;
    
    public beginArrowLength: string;
    
    public weight: string;
    
    public gradientFill: GradientFill;
    
    public color: Color;
    
    public compoundType: string;
    
    public weightPt: number;
    
    public isVisible: boolean;
    
    public joinType: string;
    
    public endArrowLength: string;
    
    public isAutomaticColor: boolean;
    
    public dashType: string;
    
    public beginType: string;
    
    public capType: string;
    
    public endType: string;
    
    public beginArrowWidth: string;
    
    public endArrowWidth: string;
    
    public transparency: number;
    
    public constructor(init?: Partial<Line>) {
        
        Object.assign(this, init);
    }        
}

export class Link {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "href",
            baseName: "Href",
            type: "string",
        },        
        {
            name: "type",
            baseName: "Type",
            type: "string",
        },        
        {
            name: "rel",
            baseName: "Rel",
            type: "string",
        },        
        {
            name: "title",
            baseName: "Title",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Link.attributeTypeMap;
    }

    public href: string;
    
    public type: string;
    
    public rel: string;
    
    public title: string;
    
    public constructor(init?: Partial<Link>) {
        
        Object.assign(this, init);
    }        
}

export class LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return LinkElement.attributeTypeMap;
    }

    public link: Link;
    
    public constructor(init?: Partial<LinkElement>) {
        
        Object.assign(this, init);
    }        
}

export class ListColumn {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "totalsCalculation",
            baseName: "TotalsCalculation",
            type: "string",
        },        
        {
            name: "name",
            baseName: "Name",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ListColumn.attributeTypeMap;
    }

    /**
     * Gets and sets the type of calculation in the Totals row of the list column.
     */
    public totalsCalculation: string;
    
    /**
     * Gets and sets the name of the column.
     */
    public name: string;
    
    public constructor(init?: Partial<ListColumn>) {
        
        Object.assign(this, init);
    }        
}

export class MultipleFilter {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MultipleFilter.attributeTypeMap;
    }

    public constructor(init?: Partial<MultipleFilter>) {
        
        Object.assign(this, init);
    }        
}

export class MultipleFilters {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "multipleFilterList",
            baseName: "MultipleFilterList",
            type: "Array<MultipleFilter>",
        },        
        {
            name: "matchBlank",
            baseName: "MatchBlank",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MultipleFilters.attributeTypeMap;
    }

    public multipleFilterList: Array<MultipleFilter>;
    
    public matchBlank: boolean;
    
    public constructor(init?: Partial<MultipleFilters>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents the color settings of the data bars for negative values that are    defined by a data bar conditional formating rule.             
 */
export class NegativeBarFormat {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "borderColor",
            baseName: "BorderColor",
            type: "Color",
        },        
        {
            name: "color",
            baseName: "Color",
            type: "Color",
        },        
        {
            name: "borderColorType",
            baseName: "BorderColorType",
            type: "string",
        },        
        {
            name: "colorType",
            baseName: "ColorType",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return NegativeBarFormat.attributeTypeMap;
    }

    /**
     * Gets or sets a FormatColor object that you can use to specify the border    color for negative data bars.             
     */
    public borderColor: Color;
    
    /**
     * Gets or sets a FormatColor object that you can use to specify the fill color    for negative data bars.             
     */
    public color: Color;
    
    /**
     * Gets whether to use the same border color as positive data bars.             
     */
    public borderColorType: string;
    
    /**
     * Gets or sets whether to use the same fill color as positive data bars.
     */
    public colorType: string;
    
    public constructor(init?: Partial<NegativeBarFormat>) {
        
        Object.assign(this, init);
    }        
}

export class OperateObject {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "operateObjectType",
            baseName: "OperateObjectType",
            type: "string",
        },        
        {
            name: "position",
            baseName: "Position",
            type: "OperateObjectPosition",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return OperateObject.attributeTypeMap;
    }

    public operateObjectType: string;
    
    public position: OperateObjectPosition;
    
    public constructor(init?: Partial<OperateObject>) {
        
        Object.assign(this, init);
    }        
}

export class OperateObjectPosition {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "chartIndex",
            baseName: "ChartIndex",
            type: "number",
        },        
        {
            name: "listObjectIndex",
            baseName: "ListObjectIndex",
            type: "number",
        },        
        {
            name: "sheetName",
            baseName: "SheetName",
            type: "string",
        },        
        {
            name: "shapeIndex",
            baseName: "ShapeIndex",
            type: "number",
        },        
        {
            name: "cellName",
            baseName: "CellName",
            type: "string",
        },        
        {
            name: "workbook",
            baseName: "Workbook",
            type: "FileSource",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return OperateObjectPosition.attributeTypeMap;
    }

    public chartIndex: number;
    
    public listObjectIndex: number;
    
    public sheetName: string;
    
    public shapeIndex: number;
    
    public cellName: string;
    
    public workbook: FileSource;
    
    public constructor(init?: Partial<OperateObjectPosition>) {
        
        Object.assign(this, init);
    }        
}

export class OperateParameter {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "operateType",
            baseName: "OperateType",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return OperateParameter.attributeTypeMap;
    }

    public operateType: string;
    
    public constructor(init?: Partial<OperateParameter>) {
        
        Object.assign(this, init);
    }        
}

export class PageSection {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "picture",
            baseName: "Picture",
            type: "string",
        },        
        {
            name: "section",
            baseName: "Section",
            type: "number",
        },        
        {
            name: "fisrtPageContext",
            baseName: "FisrtPageContext",
            type: "string",
        },        
        {
            name: "context",
            baseName: "Context",
            type: "string",
        },        
        {
            name: "evenPageContext",
            baseName: "EvenPageContext",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PageSection.attributeTypeMap;
    }

    public picture: string;
    
    /**
     * 0,1,2  left , middle ,right
     */
    public section: number;
    
    /**
     * fisrt page context script
     */
    public fisrtPageContext: string;
    
    /**
     * page context script             
     */
    public context: string;
    
    /**
     * Even page context script
     */
    public evenPageContext: string;
    
    public constructor(init?: Partial<PageSection>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Used for password data transfer.
 */
export class PasswordRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "password",
            baseName: "Password",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PasswordRequest.attributeTypeMap;
    }

    public password: string;
    
    public constructor(init?: Partial<PasswordRequest>) {
        
        Object.assign(this, init);
    }        
}

export class PasteOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "pasteType",
            baseName: "PasteType",
            type: "string",
        },        
        {
            name: "skipBlanks",
            baseName: "SkipBlanks",
            type: "boolean",
        },        
        {
            name: "onlyVisibleCells",
            baseName: "OnlyVisibleCells",
            type: "boolean",
        },        
        {
            name: "transpose",
            baseName: "Transpose",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PasteOptions.attributeTypeMap;
    }

    public pasteType: string;
    
    public skipBlanks: boolean;
    
    public onlyVisibleCells: boolean;
    
    public transpose: boolean;
    
    public constructor(init?: Partial<PasteOptions>) {
        
        Object.assign(this, init);
    }        
}

export class PatternFill {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "foregroundColor",
            baseName: "ForegroundColor",
            type: "Color",
        },        
        {
            name: "pattern",
            baseName: "Pattern",
            type: "string",
        },        
        {
            name: "backgroundColor",
            baseName: "BackgroundColor",
            type: "Color",
        },        
        {
            name: "backTransparency",
            baseName: "BackTransparency",
            type: "number",
        },        
        {
            name: "backgroundCellsColor",
            baseName: "BackgroundCellsColor",
            type: "CellsColor",
        },        
        {
            name: "foreTransparency",
            baseName: "ForeTransparency",
            type: "number",
        },        
        {
            name: "foregroundCellsColor",
            baseName: "ForegroundCellsColor",
            type: "CellsColor",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PatternFill.attributeTypeMap;
    }

    public foregroundColor: Color;
    
    public pattern: string;
    
    public backgroundColor: Color;
    
    public backTransparency: number;
    
    public backgroundCellsColor: CellsColor;
    
    public foreTransparency: number;
    
    public foregroundCellsColor: CellsColor;
    
    public constructor(init?: Partial<PatternFill>) {
        
        Object.assign(this, init);
    }        
}

export class PdfSecurityOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "annotationsPermission",
            baseName: "AnnotationsPermission",
            type: "boolean",
        },        
        {
            name: "assembleDocumentPermission",
            baseName: "AssembleDocumentPermission",
            type: "boolean",
        },        
        {
            name: "extractContentPermission",
            baseName: "ExtractContentPermission",
            type: "boolean",
        },        
        {
            name: "extractContentPermissionObsolete",
            baseName: "ExtractContentPermissionObsolete",
            type: "boolean",
        },        
        {
            name: "fillFormsPermission",
            baseName: "FillFormsPermission",
            type: "boolean",
        },        
        {
            name: "fullQualityPrintPermission",
            baseName: "FullQualityPrintPermission",
            type: "boolean",
        },        
        {
            name: "modifyDocumentPermission",
            baseName: "ModifyDocumentPermission",
            type: "boolean",
        },        
        {
            name: "ownerPassword",
            baseName: "OwnerPassword",
            type: "string",
        },        
        {
            name: "printPermission",
            baseName: "PrintPermission",
            type: "boolean",
        },        
        {
            name: "userPassword",
            baseName: "UserPassword",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PdfSecurityOptions.attributeTypeMap;
    }

    public annotationsPermission: boolean;
    
    public assembleDocumentPermission: boolean;
    
    /**
     * Make the workbook empty after saving the file.
     */
    public extractContentPermission: boolean;
    
    /**
     * The cached file folder is used to store some large data.
     */
    public extractContentPermissionObsolete: boolean;
    
    /**
     * Indicates whether validate merged areas before saving the file. The default value is false.             
     */
    public fillFormsPermission: boolean;
    
    public fullQualityPrintPermission: boolean;
    
    /**
     * If true and the directory does not exist, the directory will be automatically created before saving the file.             
     */
    public modifyDocumentPermission: boolean;
    
    public ownerPassword: string;
    
    public printPermission: boolean;
    
    public userPassword: string;
    
    public constructor(init?: Partial<PdfSecurityOptions>) {
        
        Object.assign(this, init);
    }        
}

export class PicFormatOption {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "right",
            baseName: "Right",
            type: "number",
        },        
        {
            name: "bottom",
            baseName: "Bottom",
            type: "number",
        },        
        {
            name: "top",
            baseName: "Top",
            type: "number",
        },        
        {
            name: "scale",
            baseName: "Scale",
            type: "number",
        },        
        {
            name: "type",
            baseName: "Type",
            type: "string",
        },        
        {
            name: "left",
            baseName: "Left",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PicFormatOption.attributeTypeMap;
    }

    public right: number;
    
    public bottom: number;
    
    public top: number;
    
    public scale: number;
    
    public type: string;
    
    public left: number;
    
    public constructor(init?: Partial<PicFormatOption>) {
        
        Object.assign(this, init);
    }        
}

export class PivotField {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "pivotItems",
            baseName: "PivotItems",
            type: "Array<PivotItem>",
        },        
        {
            name: "displayName",
            baseName: "DisplayName",
            type: "string",
        },        
        {
            name: "numberFormat",
            baseName: "NumberFormat",
            type: "string",
        },        
        {
            name: "dragToColumn",
            baseName: "DragToColumn",
            type: "boolean",
        },        
        {
            name: "isAutoShow",
            baseName: "IsAutoShow",
            type: "boolean",
        },        
        {
            name: "isRepeatItemLabels",
            baseName: "IsRepeatItemLabels",
            type: "boolean",
        },        
        {
            name: "dragToRow",
            baseName: "DragToRow",
            type: "boolean",
        },        
        {
            name: "isAutoSort",
            baseName: "IsAutoSort",
            type: "boolean",
        },        
        {
            name: "insertBlankRow",
            baseName: "InsertBlankRow",
            type: "boolean",
        },        
        {
            name: "showSubtotalAtTop",
            baseName: "ShowSubtotalAtTop",
            type: "boolean",
        },        
        {
            name: "showCompact",
            baseName: "ShowCompact",
            type: "boolean",
        },        
        {
            name: "function",
            baseName: "Function",
            type: "string",
        },        
        {
            name: "isMultipleItemSelectionAllowed",
            baseName: "IsMultipleItemSelectionAllowed",
            type: "boolean",
        },        
        {
            name: "dataDisplayFormat",
            baseName: "DataDisplayFormat",
            type: "string",
        },        
        {
            name: "baseItemPosition",
            baseName: "BaseItemPosition",
            type: "string",
        },        
        {
            name: "isInsertPageBreaksBetweenItems",
            baseName: "IsInsertPageBreaksBetweenItems",
            type: "boolean",
        },        
        {
            name: "showAllItems",
            baseName: "ShowAllItems",
            type: "boolean",
        },        
        {
            name: "baseItem",
            baseName: "BaseItem",
            type: "number",
        },        
        {
            name: "itemCount",
            baseName: "ItemCount",
            type: "number",
        },        
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },        
        {
            name: "showInOutlineForm",
            baseName: "ShowInOutlineForm",
            type: "boolean",
        },        
        {
            name: "items",
            baseName: "Items",
            type: "Array<string>",
        },        
        {
            name: "autoShowField",
            baseName: "AutoShowField",
            type: "number",
        },        
        {
            name: "isAutoSubtotals",
            baseName: "IsAutoSubtotals",
            type: "boolean",
        },        
        {
            name: "isIncludeNewItemsInFilter",
            baseName: "IsIncludeNewItemsInFilter",
            type: "boolean",
        },        
        {
            name: "currentPageItem",
            baseName: "CurrentPageItem",
            type: "number",
        },        
        {
            name: "position",
            baseName: "Position",
            type: "number",
        },        
        {
            name: "isAscendSort",
            baseName: "IsAscendSort",
            type: "boolean",
        },        
        {
            name: "isAscendShow",
            baseName: "IsAscendShow",
            type: "boolean",
        },        
        {
            name: "baseField",
            baseName: "BaseField",
            type: "number",
        },        
        {
            name: "autoSortField",
            baseName: "AutoSortField",
            type: "number",
        },        
        {
            name: "autoShowCount",
            baseName: "AutoShowCount",
            type: "number",
        },        
        {
            name: "number",
            baseName: "Number",
            type: "number",
        },        
        {
            name: "dragToPage",
            baseName: "DragToPage",
            type: "boolean",
        },        
        {
            name: "dragToData",
            baseName: "DragToData",
            type: "boolean",
        },        
        {
            name: "baseIndex",
            baseName: "BaseIndex",
            type: "number",
        },        
        {
            name: "originalItems",
            baseName: "OriginalItems",
            type: "Array<string>",
        },        
        {
            name: "dragToHide",
            baseName: "DragToHide",
            type: "boolean",
        },        
        {
            name: "isCalculatedField",
            baseName: "IsCalculatedField",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PivotField.attributeTypeMap;
    }

    public pivotItems: Array<PivotItem>;
    
    public displayName: string;
    
    public numberFormat: string;
    
    public dragToColumn: boolean;
    
    public isAutoShow: boolean;
    
    public isRepeatItemLabels: boolean;
    
    public dragToRow: boolean;
    
    public isAutoSort: boolean;
    
    public insertBlankRow: boolean;
    
    public showSubtotalAtTop: boolean;
    
    public showCompact: boolean;
    
    public function: string;
    
    public isMultipleItemSelectionAllowed: boolean;
    
    public dataDisplayFormat: string;
    
    public baseItemPosition: string;
    
    public isInsertPageBreaksBetweenItems: boolean;
    
    public showAllItems: boolean;
    
    public baseItem: number;
    
    public itemCount: number;
    
    public name: string;
    
    public showInOutlineForm: boolean;
    
    public items: Array<string>;
    
    public autoShowField: number;
    
    public isAutoSubtotals: boolean;
    
    public isIncludeNewItemsInFilter: boolean;
    
    public currentPageItem: number;
    
    public position: number;
    
    public isAscendSort: boolean;
    
    public isAscendShow: boolean;
    
    public baseField: number;
    
    public autoSortField: number;
    
    public autoShowCount: number;
    
    public number: number;
    
    public dragToPage: boolean;
    
    public dragToData: boolean;
    
    public baseIndex: number;
    
    public originalItems: Array<string>;
    
    public dragToHide: boolean;
    
    public isCalculatedField: boolean;
    
    public constructor(init?: Partial<PivotField>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents a PivotFilter in PivotFilter Collection.
 */
export class PivotFilter {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "evaluationOrder",
            baseName: "EvaluationOrder",
            type: "number",
        },        
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },        
        {
            name: "filterType",
            baseName: "FilterType",
            type: "string",
        },        
        {
            name: "autoFilter",
            baseName: "AutoFilter",
            type: "AutoFilter",
        },        
        {
            name: "fieldIndex",
            baseName: "FieldIndex",
            type: "number",
        },        
        {
            name: "measureFldIndex",
            baseName: "MeasureFldIndex",
            type: "number",
        },        
        {
            name: "value1",
            baseName: "Value1",
            type: "string",
        },        
        {
            name: "memberPropertyFieldIndex",
            baseName: "MemberPropertyFieldIndex",
            type: "number",
        },        
        {
            name: "value2",
            baseName: "Value2",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PivotFilter.attributeTypeMap;
    }

    /**
     * Gets the Evaluation Order of the pivot filter.
     */
    public evaluationOrder: number;
    
    /**
     * Gets the name of the pivot filter.
     */
    public name: string;
    
    /**
     * Gets the autofilter type of the pivot filter.
     */
    public filterType: string;
    
    /**
     * Gets the autofilter of the pivot filter.
     */
    public autoFilter: AutoFilter;
    
    /**
     * Gets the field index of the pivot filter.
     */
    public fieldIndex: number;
    
    /**
     * Gets the measure field index of the pivot filter.             
     */
    public measureFldIndex: number;
    
    /**
     * Gets the string value1 of the label pivot filter.             
     */
    public value1: string;
    
    /**
     * Gets the member property field index of the pivot filter.             
     */
    public memberPropertyFieldIndex: number;
    
    /**
     * Gets the string value2 of the label pivot filter.             
     */
    public value2: string;
    
    public constructor(init?: Partial<PivotFilter>) {
        
        Object.assign(this, init);
    }        
}

export class PivotItem {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "index",
            baseName: "Index",
            type: "number",
        },        
        {
            name: "isHidden",
            baseName: "IsHidden",
            type: "boolean",
        },        
        {
            name: "name",
            baseName: "Name",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PivotItem.attributeTypeMap;
    }

    public index: number;
    
    /**
     * Represents whether the specified item visible.
     */
    public isHidden: boolean;
    
    /**
     * Gets the name
     */
    public name: string;
    
    public constructor(init?: Partial<PivotItem>) {
        
        Object.assign(this, init);
    }        
}

export class PivotTableFieldRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "data",
            baseName: "Data",
            type: "Array<number>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PivotTableFieldRequest.attributeTypeMap;
    }

    public data: Array<number>;
    
    public constructor(init?: Partial<PivotTableFieldRequest>) {
        
        Object.assign(this, init);
    }        
}

export class ProtectSheetParameter {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "allowSelectingUnlockedCell",
            baseName: "AllowSelectingUnlockedCell",
            type: "string",
        },        
        {
            name: "allowFiltering",
            baseName: "AllowFiltering",
            type: "string",
        },        
        {
            name: "allowDeletingColumn",
            baseName: "AllowDeletingColumn",
            type: "string",
        },        
        {
            name: "allowSelectingLockedCell",
            baseName: "AllowSelectingLockedCell",
            type: "string",
        },        
        {
            name: "allowUsingPivotTable",
            baseName: "AllowUsingPivotTable",
            type: "string",
        },        
        {
            name: "allowEditArea",
            baseName: "AllowEditArea",
            type: "Array<string>",
        },        
        {
            name: "allowInsertingHyperlink",
            baseName: "AllowInsertingHyperlink",
            type: "string",
        },        
        {
            name: "allowFormattingCell",
            baseName: "AllowFormattingCell",
            type: "string",
        },        
        {
            name: "allowFormattingRow",
            baseName: "AllowFormattingRow",
            type: "string",
        },        
        {
            name: "allowInsertingRow",
            baseName: "AllowInsertingRow",
            type: "string",
        },        
        {
            name: "allowFormattingColumn",
            baseName: "AllowFormattingColumn",
            type: "string",
        },        
        {
            name: "allowSorting",
            baseName: "AllowSorting",
            type: "string",
        },        
        {
            name: "allowInsertingColumn",
            baseName: "AllowInsertingColumn",
            type: "string",
        },        
        {
            name: "password",
            baseName: "Password",
            type: "string",
        },        
        {
            name: "allowDeletingRow",
            baseName: "AllowDeletingRow",
            type: "string",
        },        
        {
            name: "protectionType",
            baseName: "ProtectionType",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ProtectSheetParameter.attributeTypeMap;
    }

    public allowSelectingUnlockedCell: string;
    
    public allowFiltering: string;
    
    public allowDeletingColumn: string;
    
    public allowSelectingLockedCell: string;
    
    public allowUsingPivotTable: string;
    
    public allowEditArea: Array<string>;
    
    public allowInsertingHyperlink: string;
    
    public allowFormattingCell: string;
    
    public allowFormattingRow: string;
    
    public allowInsertingRow: string;
    
    public allowFormattingColumn: string;
    
    public allowSorting: string;
    
    public allowInsertingColumn: string;
    
    public password: string;
    
    public allowDeletingRow: string;
    
    public protectionType: string;
    
    public constructor(init?: Partial<ProtectSheetParameter>) {
        
        Object.assign(this, init);
    }        
}

export class Range {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "columnCount",
            baseName: "ColumnCount",
            type: "number",
        },        
        {
            name: "rowHeight",
            baseName: "RowHeight",
            type: "number",
        },        
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },        
        {
            name: "firstColumn",
            baseName: "FirstColumn",
            type: "number",
        },        
        {
            name: "columnWidth",
            baseName: "ColumnWidth",
            type: "number",
        },        
        {
            name: "refersTo",
            baseName: "RefersTo",
            type: "string",
        },        
        {
            name: "rowCount",
            baseName: "RowCount",
            type: "number",
        },        
        {
            name: "firstRow",
            baseName: "FirstRow",
            type: "number",
        },        
        {
            name: "worksheet",
            baseName: "Worksheet",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Range.attributeTypeMap;
    }

    /**
     * Gets the count of columns in the range.
     */
    public columnCount: number;
    
    /**
     * Sets or gets the height of rows in this range
     */
    public rowHeight: number;
    
    /**
     * Gets or sets the name of the range.
     */
    public name: string;
    
    /**
     * Gets the index of the first column of the range.
     */
    public firstColumn: number;
    
    /**
     * Sets or gets the column width of this range
     */
    public columnWidth: number;
    
    /**
     * Gets the range's refers to.
     */
    public refersTo: string;
    
    /**
     * Gets the count of rows in the range.
     */
    public rowCount: number;
    
    /**
     * Gets the index of the first row of the range.
     */
    public firstRow: number;
    
    /**
     * Gets the Aspose.Cells.Range.Worksheetobject which contains this range.
     */
    public worksheet: string;
    
    public constructor(init?: Partial<Range>) {
        
        Object.assign(this, init);
    }        
}

export class RangeCopyRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "source",
            baseName: "Source",
            type: "Range",
        },        
        {
            name: "operate",
            baseName: "Operate",
            type: "string",
        },        
        {
            name: "target",
            baseName: "Target",
            type: "Range",
        },        
        {
            name: "pasteOptions",
            baseName: "PasteOptions",
            type: "PasteOptions",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return RangeCopyRequest.attributeTypeMap;
    }

    public source: Range;
    
    public operate: string;
    
    public target: Range;
    
    public pasteOptions: PasteOptions;
    
    public constructor(init?: Partial<RangeCopyRequest>) {
        
        Object.assign(this, init);
    }        
}

export class RangeSetOutlineBorderRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "borderColor",
            baseName: "borderColor",
            type: "Color",
        },        
        {
            name: "range",
            baseName: "Range",
            type: "Range",
        },        
        {
            name: "borderStyle",
            baseName: "borderStyle",
            type: "string",
        },        
        {
            name: "borderEdge",
            baseName: "borderEdge",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return RangeSetOutlineBorderRequest.attributeTypeMap;
    }

    public borderColor: Color;
    
    public range: Range;
    
    public borderStyle: string;
    
    public borderEdge: string;
    
    public constructor(init?: Partial<RangeSetOutlineBorderRequest>) {
        
        Object.assign(this, init);
    }        
}

export class RangeSetStyleRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "range",
            baseName: "Range",
            type: "Range",
        },        
        {
            name: "style",
            baseName: "Style",
            type: "Style",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return RangeSetStyleRequest.attributeTypeMap;
    }

    public range: Range;
    
    public style: Style;
    
    public constructor(init?: Partial<RangeSetStyleRequest>) {
        
        Object.assign(this, init);
    }        
}

export class Ranges {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "rangeList",
            baseName: "RangeList",
            type: "Array<Range>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Ranges.attributeTypeMap;
    }

    public rangeList: Array<Range>;
    
    public constructor(init?: Partial<Ranges>) {
        
        Object.assign(this, init);
    }        
}

export class ResultDestination {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "outputFile",
            baseName: "OutputFile",
            type: "string",
        },        
        {
            name: "inputFile",
            baseName: "InputFile",
            type: "string",
        },        
        {
            name: "destinationType",
            baseName: "DestinationType",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ResultDestination.attributeTypeMap;
    }

    public outputFile: string;
    
    public inputFile: string;
    
    public destinationType: string;
    
    public constructor(init?: Partial<ResultDestination>) {
        
        Object.assign(this, init);
    }        
}

export class SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "status",
            baseName: "Status",
            type: "string",
        },        
        {
            name: "code",
            baseName: "Code",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return SaaSposeResponse.attributeTypeMap;
    }

    public status: string;
    
    public code: number;
    
    public constructor(init?: Partial<SaaSposeResponse>) {
        
        Object.assign(this, init);
    }        
}

export class SaveOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "enableHTTPCompression",
            baseName: "EnableHTTPCompression",
            type: "boolean",
        },        
        {
            name: "saveFormat",
            baseName: "SaveFormat",
            type: "string",
        },        
        {
            name: "clearData",
            baseName: "ClearData",
            type: "boolean",
        },        
        {
            name: "cachedFileFolder",
            baseName: "CachedFileFolder",
            type: "string",
        },        
        {
            name: "validateMergedAreas",
            baseName: "ValidateMergedAreas",
            type: "boolean",
        },        
        {
            name: "refreshChartCache",
            baseName: "RefreshChartCache",
            type: "boolean",
        },        
        {
            name: "createDirectory",
            baseName: "CreateDirectory",
            type: "boolean",
        },        
        {
            name: "sortNames",
            baseName: "SortNames",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return SaveOptions.attributeTypeMap;
    }

    public enableHTTPCompression: boolean;
    
    public saveFormat: string;
    
    /**
     * Make the workbook empty after saving the file.
     */
    public clearData: boolean;
    
    /**
     * The cached file folder is used to store some large data.
     */
    public cachedFileFolder: string;
    
    /**
     * Indicates whether validate merged areas before saving the file. The default value is false.             
     */
    public validateMergedAreas: boolean;
    
    public refreshChartCache: boolean;
    
    /**
     * If true and the directory does not exist, the directory will be automatically created before saving the file.             
     */
    public createDirectory: boolean;
    
    public sortNames: boolean;
    
    public constructor(init?: Partial<SaveOptions>) {
        
        Object.assign(this, init);
    }        
}

export class SaveResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "sourceDocument",
            baseName: "SourceDocument",
            type: "Link",
        },        
        {
            name: "destDocument",
            baseName: "DestDocument",
            type: "Link",
        },        
        {
            name: "additionalItems",
            baseName: "AdditionalItems",
            type: "Array<Link>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return SaveResult.attributeTypeMap;
    }

    public sourceDocument: Link;
    
    public destDocument: Link;
    
    public additionalItems: Array<Link>;
    
    public constructor(init?: Partial<SaveResult>) {
        
        Object.assign(this, init);
    }        
}

export class ShadowEffect {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "distance",
            baseName: "Distance",
            type: "number",
        },        
        {
            name: "angle",
            baseName: "Angle",
            type: "number",
        },        
        {
            name: "presetType",
            baseName: "PresetType",
            type: "string",
        },        
        {
            name: "color",
            baseName: "Color",
            type: "CellsColor",
        },        
        {
            name: "transparency",
            baseName: "Transparency",
            type: "number",
        },        
        {
            name: "blur",
            baseName: "Blur",
            type: "number",
        },        
        {
            name: "size",
            baseName: "Size",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ShadowEffect.attributeTypeMap;
    }

    public distance: number;
    
    public angle: number;
    
    public presetType: string;
    
    public color: CellsColor;
    
    public transparency: number;
    
    public blur: number;
    
    public size: number;
    
    public constructor(init?: Partial<ShadowEffect>) {
        
        Object.assign(this, init);
    }        
}

export class SingleValue {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "valueType",
            baseName: "ValueType",
            type: "ValueType",
        },        
        {
            name: "value",
            baseName: "Value",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return SingleValue.attributeTypeMap;
    }

    public valueType: ValueType;
    
    public value: string;
    
    public constructor(init?: Partial<SingleValue>) {
        
        Object.assign(this, init);
    }        
}

export class SolidFill {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "color",
            baseName: "Color",
            type: "Color",
        },        
        {
            name: "cellsColor",
            baseName: "CellsColor",
            type: "CellsColor",
        },        
        {
            name: "transparency",
            baseName: "Transparency",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return SolidFill.attributeTypeMap;
    }

    public color: Color;
    
    public cellsColor: CellsColor;
    
    public transparency: number;
    
    public constructor(init?: Partial<SolidFill>) {
        
        Object.assign(this, init);
    }        
}

export class SortKey {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "customList",
            baseName: "CustomList",
            type: "string",
        },        
        {
            name: "sortOrder",
            baseName: "SortOrder",
            type: "string",
        },        
        {
            name: "key",
            baseName: "Key",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return SortKey.attributeTypeMap;
    }

    public customList: string;
    
    public sortOrder: string;
    
    public key: number;
    
    public constructor(init?: Partial<SortKey>) {
        
        Object.assign(this, init);
    }        
}

export class SplitResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "documents",
            baseName: "Documents",
            type: "Array<SplitResultDocument>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return SplitResult.attributeTypeMap;
    }

    public documents: Array<SplitResultDocument>;
    
    public constructor(init?: Partial<SplitResult>) {
        
        Object.assign(this, init);
    }        
}

export class TaskData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "tasks",
            baseName: "Tasks",
            type: "Array<TaskDescription>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return TaskData.attributeTypeMap;
    }

    public tasks: Array<TaskDescription>;
    
    public constructor(init?: Partial<TaskData>) {
        
        Object.assign(this, init);
    }        
}

export class TaskDescription {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "taskParameter",
            baseName: "TaskParameter",
            type: "TaskParameter",
        },        
        {
            name: "taskType",
            baseName: "TaskType",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return TaskDescription.attributeTypeMap;
    }

    public taskParameter: TaskParameter;
    
    public taskType: string;
    
    public constructor(init?: Partial<TaskDescription>) {
        
        Object.assign(this, init);
    }        
}

export class TaskParameter {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return TaskParameter.attributeTypeMap;
    }

    public constructor(init?: Partial<TaskParameter>) {
        
        Object.assign(this, init);
    }        
}

export class TextureFill {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "scale",
            baseName: "Scale",
            type: "number",
        },        
        {
            name: "image",
            baseName: "Image",
            type: "LinkElement",
        },        
        {
            name: "picFormatOption",
            baseName: "PicFormatOption",
            type: "PicFormatOption",
        },        
        {
            name: "tilePicOption",
            baseName: "TilePicOption",
            type: "TilePicOption",
        },        
        {
            name: "transparency",
            baseName: "Transparency",
            type: "number",
        },        
        {
            name: "type",
            baseName: "Type",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return TextureFill.attributeTypeMap;
    }

    public scale: number;
    
    public image: LinkElement;
    
    public picFormatOption: PicFormatOption;
    
    public tilePicOption: TilePicOption;
    
    public transparency: number;
    
    public type: string;
    
    public constructor(init?: Partial<TextureFill>) {
        
        Object.assign(this, init);
    }        
}

export class ThemeColor {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "tint",
            baseName: "Tint",
            type: "number",
        },        
        {
            name: "colorType",
            baseName: "ColorType",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ThemeColor.attributeTypeMap;
    }

    public tint: number;
    
    public colorType: string;
    
    public constructor(init?: Partial<ThemeColor>) {
        
        Object.assign(this, init);
    }        
}

export class TilePicOption {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "alignmentType",
            baseName: "AlignmentType",
            type: "string",
        },        
        {
            name: "offsetX",
            baseName: "OffsetX",
            type: "number",
        },        
        {
            name: "scaleX",
            baseName: "ScaleX",
            type: "number",
        },        
        {
            name: "offsetY",
            baseName: "OffsetY",
            type: "number",
        },        
        {
            name: "scaleY",
            baseName: "ScaleY",
            type: "number",
        },        
        {
            name: "mirrorType",
            baseName: "MirrorType",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return TilePicOption.attributeTypeMap;
    }

    public alignmentType: string;
    
    public offsetX: number;
    
    public scaleX: number;
    
    public offsetY: number;
    
    public scaleY: number;
    
    public mirrorType: string;
    
    public constructor(init?: Partial<TilePicOption>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describe the Top10 conditional formatting rule. This conditional formatting     rule highlights cells whose values fall in the top N or bottom N bracket,     as specified.
 */
export class Top10 {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "isBottom",
            baseName: "IsBottom",
            type: "boolean",
        },        
        {
            name: "isPercent",
            baseName: "IsPercent",
            type: "boolean",
        },        
        {
            name: "rank",
            baseName: "Rank",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Top10.attributeTypeMap;
    }

    /**
     * Get or set the flag indicating whether a \"top/bottom n\" rule is a \"bottom    n\" rule. '1' indicates 'bottom'.  Default value is false.             
     */
    public isBottom: boolean;
    
    /**
     * Get or set the flag indicating whether a \"top/bottom n\" rule is a \"top/bottom     n percent\" rule.  Default value is false.
     */
    public isPercent: boolean;
    
    /**
     * Get or set the value of \"n\" in a \"top/bottom n\" conditional formatting rule.      If IsPercent is true, the value must between 0 and 100.  Otherwise it must     between 0 and 1000.  Default value is 10.
     */
    public rank: number;
    
    public constructor(init?: Partial<Top10>) {
        
        Object.assign(this, init);
    }        
}

export class Top10Filter {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "items",
            baseName: "Items",
            type: "number",
        },        
        {
            name: "isPercent",
            baseName: "IsPercent",
            type: "boolean",
        },        
        {
            name: "isTop",
            baseName: "IsTop",
            type: "boolean",
        },        
        {
            name: "criteria",
            baseName: "Criteria",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Top10Filter.attributeTypeMap;
    }

    public items: number;
    
    public isPercent: boolean;
    
    public isTop: boolean;
    
    public criteria: string;
    
    public constructor(init?: Partial<Top10Filter>) {
        
        Object.assign(this, init);
    }        
}

export class ValueType {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ValueType.attributeTypeMap;
    }

    public constructor(init?: Partial<ValueType>) {
        
        Object.assign(this, init);
    }        
}

export class VerticalPageBreak {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "column",
            baseName: "Column",
            type: "number",
        },        
        {
            name: "startRow",
            baseName: "StartRow",
            type: "number",
        },        
        {
            name: "endRow",
            baseName: "EndRow",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return VerticalPageBreak.attributeTypeMap;
    }

    public column: number;
    
    public startRow: number;
    
    public endRow: number;
    
    public constructor(init?: Partial<VerticalPageBreak>) {
        
        Object.assign(this, init);
    }        
}

export class Workbook {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "links",
            baseName: "Links",
            type: "Array<Link>",
        },        
        {
            name: "settings",
            baseName: "Settings",
            type: "LinkElement",
        },        
        {
            name: "isProtected",
            baseName: "IsProtected",
            type: "string",
        },        
        {
            name: "isWriteProtected",
            baseName: "IsWriteProtected",
            type: "string",
        },        
        {
            name: "fileName",
            baseName: "FileName",
            type: "string",
        },        
        {
            name: "documentProperties",
            baseName: "DocumentProperties",
            type: "LinkElement",
        },        
        {
            name: "names",
            baseName: "Names",
            type: "LinkElement",
        },        
        {
            name: "defaultStyle",
            baseName: "DefaultStyle",
            type: "LinkElement",
        },        
        {
            name: "isEncryption",
            baseName: "IsEncryption",
            type: "string",
        },        
        {
            name: "worksheets",
            baseName: "Worksheets",
            type: "LinkElement",
        },        
        {
            name: "password",
            baseName: "Password",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Workbook.attributeTypeMap;
    }

    public links: Array<Link>;
    
    public settings: LinkElement;
    
    public isProtected: string;
    
    public isWriteProtected: string;
    
    public fileName: string;
    
    public documentProperties: LinkElement;
    
    public names: LinkElement;
    
    public defaultStyle: LinkElement;
    
    public isEncryption: string;
    
    public worksheets: LinkElement;
    
    public password: string;
    
    public constructor(init?: Partial<Workbook>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Used by workbook encryption/decryption requests.
 */
export class WorkbookEncryptionRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "password",
            baseName: "Password",
            type: "string",
        },        
        {
            name: "keyLength",
            baseName: "KeyLength",
            type: "number",
        },        
        {
            name: "encryptionType",
            baseName: "EncryptionType",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return WorkbookEncryptionRequest.attributeTypeMap;
    }

    /**
     * Encription password.
     */
    public password: string;
    
    /**
     * Encription key length.
     */
    public keyLength: number;
    
    /**
     * Workbook encription type.
     */
    public encryptionType: string;
    
    public constructor(init?: Partial<WorkbookEncryptionRequest>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Used by workbook protection requests.
 */
export class WorkbookProtectionRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "password",
            baseName: "Password",
            type: "string",
        },        
        {
            name: "protectionType",
            baseName: "ProtectionType",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return WorkbookProtectionRequest.attributeTypeMap;
    }

    /**
     * Encription password.
     */
    public password: string;
    
    /**
     * Protection type. Can be ALL, CONTENTS, NONE, OBJECTS, SCENARIOS, STRUCTURE, WINDOWS  
     */
    public protectionType: string;
    
    public constructor(init?: Partial<WorkbookProtectionRequest>) {
        
        Object.assign(this, init);
    }        
}

export class WorkbookSettings {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "numberGroupSeparator",
            baseName: "NumberGroupSeparator",
            type: "string",
        },        
        {
            name: "hidePivotFieldList",
            baseName: "HidePivotFieldList",
            type: "boolean",
        },        
        {
            name: "isMinimized",
            baseName: "IsMinimized",
            type: "boolean",
        },        
        {
            name: "calculationId",
            baseName: "CalculationId",
            type: "string",
        },        
        {
            name: "reCalculateOnOpen",
            baseName: "ReCalculateOnOpen",
            type: "boolean",
        },        
        {
            name: "checkExcelRestriction",
            baseName: "CheckExcelRestriction",
            type: "boolean",
        },        
        {
            name: "isHScrollBarVisible",
            baseName: "IsHScrollBarVisible",
            type: "boolean",
        },        
        {
            name: "windowHeight",
            baseName: "WindowHeight",
            type: "number",
        },        
        {
            name: "windowLeft",
            baseName: "WindowLeft",
            type: "number",
        },        
        {
            name: "calcStackSize",
            baseName: "CalcStackSize",
            type: "number",
        },        
        {
            name: "shared",
            baseName: "Shared",
            type: "boolean",
        },        
        {
            name: "removePersonalInformation",
            baseName: "RemovePersonalInformation",
            type: "boolean",
        },        
        {
            name: "languageCode",
            baseName: "LanguageCode",
            type: "string",
        },        
        {
            name: "enableMacros",
            baseName: "EnableMacros",
            type: "boolean",
        },        
        {
            name: "isDefaultEncrypted",
            baseName: "IsDefaultEncrypted",
            type: "boolean",
        },        
        {
            name: "recalculateBeforeSave",
            baseName: "RecalculateBeforeSave",
            type: "boolean",
        },        
        {
            name: "parsingFormulaOnOpen",
            baseName: "ParsingFormulaOnOpen",
            type: "boolean",
        },        
        {
            name: "windowTop",
            baseName: "WindowTop",
            type: "number",
        },        
        {
            name: "region",
            baseName: "Region",
            type: "string",
        },        
        {
            name: "memorySetting",
            baseName: "MemorySetting",
            type: "string",
        },        
        {
            name: "updateAdjacentCellsBorder",
            baseName: "UpdateAdjacentCellsBorder",
            type: "boolean",
        },        
        {
            name: "crashSave",
            baseName: "CrashSave",
            type: "boolean",
        },        
        {
            name: "showTabs",
            baseName: "ShowTabs",
            type: "boolean",
        },        
        {
            name: "precisionAsDisplayed",
            baseName: "PrecisionAsDisplayed",
            type: "boolean",
        },        
        {
            name: "calcMode",
            baseName: "CalcMode",
            type: "string",
        },        
        {
            name: "autoCompressPictures",
            baseName: "AutoCompressPictures",
            type: "boolean",
        },        
        {
            name: "date1904",
            baseName: "Date1904",
            type: "boolean",
        },        
        {
            name: "numberDecimalSeparator",
            baseName: "NumberDecimalSeparator",
            type: "string",
        },        
        {
            name: "iteration",
            baseName: "Iteration",
            type: "boolean",
        },        
        {
            name: "checkComptiliblity",
            baseName: "CheckComptiliblity",
            type: "boolean",
        },        
        {
            name: "autoRecover",
            baseName: "AutoRecover",
            type: "boolean",
        },        
        {
            name: "maxChange",
            baseName: "MaxChange",
            type: "number",
        },        
        {
            name: "dataExtractLoad",
            baseName: "DataExtractLoad",
            type: "boolean",
        },        
        {
            name: "firstVisibleTab",
            baseName: "FirstVisibleTab",
            type: "number",
        },        
        {
            name: "isHidden",
            baseName: "IsHidden",
            type: "boolean",
        },        
        {
            name: "recommendReadOnly",
            baseName: "RecommendReadOnly",
            type: "boolean",
        },        
        {
            name: "displayDrawingObjects",
            baseName: "DisplayDrawingObjects",
            type: "string",
        },        
        {
            name: "buildVersion",
            baseName: "BuildVersion",
            type: "string",
        },        
        {
            name: "isVScrollBarVisible",
            baseName: "IsVScrollBarVisible",
            type: "boolean",
        },        
        {
            name: "windowWidth",
            baseName: "WindowWidth",
            type: "number",
        },        
        {
            name: "createCalcChain",
            baseName: "CreateCalcChain",
            type: "boolean",
        },        
        {
            name: "maxIteration",
            baseName: "MaxIteration",
            type: "number",
        },        
        {
            name: "repairLoad",
            baseName: "RepairLoad",
            type: "boolean",
        },        
        {
            name: "updateLinksType",
            baseName: "UpdateLinksType",
            type: "string",
        },        
        {
            name: "sheetTabBarWidth",
            baseName: "SheetTabBarWidth",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return WorkbookSettings.attributeTypeMap;
    }

    public numberGroupSeparator: string;
    
    public hidePivotFieldList: boolean;
    
    /**
     * Represents whether the generated spreadsheet will be opened Minimized.             
     */
    public isMinimized: boolean;
    
    /**
     * Specifies the version of the calculation engine used to calculate values in the workbook.             
     */
    public calculationId: string;
    
    /**
     * Indicates whether re-calculate all formulas on opening file.             
     */
    public reCalculateOnOpen: boolean;
    
    /**
     * Whether check restriction of excel file when user modify cells related objects.  For example, excel does not allow inputting string value longer than 32K.  When you input a value longer than 32K such as by Cell.PutValue(string), if this property is true, you will get an Exception.  If this property is false, we will accept your input string value as the cell's value so that later you can output the complete string value for other file formats such as CSV.  However, if you have set such kind of value that is invalid for excel file format, you should not save the workbook as excel file format later. Otherwise there may be unexpected error for the generated excel file.             
     */
    public checkExcelRestriction: boolean;
    
    /**
     * Gets or sets a value indicating whether the generated spreadsheet will contain a horizontal scroll bar.                           Remarks: The default value is true.              
     */
    public isHScrollBarVisible: boolean;
    
    /**
     * The height of the window, in unit of point.             
     */
    public windowHeight: number;
    
    /**
     * The distance from the left edge of the client area to the left edge of the window, in unit of point.             
     */
    public windowLeft: number;
    
    /**
     * Specifies the stack size for calculating cells recursively.  The large value for this size will give better performance when there are lots of cells need to be calculated recursively.  On the other hand, larger value will raise the stakes of StackOverflowException.  If use gets StackOverflowException when calculating formulas, this value should be decreased.             
     */
    public calcStackSize: number;
    
    /**
     * Gets or sets a value that indicates whether the Workbook is shared.                           Remarks: The default value is false.              
     */
    public shared: boolean;
    
    public removePersonalInformation: boolean;
    
    /**
     * Gets or sets the user interface language of the Workbook version based on CountryCode that has saved the file.             
     */
    public languageCode: string;
    
    public enableMacros: boolean;
    
    public isDefaultEncrypted: boolean;
    
    /**
     * Indicates whether to recalculate before saving the document.             
     */
    public recalculateBeforeSave: boolean;
    
    /**
     * Indicates whether parsing the formula when reading the file.                           Remarks: Only applies for Excel Xlsx,Xltx, Xltm,Xlsm file because the formulas in the files are stored with a string formula.              
     */
    public parsingFormulaOnOpen: boolean;
    
    /**
     * The distance from the top edge of the client area to the top edge of the window, in unit of point.             
     */
    public windowTop: number;
    
    /**
     * Gets or sets the system regional settings based on CountryCode at the time the file was saved.                           Remarks: If you do not want to use the region saved in the file, please reset it after reading the file.              
     */
    public region: string;
    
    public memorySetting: string;
    
    /**
     * Indicates whether update adjacent cells' border.                           Remarks: The default value is true.  For example: the bottom border of the cell A1 is update, the top border of the cell A2 should be changed too.              
     */
    public updateAdjacentCellsBorder: boolean;
    
    public crashSave: boolean;
    
    /**
     * Get or sets a value whether the Workbook tabs are displayed.                           Remarks: The default value is true.              
     */
    public showTabs: boolean;
    
    /**
     * True if calculations in this workbook will be done using only the precision of the numbers as they're displayed             
     */
    public precisionAsDisplayed: boolean;
    
    /**
     * It specifies whether to calculate formulas manually, automatically or automatically except for multiple table operations.             
     */
    public calcMode: string;
    
    public autoCompressPictures: boolean;
    
    /**
     * Gets or sets a value which represents if the workbook uses the 1904 date system.             
     */
    public date1904: boolean;
    
    public numberDecimalSeparator: string;
    
    /**
     * Indicates if Aspose.Cells will use iteration to resolve circular references.             
     */
    public iteration: boolean;
    
    /**
     * Indicates whether check comptiliblity when saving workbook.                           Remarks:  The default value is true.              
     */
    public checkComptiliblity: boolean;
    
    public autoRecover: boolean;
    
    /**
     * Returns or sets the maximum number of change that Microsoft Excel can use to resolve a circular reference.             
     */
    public maxChange: number;
    
    public dataExtractLoad: boolean;
    
    /**
     * Gets or sets the first visible worksheet tab.             
     */
    public firstVisibleTab: number;
    
    /**
     * Indicates whether this workbook is hidden.             
     */
    public isHidden: boolean;
    
    /**
     * Indicates if the Read Only Recommended option is selected.             
     */
    public recommendReadOnly: boolean;
    
    /**
     * Indicates whether and how to show objects in the workbook.             
     */
    public displayDrawingObjects: string;
    
    /**
     * Specifies the incremental public release of the application.             
     */
    public buildVersion: string;
    
    /**
     * Gets or sets a value indicating whether the generated spreadsheet will contain a vertical scroll bar.                           Remarks: The default value is true.              
     */
    public isVScrollBarVisible: boolean;
    
    /**
     * The width of the window, in unit of point.             
     */
    public windowWidth: number;
    
    /**
     * Indicates whether create calculated formulas chain.             
     */
    public createCalcChain: boolean;
    
    /**
     * Returns or sets the maximum number of iterations that Aspose.Cells can use to resolve a circular reference.             
     */
    public maxIteration: number;
    
    public repairLoad: boolean;
    
    public updateLinksType: string;
    
    /**
     * Width of worksheet tab bar (in 1/1000 of window width).             
     */
    public sheetTabBarWidth: number;
    
    public constructor(init?: Partial<WorkbookSettings>) {
        
        Object.assign(this, init);
    }        
}

export class Worksheet {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "index",
            baseName: "Index",
            type: "number",
        },        
        {
            name: "pictures",
            baseName: "Pictures",
            type: "LinkElement",
        },        
        {
            name: "charts",
            baseName: "Charts",
            type: "LinkElement",
        },        
        {
            name: "comments",
            baseName: "Comments",
            type: "LinkElement",
        },        
        {
            name: "hyperlinks",
            baseName: "Hyperlinks",
            type: "LinkElement",
        },        
        {
            name: "isVisible",
            baseName: "IsVisible",
            type: "boolean",
        },        
        {
            name: "viewType",
            baseName: "ViewType",
            type: "string",
        },        
        {
            name: "type",
            baseName: "Type",
            type: "string",
        },        
        {
            name: "isGridlinesVisible",
            baseName: "IsGridlinesVisible",
            type: "boolean",
        },        
        {
            name: "isRowColumnHeadersVisible",
            baseName: "IsRowColumnHeadersVisible",
            type: "boolean",
        },        
        {
            name: "isPageBreakPreview",
            baseName: "IsPageBreakPreview",
            type: "boolean",
        },        
        {
            name: "displayZeros",
            baseName: "DisplayZeros",
            type: "boolean",
        },        
        {
            name: "transitionEvaluation",
            baseName: "TransitionEvaluation",
            type: "boolean",
        },        
        {
            name: "displayRightToLeft",
            baseName: "DisplayRightToLeft",
            type: "boolean",
        },        
        {
            name: "firstVisibleColumn",
            baseName: "FirstVisibleColumn",
            type: "number",
        },        
        {
            name: "oleObjects",
            baseName: "OleObjects",
            type: "LinkElement",
        },        
        {
            name: "isOutlineShown",
            baseName: "IsOutlineShown",
            type: "boolean",
        },        
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },        
        {
            name: "autoShapes",
            baseName: "AutoShapes",
            type: "LinkElement",
        },        
        {
            name: "cells",
            baseName: "Cells",
            type: "LinkElement",
        },        
        {
            name: "validations",
            baseName: "Validations",
            type: "LinkElement",
        },        
        {
            name: "zoom",
            baseName: "Zoom",
            type: "number",
        },        
        {
            name: "conditionalFormattings",
            baseName: "ConditionalFormattings",
            type: "LinkElement",
        },        
        {
            name: "isSelected",
            baseName: "IsSelected",
            type: "boolean",
        },        
        {
            name: "tabColor",
            baseName: "TabColor",
            type: "Color",
        },        
        {
            name: "firstVisibleRow",
            baseName: "FirstVisibleRow",
            type: "number",
        },        
        {
            name: "transitionEntry",
            baseName: "TransitionEntry",
            type: "boolean",
        },        
        {
            name: "visibilityType",
            baseName: "VisibilityType",
            type: "string",
        },        
        {
            name: "isRulerVisible",
            baseName: "IsRulerVisible",
            type: "boolean",
        },        
        {
            name: "links",
            baseName: "Links",
            type: "Array<Link>",
        },        
        {
            name: "isProtected",
            baseName: "IsProtected",
            type: "boolean",
        },        
        {
            name: "mergedCells",
            baseName: "MergedCells",
            type: "LinkElement",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Worksheet.attributeTypeMap;
    }

    /**
     * Gets the index of sheet in the worksheets collection.             
     */
    public index: number;
    
    public pictures: LinkElement;
    
    public charts: LinkElement;
    
    public comments: LinkElement;
    
    public hyperlinks: LinkElement;
    
    /**
     * Represents if the worksheet is visible.             
     */
    public isVisible: boolean;
    
    /**
     * Gets and sets the view type.
     */
    public viewType: string;
    
    /**
     * Represents worksheet type
     */
    public type: string;
    
    /**
     * Gets or sets a value indicating whether the gridelines are visible.Default     is true.
     */
    public isGridlinesVisible: boolean;
    
    /**
     * Gets or sets a value indicating whether the worksheet will display row and column headers.Default is true.             
     */
    public isRowColumnHeadersVisible: boolean;
    
    /**
     * Indications the specified worksheet is shown in normal view or page break preview.
     */
    public isPageBreakPreview: boolean;
    
    /**
     * True if zero values are displayed.
     */
    public displayZeros: boolean;
    
    /**
     * Flag indicating whether the Transition Formula Evaluation (Lotus compatibility) option is enabled.             
     */
    public transitionEvaluation: boolean;
    
    /**
     * Indicates if the specified worksheet is displayed from right to left instead    of from left to right.  Default is false.             
     */
    public displayRightToLeft: boolean;
    
    /**
     * Represents first visible column index.
     */
    public firstVisibleColumn: number;
    
    public oleObjects: LinkElement;
    
    /**
     * Indicates whether show outline.             
     */
    public isOutlineShown: boolean;
    
    /**
     * Gets or sets the name of the worksheet.             
     */
    public name: string;
    
    public autoShapes: LinkElement;
    
    public cells: LinkElement;
    
    public validations: LinkElement;
    
    /**
     * Represents the scaling factor in percent. It should be btween 10 and 400.             
     */
    public zoom: number;
    
    public conditionalFormattings: LinkElement;
    
    /**
     * Indicates whether this worksheet is selected when the workbook is opened.
     */
    public isSelected: boolean;
    
    /**
     * Represents worksheet tab color.
     */
    public tabColor: Color;
    
    /**
     * Represents first visible row index.             
     */
    public firstVisibleRow: number;
    
    /**
     * Flag indicating whether the Transition Formula Entry (Lotus compatibility) option is enabled.
     */
    public transitionEntry: boolean;
    
    /**
     * Indicates the state for this sheet visibility             
     */
    public visibilityType: string;
    
    /**
     * Indicates whether the ruler is visible. Only apply for page break preview.
     */
    public isRulerVisible: boolean;
    
    public links: Array<Link>;
    
    /**
     * Indicates if the worksheet is protected.
     */
    public isProtected: boolean;
    
    public mergedCells: LinkElement;
    
    public constructor(init?: Partial<Worksheet>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Used by workbook moving requests.
 */
export class WorksheetMovingRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "position",
            baseName: "Position",
            type: "string",
        },        
        {
            name: "destinationWorksheet",
            baseName: "DestinationWorksheet",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return WorksheetMovingRequest.attributeTypeMap;
    }

    /**
     * Position to move. Can be BEFORE or AFTER.
     */
    public position: string;
    
    /**
     * Destination worksheet name.  
     */
    public destinationWorksheet: string;
    
    public constructor(init?: Partial<WorksheetMovingRequest>) {
        
        Object.assign(this, init);
    }        
}

export class AutoFilter {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "range",
            baseName: "Range",
            type: "string",
        },        
        {
            name: "filterColumns",
            baseName: "FilterColumns",
            type: "Array<FilterColumn>",
        },        
        {
            name: "sorter",
            baseName: "Sorter",
            type: "DataSorter",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return AutoFilter.attributeTypeMap;
    }

    public link: Link;
    
    public range: string;
    
    public filterColumns: Array<FilterColumn>;
    
    public sorter: DataSorter;
    
    public constructor(init?: Partial<AutoFilter>) {
        
        Object.assign(this, init);
    }        
}

export class AutoFilterResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "autoFilter",
            baseName: "AutoFilter",
            type: "AutoFilter",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AutoFilterResponse.attributeTypeMap);
    }

    public autoFilter: AutoFilter;
    
    public constructor(init?: Partial<AutoFilterResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class AutoShapeResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "autoShape",
            baseName: "AutoShape",
            type: "AutoShape",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AutoShapeResponse.attributeTypeMap);
    }

    public autoShape: AutoShape;
    
    public constructor(init?: Partial<AutoShapeResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class AutoShapes {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "autoShapeList",
            baseName: "AutoShapeList",
            type: "Array<LinkElement>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return AutoShapes.attributeTypeMap;
    }

    public link: Link;
    
    public autoShapeList: Array<LinkElement>;
    
    public constructor(init?: Partial<AutoShapes>) {
        
        Object.assign(this, init);
    }        
}

export class AutoShapesResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "autoShapes",
            baseName: "AutoShapes",
            type: "AutoShapes",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AutoShapesResponse.attributeTypeMap);
    }

    public autoShapes: AutoShapes;
    
    public constructor(init?: Partial<AutoShapesResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Encapsulates the object that represents a single Workbook cell.
 */
export class Cell {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "style",
            baseName: "Style",
            type: "LinkElement",
        },        
        {
            name: "htmlString",
            baseName: "HtmlString",
            type: "string",
        },        
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },        
        {
            name: "column",
            baseName: "Column",
            type: "number",
        },        
        {
            name: "worksheet",
            baseName: "Worksheet",
            type: "string",
        },        
        {
            name: "isInTable",
            baseName: "IsInTable",
            type: "boolean",
        },        
        {
            name: "isArrayHeader",
            baseName: "IsArrayHeader",
            type: "boolean",
        },        
        {
            name: "value",
            baseName: "Value",
            type: "string",
        },        
        {
            name: "isFormula",
            baseName: "IsFormula",
            type: "boolean",
        },        
        {
            name: "isStyleSet",
            baseName: "IsStyleSet",
            type: "boolean",
        },        
        {
            name: "isInArray",
            baseName: "IsInArray",
            type: "boolean",
        },        
        {
            name: "isErrorValue",
            baseName: "IsErrorValue",
            type: "boolean",
        },        
        {
            name: "isMerged",
            baseName: "IsMerged",
            type: "boolean",
        },        
        {
            name: "formula",
            baseName: "Formula",
            type: "string",
        },        
        {
            name: "type",
            baseName: "Type",
            type: "string",
        },        
        {
            name: "row",
            baseName: "Row",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Cell.attributeTypeMap;
    }

    public link: Link;
    
    public style: LinkElement;
    
    /**
     * Gets and sets the html string which contains data and some formattings in this cell.             
     */
    public htmlString: string;
    
    /**
     * Gets the name of the cell.             
     */
    public name: string;
    
    /**
     * Gets column number (zero based) of the cell.             
     */
    public column: number;
    
    /**
     * Gets the parent worksheet.
     */
    public worksheet: string;
    
    /**
     * Indicates whethe this cell is part of table formula.             
     */
    public isInTable: boolean;
    
    /**
     * Inidicates the cell's formula is and array formula and it is the first cell of the array.
     */
    public isArrayHeader: boolean;
    
    public value: string;
    
    /**
     * Represents if the specified cell contains formula.             
     */
    public isFormula: boolean;
    
    /**
     * Indicates if the cell's style is set. If return false, it means this cell has a default cell format.             
     */
    public isStyleSet: boolean;
    
    /**
     * Indicates whether the cell formula is an array formula.
     */
    public isInArray: boolean;
    
    /**
     * Checks if a formula can properly evaluate a result.             
     */
    public isErrorValue: boolean;
    
    /**
     * Checks if a cell is part of a merged range or not.             
     */
    public isMerged: boolean;
    
    /**
     * Gets or sets a formula of the Aspose.Cells.Cell.
     */
    public formula: string;
    
    /**
     * Specifies a cell value type.
     */
    public type: string;
    
    /**
     * Gets row number (zero based) of the cell.             
     */
    public row: number;
    
    public constructor(init?: Partial<Cell>) {
        
        Object.assign(this, init);
    }        
}

export class CellResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "cell",
            baseName: "Cell",
            type: "Cell",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CellResponse.attributeTypeMap);
    }

    public cell: Cell;
    
    public constructor(init?: Partial<CellResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class Cells {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "rows",
            baseName: "Rows",
            type: "LinkElement",
        },        
        {
            name: "cellCount",
            baseName: "CellCount",
            type: "number",
        },        
        {
            name: "maxRow",
            baseName: "MaxRow",
            type: "number",
        },        
        {
            name: "cellList",
            baseName: "CellList",
            type: "Array<LinkElement>",
        },        
        {
            name: "maxColumn",
            baseName: "MaxColumn",
            type: "number",
        },        
        {
            name: "columns",
            baseName: "Columns",
            type: "LinkElement",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Cells.attributeTypeMap;
    }

    public link: Link;
    
    public rows: LinkElement;
    
    public cellCount: number;
    
    public maxRow: number;
    
    public cellList: Array<LinkElement>;
    
    /**
     * Maximum column index of cell which contains data.             
     */
    public maxColumn: number;
    
    public columns: LinkElement;
    
    public constructor(init?: Partial<Cells>) {
        
        Object.assign(this, init);
    }        
}

export class CellsDocumentProperties {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "documentPropertyList",
            baseName: "DocumentPropertyList",
            type: "Array<CellsDocumentProperty>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return CellsDocumentProperties.attributeTypeMap;
    }

    public link: Link;
    
    public documentPropertyList: Array<CellsDocumentProperty>;
    
    public constructor(init?: Partial<CellsDocumentProperties>) {
        
        Object.assign(this, init);
    }        
}

export class CellsDocumentPropertiesResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "documentProperties",
            baseName: "DocumentProperties",
            type: "CellsDocumentProperties",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CellsDocumentPropertiesResponse.attributeTypeMap);
    }

    public documentProperties: CellsDocumentProperties;
    
    public constructor(init?: Partial<CellsDocumentPropertiesResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class CellsDocumentProperty {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "builtIn",
            baseName: "BuiltIn",
            type: "string",
        },        
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },        
        {
            name: "value",
            baseName: "Value",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return CellsDocumentProperty.attributeTypeMap;
    }

    public link: Link;
    
    public builtIn: string;
    
    public name: string;
    
    public value: string;
    
    public constructor(init?: Partial<CellsDocumentProperty>) {
        
        Object.assign(this, init);
    }        
}

export class CellsDocumentPropertyResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "documentProperty",
            baseName: "DocumentProperty",
            type: "CellsDocumentProperty",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CellsDocumentPropertyResponse.attributeTypeMap);
    }

    public documentProperty: CellsDocumentProperty;
    
    public constructor(init?: Partial<CellsDocumentPropertyResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class CellsObjectOperateTaskParameter extends TaskParameter {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "operateParameter",
            baseName: "OperateParameter",
            type: "OperateParameter",
        },        
        {
            name: "destinationWorkbook",
            baseName: "DestinationWorkbook",
            type: "FileSource",
        },        
        {
            name: "operateObject",
            baseName: "OperateObject",
            type: "OperateObject",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CellsObjectOperateTaskParameter.attributeTypeMap);
    }

    public operateParameter: OperateParameter;
    
    public destinationWorkbook: FileSource;
    
    public operateObject: OperateObject;
    
    public constructor(init?: Partial<CellsObjectOperateTaskParameter>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class CellsResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "cells",
            baseName: "Cells",
            type: "Cells",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CellsResponse.attributeTypeMap);
    }

    public cells: Cells;
    
    public constructor(init?: Partial<CellsResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class Chart {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "firstSliceAngle",
            baseName: "FirstSliceAngle",
            type: "number",
        },        
        {
            name: "floor",
            baseName: "Floor",
            type: "LinkElement",
        },        
        {
            name: "plotEmptyCellsType",
            baseName: "PlotEmptyCellsType",
            type: "string",
        },        
        {
            name: "autoScaling",
            baseName: "AutoScaling",
            type: "boolean",
        },        
        {
            name: "style",
            baseName: "Style",
            type: "number",
        },        
        {
            name: "seriesAxis",
            baseName: "SeriesAxis",
            type: "LinkElement",
        },        
        {
            name: "valueAxis",
            baseName: "ValueAxis",
            type: "LinkElement",
        },        
        {
            name: "showDataTable",
            baseName: "ShowDataTable",
            type: "boolean",
        },        
        {
            name: "is3D",
            baseName: "Is3D",
            type: "boolean",
        },        
        {
            name: "chartArea",
            baseName: "ChartArea",
            type: "LinkElement",
        },        
        {
            name: "elevation",
            baseName: "Elevation",
            type: "number",
        },        
        {
            name: "sideWall",
            baseName: "SideWall",
            type: "LinkElement",
        },        
        {
            name: "type",
            baseName: "Type",
            type: "string",
        },        
        {
            name: "title",
            baseName: "Title",
            type: "LinkElement",
        },        
        {
            name: "walls",
            baseName: "Walls",
            type: "LinkElement",
        },        
        {
            name: "backWall",
            baseName: "BackWall",
            type: "LinkElement",
        },        
        {
            name: "chartDataTable",
            baseName: "ChartDataTable",
            type: "LinkElement",
        },        
        {
            name: "heightPercent",
            baseName: "HeightPercent",
            type: "number",
        },        
        {
            name: "gapWidth",
            baseName: "GapWidth",
            type: "number",
        },        
        {
            name: "legend",
            baseName: "Legend",
            type: "LinkElement",
        },        
        {
            name: "chartObject",
            baseName: "ChartObject",
            type: "LinkElement",
        },        
        {
            name: "isRectangularCornered",
            baseName: "IsRectangularCornered",
            type: "boolean",
        },        
        {
            name: "secondCategoryAxis",
            baseName: "SecondCategoryAxis",
            type: "LinkElement",
        },        
        {
            name: "secondValueAxis",
            baseName: "SecondValueAxis",
            type: "LinkElement",
        },        
        {
            name: "placement",
            baseName: "Placement",
            type: "string",
        },        
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },        
        {
            name: "sizeWithWindow",
            baseName: "SizeWithWindow",
            type: "boolean",
        },        
        {
            name: "rightAngleAxes",
            baseName: "RightAngleAxes",
            type: "boolean",
        },        
        {
            name: "plotVisibleCells",
            baseName: "PlotVisibleCells",
            type: "boolean",
        },        
        {
            name: "showLegend",
            baseName: "ShowLegend",
            type: "boolean",
        },        
        {
            name: "pivotSource",
            baseName: "PivotSource",
            type: "string",
        },        
        {
            name: "depthPercent",
            baseName: "DepthPercent",
            type: "number",
        },        
        {
            name: "printSize",
            baseName: "PrintSize",
            type: "string",
        },        
        {
            name: "gapDepth",
            baseName: "GapDepth",
            type: "number",
        },        
        {
            name: "shapes",
            baseName: "Shapes",
            type: "LinkElement",
        },        
        {
            name: "wallsAndGridlines2D",
            baseName: "WallsAndGridlines2D",
            type: "boolean",
        },        
        {
            name: "nSeries",
            baseName: "NSeries",
            type: "LinkElement",
        },        
        {
            name: "rotationAngle",
            baseName: "RotationAngle",
            type: "number",
        },        
        {
            name: "plotArea",
            baseName: "PlotArea",
            type: "LinkElement",
        },        
        {
            name: "categoryAxis",
            baseName: "CategoryAxis",
            type: "LinkElement",
        },        
        {
            name: "perspective",
            baseName: "Perspective",
            type: "number",
        },        
        {
            name: "hidePivotFieldButtons",
            baseName: "HidePivotFieldButtons",
            type: "boolean",
        },        
        {
            name: "pageSetup",
            baseName: "PageSetup",
            type: "LinkElement",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Chart.attributeTypeMap;
    }

    public link: Link;
    
    /**
     * Gets or sets the angle of the first pie-chart or doughnut-chart slice, in degrees (clockwise from vertical). Applies only to pie, 3-D pie, and doughnut charts, 0 to 360.
     */
    public firstSliceAngle: number;
    
    /**
     * Returns a Floor object that represents the walls of a 3-D chart.             
     */
    public floor: LinkElement;
    
    /**
     * Gets and sets how to plot the empty cells.
     */
    public plotEmptyCellsType: string;
    
    /**
     * True if Microsoft Excel scales a 3-D chart so that it's closer in size to the equivalent 2-D chart. The RightAngleAxes property must be True.
     */
    public autoScaling: boolean;
    
    /**
     * Gets and sets the builtin style.
     */
    public style: number;
    
    /**
     * Gets the chart's series axis.
     */
    public seriesAxis: LinkElement;
    
    /**
     * Gets the chart's Y axis.
     */
    public valueAxis: LinkElement;
    
    /**
     * Gets or sets a value indicating whether the chart displays a data table.
     */
    public showDataTable: boolean;
    
    /**
     * Indicates whether the chart is a 3d chart.
     */
    public is3D: boolean;
    
    /**
     * Gets the chart area in the worksheet
     */
    public chartArea: LinkElement;
    
    /**
     * Represents the elevation of the 3-D chart view, in degrees.
     */
    public elevation: number;
    
    public sideWall: LinkElement;
    
    /**
     * Gets or sets a chart's type.
     */
    public type: string;
    
    /**
     * Gets the chart's title.
     */
    public title: LinkElement;
    
    /**
     * Returns a Walls object that represents the walls of a 3-D chart.
     */
    public walls: LinkElement;
    
    public backWall: LinkElement;
    
    /**
     * Represents the chart data table.
     */
    public chartDataTable: LinkElement;
    
    /**
     * Returns or sets the height of a 3-D chart as a percentage of the chart width (between 5 and 500 percent).
     */
    public heightPercent: number;
    
    /**
     * Returns or sets the space between bar or column clusters, as a percentage of the bar or column width. The value of this property must be between 0 and 500.             
     */
    public gapWidth: number;
    
    /**
     * Gets the chart legend.
     */
    public legend: LinkElement;
    
    /**
     * Represents the chartShape;
     */
    public chartObject: LinkElement;
    
    /**
     * Gets or sets a value indicating whether the chart displays a data table.
     */
    public isRectangularCornered: boolean;
    
    /**
     * Gets the chart's second X axis.
     */
    public secondCategoryAxis: LinkElement;
    
    /**
     * Gets the chart's second Y axis.
     */
    public secondValueAxis: LinkElement;
    
    /**
     * Represents the way the chart is attached to the cells below it.
     */
    public placement: string;
    
    /**
     * Gets and sets the name of the chart.
     */
    public name: string;
    
    /**
     * True if Microsoft Excel resizes the chart to match the size of the chart sheet window.
     */
    public sizeWithWindow: boolean;
    
    /**
     * True if the chart axes are at right angles.Applies only for 3-D charts(except Column3D and 3-D Pie Charts).
     */
    public rightAngleAxes: boolean;
    
    /**
     * Indicates whether only plot visible cells.
     */
    public plotVisibleCells: boolean;
    
    /**
     * Gets or sets a value indicating whether the chart legend will be displayed. Default is true.
     */
    public showLegend: boolean;
    
    /**
     * The source is the data of the pivotTable.If PivotSource is not empty ,the chart is PivotChart.
     */
    public pivotSource: string;
    
    /**
     * Represents the depth of a 3-D chart as a percentage of the chart width (between 20 and 2000 percent).
     */
    public depthPercent: number;
    
    /**
     * Gets and sets the printed chart size.
     */
    public printSize: string;
    
    /**
     * Gets or sets the distance between the data series in a 3-D chart, as a percentage of the marker width.The value of this property must be between 0 and 500.
     */
    public gapDepth: number;
    
    /**
     * Returns all drawing shapes in this chart.
     */
    public shapes: LinkElement;
    
    /**
     * True if gridlines are drawn two-dimensionally on a 3-D chart.
     */
    public wallsAndGridlines2D: boolean;
    
    /**
     * Gets a SeriesCollection collection representing the data series in the chart.
     */
    public nSeries: LinkElement;
    
    /**
     * Represents the rotation of the 3-D chart view (the rotation of the plot area around the z-axis, in degrees).
     */
    public rotationAngle: number;
    
    /**
     * Gets the chart's plot area which includes axis tick lables.
     */
    public plotArea: LinkElement;
    
    /**
     * Gets the chart's X axis. The property is read only
     */
    public categoryAxis: LinkElement;
    
    /**
     * Returns or sets the perspective for the 3-D chart view. Must be between 0 and 100.This property is ignored if the RightAngleAxes property is True.
     */
    public perspective: number;
    
    /**
     * Indicates whether hide the pivot chart field buttons only when the chart is PivotChart
     */
    public hidePivotFieldButtons: boolean;
    
    /**
     * Represents the page setup description in this chart.
     */
    public pageSetup: LinkElement;
    
    public constructor(init?: Partial<Chart>) {
        
        Object.assign(this, init);
    }        
}

export class ChartAreaResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "chartArea",
            baseName: "ChartArea",
            type: "ChartArea",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ChartAreaResponse.attributeTypeMap);
    }

    public chartArea: ChartArea;
    
    public constructor(init?: Partial<ChartAreaResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class ChartFrame {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "isInnerMode",
            baseName: "IsInnerMode",
            type: "boolean",
        },        
        {
            name: "shapeProperties",
            baseName: "ShapeProperties",
            type: "Array<LinkElement>",
        },        
        {
            name: "autoScaleFont",
            baseName: "AutoScaleFont",
            type: "boolean",
        },        
        {
            name: "area",
            baseName: "Area",
            type: "Area",
        },        
        {
            name: "height",
            baseName: "Height",
            type: "number",
        },        
        {
            name: "width",
            baseName: "Width",
            type: "number",
        },        
        {
            name: "backgroundMode",
            baseName: "BackgroundMode",
            type: "string",
        },        
        {
            name: "isAutomaticSize",
            baseName: "IsAutomaticSize",
            type: "boolean",
        },        
        {
            name: "y",
            baseName: "Y",
            type: "number",
        },        
        {
            name: "x",
            baseName: "X",
            type: "number",
        },        
        {
            name: "shadow",
            baseName: "Shadow",
            type: "boolean",
        },        
        {
            name: "font",
            baseName: "Font",
            type: "Font",
        },        
        {
            name: "border",
            baseName: "Border",
            type: "Line",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ChartFrame.attributeTypeMap;
    }

    public link: Link;
    
    public isInnerMode: boolean;
    
    public shapeProperties: Array<LinkElement>;
    
    public autoScaleFont: boolean;
    
    public area: Area;
    
    public height: number;
    
    public width: number;
    
    public backgroundMode: string;
    
    public isAutomaticSize: boolean;
    
    public y: number;
    
    public x: number;
    
    public shadow: boolean;
    
    public font: Font;
    
    public border: Line;
    
    public constructor(init?: Partial<ChartFrame>) {
        
        Object.assign(this, init);
    }        
}

export class ChartOperateParameter extends OperateParameter {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "string",
            baseName: "string",
            type: "string",
        },        
        {
            name: "area",
            baseName: "Area",
            type: "string",
        },        
        {
            name: "categoryData",
            baseName: "CategoryData",
            type: "string",
        },        
        {
            name: "upperLeftRow",
            baseName: "UpperLeftRow",
            type: "number",
        },        
        {
            name: "lowerRightColumn",
            baseName: "LowerRightColumn",
            type: "number",
        },        
        {
            name: "lowerRightRow",
            baseName: "LowerRightRow",
            type: "number",
        },        
        {
            name: "isAutoGetSerialName",
            baseName: "IsAutoGetSerialName",
            type: "boolean",
        },        
        {
            name: "chartType",
            baseName: "ChartType",
            type: "string",
        },        
        {
            name: "isVertical",
            baseName: "IsVertical",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ChartOperateParameter.attributeTypeMap);
    }

    public string: string;
    
    public area: string;
    
    public categoryData: string;
    
    public upperLeftRow: number;
    
    public lowerRightColumn: number;
    
    public lowerRightRow: number;
    
    public isAutoGetSerialName: boolean;
    
    public chartType: string;
    
    public isVertical: boolean;
    
    public constructor(init?: Partial<ChartOperateParameter>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class Charts {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "chartList",
            baseName: "ChartList",
            type: "Array<LinkElement>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Charts.attributeTypeMap;
    }

    public link: Link;
    
    public chartList: Array<LinkElement>;
    
    public constructor(init?: Partial<Charts>) {
        
        Object.assign(this, init);
    }        
}

export class ChartsResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "charts",
            baseName: "Charts",
            type: "Charts",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ChartsResponse.attributeTypeMap);
    }

    public charts: Charts;
    
    public constructor(init?: Partial<ChartsResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class Column {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "index",
            baseName: "Index",
            type: "number",
        },        
        {
            name: "style",
            baseName: "Style",
            type: "LinkElement",
        },        
        {
            name: "groupLevel",
            baseName: "GroupLevel",
            type: "number",
        },        
        {
            name: "isHidden",
            baseName: "IsHidden",
            type: "boolean",
        },        
        {
            name: "width",
            baseName: "Width",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Column.attributeTypeMap;
    }

    public link: Link;
    
    public index: number;
    
    public style: LinkElement;
    
    public groupLevel: number;
    
    public isHidden: boolean;
    
    public width: number;
    
    public constructor(init?: Partial<Column>) {
        
        Object.assign(this, init);
    }        
}

export class ColumnResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "column",
            baseName: "Column",
            type: "Column",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ColumnResponse.attributeTypeMap);
    }

    public column: Column;
    
    public constructor(init?: Partial<ColumnResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class Columns {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "columnsCount",
            baseName: "ColumnsCount",
            type: "number",
        },        
        {
            name: "maxColumn",
            baseName: "MaxColumn",
            type: "number",
        },        
        {
            name: "columnsList",
            baseName: "ColumnsList",
            type: "Array<LinkElement>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Columns.attributeTypeMap;
    }

    public link: Link;
    
    public columnsCount: number;
    
    public maxColumn: number;
    
    public columnsList: Array<LinkElement>;
    
    public constructor(init?: Partial<Columns>) {
        
        Object.assign(this, init);
    }        
}

export class ColumnsResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "columns",
            baseName: "Columns",
            type: "Columns",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ColumnsResponse.attributeTypeMap);
    }

    public columns: Columns;
    
    public constructor(init?: Partial<ColumnsResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class Comment {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "autoSize",
            baseName: "AutoSize",
            type: "boolean",
        },        
        {
            name: "author",
            baseName: "Author",
            type: "string",
        },        
        {
            name: "isVisible",
            baseName: "IsVisible",
            type: "boolean",
        },        
        {
            name: "textOrientationType",
            baseName: "TextOrientationType",
            type: "string",
        },        
        {
            name: "height",
            baseName: "Height",
            type: "number",
        },        
        {
            name: "note",
            baseName: "Note",
            type: "string",
        },        
        {
            name: "width",
            baseName: "Width",
            type: "number",
        },        
        {
            name: "textVerticalAlignment",
            baseName: "TextVerticalAlignment",
            type: "string",
        },        
        {
            name: "cellName",
            baseName: "CellName",
            type: "string",
        },        
        {
            name: "htmlNote",
            baseName: "HtmlNote",
            type: "string",
        },        
        {
            name: "textHorizontalAlignment",
            baseName: "TextHorizontalAlignment",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Comment.attributeTypeMap;
    }

    public link: Link;
    
    public autoSize: boolean;
    
    public author: string;
    
    public isVisible: boolean;
    
    public textOrientationType: string;
    
    public height: number;
    
    public note: string;
    
    public width: number;
    
    public textVerticalAlignment: string;
    
    public cellName: string;
    
    public htmlNote: string;
    
    public textHorizontalAlignment: string;
    
    public constructor(init?: Partial<Comment>) {
        
        Object.assign(this, init);
    }        
}

export class CommentResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "comment",
            baseName: "Comment",
            type: "Comment",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CommentResponse.attributeTypeMap);
    }

    public comment: Comment;
    
    public constructor(init?: Partial<CommentResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class Comments {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "commentList",
            baseName: "CommentList",
            type: "Array<LinkElement>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Comments.attributeTypeMap;
    }

    public link: Link;
    
    public commentList: Array<LinkElement>;
    
    public constructor(init?: Partial<Comments>) {
        
        Object.assign(this, init);
    }        
}

export class CommentsResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "comments",
            baseName: "Comments",
            type: "Comments",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CommentsResponse.attributeTypeMap);
    }

    public comments: Comments;
    
    public constructor(init?: Partial<CommentsResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class ConditionalFormatting {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "sqref",
            baseName: "sqref",
            type: "string",
        },        
        {
            name: "formatConditions",
            baseName: "FormatConditions",
            type: "Array<FormatCondition>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ConditionalFormatting.attributeTypeMap;
    }

    public link: Link;
    
    public sqref: string;
    
    public formatConditions: Array<FormatCondition>;
    
    public constructor(init?: Partial<ConditionalFormatting>) {
        
        Object.assign(this, init);
    }        
}

export class ConditionalFormattingResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "conditionalFormatting",
            baseName: "ConditionalFormatting",
            type: "ConditionalFormatting",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ConditionalFormattingResponse.attributeTypeMap);
    }

    public conditionalFormatting: ConditionalFormatting;
    
    public constructor(init?: Partial<ConditionalFormattingResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class ConditionalFormattings {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "count",
            baseName: "Count",
            type: "number",
        },        
        {
            name: "conditionalFormattingList",
            baseName: "ConditionalFormattingList",
            type: "Array<ConditionalFormatting>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ConditionalFormattings.attributeTypeMap;
    }

    public link: Link;
    
    public count: number;
    
    public conditionalFormattingList: Array<ConditionalFormatting>;
    
    public constructor(init?: Partial<ConditionalFormattings>) {
        
        Object.assign(this, init);
    }        
}

export class ConditionalFormattingsResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "conditionalFormattings",
            baseName: "ConditionalFormattings",
            type: "ConditionalFormattings",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ConditionalFormattingsResponse.attributeTypeMap);
    }

    public conditionalFormattings: ConditionalFormattings;
    
    public constructor(init?: Partial<ConditionalFormattingsResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class ConvertTaskParameter extends TaskParameter {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "workbook",
            baseName: "Workbook",
            type: "FileSource",
        },        
        {
            name: "saveOptions",
            baseName: "SaveOptions",
            type: "SaveOptions",
        },        
        {
            name: "destinationFile",
            baseName: "DestinationFile",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ConvertTaskParameter.attributeTypeMap);
    }

    public workbook: FileSource;
    
    public saveOptions: SaveOptions;
    
    public destinationFile: string;
    
    public constructor(init?: Partial<ConvertTaskParameter>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class DifSaveOptions extends SaveOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DifSaveOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<DifSaveOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class FillFormatResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fillFormat",
            baseName: "FillFormat",
            type: "FillFormat",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FillFormatResponse.attributeTypeMap);
    }

    public fillFormat: FillFormat;
    
    public constructor(init?: Partial<FillFormatResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class FormatCondition {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "aboveAverage",
            baseName: "AboveAverage",
            type: "AboveAverage",
        },        
        {
            name: "formula2",
            baseName: "Formula2",
            type: "string",
        },        
        {
            name: "style",
            baseName: "Style",
            type: "Style",
        },        
        {
            name: "formula1",
            baseName: "Formula1",
            type: "string",
        },        
        {
            name: "colorScale",
            baseName: "ColorScale",
            type: "ColorScale",
        },        
        {
            name: "dataBar",
            baseName: "DataBar",
            type: "DataBar",
        },        
        {
            name: "text",
            baseName: "Text",
            type: "string",
        },        
        {
            name: "stopIfTrue",
            baseName: "StopIfTrue",
            type: "boolean",
        },        
        {
            name: "priority",
            baseName: "Priority",
            type: "number",
        },        
        {
            name: "top10",
            baseName: "Top10",
            type: "Top10",
        },        
        {
            name: "operator",
            baseName: "Operator",
            type: "string",
        },        
        {
            name: "iconSet",
            baseName: "IconSet",
            type: "IconSet",
        },        
        {
            name: "type",
            baseName: "Type",
            type: "string",
        },        
        {
            name: "timePeriod",
            baseName: "TimePeriod",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FormatCondition.attributeTypeMap;
    }

    public link: Link;
    
    public aboveAverage: AboveAverage;
    
    public formula2: string;
    
    public style: Style;
    
    public formula1: string;
    
    public colorScale: ColorScale;
    
    public dataBar: DataBar;
    
    public text: string;
    
    /**
     * True, no rules with lower priority may be applied over this rule, when this     rule evaluates to true.  Only applies for Excel 2007;
     */
    public stopIfTrue: boolean;
    
    /**
     * The priority of this conditional formatting rule. This value is used to determine     which format should be evaluated and rendered. Lower numeric values are higher     priority than higher numeric values, where '1' is the highest priority.
     */
    public priority: number;
    
    public top10: Top10;
    
    public operator: string;
    
    public iconSet: IconSet;
    
    /**
     * Gets and sets whether the conditional format Type.             
     */
    public type: string;
    
    public timePeriod: string;
    
    public constructor(init?: Partial<FormatCondition>) {
        
        Object.assign(this, init);
    }        
}

export class HorizontalPageBreakResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "horizontalPageBreak",
            baseName: "HorizontalPageBreak",
            type: "HorizontalPageBreak",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(HorizontalPageBreakResponse.attributeTypeMap);
    }

    public horizontalPageBreak: HorizontalPageBreak;
    
    public constructor(init?: Partial<HorizontalPageBreakResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class HorizontalPageBreaks {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "horizontalPageBreakList",
            baseName: "HorizontalPageBreakList",
            type: "Array<HorizontalPageBreak>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return HorizontalPageBreaks.attributeTypeMap;
    }

    public link: Link;
    
    public horizontalPageBreakList: Array<HorizontalPageBreak>;
    
    public constructor(init?: Partial<HorizontalPageBreaks>) {
        
        Object.assign(this, init);
    }        
}

export class HorizontalPageBreaksResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "horizontalPageBreaks",
            baseName: "HorizontalPageBreaks",
            type: "HorizontalPageBreaks",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(HorizontalPageBreaksResponse.attributeTypeMap);
    }

    public horizontalPageBreaks: HorizontalPageBreaks;
    
    public constructor(init?: Partial<HorizontalPageBreaksResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class Hyperlink {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "screenTip",
            baseName: "ScreenTip",
            type: "string",
        },        
        {
            name: "area",
            baseName: "Area",
            type: "CellArea",
        },        
        {
            name: "textToDisplay",
            baseName: "TextToDisplay",
            type: "string",
        },        
        {
            name: "address",
            baseName: "Address",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Hyperlink.attributeTypeMap;
    }

    public link: Link;
    
    public screenTip: string;
    
    public area: CellArea;
    
    public textToDisplay: string;
    
    public address: string;
    
    public constructor(init?: Partial<Hyperlink>) {
        
        Object.assign(this, init);
    }        
}

export class HyperlinkResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "hyperlink",
            baseName: "Hyperlink",
            type: "Hyperlink",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(HyperlinkResponse.attributeTypeMap);
    }

    public hyperlink: Hyperlink;
    
    public constructor(init?: Partial<HyperlinkResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class Hyperlinks {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "count",
            baseName: "Count",
            type: "number",
        },        
        {
            name: "hyperlinkList",
            baseName: "HyperlinkList",
            type: "Array<LinkElement>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Hyperlinks.attributeTypeMap;
    }

    public link: Link;
    
    public count: number;
    
    public hyperlinkList: Array<LinkElement>;
    
    public constructor(init?: Partial<Hyperlinks>) {
        
        Object.assign(this, init);
    }        
}

export class HyperlinksResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "hyperlinks",
            baseName: "Hyperlinks",
            type: "Hyperlinks",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(HyperlinksResponse.attributeTypeMap);
    }

    public hyperlinks: Hyperlinks;
    
    public constructor(init?: Partial<HyperlinksResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class ImageSaveOptions extends SaveOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "chartImageType",
            baseName: "ChartImageType",
            type: "string",
        },        
        {
            name: "embededImageNameInSvg",
            baseName: "EmbededImageNameInSvg",
            type: "string",
        },        
        {
            name: "horizontalResolution",
            baseName: "HorizontalResolution",
            type: "number",
        },        
        {
            name: "imageFormat",
            baseName: "ImageFormat",
            type: "string",
        },        
        {
            name: "isCellAutoFit",
            baseName: "IsCellAutoFit",
            type: "boolean",
        },        
        {
            name: "onePagePerSheet",
            baseName: "OnePagePerSheet",
            type: "boolean",
        },        
        {
            name: "onlyArea",
            baseName: "OnlyArea",
            type: "boolean",
        },        
        {
            name: "printingPage",
            baseName: "PrintingPage",
            type: "string",
        },        
        {
            name: "printWithStatusDialog",
            baseName: "PrintWithStatusDialog",
            type: "number",
        },        
        {
            name: "quality",
            baseName: "Quality",
            type: "number",
        },        
        {
            name: "tiffCompression",
            baseName: "TiffCompression",
            type: "string",
        },        
        {
            name: "verticalResolution",
            baseName: "VerticalResolution",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ImageSaveOptions.attributeTypeMap);
    }

    public chartImageType: string;
    
    public embededImageNameInSvg: string;
    
    public horizontalResolution: number;
    
    public imageFormat: string;
    
    public isCellAutoFit: boolean;
    
    public onePagePerSheet: boolean;
    
    public onlyArea: boolean;
    
    public printingPage: string;
    
    public printWithStatusDialog: number;
    
    public quality: number;
    
    public tiffCompression: string;
    
    public verticalResolution: number;
    
    public constructor(init?: Partial<ImageSaveOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class ImportBatchDataOption extends ImportOption {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "batchData",
            baseName: "BatchData",
            type: "Array<CellValue>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ImportBatchDataOption.attributeTypeMap);
    }

    public batchData: Array<CellValue>;
    
    public constructor(init?: Partial<ImportBatchDataOption>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class ImportCSVDataOption extends ImportOption {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "convertNumericData",
            baseName: "ConvertNumericData",
            type: "boolean",
        },        
        {
            name: "firstColumn",
            baseName: "FirstColumn",
            type: "number",
        },        
        {
            name: "sourceFile",
            baseName: "SourceFile",
            type: "string",
        },        
        {
            name: "firstRow",
            baseName: "FirstRow",
            type: "number",
        },        
        {
            name: "separatorString",
            baseName: "SeparatorString",
            type: "string",
        },        
        {
            name: "customParsers",
            baseName: "CustomParsers",
            type: "Array<CustomParserConfig>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ImportCSVDataOption.attributeTypeMap);
    }

    public convertNumericData: boolean;
    
    public firstColumn: number;
    
    public sourceFile: string;
    
    public firstRow: number;
    
    public separatorString: string;
    
    public customParsers: Array<CustomParserConfig>;
    
    public constructor(init?: Partial<ImportCSVDataOption>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class ImportDataTaskParameter extends TaskParameter {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "workbook",
            baseName: "Workbook",
            type: "FileSource",
        },        
        {
            name: "importOption",
            baseName: "ImportOption",
            type: "ImportOption",
        },        
        {
            name: "destinationWorkbook",
            baseName: "DestinationWorkbook",
            type: "FileSource",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ImportDataTaskParameter.attributeTypeMap);
    }

    public workbook: FileSource;
    
    public importOption: ImportOption;
    
    public destinationWorkbook: FileSource;
    
    public constructor(init?: Partial<ImportDataTaskParameter>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class ImportDoubleArrayOption extends ImportOption {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "data",
            baseName: "Data",
            type: "Array<number>",
        },        
        {
            name: "isVertical",
            baseName: "IsVertical",
            type: "boolean",
        },        
        {
            name: "firstRow",
            baseName: "FirstRow",
            type: "number",
        },        
        {
            name: "firstColumn",
            baseName: "FirstColumn",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ImportDoubleArrayOption.attributeTypeMap);
    }

    public data: Array<number>;
    
    public isVertical: boolean;
    
    public firstRow: number;
    
    public firstColumn: number;
    
    public constructor(init?: Partial<ImportDoubleArrayOption>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class ImportIntArrayOption extends ImportOption {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "data",
            baseName: "Data",
            type: "Array<number>",
        },        
        {
            name: "isVertical",
            baseName: "IsVertical",
            type: "boolean",
        },        
        {
            name: "firstRow",
            baseName: "FirstRow",
            type: "number",
        },        
        {
            name: "firstColumn",
            baseName: "FirstColumn",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ImportIntArrayOption.attributeTypeMap);
    }

    public data: Array<number>;
    
    public isVertical: boolean;
    
    public firstRow: number;
    
    public firstColumn: number;
    
    public constructor(init?: Partial<ImportIntArrayOption>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class ImportStringArrayOption extends ImportOption {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "data",
            baseName: "Data",
            type: "Array<string>",
        },        
        {
            name: "isVertical",
            baseName: "IsVertical",
            type: "boolean",
        },        
        {
            name: "firstRow",
            baseName: "FirstRow",
            type: "number",
        },        
        {
            name: "firstColumn",
            baseName: "FirstColumn",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ImportStringArrayOption.attributeTypeMap);
    }

    public data: Array<string>;
    
    public isVertical: boolean;
    
    public firstRow: number;
    
    public firstColumn: number;
    
    public constructor(init?: Partial<ImportStringArrayOption>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class LegendResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "legend",
            baseName: "Legend",
            type: "Legend",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(LegendResponse.attributeTypeMap);
    }

    public legend: Legend;
    
    public constructor(init?: Partial<LegendResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class LineFormat {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "textureFill",
            baseName: "TextureFill",
            type: "TextureFill",
        },        
        {
            name: "imageData",
            baseName: "ImageData",
            type: "string",
        },        
        {
            name: "patternFill",
            baseName: "PatternFill",
            type: "PatternFill",
        },        
        {
            name: "solidFill",
            baseName: "SolidFill",
            type: "SolidFill",
        },        
        {
            name: "gradientFill",
            baseName: "GradientFill",
            type: "GradientFill",
        },        
        {
            name: "type",
            baseName: "Type",
            type: "string",
        },        
        {
            name: "beginArrowheadLength",
            baseName: "BeginArrowheadLength",
            type: "string",
        },        
        {
            name: "dashStyle",
            baseName: "DashStyle",
            type: "string",
        },        
        {
            name: "endArrowheadWidth",
            baseName: "EndArrowheadWidth",
            type: "string",
        },        
        {
            name: "endArrowheadLength",
            baseName: "EndArrowheadLength",
            type: "string",
        },        
        {
            name: "beginArrowheadWidth",
            baseName: "BeginArrowheadWidth",
            type: "string",
        },        
        {
            name: "compoundType",
            baseName: "CompoundType",
            type: "string",
        },        
        {
            name: "joinType",
            baseName: "JoinType",
            type: "string",
        },        
        {
            name: "weight",
            baseName: "Weight",
            type: "number",
        },        
        {
            name: "beginArrowheadStyle",
            baseName: "BeginArrowheadStyle",
            type: "string",
        },        
        {
            name: "endArrowheadStyle",
            baseName: "EndArrowheadStyle",
            type: "string",
        },        
        {
            name: "capType",
            baseName: "CapType",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return LineFormat.attributeTypeMap;
    }

    public textureFill: TextureFill;
    
    public imageData: string;
    
    public patternFill: PatternFill;
    
    public solidFill: SolidFill;
    
    public gradientFill: GradientFill;
    
    public type: string;
    
    public beginArrowheadLength: string;
    
    public dashStyle: string;
    
    public endArrowheadWidth: string;
    
    public endArrowheadLength: string;
    
    public beginArrowheadWidth: string;
    
    public compoundType: string;
    
    public joinType: string;
    
    public weight: number;
    
    public beginArrowheadStyle: string;
    
    public endArrowheadStyle: string;
    
    public capType: string;
    
    public constructor(init?: Partial<LineFormat>) {
        
        Object.assign(this, init);
    }        
}

export class LineResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "line",
            baseName: "Line",
            type: "Line",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(LineResponse.attributeTypeMap);
    }

    public line: Line;
    
    public constructor(init?: Partial<LineResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class ListObject {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "showTotals",
            baseName: "ShowTotals",
            type: "boolean",
        },        
        {
            name: "tableStyleType",
            baseName: "TableStyleType",
            type: "string",
        },        
        {
            name: "displayName",
            baseName: "DisplayName",
            type: "string",
        },        
        {
            name: "showHeaderRow",
            baseName: "ShowHeaderRow",
            type: "boolean",
        },        
        {
            name: "startColumn",
            baseName: "StartColumn",
            type: "number",
        },        
        {
            name: "showTableStyleLastColumn",
            baseName: "ShowTableStyleLastColumn",
            type: "boolean",
        },        
        {
            name: "showTableStyleColumnStripes",
            baseName: "ShowTableStyleColumnStripes",
            type: "boolean",
        },        
        {
            name: "showTableStyleFirstColumn",
            baseName: "ShowTableStyleFirstColumn",
            type: "boolean",
        },        
        {
            name: "startRow",
            baseName: "StartRow",
            type: "number",
        },        
        {
            name: "autoFilter",
            baseName: "AutoFilter",
            type: "AutoFilter",
        },        
        {
            name: "showTableStyleRowStripes",
            baseName: "ShowTableStyleRowStripes",
            type: "boolean",
        },        
        {
            name: "endColumn",
            baseName: "EndColumn",
            type: "number",
        },        
        {
            name: "tableStyleName",
            baseName: "TableStyleName",
            type: "string",
        },        
        {
            name: "listColumns",
            baseName: "ListColumns",
            type: "Array<ListColumn>",
        },        
        {
            name: "endRow",
            baseName: "EndRow",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ListObject.attributeTypeMap;
    }

    public link: Link;
    
    /**
     * Gets and sets whether this ListObject show total row.
     */
    public showTotals: boolean;
    
    /**
     * Gets and the built-in table style.
     */
    public tableStyleType: string;
    
    /**
     * Gets and sets the display name.Gets the data range of the ListObject.
     */
    public displayName: string;
    
    /**
     * Gets and sets whether this ListObject show header row.             
     */
    public showHeaderRow: boolean;
    
    /**
     * Gets the start column of the range.
     */
    public startColumn: number;
    
    /**
     * Indicates whether the last column in the table should have the style applied.
     */
    public showTableStyleLastColumn: boolean;
    
    /**
     * Indicates whether column stripe formatting is applied.
     */
    public showTableStyleColumnStripes: boolean;
    
    /**
     * Inidicates whether the first column in the table should have the style applied.
     */
    public showTableStyleFirstColumn: boolean;
    
    /**
     * Gets the start row of the range.
     */
    public startRow: number;
    
    /**
     * Gets auto filter.             
     */
    public autoFilter: AutoFilter;
    
    /**
     * Indicates whether row stripe formatting is applied.
     */
    public showTableStyleRowStripes: boolean;
    
    /**
     * Gets the end column of the range.
     */
    public endColumn: number;
    
    /**
     * Gets and sets the table style name.
     */
    public tableStyleName: string;
    
    /**
     * Gets ListColumns of the ListObject.
     */
    public listColumns: Array<ListColumn>;
    
    /**
     * Gets the end row of the range.
     */
    public endRow: number;
    
    public constructor(init?: Partial<ListObject>) {
        
        Object.assign(this, init);
    }        
}

export class ListObjectOperateParameter extends OperateParameter {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "listObject",
            baseName: "ListObject",
            type: "ListObject",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ListObjectOperateParameter.attributeTypeMap);
    }

    public listObject: ListObject;
    
    public constructor(init?: Partial<ListObjectOperateParameter>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class ListObjectResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "listObject",
            baseName: "ListObject",
            type: "ListObject",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ListObjectResponse.attributeTypeMap);
    }

    public listObject: ListObject;
    
    public constructor(init?: Partial<ListObjectResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class ListObjects {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "listObjectList",
            baseName: "ListObjectList",
            type: "Array<LinkElement>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ListObjects.attributeTypeMap;
    }

    public link: Link;
    
    public listObjectList: Array<LinkElement>;
    
    public constructor(init?: Partial<ListObjects>) {
        
        Object.assign(this, init);
    }        
}

export class ListObjectsResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "listObjects",
            baseName: "ListObjects",
            type: "ListObjects",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ListObjectsResponse.attributeTypeMap);
    }

    public listObjects: ListObjects;
    
    public constructor(init?: Partial<ListObjectsResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class MergedCell {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "startRow",
            baseName: "StartRow",
            type: "number",
        },        
        {
            name: "startColumn",
            baseName: "StartColumn",
            type: "number",
        },        
        {
            name: "endColumn",
            baseName: "EndColumn",
            type: "number",
        },        
        {
            name: "endRow",
            baseName: "EndRow",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MergedCell.attributeTypeMap;
    }

    public link: Link;
    
    public startRow: number;
    
    public startColumn: number;
    
    public endColumn: number;
    
    public endRow: number;
    
    public constructor(init?: Partial<MergedCell>) {
        
        Object.assign(this, init);
    }        
}

export class MergedCellResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "mergedCell",
            baseName: "MergedCell",
            type: "MergedCell",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MergedCellResponse.attributeTypeMap);
    }

    public mergedCell: MergedCell;
    
    public constructor(init?: Partial<MergedCellResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class MergedCells {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "count",
            baseName: "Count",
            type: "number",
        },        
        {
            name: "mergedCellList",
            baseName: "MergedCellList",
            type: "Array<LinkElement>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MergedCells.attributeTypeMap;
    }

    public link: Link;
    
    public count: number;
    
    public mergedCellList: Array<LinkElement>;
    
    public constructor(init?: Partial<MergedCells>) {
        
        Object.assign(this, init);
    }        
}

export class MergedCellsResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "mergedCells",
            baseName: "MergedCells",
            type: "MergedCells",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MergedCellsResponse.attributeTypeMap);
    }

    public mergedCells: MergedCells;
    
    public constructor(init?: Partial<MergedCellsResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class Name {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "comment",
            baseName: "Comment",
            type: "string",
        },        
        {
            name: "text",
            baseName: "Text",
            type: "string",
        },        
        {
            name: "worksheetIndex",
            baseName: "WorksheetIndex",
            type: "number",
        },        
        {
            name: "r1C1RefersTo",
            baseName: "R1C1RefersTo",
            type: "string",
        },        
        {
            name: "refersTo",
            baseName: "RefersTo",
            type: "string",
        },        
        {
            name: "isReferred",
            baseName: "IsReferred",
            type: "boolean",
        },        
        {
            name: "isVisible",
            baseName: "IsVisible",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Name.attributeTypeMap;
    }

    public link: Link;
    
    public comment: string;
    
    public text: string;
    
    public worksheetIndex: number;
    
    public r1C1RefersTo: string;
    
    public refersTo: string;
    
    public isReferred: boolean;
    
    public isVisible: boolean;
    
    public constructor(init?: Partial<Name>) {
        
        Object.assign(this, init);
    }        
}

export class NameResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "name",
            baseName: "Name",
            type: "Name",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(NameResponse.attributeTypeMap);
    }

    public name: Name;
    
    public constructor(init?: Partial<NameResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class Names {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "count",
            baseName: "Count",
            type: "number",
        },        
        {
            name: "nameList",
            baseName: "NameList",
            type: "Array<LinkElement>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Names.attributeTypeMap;
    }

    public link: Link;
    
    public count: number;
    
    public nameList: Array<LinkElement>;
    
    public constructor(init?: Partial<Names>) {
        
        Object.assign(this, init);
    }        
}

export class NamesResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "names",
            baseName: "Names",
            type: "Names",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(NamesResponse.attributeTypeMap);
    }

    public names: Names;
    
    public constructor(init?: Partial<NamesResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class OdsSaveOptions extends SaveOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OdsSaveOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<OdsSaveOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class OleObjectResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "oleObject",
            baseName: "OleObject",
            type: "OleObject",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OleObjectResponse.attributeTypeMap);
    }

    public oleObject: OleObject;
    
    public constructor(init?: Partial<OleObjectResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class OleObjects {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "oleObjectList",
            baseName: "OleObjectList",
            type: "Array<LinkElement>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return OleObjects.attributeTypeMap;
    }

    public link: Link;
    
    public oleObjectList: Array<LinkElement>;
    
    public constructor(init?: Partial<OleObjects>) {
        
        Object.assign(this, init);
    }        
}

export class OleObjectsResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "oleObjects",
            baseName: "OleObjects",
            type: "OleObjects",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OleObjectsResponse.attributeTypeMap);
    }

    public oleObjects: OleObjects;
    
    public constructor(init?: Partial<OleObjectsResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class OoxmlSaveOptions extends SaveOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "exportCellName",
            baseName: "ExportCellName",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OoxmlSaveOptions.attributeTypeMap);
    }

    public exportCellName: boolean;
    
    public constructor(init?: Partial<OoxmlSaveOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class PageBreakOperateParameter extends OperateParameter {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "index",
            baseName: "Index",
            type: "number",
        },        
        {
            name: "endIndex",
            baseName: "EndIndex",
            type: "number",
        },        
        {
            name: "column",
            baseName: "Column",
            type: "number",
        },        
        {
            name: "startIndex",
            baseName: "StartIndex",
            type: "number",
        },        
        {
            name: "pageBreakType",
            baseName: "PageBreakType",
            type: "string",
        },        
        {
            name: "row",
            baseName: "Row",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PageBreakOperateParameter.attributeTypeMap);
    }

    public index: number;
    
    public endIndex: number;
    
    public column: number;
    
    public startIndex: number;
    
    public pageBreakType: string;
    
    public row: number;
    
    public constructor(init?: Partial<PageBreakOperateParameter>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class PageSectionsResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "pageSections",
            baseName: "PageSections",
            type: "Array<PageSection>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PageSectionsResponse.attributeTypeMap);
    }

    public pageSections: Array<PageSection>;
    
    public constructor(init?: Partial<PageSectionsResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * excel print page setting
 */
export class PageSetup {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "isHFDiffFirst",
            baseName: "IsHFDiffFirst",
            type: "boolean",
        },        
        {
            name: "fitToPagesWide",
            baseName: "FitToPagesWide",
            type: "number",
        },        
        {
            name: "printQuality",
            baseName: "PrintQuality",
            type: "number",
        },        
        {
            name: "printDraft",
            baseName: "PrintDraft",
            type: "boolean",
        },        
        {
            name: "firstPageNumber",
            baseName: "FirstPageNumber",
            type: "number",
        },        
        {
            name: "paperSize",
            baseName: "PaperSize",
            type: "string",
        },        
        {
            name: "printComments",
            baseName: "PrintComments",
            type: "string",
        },        
        {
            name: "printErrors",
            baseName: "PrintErrors",
            type: "string",
        },        
        {
            name: "centerVertically",
            baseName: "CenterVertically",
            type: "boolean",
        },        
        {
            name: "isPercentScale",
            baseName: "IsPercentScale",
            type: "boolean",
        },        
        {
            name: "blackAndWhite",
            baseName: "BlackAndWhite",
            type: "boolean",
        },        
        {
            name: "printTitleColumns",
            baseName: "PrintTitleColumns",
            type: "string",
        },        
        {
            name: "isHFAlignMargins",
            baseName: "IsHFAlignMargins",
            type: "boolean",
        },        
        {
            name: "printArea",
            baseName: "PrintArea",
            type: "string",
        },        
        {
            name: "footerMargin",
            baseName: "FooterMargin",
            type: "number",
        },        
        {
            name: "leftMargin",
            baseName: "LeftMargin",
            type: "number",
        },        
        {
            name: "centerHorizontally",
            baseName: "CenterHorizontally",
            type: "boolean",
        },        
        {
            name: "headerMargin",
            baseName: "HeaderMargin",
            type: "number",
        },        
        {
            name: "topMargin",
            baseName: "TopMargin",
            type: "number",
        },        
        {
            name: "footer",
            baseName: "Footer",
            type: "Array<PageSection>",
        },        
        {
            name: "fitToPagesTall",
            baseName: "FitToPagesTall",
            type: "number",
        },        
        {
            name: "isHFScaleWithDoc",
            baseName: "IsHFScaleWithDoc",
            type: "boolean",
        },        
        {
            name: "printHeadings",
            baseName: "PrintHeadings",
            type: "boolean",
        },        
        {
            name: "zoom",
            baseName: "Zoom",
            type: "number",
        },        
        {
            name: "printTitleRows",
            baseName: "PrintTitleRows",
            type: "string",
        },        
        {
            name: "order",
            baseName: "Order",
            type: "string",
        },        
        {
            name: "printCopies",
            baseName: "PrintCopies",
            type: "number",
        },        
        {
            name: "orientation",
            baseName: "Orientation",
            type: "string",
        },        
        {
            name: "rightMargin",
            baseName: "RightMargin",
            type: "number",
        },        
        {
            name: "printGridlines",
            baseName: "PrintGridlines",
            type: "boolean",
        },        
        {
            name: "isAutoFirstPageNumber",
            baseName: "IsAutoFirstPageNumber",
            type: "boolean",
        },        
        {
            name: "header",
            baseName: "Header",
            type: "Array<PageSection>",
        },        
        {
            name: "isHFDiffOddEven",
            baseName: "IsHFDiffOddEven",
            type: "boolean",
        },        
        {
            name: "bottomMargin",
            baseName: "BottomMargin",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PageSetup.attributeTypeMap;
    }

    public link: Link;
    
    /**
     * True means that the header/footer of the first page is different with other pages.
     */
    public isHFDiffFirst: boolean;
    
    /**
     * Represents the number of pages wide the worksheet will be scaled to when it's printed.
     */
    public fitToPagesWide: number;
    
    /**
     * Represents the print quality.
     */
    public printQuality: number;
    
    /**
     * Represents if the sheet will be printed without graphics.
     */
    public printDraft: boolean;
    
    /**
     * Represents the first page number that will be used when this sheet is printed.
     */
    public firstPageNumber: number;
    
    /**
     * Represents the size of the paper.
     */
    public paperSize: string;
    
    /**
     * Represents the way comments are printed with the sheet.
     */
    public printComments: string;
    
    /**
     * Specifies the type of print error displayed.
     */
    public printErrors: string;
    
    /**
     * Represent if the sheet is printed centered vertically.
     */
    public centerVertically: boolean;
    
    /**
     * If this property is False, the FitToPagesWide and FitToPagesTall properties control how the worksheet is scaled.
     */
    public isPercentScale: boolean;
    
    /**
     * Represents if elements of the document will be printed in black and white. True/False
     */
    public blackAndWhite: boolean;
    
    /**
     * Represents the columns that contain the cells to be repeated on the left side of each page.
     */
    public printTitleColumns: string;
    
    /**
     * Indicates whether header and footer margins are aligned with the page margins.Only applies for Excel 2007.
     */
    public isHFAlignMargins: boolean;
    
    /**
     * Represents the range to be printed.
     */
    public printArea: string;
    
    /**
     * Represents the distance from the bottom of the page to the footer, in unit of centimeters.
     */
    public footerMargin: number;
    
    /**
     * Represents the size of the left margin, in unit of centimeters.
     */
    public leftMargin: number;
    
    /**
     * Represent if the sheet is printed centered horizontally.
     */
    public centerHorizontally: boolean;
    
    /**
     * Represents the distance from the top of the page to the header, in unit of centimeters.
     */
    public headerMargin: number;
    
    /**
     * Represents the size of the top margin, in unit of centimeters.
     */
    public topMargin: number;
    
    /**
     * Represents the page footor.
     */
    public footer: Array<PageSection>;
    
    /**
     * Represents the number of pages tall the worksheet will be scaled to when it's printed.
     */
    public fitToPagesTall: number;
    
    /**
     * Indicates whether header and footer are scaled with document scaling.Only applies for Excel 2007. 
     */
    public isHFScaleWithDoc: boolean;
    
    /**
     * Represents if row and column headings are printed with this page.
     */
    public printHeadings: boolean;
    
    /**
     * Represents the scaling factor in percent. It should be between 10 and 400.
     */
    public zoom: number;
    
    /**
     * Represents the rows that contain the cells to be repeated at the top of each page.
     */
    public printTitleRows: string;
    
    /**
     * Represents the order that Microsoft Excel uses to number pages when printing a large worksheet.
     */
    public order: string;
    
    /**
     * Get and sets number of copies to print.
     */
    public printCopies: number;
    
    /**
     * Represents page print orientation.
     */
    public orientation: string;
    
    /**
     * Represents the size of the right margin, in unit of centimeters.
     */
    public rightMargin: number;
    
    /**
     * Represents if cell gridlines are printed on the page.
     */
    public printGridlines: boolean;
    
    /**
     * Indicates whether the first the page number is automatically assigned.
     */
    public isAutoFirstPageNumber: boolean;
    
    /**
     * Represents the page header.
     */
    public header: Array<PageSection>;
    
    /**
     * True means that the header/footer of the odd pages is different with odd pages.
     */
    public isHFDiffOddEven: boolean;
    
    /**
     * Represents the size of the bottom margin, in unit of centimeters.
     */
    public bottomMargin: number;
    
    public constructor(init?: Partial<PageSetup>) {
        
        Object.assign(this, init);
    }        
}

export class PageSetupOperateParameter extends OperateParameter {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "pageSetup",
            baseName: "PageSetup",
            type: "PageSetup",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PageSetupOperateParameter.attributeTypeMap);
    }

    public pageSetup: PageSetup;
    
    public constructor(init?: Partial<PageSetupOperateParameter>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class PageSetupResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "pageSetup",
            baseName: "PageSetup",
            type: "PageSetup",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PageSetupResponse.attributeTypeMap);
    }

    public pageSetup: PageSetup;
    
    public constructor(init?: Partial<PageSetupResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class PdfSaveOptions extends SaveOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "calculateFormula",
            baseName: "CalculateFormula",
            type: "boolean",
        },        
        {
            name: "checkFontCompatibility",
            baseName: "CheckFontCompatibility",
            type: "boolean",
        },        
        {
            name: "onePagePerSheet",
            baseName: "OnePagePerSheet",
            type: "boolean",
        },        
        {
            name: "compliance",
            baseName: "Compliance",
            type: "string",
        },        
        {
            name: "defaultFont",
            baseName: "DefaultFont",
            type: "string",
        },        
        {
            name: "printingPageType",
            baseName: "PrintingPageType",
            type: "string",
        },        
        {
            name: "imageType",
            baseName: "ImageType",
            type: "string",
        },        
        {
            name: "desiredPPI",
            baseName: "desiredPPI",
            type: "number",
        },        
        {
            name: "jpegQuality",
            baseName: "jpegQuality",
            type: "number",
        },        
        {
            name: "securityOptions",
            baseName: "SecurityOptions",
            type: "PdfSecurityOptions",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PdfSaveOptions.attributeTypeMap);
    }

    public calculateFormula: boolean;
    
    public checkFontCompatibility: boolean;
    
    public onePagePerSheet: boolean;
    
    public compliance: string;
    
    public defaultFont: string;
    
    public printingPageType: string;
    
    public imageType: string;
    
    public desiredPPI: number;
    
    public jpegQuality: number;
    
    public securityOptions: PdfSecurityOptions;
    
    public constructor(init?: Partial<PdfSaveOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class PictureResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "picture",
            baseName: "Picture",
            type: "Picture",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PictureResponse.attributeTypeMap);
    }

    public picture: Picture;
    
    public constructor(init?: Partial<PictureResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class Pictures {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "pictureList",
            baseName: "PictureList",
            type: "Array<LinkElement>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Pictures.attributeTypeMap;
    }

    public link: Link;
    
    public pictureList: Array<LinkElement>;
    
    public constructor(init?: Partial<Pictures>) {
        
        Object.assign(this, init);
    }        
}

export class PicturesResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "pictures",
            baseName: "Pictures",
            type: "Pictures",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PicturesResponse.attributeTypeMap);
    }

    public pictures: Pictures;
    
    public constructor(init?: Partial<PicturesResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class PivotFieldResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "pivotField",
            baseName: "PivotField",
            type: "PivotField",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PivotFieldResponse.attributeTypeMap);
    }

    public pivotField: PivotField;
    
    public constructor(init?: Partial<PivotFieldResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class PivotFilterResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "pivotFilter",
            baseName: "PivotFilter",
            type: "PivotFilter",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PivotFilterResponse.attributeTypeMap);
    }

    public pivotFilter: PivotFilter;
    
    public constructor(init?: Partial<PivotFilterResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class PivotFiltersResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "pivotFilters",
            baseName: "PivotFilters",
            type: "Array<PivotFilter>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PivotFiltersResponse.attributeTypeMap);
    }

    public pivotFilters: Array<PivotFilter>;
    
    public constructor(init?: Partial<PivotFiltersResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class PivotTable {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "showPivotStyleLastColumn",
            baseName: "ShowPivotStyleLastColumn",
            type: "boolean",
        },        
        {
            name: "rowHeaderCaption",
            baseName: "RowHeaderCaption",
            type: "string",
        },        
        {
            name: "columnRange",
            baseName: "ColumnRange",
            type: "CellArea",
        },        
        {
            name: "refreshDataOnOpeningFile",
            baseName: "RefreshDataOnOpeningFile",
            type: "boolean",
        },        
        {
            name: "pageFields",
            baseName: "PageFields",
            type: "Array<PivotField>",
        },        
        {
            name: "dataFields",
            baseName: "DataFields",
            type: "Array<PivotField>",
        },        
        {
            name: "dataBodyRange",
            baseName: "DataBodyRange",
            type: "CellArea",
        },        
        {
            name: "showDrill",
            baseName: "ShowDrill",
            type: "boolean",
        },        
        {
            name: "refreshDataFlag",
            baseName: "RefreshDataFlag",
            type: "boolean",
        },        
        {
            name: "columnGrand",
            baseName: "ColumnGrand",
            type: "boolean",
        },        
        {
            name: "pivotTableStyleName",
            baseName: "PivotTableStyleName",
            type: "string",
        },        
        {
            name: "pivotFilters",
            baseName: "PivotFilters",
            type: "Array<PivotFilter>",
        },        
        {
            name: "nullString",
            baseName: "NullString",
            type: "string",
        },        
        {
            name: "itemPrintTitles",
            baseName: "ItemPrintTitles",
            type: "boolean",
        },        
        {
            name: "displayNullString",
            baseName: "DisplayNullString",
            type: "boolean",
        },        
        {
            name: "enableFieldList",
            baseName: "EnableFieldList",
            type: "boolean",
        },        
        {
            name: "tableRange2",
            baseName: "TableRange2",
            type: "CellArea",
        },        
        {
            name: "rowFields",
            baseName: "RowFields",
            type: "Array<PivotField>",
        },        
        {
            name: "pageFieldOrder",
            baseName: "PageFieldOrder",
            type: "string",
        },        
        {
            name: "autoFormatType",
            baseName: "AutoFormatType",
            type: "string",
        },        
        {
            name: "enableDataValueEditing",
            baseName: "EnableDataValueEditing",
            type: "boolean",
        },        
        {
            name: "showPivotStyleRowHeader",
            baseName: "ShowPivotStyleRowHeader",
            type: "boolean",
        },        
        {
            name: "isGridDropZones",
            baseName: "IsGridDropZones",
            type: "boolean",
        },        
        {
            name: "enableWizard",
            baseName: "EnableWizard",
            type: "boolean",
        },        
        {
            name: "showMemberPropertyTips",
            baseName: "ShowMemberPropertyTips",
            type: "boolean",
        },        
        {
            name: "altTextDescription",
            baseName: "AltTextDescription",
            type: "string",
        },        
        {
            name: "showDataTips",
            baseName: "ShowDataTips",
            type: "boolean",
        },        
        {
            name: "printTitles",
            baseName: "PrintTitles",
            type: "boolean",
        },        
        {
            name: "tableRange1",
            baseName: "TableRange1",
            type: "CellArea",
        },        
        {
            name: "showEmptyRow",
            baseName: "ShowEmptyRow",
            type: "boolean",
        },        
        {
            name: "isMultipleFieldFilters",
            baseName: "IsMultipleFieldFilters",
            type: "boolean",
        },        
        {
            name: "showEmptyCol",
            baseName: "ShowEmptyCol",
            type: "boolean",
        },        
        {
            name: "showRowHeaderCaption",
            baseName: "ShowRowHeaderCaption",
            type: "boolean",
        },        
        {
            name: "hasBlankRows",
            baseName: "HasBlankRows",
            type: "boolean",
        },        
        {
            name: "dataSource",
            baseName: "DataSource",
            type: "Array<string>",
        },        
        {
            name: "tag",
            baseName: "Tag",
            type: "string",
        },        
        {
            name: "enableDrilldown",
            baseName: "EnableDrilldown",
            type: "boolean",
        },        
        {
            name: "indent",
            baseName: "Indent",
            type: "number",
        },        
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },        
        {
            name: "rowGrand",
            baseName: "RowGrand",
            type: "boolean",
        },        
        {
            name: "grandTotalName",
            baseName: "GrandTotalName",
            type: "string",
        },        
        {
            name: "displayErrorString",
            baseName: "DisplayErrorString",
            type: "boolean",
        },        
        {
            name: "rowRange",
            baseName: "RowRange",
            type: "CellArea",
        },        
        {
            name: "isSelected",
            baseName: "IsSelected",
            type: "boolean",
        },        
        {
            name: "columnFields",
            baseName: "ColumnFields",
            type: "Array<PivotField>",
        },        
        {
            name: "columnHeaderCaption",
            baseName: "ColumnHeaderCaption",
            type: "string",
        },        
        {
            name: "showValuesRow",
            baseName: "ShowValuesRow",
            type: "boolean",
        },        
        {
            name: "enableFieldDialog",
            baseName: "EnableFieldDialog",
            type: "boolean",
        },        
        {
            name: "missingItemsLimit",
            baseName: "MissingItemsLimit",
            type: "string",
        },        
        {
            name: "showPivotStyleRowStripes",
            baseName: "ShowPivotStyleRowStripes",
            type: "boolean",
        },        
        {
            name: "manualUpdate",
            baseName: "ManualUpdate",
            type: "boolean",
        },        
        {
            name: "isAutoFormat",
            baseName: "IsAutoFormat",
            type: "boolean",
        },        
        {
            name: "displayImmediateItems",
            baseName: "DisplayImmediateItems",
            type: "boolean",
        },        
        {
            name: "errorString",
            baseName: "ErrorString",
            type: "string",
        },        
        {
            name: "customListSort",
            baseName: "CustomListSort",
            type: "boolean",
        },        
        {
            name: "mergeLabels",
            baseName: "MergeLabels",
            type: "boolean",
        },        
        {
            name: "pageFieldWrapCount",
            baseName: "PageFieldWrapCount",
            type: "number",
        },        
        {
            name: "showPivotStyleColumnStripes",
            baseName: "ShowPivotStyleColumnStripes",
            type: "boolean",
        },        
        {
            name: "fieldListSortAscending",
            baseName: "FieldListSortAscending",
            type: "boolean",
        },        
        {
            name: "altTextTitle",
            baseName: "AltTextTitle",
            type: "string",
        },        
        {
            name: "preserveFormatting",
            baseName: "PreserveFormatting",
            type: "boolean",
        },        
        {
            name: "pivotTableStyleType",
            baseName: "PivotTableStyleType",
            type: "string",
        },        
        {
            name: "dataField",
            baseName: "DataField",
            type: "PivotField",
        },        
        {
            name: "saveData",
            baseName: "SaveData",
            type: "boolean",
        },        
        {
            name: "subtotalHiddenPageItems",
            baseName: "SubtotalHiddenPageItems",
            type: "boolean",
        },        
        {
            name: "printDrill",
            baseName: "PrintDrill",
            type: "boolean",
        },        
        {
            name: "showPivotStyleColumnHeader",
            baseName: "ShowPivotStyleColumnHeader",
            type: "boolean",
        },        
        {
            name: "baseFields",
            baseName: "BaseFields",
            type: "Array<PivotField>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PivotTable.attributeTypeMap;
    }

    public link: Link;
    
    public showPivotStyleLastColumn: boolean;
    
    public rowHeaderCaption: string;
    
    public columnRange: CellArea;
    
    public refreshDataOnOpeningFile: boolean;
    
    public pageFields: Array<PivotField>;
    
    public dataFields: Array<PivotField>;
    
    public dataBodyRange: CellArea;
    
    public showDrill: boolean;
    
    public refreshDataFlag: boolean;
    
    public columnGrand: boolean;
    
    public pivotTableStyleName: string;
    
    public pivotFilters: Array<PivotFilter>;
    
    public nullString: string;
    
    public itemPrintTitles: boolean;
    
    public displayNullString: boolean;
    
    public enableFieldList: boolean;
    
    public tableRange2: CellArea;
    
    public rowFields: Array<PivotField>;
    
    public pageFieldOrder: string;
    
    public autoFormatType: string;
    
    public enableDataValueEditing: boolean;
    
    public showPivotStyleRowHeader: boolean;
    
    public isGridDropZones: boolean;
    
    public enableWizard: boolean;
    
    public showMemberPropertyTips: boolean;
    
    public altTextDescription: string;
    
    public showDataTips: boolean;
    
    public printTitles: boolean;
    
    public tableRange1: CellArea;
    
    public showEmptyRow: boolean;
    
    public isMultipleFieldFilters: boolean;
    
    public showEmptyCol: boolean;
    
    public showRowHeaderCaption: boolean;
    
    public hasBlankRows: boolean;
    
    public dataSource: Array<string>;
    
    public tag: string;
    
    public enableDrilldown: boolean;
    
    public indent: number;
    
    public name: string;
    
    public rowGrand: boolean;
    
    public grandTotalName: string;
    
    public displayErrorString: boolean;
    
    public rowRange: CellArea;
    
    public isSelected: boolean;
    
    public columnFields: Array<PivotField>;
    
    public columnHeaderCaption: string;
    
    public showValuesRow: boolean;
    
    public enableFieldDialog: boolean;
    
    public missingItemsLimit: string;
    
    public showPivotStyleRowStripes: boolean;
    
    public manualUpdate: boolean;
    
    public isAutoFormat: boolean;
    
    public displayImmediateItems: boolean;
    
    public errorString: string;
    
    public customListSort: boolean;
    
    public mergeLabels: boolean;
    
    public pageFieldWrapCount: number;
    
    public showPivotStyleColumnStripes: boolean;
    
    public fieldListSortAscending: boolean;
    
    public altTextTitle: string;
    
    public preserveFormatting: boolean;
    
    public pivotTableStyleType: string;
    
    public dataField: PivotField;
    
    public saveData: boolean;
    
    public subtotalHiddenPageItems: boolean;
    
    public printDrill: boolean;
    
    public showPivotStyleColumnHeader: boolean;
    
    public baseFields: Array<PivotField>;
    
    public constructor(init?: Partial<PivotTable>) {
        
        Object.assign(this, init);
    }        
}

export class PivotTableOperateParameter extends OperateParameter {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "pivotFieldColumns",
            baseName: "PivotFieldColumns",
            type: "Array<number>",
        },        
        {
            name: "pivotTableIndex",
            baseName: "PivotTableIndex",
            type: "number",
        },        
        {
            name: "tableName",
            baseName: "TableName",
            type: "string",
        },        
        {
            name: "useSameSource",
            baseName: "UseSameSource",
            type: "boolean",
        },        
        {
            name: "pivotFieldData",
            baseName: "PivotFieldData",
            type: "Array<number>",
        },        
        {
            name: "pivotFieldRows",
            baseName: "PivotFieldRows",
            type: "Array<number>",
        },        
        {
            name: "destCellName",
            baseName: "DestCellName",
            type: "string",
        },        
        {
            name: "sourceData",
            baseName: "SourceData",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PivotTableOperateParameter.attributeTypeMap);
    }

    public pivotFieldColumns: Array<number>;
    
    public pivotTableIndex: number;
    
    public tableName: string;
    
    public useSameSource: boolean;
    
    public pivotFieldData: Array<number>;
    
    public pivotFieldRows: Array<number>;
    
    public destCellName: string;
    
    public sourceData: string;
    
    public constructor(init?: Partial<PivotTableOperateParameter>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class PivotTableResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "pivotTable",
            baseName: "PivotTable",
            type: "PivotTable",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PivotTableResponse.attributeTypeMap);
    }

    public pivotTable: PivotTable;
    
    public constructor(init?: Partial<PivotTableResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class PivotTables {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "pivotTableList",
            baseName: "PivotTableList",
            type: "Array<LinkElement>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PivotTables.attributeTypeMap;
    }

    public link: Link;
    
    public pivotTableList: Array<LinkElement>;
    
    public constructor(init?: Partial<PivotTables>) {
        
        Object.assign(this, init);
    }        
}

export class PivotTablesResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "pivotTables",
            baseName: "PivotTables",
            type: "PivotTables",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PivotTablesResponse.attributeTypeMap);
    }

    public pivotTables: PivotTables;
    
    public constructor(init?: Partial<PivotTablesResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class RangeValueResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "cellsList",
            baseName: "CellsList",
            type: "Array<Cell>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(RangeValueResponse.attributeTypeMap);
    }

    public cellsList: Array<Cell>;
    
    public constructor(init?: Partial<RangeValueResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class RangesResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "ranges",
            baseName: "Ranges",
            type: "Ranges",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(RangesResponse.attributeTypeMap);
    }

    public ranges: Ranges;
    
    public constructor(init?: Partial<RangesResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class Row {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "index",
            baseName: "Index",
            type: "number",
        },        
        {
            name: "style",
            baseName: "Style",
            type: "LinkElement",
        },        
        {
            name: "groupLevel",
            baseName: "GroupLevel",
            type: "number",
        },        
        {
            name: "height",
            baseName: "Height",
            type: "number",
        },        
        {
            name: "isHeightMatched",
            baseName: "IsHeightMatched",
            type: "boolean",
        },        
        {
            name: "isHidden",
            baseName: "IsHidden",
            type: "boolean",
        },        
        {
            name: "isBlank",
            baseName: "IsBlank",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Row.attributeTypeMap;
    }

    public link: Link;
    
    public index: number;
    
    public style: LinkElement;
    
    public groupLevel: number;
    
    public height: number;
    
    public isHeightMatched: boolean;
    
    public isHidden: boolean;
    
    public isBlank: boolean;
    
    public constructor(init?: Partial<Row>) {
        
        Object.assign(this, init);
    }        
}

export class RowResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "row",
            baseName: "Row",
            type: "Row",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(RowResponse.attributeTypeMap);
    }

    public row: Row;
    
    public constructor(init?: Partial<RowResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class Rows {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "maxRow",
            baseName: "MaxRow",
            type: "number",
        },        
        {
            name: "rowsList",
            baseName: "RowsList",
            type: "Array<LinkElement>",
        },        
        {
            name: "rowsCount",
            baseName: "RowsCount",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Rows.attributeTypeMap;
    }

    public link: Link;
    
    public maxRow: number;
    
    public rowsList: Array<LinkElement>;
    
    public rowsCount: number;
    
    public constructor(init?: Partial<Rows>) {
        
        Object.assign(this, init);
    }        
}

export class RowsResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "rows",
            baseName: "Rows",
            type: "Rows",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(RowsResponse.attributeTypeMap);
    }

    public rows: Rows;
    
    public constructor(init?: Partial<RowsResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class SaveResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "saveResult",
            baseName: "SaveResult",
            type: "SaveResult",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SaveResponse.attributeTypeMap);
    }

    public saveResult: SaveResult;
    
    public constructor(init?: Partial<SaveResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class SaveResultTaskParameter extends TaskParameter {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "resultSource",
            baseName: "ResultSource",
            type: "string",
        },        
        {
            name: "resultDestination",
            baseName: "ResultDestination",
            type: "ResultDestination",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SaveResultTaskParameter.attributeTypeMap);
    }

    public resultSource: string;
    
    public resultDestination: ResultDestination;
    
    public constructor(init?: Partial<SaveResultTaskParameter>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class Shape {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "alternativeText",
            baseName: "AlternativeText",
            type: "string",
        },        
        {
            name: "bottom",
            baseName: "Bottom",
            type: "number",
        },        
        {
            name: "top",
            baseName: "Top",
            type: "number",
        },        
        {
            name: "width",
            baseName: "Width",
            type: "number",
        },        
        {
            name: "htmlText",
            baseName: "HtmlText",
            type: "string",
        },        
        {
            name: "textVerticalAlignment",
            baseName: "TextVerticalAlignment",
            type: "string",
        },        
        {
            name: "autoShapeType",
            baseName: "AutoShapeType",
            type: "string",
        },        
        {
            name: "isPrintable",
            baseName: "IsPrintable",
            type: "boolean",
        },        
        {
            name: "upperLeftColumn",
            baseName: "UpperLeftColumn",
            type: "number",
        },        
        {
            name: "isLockAspectRatio",
            baseName: "IsLockAspectRatio",
            type: "boolean",
        },        
        {
            name: "isGroup",
            baseName: "IsGroup",
            type: "boolean",
        },        
        {
            name: "rotationAngle",
            baseName: "RotationAngle",
            type: "number",
        },        
        {
            name: "zOrderPosition",
            baseName: "ZOrderPosition",
            type: "number",
        },        
        {
            name: "textHorizontalOverflow",
            baseName: "TextHorizontalOverflow",
            type: "string",
        },        
        {
            name: "msoDrawingType",
            baseName: "MsoDrawingType",
            type: "string",
        },        
        {
            name: "textOrientationType",
            baseName: "TextOrientationType",
            type: "string",
        },        
        {
            name: "placement",
            baseName: "Placement",
            type: "string",
        },        
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },        
        {
            name: "isWordArt",
            baseName: "IsWordArt",
            type: "boolean",
        },        
        {
            name: "linkedCell",
            baseName: "LinkedCell",
            type: "string",
        },        
        {
            name: "upperLeftRow",
            baseName: "UpperLeftRow",
            type: "number",
        },        
        {
            name: "isLocked",
            baseName: "IsLocked",
            type: "boolean",
        },        
        {
            name: "lowerRightRow",
            baseName: "LowerRightRow",
            type: "number",
        },        
        {
            name: "isTextWrapped",
            baseName: "IsTextWrapped",
            type: "boolean",
        },        
        {
            name: "y",
            baseName: "Y",
            type: "number",
        },        
        {
            name: "x",
            baseName: "X",
            type: "number",
        },        
        {
            name: "isHidden",
            baseName: "IsHidden",
            type: "boolean",
        },        
        {
            name: "left",
            baseName: "Left",
            type: "number",
        },        
        {
            name: "right",
            baseName: "Right",
            type: "number",
        },        
        {
            name: "text",
            baseName: "Text",
            type: "string",
        },        
        {
            name: "lowerRightColumn",
            baseName: "LowerRightColumn",
            type: "number",
        },        
        {
            name: "height",
            baseName: "Height",
            type: "number",
        },        
        {
            name: "textHorizontalAlignment",
            baseName: "TextHorizontalAlignment",
            type: "string",
        },        
        {
            name: "textVerticalOverflow",
            baseName: "TextVerticalOverflow",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Shape.attributeTypeMap;
    }

    public link: Link;
    
    public alternativeText: string;
    
    public bottom: number;
    
    public top: number;
    
    public width: number;
    
    public htmlText: string;
    
    public textVerticalAlignment: string;
    
    public autoShapeType: string;
    
    public isPrintable: boolean;
    
    public upperLeftColumn: number;
    
    public isLockAspectRatio: boolean;
    
    public isGroup: boolean;
    
    public rotationAngle: number;
    
    public zOrderPosition: number;
    
    public textHorizontalOverflow: string;
    
    public msoDrawingType: string;
    
    public textOrientationType: string;
    
    public placement: string;
    
    public name: string;
    
    public isWordArt: boolean;
    
    public linkedCell: string;
    
    public upperLeftRow: number;
    
    public isLocked: boolean;
    
    public lowerRightRow: number;
    
    public isTextWrapped: boolean;
    
    public y: number;
    
    public x: number;
    
    public isHidden: boolean;
    
    public left: number;
    
    public right: number;
    
    public text: string;
    
    public lowerRightColumn: number;
    
    public height: number;
    
    public textHorizontalAlignment: string;
    
    public textVerticalOverflow: string;
    
    public constructor(init?: Partial<Shape>) {
        
        Object.assign(this, init);
    }        
}

export class ShapeOperateParameter extends OperateParameter {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "shape",
            baseName: "Shape",
            type: "Shape",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ShapeOperateParameter.attributeTypeMap);
    }

    public shape: Shape;
    
    public constructor(init?: Partial<ShapeOperateParameter>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class ShapeResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "shape",
            baseName: "Shape",
            type: "Shape",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ShapeResponse.attributeTypeMap);
    }

    public shape: Shape;
    
    public constructor(init?: Partial<ShapeResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class Shapes {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "shapeList",
            baseName: "ShapeList",
            type: "Array<LinkElement>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Shapes.attributeTypeMap;
    }

    public link: Link;
    
    public shapeList: Array<LinkElement>;
    
    public constructor(init?: Partial<Shapes>) {
        
        Object.assign(this, init);
    }        
}

export class ShapesResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "shapes",
            baseName: "Shapes",
            type: "Shapes",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ShapesResponse.attributeTypeMap);
    }

    public shapes: Shapes;
    
    public constructor(init?: Partial<ShapesResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class SingleValueResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "Value",
            type: "SingleValue",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SingleValueResponse.attributeTypeMap);
    }

    public value: SingleValue;
    
    public constructor(init?: Partial<SingleValueResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class SmartMarkerTaskParameter extends TaskParameter {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "sourceWorkbook",
            baseName: "SourceWorkbook",
            type: "FileSource",
        },        
        {
            name: "xmlFile",
            baseName: "xmlFile",
            type: "FileSource",
        },        
        {
            name: "destinationWorkbook",
            baseName: "DestinationWorkbook",
            type: "FileSource",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SmartMarkerTaskParameter.attributeTypeMap);
    }

    public sourceWorkbook: FileSource;
    
    public xmlFile: FileSource;
    
    public destinationWorkbook: FileSource;
    
    public constructor(init?: Partial<SmartMarkerTaskParameter>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class SplitResultDocument {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "id",
            baseName: "Id",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return SplitResultDocument.attributeTypeMap;
    }

    public link: Link;
    
    public id: number;
    
    public constructor(init?: Partial<SplitResultDocument>) {
        
        Object.assign(this, init);
    }        
}

export class SplitResultResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "result",
            baseName: "Result",
            type: "SplitResult",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SplitResultResponse.attributeTypeMap);
    }

    /**
     * Gets or sets the splitting result.
     */
    public result: SplitResult;
    
    public constructor(init?: Partial<SplitResultResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class SplitWorkbookTaskParameter extends TaskParameter {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "destinationFileFormat",
            baseName: "DestinationFileFormat",
            type: "string",
        },        
        {
            name: "destinationFilePosition",
            baseName: "DestinationFilePosition",
            type: "FileSource",
        },        
        {
            name: "verticalResolution",
            baseName: "VerticalResolution",
            type: "number",
        },        
        {
            name: "horizontalResolution",
            baseName: "HorizontalResolution",
            type: "number",
        },        
        {
            name: "splitNameRule",
            baseName: "SplitNameRule",
            type: "string",
        },        
        {
            name: "workbook",
            baseName: "Workbook",
            type: "FileSource",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SplitWorkbookTaskParameter.attributeTypeMap);
    }

    public destinationFileFormat: string;
    
    public destinationFilePosition: FileSource;
    
    public verticalResolution: number;
    
    public horizontalResolution: number;
    
    public splitNameRule: string;
    
    public workbook: FileSource;
    
    public constructor(init?: Partial<SplitWorkbookTaskParameter>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class SpreadsheetML2003SaveOptions extends SaveOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "exportColumnIndexOfCell",
            baseName: "ExportColumnIndexOfCell",
            type: "boolean",
        },        
        {
            name: "isIndentedFormatting",
            baseName: "IsIndentedFormatting",
            type: "boolean",
        },        
        {
            name: "limitAsXls",
            baseName: "LimitAsXls",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SpreadsheetML2003SaveOptions.attributeTypeMap);
    }

    public exportColumnIndexOfCell: boolean;
    
    public isIndentedFormatting: boolean;
    
    public limitAsXls: boolean;
    
    public constructor(init?: Partial<SpreadsheetML2003SaveOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class Style {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "pattern",
            baseName: "Pattern",
            type: "string",
        },        
        {
            name: "textDirection",
            baseName: "TextDirection",
            type: "string",
        },        
        {
            name: "custom",
            baseName: "Custom",
            type: "string",
        },        
        {
            name: "shrinkToFit",
            baseName: "ShrinkToFit",
            type: "boolean",
        },        
        {
            name: "isDateTime",
            baseName: "IsDateTime",
            type: "boolean",
        },        
        {
            name: "cultureCustom",
            baseName: "CultureCustom",
            type: "string",
        },        
        {
            name: "rotationAngle",
            baseName: "RotationAngle",
            type: "number",
        },        
        {
            name: "indentLevel",
            baseName: "IndentLevel",
            type: "number",
        },        
        {
            name: "isPercent",
            baseName: "IsPercent",
            type: "boolean",
        },        
        {
            name: "foregroundColor",
            baseName: "ForegroundColor",
            type: "Color",
        },        
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },        
        {
            name: "foregroundThemeColor",
            baseName: "ForegroundThemeColor",
            type: "ThemeColor",
        },        
        {
            name: "borderCollection",
            baseName: "BorderCollection",
            type: "Array<Border>",
        },        
        {
            name: "isLocked",
            baseName: "IsLocked",
            type: "boolean",
        },        
        {
            name: "verticalAlignment",
            baseName: "VerticalAlignment",
            type: "string",
        },        
        {
            name: "backgroundColor",
            baseName: "BackgroundColor",
            type: "Color",
        },        
        {
            name: "backgroundThemeColor",
            baseName: "BackgroundThemeColor",
            type: "ThemeColor",
        },        
        {
            name: "isFormulaHidden",
            baseName: "IsFormulaHidden",
            type: "boolean",
        },        
        {
            name: "isGradient",
            baseName: "IsGradient",
            type: "boolean",
        },        
        {
            name: "number",
            baseName: "Number",
            type: "number",
        },        
        {
            name: "horizontalAlignment",
            baseName: "HorizontalAlignment",
            type: "string",
        },        
        {
            name: "isTextWrapped",
            baseName: "IsTextWrapped",
            type: "boolean",
        },        
        {
            name: "font",
            baseName: "Font",
            type: "Font",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Style.attributeTypeMap;
    }

    public link: Link;
    
    public pattern: string;
    
    public textDirection: string;
    
    public custom: string;
    
    public shrinkToFit: boolean;
    
    public isDateTime: boolean;
    
    public cultureCustom: string;
    
    public rotationAngle: number;
    
    public indentLevel: number;
    
    public isPercent: boolean;
    
    public foregroundColor: Color;
    
    public name: string;
    
    public foregroundThemeColor: ThemeColor;
    
    public borderCollection: Array<Border>;
    
    public isLocked: boolean;
    
    public verticalAlignment: string;
    
    public backgroundColor: Color;
    
    public backgroundThemeColor: ThemeColor;
    
    public isFormulaHidden: boolean;
    
    public isGradient: boolean;
    
    public number: number;
    
    public horizontalAlignment: string;
    
    public isTextWrapped: boolean;
    
    public font: Font;
    
    public constructor(init?: Partial<Style>) {
        
        Object.assign(this, init);
    }        
}

export class StyleResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "style",
            baseName: "Style",
            type: "Style",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(StyleResponse.attributeTypeMap);
    }

    public style: Style;
    
    public constructor(init?: Partial<StyleResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class SvgSaveOptions extends SaveOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "sheetIndex",
            baseName: "SheetIndex",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SvgSaveOptions.attributeTypeMap);
    }

    public sheetIndex: number;
    
    public constructor(init?: Partial<SvgSaveOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class TextItem {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "text",
            baseName: "Text",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return TextItem.attributeTypeMap;
    }

    public link: Link;
    
    public text: string;
    
    public constructor(init?: Partial<TextItem>) {
        
        Object.assign(this, init);
    }        
}

export class TextItems {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "textItemList",
            baseName: "TextItemList",
            type: "Array<TextItem>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return TextItems.attributeTypeMap;
    }

    public link: Link;
    
    public textItemList: Array<TextItem>;
    
    public constructor(init?: Partial<TextItems>) {
        
        Object.assign(this, init);
    }        
}

export class TextItemsResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "textItems",
            baseName: "TextItems",
            type: "TextItems",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TextItemsResponse.attributeTypeMap);
    }

    public textItems: TextItems;
    
    public constructor(init?: Partial<TextItemsResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class TextOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "isItalic",
            baseName: "IsItalic",
            type: "boolean",
        },        
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },        
        {
            name: "doubleSize",
            baseName: "DoubleSize",
            type: "number",
        },        
        {
            name: "color",
            baseName: "Color",
            type: "Color",
        },        
        {
            name: "isBold",
            baseName: "IsBold",
            type: "boolean",
        },        
        {
            name: "isSubscript",
            baseName: "IsSubscript",
            type: "boolean",
        },        
        {
            name: "isSuperscript",
            baseName: "IsSuperscript",
            type: "boolean",
        },        
        {
            name: "isStrikeout",
            baseName: "IsStrikeout",
            type: "boolean",
        },        
        {
            name: "underline",
            baseName: "Underline",
            type: "string",
        },        
        {
            name: "size",
            baseName: "Size",
            type: "number",
        },        
        {
            name: "outline",
            baseName: "Outline",
            type: "LineFormat",
        },        
        {
            name: "spacing",
            baseName: "Spacing",
            type: "number",
        },        
        {
            name: "kerning",
            baseName: "Kerning",
            type: "number",
        },        
        {
            name: "shadow",
            baseName: "Shadow",
            type: "ShadowEffect",
        },        
        {
            name: "fill",
            baseName: "Fill",
            type: "FillFormat",
        },        
        {
            name: "underlineColor",
            baseName: "UnderlineColor",
            type: "CellsColor",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return TextOptions.attributeTypeMap;
    }

    public isItalic: boolean;
    
    public name: string;
    
    public doubleSize: number;
    
    public color: Color;
    
    public isBold: boolean;
    
    public isSubscript: boolean;
    
    public isSuperscript: boolean;
    
    public isStrikeout: boolean;
    
    public underline: string;
    
    public size: number;
    
    public outline: LineFormat;
    
    public spacing: number;
    
    public kerning: number;
    
    public shadow: ShadowEffect;
    
    public fill: FillFormat;
    
    public underlineColor: CellsColor;
    
    public constructor(init?: Partial<TextOptions>) {
        
        Object.assign(this, init);
    }        
}

export class TitleResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "title",
            baseName: "Title",
            type: "Title",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TitleResponse.attributeTypeMap);
    }

    public title: Title;
    
    public constructor(init?: Partial<TitleResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class TxtSaveOptions extends SaveOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "quoteType",
            baseName: "QuoteType",
            type: "string",
        },        
        {
            name: "separator",
            baseName: "Separator",
            type: "string",
        },        
        {
            name: "separatorString",
            baseName: "SeparatorString",
            type: "string",
        },        
        {
            name: "alwaysQuoted",
            baseName: "AlwaysQuoted",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TxtSaveOptions.attributeTypeMap);
    }

    public quoteType: string;
    
    public separator: string;
    
    public separatorString: string;
    
    public alwaysQuoted: boolean;
    
    public constructor(init?: Partial<TxtSaveOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class Validation {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "formula2",
            baseName: "Formula2",
            type: "string",
        },        
        {
            name: "formula1",
            baseName: "Formula1",
            type: "string",
        },        
        {
            name: "showError",
            baseName: "ShowError",
            type: "boolean",
        },        
        {
            name: "errorMessage",
            baseName: "ErrorMessage",
            type: "string",
        },        
        {
            name: "inCellDropDown",
            baseName: "InCellDropDown",
            type: "boolean",
        },        
        {
            name: "showInput",
            baseName: "ShowInput",
            type: "boolean",
        },        
        {
            name: "alertStyle",
            baseName: "AlertStyle",
            type: "string",
        },        
        {
            name: "inputTitle",
            baseName: "InputTitle",
            type: "string",
        },        
        {
            name: "ignoreBlank",
            baseName: "IgnoreBlank",
            type: "boolean",
        },        
        {
            name: "value2",
            baseName: "Value2",
            type: "string",
        },        
        {
            name: "value1",
            baseName: "Value1",
            type: "string",
        },        
        {
            name: "operator",
            baseName: "Operator",
            type: "string",
        },        
        {
            name: "errorTitle",
            baseName: "ErrorTitle",
            type: "string",
        },        
        {
            name: "type",
            baseName: "Type",
            type: "string",
        },        
        {
            name: "inputMessage",
            baseName: "InputMessage",
            type: "string",
        },        
        {
            name: "areaList",
            baseName: "AreaList",
            type: "Array<CellArea>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Validation.attributeTypeMap;
    }

    public link: Link;
    
    /**
     * Represents the value or expression associated with the second part of the    data validation.             
     */
    public formula2: string;
    
    /**
     * Represents the value or expression associated with the data validation.
     */
    public formula1: string;
    
    /**
     * Indicates whether the data validation error message will be displayed whenever    the user enters invalid data.
     */
    public showError: boolean;
    
    /**
     * Represents the data validation error message.
     */
    public errorMessage: string;
    
    /**
     * Indicates whether data validation displays a drop-down list that contains    acceptable values.
     */
    public inCellDropDown: boolean;
    
    /**
     * Indicates whether the data validation input message will be displayed whenever    the user selects a cell in the data validation range.
     */
    public showInput: boolean;
    
    /**
     * Represents the validation alert style.Information,Stop,Warning             
     */
    public alertStyle: string;
    
    /**
     * Represents the title of the data-validation input dialog box.
     */
    public inputTitle: string;
    
    /**
     * Indicates whether blank values are permitted by the range data validation.
     */
    public ignoreBlank: boolean;
    
    /**
     * Represents the first value associated with the data validation.             
     */
    public value2: string;
    
    /**
     * Represents the first value associated with the data validation.
     */
    public value1: string;
    
    /**
     * Represents the operator for the data validation. Between,Equal,GreaterThan,GreaterOrEqual,LessThan,LessOrEqual,None,NotBetween,NotEqual
     */
    public operator: string;
    
    /**
     * Represents the title of the data-validation error dialog box.
     */
    public errorTitle: string;
    
    /**
     * Represents the data validation type. AnyValue ,WholeNumber,Decimal,List,Date,Time,TextLength,Custom             
     */
    public type: string;
    
    /**
     * Represents the data validation input message.
     */
    public inputMessage: string;
    
    /**
     * Represents a collection of Aspose.Cells.CellArea which contains the data     validation settings.
     */
    public areaList: Array<CellArea>;
    
    public constructor(init?: Partial<Validation>) {
        
        Object.assign(this, init);
    }        
}

export class ValidationResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "validation",
            baseName: "Validation",
            type: "Validation",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ValidationResponse.attributeTypeMap);
    }

    public validation: Validation;
    
    public constructor(init?: Partial<ValidationResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class Validations {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "count",
            baseName: "Count",
            type: "number",
        },        
        {
            name: "validationList",
            baseName: "ValidationList",
            type: "Array<LinkElement>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Validations.attributeTypeMap;
    }

    public link: Link;
    
    public count: number;
    
    public validationList: Array<LinkElement>;
    
    public constructor(init?: Partial<Validations>) {
        
        Object.assign(this, init);
    }        
}

export class ValidationsResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "validations",
            baseName: "Validations",
            type: "Validations",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ValidationsResponse.attributeTypeMap);
    }

    public validations: Validations;
    
    public constructor(init?: Partial<ValidationsResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class VerticalPageBreakResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "verticalPageBreak",
            baseName: "VerticalPageBreak",
            type: "VerticalPageBreak",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(VerticalPageBreakResponse.attributeTypeMap);
    }

    public verticalPageBreak: VerticalPageBreak;
    
    public constructor(init?: Partial<VerticalPageBreakResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class VerticalPageBreaks {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "verticalPageBreakList",
            baseName: "VerticalPageBreakList",
            type: "Array<VerticalPageBreak>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return VerticalPageBreaks.attributeTypeMap;
    }

    public link: Link;
    
    public verticalPageBreakList: Array<VerticalPageBreak>;
    
    public constructor(init?: Partial<VerticalPageBreaks>) {
        
        Object.assign(this, init);
    }        
}

export class VerticalPageBreaksResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "verticalPageBreaks",
            baseName: "VerticalPageBreaks",
            type: "VerticalPageBreaks",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(VerticalPageBreaksResponse.attributeTypeMap);
    }

    public verticalPageBreaks: VerticalPageBreaks;
    
    public constructor(init?: Partial<VerticalPageBreaksResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class WorkbookOperateParameter extends OperateParameter {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WorkbookOperateParameter.attributeTypeMap);
    }

    public constructor(init?: Partial<WorkbookOperateParameter>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class WorkbookReplaceResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "matches",
            baseName: "Matches",
            type: "number",
        },        
        {
            name: "workbook",
            baseName: "Workbook",
            type: "LinkElement",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WorkbookReplaceResponse.attributeTypeMap);
    }

    public matches: number;
    
    public workbook: LinkElement;
    
    public constructor(init?: Partial<WorkbookReplaceResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class WorkbookResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "workbook",
            baseName: "Workbook",
            type: "Workbook",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WorkbookResponse.attributeTypeMap);
    }

    public workbook: Workbook;
    
    public constructor(init?: Partial<WorkbookResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class WorkbookSettingsOperateParameter extends OperateParameter {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "workbookSettings",
            baseName: "WorkbookSettings",
            type: "WorkbookSettings",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WorkbookSettingsOperateParameter.attributeTypeMap);
    }

    public workbookSettings: WorkbookSettings;
    
    public constructor(init?: Partial<WorkbookSettingsOperateParameter>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class WorkbookSettingsResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "settings",
            baseName: "settings",
            type: "WorkbookSettings",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WorkbookSettingsResponse.attributeTypeMap);
    }

    public settings: WorkbookSettings;
    
    public constructor(init?: Partial<WorkbookSettingsResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class WorksheetReplaceResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "matches",
            baseName: "Matches",
            type: "number",
        },        
        {
            name: "worksheet",
            baseName: "Worksheet",
            type: "LinkElement",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WorksheetReplaceResponse.attributeTypeMap);
    }

    public matches: number;
    
    public worksheet: LinkElement;
    
    public constructor(init?: Partial<WorksheetReplaceResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class WorksheetResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "worksheet",
            baseName: "Worksheet",
            type: "Worksheet",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WorksheetResponse.attributeTypeMap);
    }

    public worksheet: Worksheet;
    
    public constructor(init?: Partial<WorksheetResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class Worksheets {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "worksheetList",
            baseName: "WorksheetList",
            type: "Array<LinkElement>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Worksheets.attributeTypeMap;
    }

    public link: Link;
    
    public worksheetList: Array<LinkElement>;
    
    public constructor(init?: Partial<Worksheets>) {
        
        Object.assign(this, init);
    }        
}

export class WorksheetsResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "worksheets",
            baseName: "Worksheets",
            type: "Worksheets",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WorksheetsResponse.attributeTypeMap);
    }

    public worksheets: Worksheets;
    
    public constructor(init?: Partial<WorksheetsResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class XlsSaveOptions extends SaveOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(XlsSaveOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<XlsSaveOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class XlsbSaveOptions extends SaveOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(XlsbSaveOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<XlsbSaveOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class XpsSaveOptions extends SaveOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(XpsSaveOptions.attributeTypeMap);
    }

    public constructor(init?: Partial<XpsSaveOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class AutoShape {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "alternativeText",
            baseName: "AlternativeText",
            type: "string",
        },        
        {
            name: "bottom",
            baseName: "Bottom",
            type: "number",
        },        
        {
            name: "top",
            baseName: "Top",
            type: "number",
        },        
        {
            name: "width",
            baseName: "Width",
            type: "number",
        },        
        {
            name: "htmlText",
            baseName: "HtmlText",
            type: "string",
        },        
        {
            name: "textVerticalAlignment",
            baseName: "TextVerticalAlignment",
            type: "string",
        },        
        {
            name: "autoShapeType",
            baseName: "AutoShapeType",
            type: "string",
        },        
        {
            name: "isPrintable",
            baseName: "IsPrintable",
            type: "boolean",
        },        
        {
            name: "upperLeftColumn",
            baseName: "UpperLeftColumn",
            type: "number",
        },        
        {
            name: "isLockAspectRatio",
            baseName: "IsLockAspectRatio",
            type: "boolean",
        },        
        {
            name: "isGroup",
            baseName: "IsGroup",
            type: "boolean",
        },        
        {
            name: "rotationAngle",
            baseName: "RotationAngle",
            type: "number",
        },        
        {
            name: "zOrderPosition",
            baseName: "ZOrderPosition",
            type: "number",
        },        
        {
            name: "textHorizontalOverflow",
            baseName: "TextHorizontalOverflow",
            type: "string",
        },        
        {
            name: "msoDrawingType",
            baseName: "MsoDrawingType",
            type: "string",
        },        
        {
            name: "textOrientationType",
            baseName: "TextOrientationType",
            type: "string",
        },        
        {
            name: "placement",
            baseName: "Placement",
            type: "string",
        },        
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },        
        {
            name: "isWordArt",
            baseName: "IsWordArt",
            type: "boolean",
        },        
        {
            name: "linkedCell",
            baseName: "LinkedCell",
            type: "string",
        },        
        {
            name: "upperLeftRow",
            baseName: "UpperLeftRow",
            type: "number",
        },        
        {
            name: "isLocked",
            baseName: "IsLocked",
            type: "boolean",
        },        
        {
            name: "lowerRightRow",
            baseName: "LowerRightRow",
            type: "number",
        },        
        {
            name: "isTextWrapped",
            baseName: "IsTextWrapped",
            type: "boolean",
        },        
        {
            name: "y",
            baseName: "Y",
            type: "number",
        },        
        {
            name: "x",
            baseName: "X",
            type: "number",
        },        
        {
            name: "isHidden",
            baseName: "IsHidden",
            type: "boolean",
        },        
        {
            name: "left",
            baseName: "Left",
            type: "number",
        },        
        {
            name: "right",
            baseName: "Right",
            type: "number",
        },        
        {
            name: "text",
            baseName: "Text",
            type: "string",
        },        
        {
            name: "lowerRightColumn",
            baseName: "LowerRightColumn",
            type: "number",
        },        
        {
            name: "height",
            baseName: "Height",
            type: "number",
        },        
        {
            name: "textHorizontalAlignment",
            baseName: "TextHorizontalAlignment",
            type: "string",
        },        
        {
            name: "textVerticalOverflow",
            baseName: "TextVerticalOverflow",
            type: "string",
        },        
        {
            name: "link",
            baseName: "link",
            type: "Link",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return AutoShape.attributeTypeMap;
    }

    public alternativeText: string;
    
    public bottom: number;
    
    public top: number;
    
    public width: number;
    
    public htmlText: string;
    
    public textVerticalAlignment: string;
    
    public autoShapeType: string;
    
    public isPrintable: boolean;
    
    public upperLeftColumn: number;
    
    public isLockAspectRatio: boolean;
    
    public isGroup: boolean;
    
    public rotationAngle: number;
    
    public zOrderPosition: number;
    
    public textHorizontalOverflow: string;
    
    public msoDrawingType: string;
    
    public textOrientationType: string;
    
    public placement: string;
    
    public name: string;
    
    public isWordArt: boolean;
    
    public linkedCell: string;
    
    public upperLeftRow: number;
    
    public isLocked: boolean;
    
    public lowerRightRow: number;
    
    public isTextWrapped: boolean;
    
    public y: number;
    
    public x: number;
    
    public isHidden: boolean;
    
    public left: number;
    
    public right: number;
    
    public text: string;
    
    public lowerRightColumn: number;
    
    public height: number;
    
    public textHorizontalAlignment: string;
    
    public textVerticalOverflow: string;
    
    public link: Link;
    
    public constructor(init?: Partial<AutoShape>) {
        
        Object.assign(this, init);
    }        
}

export class ChartArea {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "isInnerMode",
            baseName: "IsInnerMode",
            type: "boolean",
        },        
        {
            name: "shapeProperties",
            baseName: "ShapeProperties",
            type: "Array<LinkElement>",
        },        
        {
            name: "autoScaleFont",
            baseName: "AutoScaleFont",
            type: "boolean",
        },        
        {
            name: "area",
            baseName: "Area",
            type: "Area",
        },        
        {
            name: "height",
            baseName: "Height",
            type: "number",
        },        
        {
            name: "width",
            baseName: "Width",
            type: "number",
        },        
        {
            name: "backgroundMode",
            baseName: "BackgroundMode",
            type: "string",
        },        
        {
            name: "isAutomaticSize",
            baseName: "IsAutomaticSize",
            type: "boolean",
        },        
        {
            name: "y",
            baseName: "Y",
            type: "number",
        },        
        {
            name: "x",
            baseName: "X",
            type: "number",
        },        
        {
            name: "shadow",
            baseName: "Shadow",
            type: "boolean",
        },        
        {
            name: "font",
            baseName: "Font",
            type: "Font",
        },        
        {
            name: "border",
            baseName: "Border",
            type: "Line",
        },        
        {
            name: "link",
            baseName: "link",
            type: "Link",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ChartArea.attributeTypeMap;
    }

    public isInnerMode: boolean;
    
    public shapeProperties: Array<LinkElement>;
    
    public autoScaleFont: boolean;
    
    public area: Area;
    
    public height: number;
    
    public width: number;
    
    public backgroundMode: string;
    
    public isAutomaticSize: boolean;
    
    public y: number;
    
    public x: number;
    
    public shadow: boolean;
    
    public font: Font;
    
    public border: Line;
    
    public link: Link;
    
    public constructor(init?: Partial<ChartArea>) {
        
        Object.assign(this, init);
    }        
}

export class Legend {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "isInnerMode",
            baseName: "IsInnerMode",
            type: "boolean",
        },        
        {
            name: "shapeProperties",
            baseName: "ShapeProperties",
            type: "Array<LinkElement>",
        },        
        {
            name: "autoScaleFont",
            baseName: "AutoScaleFont",
            type: "boolean",
        },        
        {
            name: "area",
            baseName: "Area",
            type: "Area",
        },        
        {
            name: "height",
            baseName: "Height",
            type: "number",
        },        
        {
            name: "width",
            baseName: "Width",
            type: "number",
        },        
        {
            name: "backgroundMode",
            baseName: "BackgroundMode",
            type: "string",
        },        
        {
            name: "isAutomaticSize",
            baseName: "IsAutomaticSize",
            type: "boolean",
        },        
        {
            name: "y",
            baseName: "Y",
            type: "number",
        },        
        {
            name: "x",
            baseName: "X",
            type: "number",
        },        
        {
            name: "shadow",
            baseName: "Shadow",
            type: "boolean",
        },        
        {
            name: "font",
            baseName: "Font",
            type: "Font",
        },        
        {
            name: "border",
            baseName: "Border",
            type: "Line",
        },        
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "legendEntries",
            baseName: "LegendEntries",
            type: "LinkElement",
        },        
        {
            name: "position",
            baseName: "Position",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Legend.attributeTypeMap;
    }

    public isInnerMode: boolean;
    
    public shapeProperties: Array<LinkElement>;
    
    public autoScaleFont: boolean;
    
    public area: Area;
    
    public height: number;
    
    public width: number;
    
    public backgroundMode: string;
    
    public isAutomaticSize: boolean;
    
    public y: number;
    
    public x: number;
    
    public shadow: boolean;
    
    public font: Font;
    
    public border: Line;
    
    public link: Link;
    
    public legendEntries: LinkElement;
    
    public position: string;
    
    public constructor(init?: Partial<Legend>) {
        
        Object.assign(this, init);
    }        
}

export class OleObject {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "alternativeText",
            baseName: "AlternativeText",
            type: "string",
        },        
        {
            name: "bottom",
            baseName: "Bottom",
            type: "number",
        },        
        {
            name: "top",
            baseName: "Top",
            type: "number",
        },        
        {
            name: "width",
            baseName: "Width",
            type: "number",
        },        
        {
            name: "htmlText",
            baseName: "HtmlText",
            type: "string",
        },        
        {
            name: "textVerticalAlignment",
            baseName: "TextVerticalAlignment",
            type: "string",
        },        
        {
            name: "autoShapeType",
            baseName: "AutoShapeType",
            type: "string",
        },        
        {
            name: "isPrintable",
            baseName: "IsPrintable",
            type: "boolean",
        },        
        {
            name: "upperLeftColumn",
            baseName: "UpperLeftColumn",
            type: "number",
        },        
        {
            name: "isLockAspectRatio",
            baseName: "IsLockAspectRatio",
            type: "boolean",
        },        
        {
            name: "isGroup",
            baseName: "IsGroup",
            type: "boolean",
        },        
        {
            name: "rotationAngle",
            baseName: "RotationAngle",
            type: "number",
        },        
        {
            name: "zOrderPosition",
            baseName: "ZOrderPosition",
            type: "number",
        },        
        {
            name: "textHorizontalOverflow",
            baseName: "TextHorizontalOverflow",
            type: "string",
        },        
        {
            name: "msoDrawingType",
            baseName: "MsoDrawingType",
            type: "string",
        },        
        {
            name: "textOrientationType",
            baseName: "TextOrientationType",
            type: "string",
        },        
        {
            name: "placement",
            baseName: "Placement",
            type: "string",
        },        
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },        
        {
            name: "isWordArt",
            baseName: "IsWordArt",
            type: "boolean",
        },        
        {
            name: "linkedCell",
            baseName: "LinkedCell",
            type: "string",
        },        
        {
            name: "upperLeftRow",
            baseName: "UpperLeftRow",
            type: "number",
        },        
        {
            name: "isLocked",
            baseName: "IsLocked",
            type: "boolean",
        },        
        {
            name: "lowerRightRow",
            baseName: "LowerRightRow",
            type: "number",
        },        
        {
            name: "isTextWrapped",
            baseName: "IsTextWrapped",
            type: "boolean",
        },        
        {
            name: "y",
            baseName: "Y",
            type: "number",
        },        
        {
            name: "x",
            baseName: "X",
            type: "number",
        },        
        {
            name: "isHidden",
            baseName: "IsHidden",
            type: "boolean",
        },        
        {
            name: "left",
            baseName: "Left",
            type: "number",
        },        
        {
            name: "right",
            baseName: "Right",
            type: "number",
        },        
        {
            name: "text",
            baseName: "Text",
            type: "string",
        },        
        {
            name: "lowerRightColumn",
            baseName: "LowerRightColumn",
            type: "number",
        },        
        {
            name: "height",
            baseName: "Height",
            type: "number",
        },        
        {
            name: "textHorizontalAlignment",
            baseName: "TextHorizontalAlignment",
            type: "string",
        },        
        {
            name: "textVerticalOverflow",
            baseName: "TextVerticalOverflow",
            type: "string",
        },        
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "displayAsIcon",
            baseName: "DisplayAsIcon",
            type: "boolean",
        },        
        {
            name: "fileFormatType",
            baseName: "FileFormatType",
            type: "string",
        },        
        {
            name: "sourceFullName",
            baseName: "SourceFullName",
            type: "string",
        },        
        {
            name: "isAutoSize",
            baseName: "IsAutoSize",
            type: "boolean",
        },        
        {
            name: "imageSourceFullName",
            baseName: "ImageSourceFullName",
            type: "string",
        },        
        {
            name: "progID",
            baseName: "ProgID",
            type: "string",
        },        
        {
            name: "isLink",
            baseName: "IsLink",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return OleObject.attributeTypeMap;
    }

    public alternativeText: string;
    
    public bottom: number;
    
    public top: number;
    
    public width: number;
    
    public htmlText: string;
    
    public textVerticalAlignment: string;
    
    public autoShapeType: string;
    
    public isPrintable: boolean;
    
    public upperLeftColumn: number;
    
    public isLockAspectRatio: boolean;
    
    public isGroup: boolean;
    
    public rotationAngle: number;
    
    public zOrderPosition: number;
    
    public textHorizontalOverflow: string;
    
    public msoDrawingType: string;
    
    public textOrientationType: string;
    
    public placement: string;
    
    public name: string;
    
    public isWordArt: boolean;
    
    public linkedCell: string;
    
    public upperLeftRow: number;
    
    public isLocked: boolean;
    
    public lowerRightRow: number;
    
    public isTextWrapped: boolean;
    
    public y: number;
    
    public x: number;
    
    public isHidden: boolean;
    
    public left: number;
    
    public right: number;
    
    public text: string;
    
    public lowerRightColumn: number;
    
    public height: number;
    
    public textHorizontalAlignment: string;
    
    public textVerticalOverflow: string;
    
    public link: Link;
    
    public displayAsIcon: boolean;
    
    public fileFormatType: string;
    
    public sourceFullName: string;
    
    public isAutoSize: boolean;
    
    public imageSourceFullName: string;
    
    public progID: string;
    
    public isLink: boolean;
    
    public constructor(init?: Partial<OleObject>) {
        
        Object.assign(this, init);
    }        
}

export class Picture {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "alternativeText",
            baseName: "AlternativeText",
            type: "string",
        },        
        {
            name: "bottom",
            baseName: "Bottom",
            type: "number",
        },        
        {
            name: "top",
            baseName: "Top",
            type: "number",
        },        
        {
            name: "width",
            baseName: "Width",
            type: "number",
        },        
        {
            name: "htmlText",
            baseName: "HtmlText",
            type: "string",
        },        
        {
            name: "textVerticalAlignment",
            baseName: "TextVerticalAlignment",
            type: "string",
        },        
        {
            name: "autoShapeType",
            baseName: "AutoShapeType",
            type: "string",
        },        
        {
            name: "isPrintable",
            baseName: "IsPrintable",
            type: "boolean",
        },        
        {
            name: "upperLeftColumn",
            baseName: "UpperLeftColumn",
            type: "number",
        },        
        {
            name: "isLockAspectRatio",
            baseName: "IsLockAspectRatio",
            type: "boolean",
        },        
        {
            name: "isGroup",
            baseName: "IsGroup",
            type: "boolean",
        },        
        {
            name: "rotationAngle",
            baseName: "RotationAngle",
            type: "number",
        },        
        {
            name: "zOrderPosition",
            baseName: "ZOrderPosition",
            type: "number",
        },        
        {
            name: "textHorizontalOverflow",
            baseName: "TextHorizontalOverflow",
            type: "string",
        },        
        {
            name: "msoDrawingType",
            baseName: "MsoDrawingType",
            type: "string",
        },        
        {
            name: "textOrientationType",
            baseName: "TextOrientationType",
            type: "string",
        },        
        {
            name: "placement",
            baseName: "Placement",
            type: "string",
        },        
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },        
        {
            name: "isWordArt",
            baseName: "IsWordArt",
            type: "boolean",
        },        
        {
            name: "linkedCell",
            baseName: "LinkedCell",
            type: "string",
        },        
        {
            name: "upperLeftRow",
            baseName: "UpperLeftRow",
            type: "number",
        },        
        {
            name: "isLocked",
            baseName: "IsLocked",
            type: "boolean",
        },        
        {
            name: "lowerRightRow",
            baseName: "LowerRightRow",
            type: "number",
        },        
        {
            name: "isTextWrapped",
            baseName: "IsTextWrapped",
            type: "boolean",
        },        
        {
            name: "y",
            baseName: "Y",
            type: "number",
        },        
        {
            name: "x",
            baseName: "X",
            type: "number",
        },        
        {
            name: "isHidden",
            baseName: "IsHidden",
            type: "boolean",
        },        
        {
            name: "left",
            baseName: "Left",
            type: "number",
        },        
        {
            name: "right",
            baseName: "Right",
            type: "number",
        },        
        {
            name: "text",
            baseName: "Text",
            type: "string",
        },        
        {
            name: "lowerRightColumn",
            baseName: "LowerRightColumn",
            type: "number",
        },        
        {
            name: "height",
            baseName: "Height",
            type: "number",
        },        
        {
            name: "textHorizontalAlignment",
            baseName: "TextHorizontalAlignment",
            type: "string",
        },        
        {
            name: "textVerticalOverflow",
            baseName: "TextVerticalOverflow",
            type: "string",
        },        
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "sourceFullName",
            baseName: "SourceFullName",
            type: "string",
        },        
        {
            name: "borderLineColor",
            baseName: "BorderLineColor",
            type: "Color",
        },        
        {
            name: "originalHeight",
            baseName: "OriginalHeight",
            type: "number",
        },        
        {
            name: "imageFormat",
            baseName: "ImageFormat",
            type: "string",
        },        
        {
            name: "originalWidth",
            baseName: "OriginalWidth",
            type: "number",
        },        
        {
            name: "borderWeight",
            baseName: "BorderWeight",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Picture.attributeTypeMap;
    }

    public alternativeText: string;
    
    public bottom: number;
    
    public top: number;
    
    public width: number;
    
    public htmlText: string;
    
    public textVerticalAlignment: string;
    
    public autoShapeType: string;
    
    public isPrintable: boolean;
    
    public upperLeftColumn: number;
    
    public isLockAspectRatio: boolean;
    
    public isGroup: boolean;
    
    public rotationAngle: number;
    
    public zOrderPosition: number;
    
    public textHorizontalOverflow: string;
    
    public msoDrawingType: string;
    
    public textOrientationType: string;
    
    public placement: string;
    
    public name: string;
    
    public isWordArt: boolean;
    
    public linkedCell: string;
    
    public upperLeftRow: number;
    
    public isLocked: boolean;
    
    public lowerRightRow: number;
    
    public isTextWrapped: boolean;
    
    public y: number;
    
    public x: number;
    
    public isHidden: boolean;
    
    public left: number;
    
    public right: number;
    
    public text: string;
    
    public lowerRightColumn: number;
    
    public height: number;
    
    public textHorizontalAlignment: string;
    
    public textVerticalOverflow: string;
    
    public link: Link;
    
    public sourceFullName: string;
    
    public borderLineColor: Color;
    
    public originalHeight: number;
    
    public imageFormat: string;
    
    public originalWidth: number;
    
    public borderWeight: number;
    
    public constructor(init?: Partial<Picture>) {
        
        Object.assign(this, init);
    }        
}

export class Title {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "isInnerMode",
            baseName: "IsInnerMode",
            type: "boolean",
        },        
        {
            name: "shapeProperties",
            baseName: "ShapeProperties",
            type: "Array<LinkElement>",
        },        
        {
            name: "autoScaleFont",
            baseName: "AutoScaleFont",
            type: "boolean",
        },        
        {
            name: "area",
            baseName: "Area",
            type: "Area",
        },        
        {
            name: "height",
            baseName: "Height",
            type: "number",
        },        
        {
            name: "width",
            baseName: "Width",
            type: "number",
        },        
        {
            name: "backgroundMode",
            baseName: "BackgroundMode",
            type: "string",
        },        
        {
            name: "isAutomaticSize",
            baseName: "IsAutomaticSize",
            type: "boolean",
        },        
        {
            name: "y",
            baseName: "Y",
            type: "number",
        },        
        {
            name: "x",
            baseName: "X",
            type: "number",
        },        
        {
            name: "shadow",
            baseName: "Shadow",
            type: "boolean",
        },        
        {
            name: "font",
            baseName: "Font",
            type: "Font",
        },        
        {
            name: "border",
            baseName: "Border",
            type: "Line",
        },        
        {
            name: "link",
            baseName: "link",
            type: "Link",
        },        
        {
            name: "linkedSource",
            baseName: "LinkedSource",
            type: "string",
        },        
        {
            name: "text",
            baseName: "Text",
            type: "string",
        },        
        {
            name: "isVisible",
            baseName: "IsVisible",
            type: "boolean",
        },        
        {
            name: "textDirection",
            baseName: "TextDirection",
            type: "string",
        },        
        {
            name: "rotationAngle",
            baseName: "RotationAngle",
            type: "number",
        },        
        {
            name: "textVerticalAlignment",
            baseName: "TextVerticalAlignment",
            type: "string",
        },        
        {
            name: "textHorizontalAlignment",
            baseName: "TextHorizontalAlignment",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Title.attributeTypeMap;
    }

    public isInnerMode: boolean;
    
    public shapeProperties: Array<LinkElement>;
    
    public autoScaleFont: boolean;
    
    public area: Area;
    
    public height: number;
    
    public width: number;
    
    public backgroundMode: string;
    
    public isAutomaticSize: boolean;
    
    public y: number;
    
    public x: number;
    
    public shadow: boolean;
    
    public font: Font;
    
    public border: Line;
    
    public link: Link;
    
    public linkedSource: string;
    
    public text: string;
    
    public isVisible: boolean;
    
    public textDirection: string;
    
    public rotationAngle: number;
    
    public textVerticalAlignment: string;
    
    public textHorizontalAlignment: string;
    
    public constructor(init?: Partial<Title>) {
        
        Object.assign(this, init);
    }        
}

const enumsMap = {
};

const typeMap = {
            AboveAverage,
            AccessTokenResponse,
            Area,
            AutoFitterOptions,
            Border,
            CalculationOptions,
            CellArea,
            CellValue,
            CellsColor,
            Color,
            ColorFilter,
            ColorFilterRequest,
            ColorScale,
            ConditionalFormattingIcon,
            ConditionalFormattingValue,
            CopyOptions,
            CreatePivotTableRequest,
            CustomFilter,
            CustomParserConfig,
            DataBar,
            DataBarBorder,
            DataSorter,
            DynamicFilter,
            FileSource,
            FillFormat,
            FilterColumn,
            Font,
            FontSetting,
            GradientFill,
            GradientFillStop,
            HorizontalPageBreak,
            IconFilter,
            IconSet,
            ImportOption,
            Line,
            Link,
            LinkElement,
            ListColumn,
            MultipleFilter,
            MultipleFilters,
            NegativeBarFormat,
            OperateObject,
            OperateObjectPosition,
            OperateParameter,
            PageSection,
            PasswordRequest,
            PasteOptions,
            PatternFill,
            PdfSecurityOptions,
            PicFormatOption,
            PivotField,
            PivotFilter,
            PivotItem,
            PivotTableFieldRequest,
            ProtectSheetParameter,
            Range,
            RangeCopyRequest,
            RangeSetOutlineBorderRequest,
            RangeSetStyleRequest,
            Ranges,
            ResultDestination,
            SaaSposeResponse,
            SaveOptions,
            SaveResult,
            ShadowEffect,
            SingleValue,
            SolidFill,
            SortKey,
            SplitResult,
            TaskData,
            TaskDescription,
            TaskParameter,
            TextureFill,
            ThemeColor,
            TilePicOption,
            Top10,
            Top10Filter,
            ValueType,
            VerticalPageBreak,
            Workbook,
            WorkbookEncryptionRequest,
            WorkbookProtectionRequest,
            WorkbookSettings,
            Worksheet,
            WorksheetMovingRequest,
            AutoFilter,
            AutoFilterResponse,
            AutoShapeResponse,
            AutoShapes,
            AutoShapesResponse,
            Cell,
            CellResponse,
            Cells,
            CellsDocumentProperties,
            CellsDocumentPropertiesResponse,
            CellsDocumentProperty,
            CellsDocumentPropertyResponse,
            CellsObjectOperateTaskParameter,
            CellsResponse,
            Chart,
            ChartAreaResponse,
            ChartFrame,
            ChartOperateParameter,
            Charts,
            ChartsResponse,
            Column,
            ColumnResponse,
            Columns,
            ColumnsResponse,
            Comment,
            CommentResponse,
            Comments,
            CommentsResponse,
            ConditionalFormatting,
            ConditionalFormattingResponse,
            ConditionalFormattings,
            ConditionalFormattingsResponse,
            ConvertTaskParameter,
            DifSaveOptions,
            FillFormatResponse,
            FormatCondition,
            HorizontalPageBreakResponse,
            HorizontalPageBreaks,
            HorizontalPageBreaksResponse,
            Hyperlink,
            HyperlinkResponse,
            Hyperlinks,
            HyperlinksResponse,
            ImageSaveOptions,
            ImportBatchDataOption,
            ImportCSVDataOption,
            ImportDataTaskParameter,
            ImportDoubleArrayOption,
            ImportIntArrayOption,
            ImportStringArrayOption,
            LegendResponse,
            LineFormat,
            LineResponse,
            ListObject,
            ListObjectOperateParameter,
            ListObjectResponse,
            ListObjects,
            ListObjectsResponse,
            MergedCell,
            MergedCellResponse,
            MergedCells,
            MergedCellsResponse,
            Name,
            NameResponse,
            Names,
            NamesResponse,
            OdsSaveOptions,
            OleObjectResponse,
            OleObjects,
            OleObjectsResponse,
            OoxmlSaveOptions,
            PageBreakOperateParameter,
            PageSectionsResponse,
            PageSetup,
            PageSetupOperateParameter,
            PageSetupResponse,
            PdfSaveOptions,
            PictureResponse,
            Pictures,
            PicturesResponse,
            PivotFieldResponse,
            PivotFilterResponse,
            PivotFiltersResponse,
            PivotTable,
            PivotTableOperateParameter,
            PivotTableResponse,
            PivotTables,
            PivotTablesResponse,
            RangeValueResponse,
            RangesResponse,
            Row,
            RowResponse,
            Rows,
            RowsResponse,
            SaveResponse,
            SaveResultTaskParameter,
            Shape,
            ShapeOperateParameter,
            ShapeResponse,
            Shapes,
            ShapesResponse,
            SingleValueResponse,
            SmartMarkerTaskParameter,
            SplitResultDocument,
            SplitResultResponse,
            SplitWorkbookTaskParameter,
            SpreadsheetML2003SaveOptions,
            Style,
            StyleResponse,
            SvgSaveOptions,
            TextItem,
            TextItems,
            TextItemsResponse,
            TextOptions,
            TitleResponse,
            TxtSaveOptions,
            Validation,
            ValidationResponse,
            Validations,
            ValidationsResponse,
            VerticalPageBreakResponse,
            VerticalPageBreaks,
            VerticalPageBreaksResponse,
            WorkbookOperateParameter,
            WorkbookReplaceResponse,
            WorkbookResponse,
            WorkbookSettingsOperateParameter,
            WorkbookSettingsResponse,
            WorksheetReplaceResponse,
            WorksheetResponse,
            Worksheets,
            WorksheetsResponse,
            XlsSaveOptions,
            XlsbSaveOptions,
            XpsSaveOptions,
            AutoShape,
            ChartArea,
            Legend,
            OleObject,
            Picture,
            Title,
};

export {enumsMap, typeMap};

/**
 * Request model for Cells_DeleteWorksheetColumns operation.
 */
export class Cells_DeleteWorksheetColumnsRequest {
    /**
     * The workbook name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * The column index.
     */
    public columnIndex: number;

    /**
     * The columns.
     */
    public columns: number;

    /**
     * The update reference.
     */
    public updateReference: boolean;

    /**
     * The workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<Cells_DeleteWorksheetColumnsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Cells_DeleteWorksheetRow operation.
 */
export class Cells_DeleteWorksheetRowRequest {
    /**
     * The workbook name.
     */
    public name: string;

    /**
     * The worksheet bame.
     */
    public sheetName: string;

    /**
     * The row index.
     */
    public rowIndex: number;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<Cells_DeleteWorksheetRowRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Cells_DeleteWorksheetRows operation.
 */
export class Cells_DeleteWorksheetRowsRequest {
    /**
     * The workbook name.
     */
    public name: string;

    /**
     * The worksheet bame.
     */
    public sheetName: string;

    /**
     * The begin row index to be operated.
     */
    public startrow: number;

    /**
     * Number of rows to be operated.
     */
    public totalRows: number;

    /**
     * Indicates if update references in other worksheets.
     */
    public updateReference: boolean;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<Cells_DeleteWorksheetRowsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Cells_GetWorksheetCell operation.
 */
export class Cells_GetWorksheetCellRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * Worksheet name.
     */
    public sheetName: string;

    /**
     * The cell's or method name. (Method name like firstcell, endcell etc.)
     */
    public cellOrMethodName: string;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<Cells_GetWorksheetCellRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Cells_GetWorksheetCellStyle operation.
 */
export class Cells_GetWorksheetCellStyleRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * Worksheet name.
     */
    public sheetName: string;

    /**
     * Cell's name.
     */
    public cellName: string;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<Cells_GetWorksheetCellStyleRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Cells_GetWorksheetCells operation.
 */
export class Cells_GetWorksheetCellsRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * Worksheet name.
     */
    public sheetName: string;

    /**
     * Begginig offset.
     */
    public offest: number;

    /**
     * Maximum amount of cells in the response.
     */
    public count: number;

    /**
     * Document's folder name.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<Cells_GetWorksheetCellsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Cells_GetWorksheetColumn operation.
 */
export class Cells_GetWorksheetColumnRequest {
    /**
     * The workbook name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * The column index.
     */
    public columnIndex: number;

    /**
     * The workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<Cells_GetWorksheetColumnRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Cells_GetWorksheetColumns operation.
 */
export class Cells_GetWorksheetColumnsRequest {
    /**
     * The workbook name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * The workdook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<Cells_GetWorksheetColumnsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Cells_GetWorksheetRow operation.
 */
export class Cells_GetWorksheetRowRequest {
    /**
     * The workbook name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * The row index.
     */
    public rowIndex: number;

    /**
     * The workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<Cells_GetWorksheetRowRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Cells_GetWorksheetRows operation.
 */
export class Cells_GetWorksheetRowsRequest {
    /**
     * The workbook name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * The workdook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<Cells_GetWorksheetRowsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Cells_PostCellCalculate operation.
 */
export class Cells_PostCellCalculateRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets cellName
     */
    public cellName: string;

    /**
     * Gets or sets options
     */
    public options: CalculationOptions;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<Cells_PostCellCalculateRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Cells_PostCellCharacters operation.
 */
export class Cells_PostCellCharactersRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets cellName
     */
    public cellName: string;

    /**
     * Gets or sets options
     */
    public options: Array<FontSetting>;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<Cells_PostCellCharactersRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Cells_PostClearContents operation.
 */
export class Cells_PostClearContentsRequest {
    /**
     * Workbook name.
     */
    public name: string;

    /**
     * Worksheet name.
     */
    public sheetName: string;

    /**
     * The range.
     */
    public range: string;

    /**
     * The start row.
     */
    public startRow: number;

    /**
     * The start column.
     */
    public startColumn: number;

    /**
     * The end row.
     */
    public endRow: number;

    /**
     * The end column.
     */
    public endColumn: number;

    /**
     * The workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<Cells_PostClearContentsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Cells_PostClearFormats operation.
 */
export class Cells_PostClearFormatsRequest {
    /**
     * Workbook name.
     */
    public name: string;

    /**
     * Worksheet name.
     */
    public sheetName: string;

    /**
     * The range.
     */
    public range: string;

    /**
     * The start row.
     */
    public startRow: number;

    /**
     * The start column.
     */
    public startColumn: number;

    /**
     * The end row.
     */
    public endRow: number;

    /**
     * The end column.
     */
    public endColumn: number;

    /**
     * The workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<Cells_PostClearFormatsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Cells_PostColumnStyle operation.
 */
export class Cells_PostColumnStyleRequest {
    /**
     * The workbook name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * The column index.
     */
    public columnIndex: number;

    /**
     * Style dto
     */
    public style: Style;

    /**
     * The workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<Cells_PostColumnStyleRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Cells_PostCopyCellIntoCell operation.
 */
export class Cells_PostCopyCellIntoCellRequest {
    /**
     * Workbook name.
     */
    public name: string;

    /**
     * Destination cell name
     */
    public destCellName: string;

    /**
     * Destination worksheet name.
     */
    public sheetName: string;

    /**
     * Source worksheet name.
     */
    public worksheet: string;

    /**
     * Source cell name
     */
    public cellname: string;

    /**
     * Source row
     */
    public row: number;

    /**
     * Source column
     */
    public column: number;

    /**
     * Folder name
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<Cells_PostCopyCellIntoCellRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Cells_PostCopyWorksheetColumns operation.
 */
export class Cells_PostCopyWorksheetColumnsRequest {
    /**
     * The workbook name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * Source column index
     */
    public sourceColumnIndex: number;

    /**
     * Destination column index
     */
    public destinationColumnIndex: number;

    /**
     * The copied column number
     */
    public columnNumber: number;

    /**
     * The Worksheet
     */
    public worksheet: string;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<Cells_PostCopyWorksheetColumnsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Cells_PostCopyWorksheetRows operation.
 */
export class Cells_PostCopyWorksheetRowsRequest {
    /**
     * The workbook name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * Source row index
     */
    public sourceRowIndex: number;

    /**
     * Destination row index
     */
    public destinationRowIndex: number;

    /**
     * The copied row number
     */
    public rowNumber: number;

    /**
     * worksheet
     */
    public worksheet: string;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<Cells_PostCopyWorksheetRowsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Cells_PostGroupWorksheetColumns operation.
 */
export class Cells_PostGroupWorksheetColumnsRequest {
    /**
     * The workbook name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * The first column index to be operated.
     */
    public firstIndex: number;

    /**
     * The last column index to be operated.
     */
    public lastIndex: number;

    /**
     * columns visible state
     */
    public hide: boolean;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<Cells_PostGroupWorksheetColumnsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Cells_PostGroupWorksheetRows operation.
 */
export class Cells_PostGroupWorksheetRowsRequest {
    /**
     * The workbook name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * The first row index to be operated.
     */
    public firstIndex: number;

    /**
     * The last row index to be operated.
     */
    public lastIndex: number;

    /**
     * rows visible state
     */
    public hide: boolean;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<Cells_PostGroupWorksheetRowsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Cells_PostHideWorksheetColumns operation.
 */
export class Cells_PostHideWorksheetColumnsRequest {
    /**
     * The workbook name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * The begin column index to be operated.
     */
    public startColumn: number;

    /**
     * Number of columns to be operated.
     */
    public totalColumns: number;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<Cells_PostHideWorksheetColumnsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Cells_PostHideWorksheetRows operation.
 */
export class Cells_PostHideWorksheetRowsRequest {
    /**
     * The workbook name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * The begin row index to be operated.
     */
    public startrow: number;

    /**
     * Number of rows to be operated.
     */
    public totalRows: number;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<Cells_PostHideWorksheetRowsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Cells_PostRowStyle operation.
 */
export class Cells_PostRowStyleRequest {
    /**
     * The workbook name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * The row index.
     */
    public rowIndex: number;

    /**
     * Style dto
     */
    public style: Style;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<Cells_PostRowStyleRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Cells_PostSetCellHtmlString operation.
 */
export class Cells_PostSetCellHtmlStringRequest {
    /**
     * Workbook name.
     */
    public name: string;

    /**
     * Worksheet name.
     */
    public sheetName: string;

    /**
     * The cell name.
     */
    public cellName: string;

    /**
     * The workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<Cells_PostSetCellHtmlStringRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Cells_PostSetCellRangeValue operation.
 */
export class Cells_PostSetCellRangeValueRequest {
    /**
     * Workbook name.
     */
    public name: string;

    /**
     * Worksheet name.
     */
    public sheetName: string;

    /**
     * Cell area (like \"A1:C2\")
     */
    public cellarea: string;

    /**
     * Range value
     */
    public value: string;

    /**
     * Value data type (like \"int\")
     */
    public type: string;

    /**
     * Folder name
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<Cells_PostSetCellRangeValueRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Cells_PostSetWorksheetColumnWidth operation.
 */
export class Cells_PostSetWorksheetColumnWidthRequest {
    /**
     * The workbook name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * The column index.
     */
    public columnIndex: number;

    /**
     * The width.
     */
    public width: number;

    /**
     * The workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<Cells_PostSetWorksheetColumnWidthRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Cells_PostUngroupWorksheetColumns operation.
 */
export class Cells_PostUngroupWorksheetColumnsRequest {
    /**
     * The workbook name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * The first column index to be operated.
     */
    public firstIndex: number;

    /**
     * The last column index to be operated.
     */
    public lastIndex: number;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<Cells_PostUngroupWorksheetColumnsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Cells_PostUngroupWorksheetRows operation.
 */
export class Cells_PostUngroupWorksheetRowsRequest {
    /**
     * The workbook name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * The first row index to be operated.
     */
    public firstIndex: number;

    /**
     * The last row index to be operated.
     */
    public lastIndex: number;

    /**
     * Is all row to be operated
     */
    public isAll: boolean;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<Cells_PostUngroupWorksheetRowsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Cells_PostUnhideWorksheetColumns operation.
 */
export class Cells_PostUnhideWorksheetColumnsRequest {
    /**
     * The workbook name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * The begin column index to be operated.
     */
    public startcolumn: number;

    /**
     * Number of columns to be operated.
     */
    public totalColumns: number;

    /**
     * The new column width.
     */
    public width: number;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<Cells_PostUnhideWorksheetColumnsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Cells_PostUnhideWorksheetRows operation.
 */
export class Cells_PostUnhideWorksheetRowsRequest {
    /**
     * The workbook name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * The begin row index to be operated.
     */
    public startrow: number;

    /**
     * Number of rows to be operated.
     */
    public totalRows: number;

    /**
     * The new row height.
     */
    public height: number;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<Cells_PostUnhideWorksheetRowsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Cells_PostUpdateWorksheetCellStyle operation.
 */
export class Cells_PostUpdateWorksheetCellStyleRequest {
    /**
     * Workbook name.
     */
    public name: string;

    /**
     * Worksheet name.
     */
    public sheetName: string;

    /**
     * The cell name.
     */
    public cellName: string;

    /**
     * with update style settings.
     */
    public style: Style;

    /**
     * The workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<Cells_PostUpdateWorksheetCellStyleRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Cells_PostUpdateWorksheetRangeStyle operation.
 */
export class Cells_PostUpdateWorksheetRangeStyleRequest {
    /**
     * Workbook name.
     */
    public name: string;

    /**
     * Worksheet name.
     */
    public sheetName: string;

    /**
     * The range.
     */
    public range: string;

    /**
     * with update style settings.
     */
    public style: Style;

    /**
     * The workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<Cells_PostUpdateWorksheetRangeStyleRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Cells_PostUpdateWorksheetRow operation.
 */
export class Cells_PostUpdateWorksheetRowRequest {
    /**
     * The workbook name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * The row index.
     */
    public rowIndex: number;

    /**
     * The new row height.
     */
    public height: number;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<Cells_PostUpdateWorksheetRowRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Cells_PostWorksheetCellSetValue operation.
 */
export class Cells_PostWorksheetCellSetValueRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * The cell name.
     */
    public cellName: string;

    /**
     * The cell value.
     */
    public value: string;

    /**
     * The value type.
     */
    public type: string;

    /**
     * Formula for cell
     */
    public formula: string;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<Cells_PostWorksheetCellSetValueRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Cells_PostWorksheetMerge operation.
 */
export class Cells_PostWorksheetMergeRequest {
    /**
     * The workbook name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * The start row.
     */
    public startRow: number;

    /**
     * The start column.
     */
    public startColumn: number;

    /**
     * The total rows
     */
    public totalRows: number;

    /**
     * The total columns.
     */
    public totalColumns: number;

    /**
     * The workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<Cells_PostWorksheetMergeRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Cells_PostWorksheetUnmerge operation.
 */
export class Cells_PostWorksheetUnmergeRequest {
    /**
     * The workbook name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * The start row.
     */
    public startRow: number;

    /**
     * The start column.
     */
    public startColumn: number;

    /**
     * The total rows
     */
    public totalRows: number;

    /**
     * The total columns.
     */
    public totalColumns: number;

    /**
     * The workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<Cells_PostWorksheetUnmergeRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Cells_PutInsertWorksheetColumns operation.
 */
export class Cells_PutInsertWorksheetColumnsRequest {
    /**
     * The workbook name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * The column index.
     */
    public columnIndex: number;

    /**
     * The columns.
     */
    public columns: number;

    /**
     * The update reference.
     */
    public updateReference: boolean;

    /**
     * The workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<Cells_PutInsertWorksheetColumnsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Cells_PutInsertWorksheetRow operation.
 */
export class Cells_PutInsertWorksheetRowRequest {
    /**
     * The workbook name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * The new row index.
     */
    public rowIndex: number;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<Cells_PutInsertWorksheetRowRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Cells_PutInsertWorksheetRows operation.
 */
export class Cells_PutInsertWorksheetRowsRequest {
    /**
     * The workbook name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * The begin row index to be operated.
     */
    public startrow: number;

    /**
     * Number of rows to be operated.
     */
    public totalRows: number;

    /**
     * Indicates if update references in other worksheets.
     */
    public updateReference: boolean;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<Cells_PutInsertWorksheetRowsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsAutoFilter_DeleteWorksheetDateFilter operation.
 */
export class CellsAutoFilter_DeleteWorksheetDateFilterRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets fieldIndex
     */
    public fieldIndex: number;

    /**
     * Gets or sets dateTimeGroupingType
     */
    public dateTimeGroupingType: string;

    /**
     * Gets or sets year
     */
    public year: number;

    /**
     * Gets or sets month
     */
    public month: number;

    /**
     * Gets or sets day
     */
    public day: number;

    /**
     * Gets or sets hour
     */
    public hour: number;

    /**
     * Gets or sets minute
     */
    public minute: number;

    /**
     * Gets or sets second
     */
    public second: number;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsAutoFilter_DeleteWorksheetDateFilterRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsAutoFilter_DeleteWorksheetFilter operation.
 */
export class CellsAutoFilter_DeleteWorksheetFilterRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets fieldIndex
     */
    public fieldIndex: number;

    /**
     * Gets or sets criteria
     */
    public criteria: string;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsAutoFilter_DeleteWorksheetFilterRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsAutoFilter_GetWorksheetAutoFilter operation.
 */
export class CellsAutoFilter_GetWorksheetAutoFilterRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsAutoFilter_GetWorksheetAutoFilterRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsAutoFilter_PostWorksheetAutoFilterRefresh operation.
 */
export class CellsAutoFilter_PostWorksheetAutoFilterRefreshRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsAutoFilter_PostWorksheetAutoFilterRefreshRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsAutoFilter_PostWorksheetMatchBlanks operation.
 */
export class CellsAutoFilter_PostWorksheetMatchBlanksRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets fieldIndex
     */
    public fieldIndex: number;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsAutoFilter_PostWorksheetMatchBlanksRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsAutoFilter_PostWorksheetMatchNonBlanks operation.
 */
export class CellsAutoFilter_PostWorksheetMatchNonBlanksRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets fieldIndex
     */
    public fieldIndex: number;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsAutoFilter_PostWorksheetMatchNonBlanksRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsAutoFilter_PutWorksheetColorFilter operation.
 */
export class CellsAutoFilter_PutWorksheetColorFilterRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets range
     */
    public range: string;

    /**
     * Gets or sets fieldIndex
     */
    public fieldIndex: number;

    /**
     * Gets or sets colorFilter
     */
    public colorFilter: ColorFilterRequest;

    /**
     * Gets or sets matchBlanks
     */
    public matchBlanks: boolean;

    /**
     * Gets or sets refresh
     */
    public refresh: boolean;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsAutoFilter_PutWorksheetColorFilterRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsAutoFilter_PutWorksheetCustomFilter operation.
 */
export class CellsAutoFilter_PutWorksheetCustomFilterRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets range
     */
    public range: string;

    /**
     * Gets or sets fieldIndex
     */
    public fieldIndex: number;

    /**
     * Gets or sets operatorType1
     */
    public operatorType1: string;

    /**
     * Gets or sets criteria1
     */
    public criteria1: string;

    /**
     * Gets or sets isAnd
     */
    public isAnd: boolean;

    /**
     * Gets or sets operatorType2
     */
    public operatorType2: string;

    /**
     * Gets or sets criteria2
     */
    public criteria2: string;

    /**
     * Gets or sets matchBlanks
     */
    public matchBlanks: boolean;

    /**
     * Gets or sets refresh
     */
    public refresh: boolean;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsAutoFilter_PutWorksheetCustomFilterRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsAutoFilter_PutWorksheetDateFilter operation.
 */
export class CellsAutoFilter_PutWorksheetDateFilterRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets range
     */
    public range: string;

    /**
     * Gets or sets fieldIndex
     */
    public fieldIndex: number;

    /**
     * Gets or sets dateTimeGroupingType
     */
    public dateTimeGroupingType: string;

    /**
     * Gets or sets year
     */
    public year: number;

    /**
     * Gets or sets month
     */
    public month: number;

    /**
     * Gets or sets day
     */
    public day: number;

    /**
     * Gets or sets hour
     */
    public hour: number;

    /**
     * Gets or sets minute
     */
    public minute: number;

    /**
     * Gets or sets second
     */
    public second: number;

    /**
     * Gets or sets matchBlanks
     */
    public matchBlanks: boolean;

    /**
     * Gets or sets refresh
     */
    public refresh: boolean;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsAutoFilter_PutWorksheetDateFilterRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsAutoFilter_PutWorksheetDynamicFilter operation.
 */
export class CellsAutoFilter_PutWorksheetDynamicFilterRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets range
     */
    public range: string;

    /**
     * Gets or sets fieldIndex
     */
    public fieldIndex: number;

    /**
     * Gets or sets dynamicFilterType
     */
    public dynamicFilterType: string;

    /**
     * Gets or sets matchBlanks
     */
    public matchBlanks: boolean;

    /**
     * Gets or sets refresh
     */
    public refresh: boolean;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsAutoFilter_PutWorksheetDynamicFilterRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsAutoFilter_PutWorksheetFilter operation.
 */
export class CellsAutoFilter_PutWorksheetFilterRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets range
     */
    public range: string;

    /**
     * Gets or sets fieldIndex
     */
    public fieldIndex: number;

    /**
     * Gets or sets criteria
     */
    public criteria: string;

    /**
     * Gets or sets matchBlanks
     */
    public matchBlanks: boolean;

    /**
     * Gets or sets refresh
     */
    public refresh: boolean;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsAutoFilter_PutWorksheetFilterRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsAutoFilter_PutWorksheetFilterTop10 operation.
 */
export class CellsAutoFilter_PutWorksheetFilterTop10Request {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets range
     */
    public range: string;

    /**
     * Gets or sets fieldIndex
     */
    public fieldIndex: number;

    /**
     * Gets or sets isTop
     */
    public isTop: boolean;

    /**
     * Gets or sets isPercent
     */
    public isPercent: boolean;

    /**
     * Gets or sets itemCount
     */
    public itemCount: number;

    /**
     * Gets or sets matchBlanks
     */
    public matchBlanks: boolean;

    /**
     * Gets or sets refresh
     */
    public refresh: boolean;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsAutoFilter_PutWorksheetFilterTop10Request>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsAutoFilter_PutWorksheetIconFilter operation.
 */
export class CellsAutoFilter_PutWorksheetIconFilterRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets range
     */
    public range: string;

    /**
     * Gets or sets fieldIndex
     */
    public fieldIndex: number;

    /**
     * Gets or sets iconSetType
     */
    public iconSetType: string;

    /**
     * Gets or sets iconId
     */
    public iconId: number;

    /**
     * Gets or sets matchBlanks
     */
    public matchBlanks: boolean;

    /**
     * Gets or sets refresh
     */
    public refresh: boolean;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsAutoFilter_PutWorksheetIconFilterRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsAutoshapes_GetWorksheetAutoshape operation.
 */
export class CellsAutoshapes_GetWorksheetAutoshapeRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * Worksheet name.
     */
    public sheetName: string;

    /**
     * The autoshape number.
     */
    public autoshapeNumber: number;

    /**
     * Exported format.
     */
    public format: string;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsAutoshapes_GetWorksheetAutoshapeRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsAutoshapes_GetWorksheetAutoshapes operation.
 */
export class CellsAutoshapes_GetWorksheetAutoshapesRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsAutoshapes_GetWorksheetAutoshapesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsChartArea_GetChartArea operation.
 */
export class CellsChartArea_GetChartAreaRequest {
    /**
     * Workbook name.
     */
    public name: string;

    /**
     * Worksheet name.
     */
    public sheetName: string;

    /**
     * The chart index.
     */
    public chartIndex: number;

    /**
     * Workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsChartArea_GetChartAreaRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsChartArea_GetChartAreaBorder operation.
 */
export class CellsChartArea_GetChartAreaBorderRequest {
    /**
     * Workbook name.
     */
    public name: string;

    /**
     * Worksheet name.
     */
    public sheetName: string;

    /**
     * The chart index.
     */
    public chartIndex: number;

    /**
     * Workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsChartArea_GetChartAreaBorderRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsChartArea_GetChartAreaFillFormat operation.
 */
export class CellsChartArea_GetChartAreaFillFormatRequest {
    /**
     * Workbook name.
     */
    public name: string;

    /**
     * Worksheet name.
     */
    public sheetName: string;

    /**
     * The chart index.
     */
    public chartIndex: number;

    /**
     * Workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsChartArea_GetChartAreaFillFormatRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsCharts_DeleteWorksheetChartLegend operation.
 */
export class CellsCharts_DeleteWorksheetChartLegendRequest {
    /**
     * Workbook name.
     */
    public name: string;

    /**
     * Worksheet name.
     */
    public sheetName: string;

    /**
     * The chart index.
     */
    public chartIndex: number;

    /**
     * The workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsCharts_DeleteWorksheetChartLegendRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsCharts_DeleteWorksheetChartTitle operation.
 */
export class CellsCharts_DeleteWorksheetChartTitleRequest {
    /**
     * Workbook name.
     */
    public name: string;

    /**
     * Worksheet name.
     */
    public sheetName: string;

    /**
     * The chart index.
     */
    public chartIndex: number;

    /**
     * The workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsCharts_DeleteWorksheetChartTitleRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsCharts_DeleteWorksheetClearCharts operation.
 */
export class CellsCharts_DeleteWorksheetClearChartsRequest {
    /**
     * Workbook name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * The workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsCharts_DeleteWorksheetClearChartsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsCharts_DeleteWorksheetDeleteChart operation.
 */
export class CellsCharts_DeleteWorksheetDeleteChartRequest {
    /**
     * Workbook name.
     */
    public name: string;

    /**
     * Worksheet name.
     */
    public sheetName: string;

    /**
     * The chart index.
     */
    public chartIndex: number;

    /**
     * The workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsCharts_DeleteWorksheetDeleteChartRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsCharts_GetWorksheetChart operation.
 */
export class CellsCharts_GetWorksheetChartRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * Worksheet name.
     */
    public sheetName: string;

    /**
     * The chart number.
     */
    public chartNumber: number;

    /**
     * The exported file format.
     */
    public format: string;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsCharts_GetWorksheetChartRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsCharts_GetWorksheetChartLegend operation.
 */
export class CellsCharts_GetWorksheetChartLegendRequest {
    /**
     * Workbook name.
     */
    public name: string;

    /**
     * Worksheet name.
     */
    public sheetName: string;

    /**
     * The chart index.
     */
    public chartIndex: number;

    /**
     * The workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsCharts_GetWorksheetChartLegendRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsCharts_GetWorksheetChartTitle operation.
 */
export class CellsCharts_GetWorksheetChartTitleRequest {
    /**
     * Workbook name.
     */
    public name: string;

    /**
     * Worksheet name.
     */
    public sheetName: string;

    /**
     * The chart index.
     */
    public chartIndex: number;

    /**
     * The workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsCharts_GetWorksheetChartTitleRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsCharts_GetWorksheetCharts operation.
 */
export class CellsCharts_GetWorksheetChartsRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsCharts_GetWorksheetChartsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsCharts_PostWorksheetChart operation.
 */
export class CellsCharts_PostWorksheetChartRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets chartIndex
     */
    public chartIndex: number;

    /**
     * Gets or sets chart
     */
    public chart: Chart;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsCharts_PostWorksheetChartRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsCharts_PostWorksheetChartLegend operation.
 */
export class CellsCharts_PostWorksheetChartLegendRequest {
    /**
     * Workbook name.
     */
    public name: string;

    /**
     * Worksheet name.
     */
    public sheetName: string;

    /**
     * The chart index.
     */
    public chartIndex: number;

    /**
     * Gets or sets legend
     */
    public legend: Legend;

    /**
     * The workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsCharts_PostWorksheetChartLegendRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsCharts_PostWorksheetChartTitle operation.
 */
export class CellsCharts_PostWorksheetChartTitleRequest {
    /**
     * Workbook name.
     */
    public name: string;

    /**
     * Worksheet name.
     */
    public sheetName: string;

    /**
     * The chart index.
     */
    public chartIndex: number;

    /**
     * Chart title
     */
    public title: Title;

    /**
     * The workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsCharts_PostWorksheetChartTitleRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsCharts_PutWorksheetAddChart operation.
 */
export class CellsCharts_PutWorksheetAddChartRequest {
    /**
     * Workbook name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * Chart type, please refer property Type in chart resource.
     */
    public chartType: string;

    /**
     * New chart upper left row.
     */
    public upperLeftRow: number;

    /**
     * New chart upperleft column.
     */
    public upperLeftColumn: number;

    /**
     * New chart lower right row.
     */
    public lowerRightRow: number;

    /**
     * New chart lower right column.
     */
    public lowerRightColumn: number;

    /**
     * Specifies values from which to plot the data series. 
     */
    public area: string;

    /**
     * Specifies whether to plot the series from a range of cell values by row or by column. 
     */
    public isVertical: boolean;

    /**
     * Gets or sets the range of category Axis values. It can be a range of cells (such as, \"d1:e10\"). 
     */
    public categoryData: string;

    /**
     * Specifies whether auto update serial name. 
     */
    public isAutoGetSerialName: boolean;

    /**
     * Specifies chart title name.
     */
    public title: string;

    /**
     * The workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsCharts_PutWorksheetAddChartRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsCharts_PutWorksheetChartLegend operation.
 */
export class CellsCharts_PutWorksheetChartLegendRequest {
    /**
     * Workbook name.
     */
    public name: string;

    /**
     * Worksheet name.
     */
    public sheetName: string;

    /**
     * The chart index.
     */
    public chartIndex: number;

    /**
     * The workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsCharts_PutWorksheetChartLegendRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsCharts_PutWorksheetChartTitle operation.
 */
export class CellsCharts_PutWorksheetChartTitleRequest {
    /**
     * Workbook name.
     */
    public name: string;

    /**
     * Worksheet name.
     */
    public sheetName: string;

    /**
     * The chart index.
     */
    public chartIndex: number;

    /**
     * Chart title.
     */
    public title: Title;

    /**
     * The workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsCharts_PutWorksheetChartTitleRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsConditionalFormattings_DeleteWorksheetConditionalFormatting operation.
 */
export class CellsConditionalFormattings_DeleteWorksheetConditionalFormattingRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets index
     */
    public index: number;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsConditionalFormattings_DeleteWorksheetConditionalFormattingRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsConditionalFormattings_DeleteWorksheetConditionalFormattingArea operation.
 */
export class CellsConditionalFormattings_DeleteWorksheetConditionalFormattingAreaRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets startRow
     */
    public startRow: number;

    /**
     * Gets or sets startColumn
     */
    public startColumn: number;

    /**
     * Gets or sets totalRows
     */
    public totalRows: number;

    /**
     * Gets or sets totalColumns
     */
    public totalColumns: number;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsConditionalFormattings_DeleteWorksheetConditionalFormattingAreaRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsConditionalFormattings_DeleteWorksheetConditionalFormattings operation.
 */
export class CellsConditionalFormattings_DeleteWorksheetConditionalFormattingsRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsConditionalFormattings_DeleteWorksheetConditionalFormattingsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsConditionalFormattings_GetWorksheetConditionalFormatting operation.
 */
export class CellsConditionalFormattings_GetWorksheetConditionalFormattingRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets index
     */
    public index: number;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsConditionalFormattings_GetWorksheetConditionalFormattingRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsConditionalFormattings_GetWorksheetConditionalFormattings operation.
 */
export class CellsConditionalFormattings_GetWorksheetConditionalFormattingsRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsConditionalFormattings_GetWorksheetConditionalFormattingsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsConditionalFormattings_PutWorksheetConditionalFormatting operation.
 */
export class CellsConditionalFormattings_PutWorksheetConditionalFormattingRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets cellArea
     */
    public cellArea: string;

    /**
     * Gets or sets formatcondition
     */
    public formatcondition: FormatCondition;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsConditionalFormattings_PutWorksheetConditionalFormattingRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsConditionalFormattings_PutWorksheetFormatCondition operation.
 */
export class CellsConditionalFormattings_PutWorksheetFormatConditionRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets index
     */
    public index: number;

    /**
     * Gets or sets cellArea
     */
    public cellArea: string;

    /**
     * Gets or sets type
     */
    public type: string;

    /**
     * Gets or sets operatorType
     */
    public operatorType: string;

    /**
     * Gets or sets formula1
     */
    public formula1: string;

    /**
     * Gets or sets formula2
     */
    public formula2: string;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsConditionalFormattings_PutWorksheetFormatConditionRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsConditionalFormattings_PutWorksheetFormatConditionArea operation.
 */
export class CellsConditionalFormattings_PutWorksheetFormatConditionAreaRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets index
     */
    public index: number;

    /**
     * Gets or sets cellArea
     */
    public cellArea: string;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsConditionalFormattings_PutWorksheetFormatConditionAreaRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsConditionalFormattings_PutWorksheetFormatConditionCondition operation.
 */
export class CellsConditionalFormattings_PutWorksheetFormatConditionConditionRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets index
     */
    public index: number;

    /**
     * Gets or sets type
     */
    public type: string;

    /**
     * Gets or sets operatorType
     */
    public operatorType: string;

    /**
     * Gets or sets formula1
     */
    public formula1: string;

    /**
     * Gets or sets formula2
     */
    public formula2: string;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsConditionalFormattings_PutWorksheetFormatConditionConditionRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsHypelinks_DeleteWorksheetHyperlink operation.
 */
export class CellsHypelinks_DeleteWorksheetHyperlinkRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * Worksheet name.
     */
    public sheetName: string;

    /**
     * The hyperlink's index.
     */
    public hyperlinkIndex: number;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsHypelinks_DeleteWorksheetHyperlinkRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsHypelinks_DeleteWorksheetHyperlinks operation.
 */
export class CellsHypelinks_DeleteWorksheetHyperlinksRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * Worksheet name.
     */
    public sheetName: string;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsHypelinks_DeleteWorksheetHyperlinksRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsHypelinks_GetWorksheetHyperlink operation.
 */
export class CellsHypelinks_GetWorksheetHyperlinkRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * Worksheet name.
     */
    public sheetName: string;

    /**
     * The hyperlink's index.
     */
    public hyperlinkIndex: number;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsHypelinks_GetWorksheetHyperlinkRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsHypelinks_GetWorksheetHyperlinks operation.
 */
export class CellsHypelinks_GetWorksheetHyperlinksRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsHypelinks_GetWorksheetHyperlinksRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsHypelinks_PostWorksheetHyperlink operation.
 */
export class CellsHypelinks_PostWorksheetHyperlinkRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * Worksheet name.
     */
    public sheetName: string;

    /**
     * The hyperlink's index.
     */
    public hyperlinkIndex: number;

    /**
     * Hyperlink object
     */
    public hyperlink: Hyperlink;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsHypelinks_PostWorksheetHyperlinkRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsHypelinks_PutWorksheetHyperlink operation.
 */
export class CellsHypelinks_PutWorksheetHyperlinkRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * Worksheet name.
     */
    public sheetName: string;

    /**
     * Gets or sets firstRow
     */
    public firstRow: number;

    /**
     * Gets or sets firstColumn
     */
    public firstColumn: number;

    /**
     * Gets or sets totalRows
     */
    public totalRows: number;

    /**
     * Gets or sets totalColumns
     */
    public totalColumns: number;

    /**
     * Gets or sets address
     */
    public address: string;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsHypelinks_PutWorksheetHyperlinkRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsListObjects_DeleteWorksheetListObject operation.
 */
export class CellsListObjects_DeleteWorksheetListObjectRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * List object index
     */
    public listObjectIndex: number;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsListObjects_DeleteWorksheetListObjectRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsListObjects_DeleteWorksheetListObjects operation.
 */
export class CellsListObjects_DeleteWorksheetListObjectsRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsListObjects_DeleteWorksheetListObjectsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsListObjects_GetWorksheetListObject operation.
 */
export class CellsListObjects_GetWorksheetListObjectRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * list object index.
     */
    public listobjectindex: number;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsListObjects_GetWorksheetListObjectRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsListObjects_GetWorksheetListObjects operation.
 */
export class CellsListObjects_GetWorksheetListObjectsRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsListObjects_GetWorksheetListObjectsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsListObjects_PostWorksheetListObject operation.
 */
export class CellsListObjects_PostWorksheetListObjectRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * list Object index
     */
    public listObjectIndex: number;

    /**
     * listObject dto in request body.
     */
    public listObject: ListObject;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsListObjects_PostWorksheetListObjectRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsListObjects_PostWorksheetListObjectConvertToRange operation.
 */
export class CellsListObjects_PostWorksheetListObjectConvertToRangeRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets listObjectIndex
     */
    public listObjectIndex: number;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsListObjects_PostWorksheetListObjectConvertToRangeRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsListObjects_PostWorksheetListObjectSortTable operation.
 */
export class CellsListObjects_PostWorksheetListObjectSortTableRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets listObjectIndex
     */
    public listObjectIndex: number;

    /**
     * Gets or sets dataSorter
     */
    public dataSorter: DataSorter;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsListObjects_PostWorksheetListObjectSortTableRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsListObjects_PostWorksheetListObjectSummarizeWithPivotTable operation.
 */
export class CellsListObjects_PostWorksheetListObjectSummarizeWithPivotTableRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets listObjectIndex
     */
    public listObjectIndex: number;

    /**
     * Gets or sets destsheetName
     */
    public destsheetName: string;

    /**
     * Gets or sets request
     */
    public request: CreatePivotTableRequest;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsListObjects_PostWorksheetListObjectSummarizeWithPivotTableRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsListObjects_PutWorksheetListObject operation.
 */
export class CellsListObjects_PutWorksheetListObjectRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * The start row of the list range.
     */
    public startRow: number;

    /**
     * The start row of the list range.
     */
    public startColumn: number;

    /**
     * The start row of the list range.
     */
    public endRow: number;

    /**
     * The start row of the list range.
     */
    public endColumn: number;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;

    /**
     * Whether the range has headers.
     */
    public hasHeaders: boolean;
    
    public constructor(init?: Partial<CellsListObjects_PutWorksheetListObjectRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsOleObjects_DeleteWorksheetOleObject operation.
 */
export class CellsOleObjects_DeleteWorksheetOleObjectRequest {
    /**
     * The workbook name.
     */
    public name: string;

    /**
     * The worsheet name.
     */
    public sheetName: string;

    /**
     * Ole object index
     */
    public oleObjectIndex: number;

    /**
     * The workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsOleObjects_DeleteWorksheetOleObjectRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsOleObjects_DeleteWorksheetOleObjects operation.
 */
export class CellsOleObjects_DeleteWorksheetOleObjectsRequest {
    /**
     * The workbook name.
     */
    public name: string;

    /**
     * The worsheet name.
     */
    public sheetName: string;

    /**
     * The workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsOleObjects_DeleteWorksheetOleObjectsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsOleObjects_GetWorksheetOleObject operation.
 */
export class CellsOleObjects_GetWorksheetOleObjectRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * Worksheet name.
     */
    public sheetName: string;

    /**
     * The object number.
     */
    public objectNumber: number;

    /**
     * The exported object format.
     */
    public format: string;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsOleObjects_GetWorksheetOleObjectRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsOleObjects_GetWorksheetOleObjects operation.
 */
export class CellsOleObjects_GetWorksheetOleObjectsRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsOleObjects_GetWorksheetOleObjectsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsOleObjects_PostUpdateWorksheetOleObject operation.
 */
export class CellsOleObjects_PostUpdateWorksheetOleObjectRequest {
    /**
     * The workbook name.
     */
    public name: string;

    /**
     * The worsheet name.
     */
    public sheetName: string;

    /**
     * Ole object index
     */
    public oleObjectIndex: number;

    /**
     * Ole Object
     */
    public ole: OleObject;

    /**
     * The workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsOleObjects_PostUpdateWorksheetOleObjectRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsOleObjects_PutWorksheetOleObject operation.
 */
export class CellsOleObjects_PutWorksheetOleObjectRequest {
    /**
     * The workbook name.
     */
    public name: string;

    /**
     * The worsheet name.
     */
    public sheetName: string;

    /**
     * Ole Object
     */
    public oleObject: OleObject;

    /**
     * Upper left row index
     */
    public upperLeftRow: number;

    /**
     * Upper left column index
     */
    public upperLeftColumn: number;

    /**
     * Height of oleObject, in unit of pixel
     */
    public height: number;

    /**
     * Width of oleObject, in unit of pixel
     */
    public width: number;

    /**
     * OLE filename
     */
    public oleFile: string;

    /**
     * Image filename
     */
    public imageFile: string;

    /**
     * The workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsOleObjects_PutWorksheetOleObjectRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsPageBreaks_DeleteHorizontalPageBreak operation.
 */
export class CellsPageBreaks_DeleteHorizontalPageBreakRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets index
     */
    public index: number;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsPageBreaks_DeleteHorizontalPageBreakRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsPageBreaks_DeleteHorizontalPageBreaks operation.
 */
export class CellsPageBreaks_DeleteHorizontalPageBreaksRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets row
     */
    public row: number;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsPageBreaks_DeleteHorizontalPageBreaksRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsPageBreaks_DeleteVerticalPageBreak operation.
 */
export class CellsPageBreaks_DeleteVerticalPageBreakRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets index
     */
    public index: number;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsPageBreaks_DeleteVerticalPageBreakRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsPageBreaks_DeleteVerticalPageBreaks operation.
 */
export class CellsPageBreaks_DeleteVerticalPageBreaksRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets column
     */
    public column: number;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsPageBreaks_DeleteVerticalPageBreaksRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsPageBreaks_GetHorizontalPageBreak operation.
 */
export class CellsPageBreaks_GetHorizontalPageBreakRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets index
     */
    public index: number;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsPageBreaks_GetHorizontalPageBreakRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsPageBreaks_GetHorizontalPageBreaks operation.
 */
export class CellsPageBreaks_GetHorizontalPageBreaksRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsPageBreaks_GetHorizontalPageBreaksRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsPageBreaks_GetVerticalPageBreak operation.
 */
export class CellsPageBreaks_GetVerticalPageBreakRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets index
     */
    public index: number;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsPageBreaks_GetVerticalPageBreakRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsPageBreaks_GetVerticalPageBreaks operation.
 */
export class CellsPageBreaks_GetVerticalPageBreaksRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsPageBreaks_GetVerticalPageBreaksRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsPageBreaks_PutHorizontalPageBreak operation.
 */
export class CellsPageBreaks_PutHorizontalPageBreakRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets cellname
     */
    public cellname: string;

    /**
     * Gets or sets row
     */
    public row: number;

    /**
     * Gets or sets column
     */
    public column: number;

    /**
     * Gets or sets startColumn
     */
    public startColumn: number;

    /**
     * Gets or sets endColumn
     */
    public endColumn: number;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsPageBreaks_PutHorizontalPageBreakRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsPageBreaks_PutVerticalPageBreak operation.
 */
export class CellsPageBreaks_PutVerticalPageBreakRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets cellname
     */
    public cellname: string;

    /**
     * Gets or sets column
     */
    public column: number;

    /**
     * Gets or sets row
     */
    public row: number;

    /**
     * Gets or sets startRow
     */
    public startRow: number;

    /**
     * Gets or sets endRow
     */
    public endRow: number;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsPageBreaks_PutVerticalPageBreakRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsPageSetup_DeleteHeaderFooter operation.
 */
export class CellsPageSetup_DeleteHeaderFooterRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsPageSetup_DeleteHeaderFooterRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsPageSetup_GetFooter operation.
 */
export class CellsPageSetup_GetFooterRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsPageSetup_GetFooterRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsPageSetup_GetHeader operation.
 */
export class CellsPageSetup_GetHeaderRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsPageSetup_GetHeaderRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsPageSetup_GetPageSetup operation.
 */
export class CellsPageSetup_GetPageSetupRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsPageSetup_GetPageSetupRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsPageSetup_PostFooter operation.
 */
export class CellsPageSetup_PostFooterRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets section
     */
    public section: number;

    /**
     * Gets or sets script
     */
    public script: string;

    /**
     * Gets or sets isFirstPage
     */
    public isFirstPage: boolean;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsPageSetup_PostFooterRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsPageSetup_PostHeader operation.
 */
export class CellsPageSetup_PostHeaderRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets section
     */
    public section: number;

    /**
     * Gets or sets script
     */
    public script: string;

    /**
     * Gets or sets isFirstPage
     */
    public isFirstPage: boolean;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsPageSetup_PostHeaderRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsPageSetup_PostPageSetup operation.
 */
export class CellsPageSetup_PostPageSetupRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets pageSetup
     */
    public pageSetup: PageSetup;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsPageSetup_PostPageSetupRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsPictures_DeleteWorksheetPicture operation.
 */
export class CellsPictures_DeleteWorksheetPictureRequest {
    /**
     * The workbook name.
     */
    public name: string;

    /**
     * The worsheet name.
     */
    public sheetName: string;

    /**
     * Picture index
     */
    public pictureIndex: number;

    /**
     * The workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsPictures_DeleteWorksheetPictureRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsPictures_DeleteWorksheetPictures operation.
 */
export class CellsPictures_DeleteWorksheetPicturesRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * Worksheet name.
     */
    public sheetName: string;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsPictures_DeleteWorksheetPicturesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsPictures_GetWorksheetPicture operation.
 */
export class CellsPictures_GetWorksheetPictureRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * Worksheet name.
     */
    public sheetName: string;

    /**
     * The picture index.
     */
    public pictureIndex: number;

    /**
     * The exported object format.
     */
    public format: string;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsPictures_GetWorksheetPictureRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsPictures_GetWorksheetPictures operation.
 */
export class CellsPictures_GetWorksheetPicturesRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsPictures_GetWorksheetPicturesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsPictures_PostWorksheetPicture operation.
 */
export class CellsPictures_PostWorksheetPictureRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * Worksheet name.
     */
    public sheetName: string;

    /**
     * The picture's index.
     */
    public pictureIndex: number;

    /**
     * Picture object
     */
    public picture: Picture;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsPictures_PostWorksheetPictureRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsPictures_PutWorksheetAddPicture operation.
 */
export class CellsPictures_PutWorksheetAddPictureRequest {
    /**
     * The workbook name.
     */
    public name: string;

    /**
     * The worsheet name.
     */
    public sheetName: string;

    /**
     * Pictute object
     */
    public picture: Picture;

    /**
     * The image upper left row.
     */
    public upperLeftRow: number;

    /**
     * The image upper left column.
     */
    public upperLeftColumn: number;

    /**
     * The image low right row.
     */
    public lowerRightRow: number;

    /**
     * The image low right column.
     */
    public lowerRightColumn: number;

    /**
     * The picture path, if not provided the picture data is inspected in the request body.
     */
    public picturePath: string;

    /**
     * The workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsPictures_PutWorksheetAddPictureRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsPivotTables_DeletePivotTableField operation.
 */
export class CellsPivotTables_DeletePivotTableFieldRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * Pivot table index
     */
    public pivotTableIndex: number;

    /**
     * The fields area type.
     */
    public pivotFieldType: string;

    /**
     * Dto that conrains field indexes
     */
    public request: PivotTableFieldRequest;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsPivotTables_DeletePivotTableFieldRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsPivotTables_DeleteWorksheetPivotTable operation.
 */
export class CellsPivotTables_DeleteWorksheetPivotTableRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * Pivot table index
     */
    public pivotTableIndex: number;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsPivotTables_DeleteWorksheetPivotTableRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsPivotTables_DeleteWorksheetPivotTableFilter operation.
 */
export class CellsPivotTables_DeleteWorksheetPivotTableFilterRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets pivotTableIndex
     */
    public pivotTableIndex: number;

    /**
     * Gets or sets fieldIndex
     */
    public fieldIndex: number;

    /**
     * Gets or sets needReCalculate
     */
    public needReCalculate: boolean;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsPivotTables_DeleteWorksheetPivotTableFilterRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsPivotTables_DeleteWorksheetPivotTableFilters operation.
 */
export class CellsPivotTables_DeleteWorksheetPivotTableFiltersRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets pivotTableIndex
     */
    public pivotTableIndex: number;

    /**
     * Gets or sets needReCalculate
     */
    public needReCalculate: boolean;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsPivotTables_DeleteWorksheetPivotTableFiltersRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsPivotTables_DeleteWorksheetPivotTables operation.
 */
export class CellsPivotTables_DeleteWorksheetPivotTablesRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsPivotTables_DeleteWorksheetPivotTablesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsPivotTables_GetPivotTableField operation.
 */
export class CellsPivotTables_GetPivotTableFieldRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * Pivot table index
     */
    public pivotTableIndex: number;

    /**
     * The field index in the base fields.
     */
    public pivotFieldIndex: number;

    /**
     * The fields area type.
     */
    public pivotFieldType: string;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsPivotTables_GetPivotTableFieldRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsPivotTables_GetWorksheetPivotTable operation.
 */
export class CellsPivotTables_GetWorksheetPivotTableRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * Gets or sets pivottableIndex
     */
    public pivottableIndex: number;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsPivotTables_GetWorksheetPivotTableRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsPivotTables_GetWorksheetPivotTableFilter operation.
 */
export class CellsPivotTables_GetWorksheetPivotTableFilterRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets pivotTableIndex
     */
    public pivotTableIndex: number;

    /**
     * Gets or sets filterIndex
     */
    public filterIndex: number;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsPivotTables_GetWorksheetPivotTableFilterRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsPivotTables_GetWorksheetPivotTableFilters operation.
 */
export class CellsPivotTables_GetWorksheetPivotTableFiltersRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets pivotTableIndex
     */
    public pivotTableIndex: number;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsPivotTables_GetWorksheetPivotTableFiltersRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsPivotTables_GetWorksheetPivotTables operation.
 */
export class CellsPivotTables_GetWorksheetPivotTablesRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsPivotTables_GetWorksheetPivotTablesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsPivotTables_PostPivotTableCellStyle operation.
 */
export class CellsPivotTables_PostPivotTableCellStyleRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * Pivot table index
     */
    public pivotTableIndex: number;

    /**
     * Gets or sets column
     */
    public column: number;

    /**
     * Gets or sets row
     */
    public row: number;

    /**
     * Style dto in request body.
     */
    public style: Style;

    /**
     * Gets or sets needReCalculate
     */
    public needReCalculate: boolean;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsPivotTables_PostPivotTableCellStyleRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsPivotTables_PostPivotTableFieldHideItem operation.
 */
export class CellsPivotTables_PostPivotTableFieldHideItemRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets pivotTableIndex
     */
    public pivotTableIndex: number;

    /**
     * Gets or sets pivotFieldType
     */
    public pivotFieldType: string;

    /**
     * Gets or sets fieldIndex
     */
    public fieldIndex: number;

    /**
     * Gets or sets itemIndex
     */
    public itemIndex: number;

    /**
     * Gets or sets isHide
     */
    public isHide: boolean;

    /**
     * Gets or sets needReCalculate
     */
    public needReCalculate: boolean;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsPivotTables_PostPivotTableFieldHideItemRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsPivotTables_PostPivotTableFieldMoveTo operation.
 */
export class CellsPivotTables_PostPivotTableFieldMoveToRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets pivotTableIndex
     */
    public pivotTableIndex: number;

    /**
     * Gets or sets fieldIndex
     */
    public fieldIndex: number;

    /**
     * Gets or sets from
     */
    public from: string;

    /**
     * Gets or sets to
     */
    public to: string;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsPivotTables_PostPivotTableFieldMoveToRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsPivotTables_PostPivotTableStyle operation.
 */
export class CellsPivotTables_PostPivotTableStyleRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * Pivot table index
     */
    public pivotTableIndex: number;

    /**
     * Style dto in request body.
     */
    public style: Style;

    /**
     * Gets or sets needReCalculate
     */
    public needReCalculate: boolean;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsPivotTables_PostPivotTableStyleRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsPivotTables_PostWorksheetPivotTableCalculate operation.
 */
export class CellsPivotTables_PostWorksheetPivotTableCalculateRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * Pivot table index
     */
    public pivotTableIndex: number;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsPivotTables_PostWorksheetPivotTableCalculateRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsPivotTables_PostWorksheetPivotTableMove operation.
 */
export class CellsPivotTables_PostWorksheetPivotTableMoveRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets pivotTableIndex
     */
    public pivotTableIndex: number;

    /**
     * Gets or sets row
     */
    public row: number;

    /**
     * Gets or sets column
     */
    public column: number;

    /**
     * Gets or sets destCellName
     */
    public destCellName: string;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsPivotTables_PostWorksheetPivotTableMoveRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsPivotTables_PutPivotTableField operation.
 */
export class CellsPivotTables_PutPivotTableFieldRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * Pivot table index
     */
    public pivotTableIndex: number;

    /**
     * The fields area type.
     */
    public pivotFieldType: string;

    /**
     * Dto that conrains field indexes
     */
    public request: PivotTableFieldRequest;

    /**
     * Gets or sets needReCalculate
     */
    public needReCalculate: boolean;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsPivotTables_PutPivotTableFieldRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsPivotTables_PutWorksheetPivotTable operation.
 */
export class CellsPivotTables_PutWorksheetPivotTableRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * CreatePivotTableRequest dto in request body.
     */
    public request: CreatePivotTableRequest;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;

    /**
     * The data for the new PivotTable cache.
     */
    public sourceData: string;

    /**
     * The cell in the upper-left corner of the PivotTable report's destination range.
     */
    public destCellName: string;

    /**
     * The name of the new PivotTable report.
     */
    public tableName: string;

    /**
     * Indicates whether using same data source when another existing pivot table has used this data source. If the property is true, it will save memory.
     */
    public useSameSource: boolean;
    
    public constructor(init?: Partial<CellsPivotTables_PutWorksheetPivotTableRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsPivotTables_PutWorksheetPivotTableFilter operation.
 */
export class CellsPivotTables_PutWorksheetPivotTableFilterRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets pivotTableIndex
     */
    public pivotTableIndex: number;

    /**
     * Gets or sets filter
     */
    public filter: PivotFilter;

    /**
     * Gets or sets needReCalculate
     */
    public needReCalculate: boolean;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsPivotTables_PutWorksheetPivotTableFilterRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsProperties_DeleteDocumentProperties operation.
 */
export class CellsProperties_DeleteDocumentPropertiesRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsProperties_DeleteDocumentPropertiesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsProperties_DeleteDocumentProperty operation.
 */
export class CellsProperties_DeleteDocumentPropertyRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * The property name.
     */
    public propertyName: string;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsProperties_DeleteDocumentPropertyRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsProperties_GetDocumentProperties operation.
 */
export class CellsProperties_GetDocumentPropertiesRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsProperties_GetDocumentPropertiesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsProperties_GetDocumentProperty operation.
 */
export class CellsProperties_GetDocumentPropertyRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * The property name.
     */
    public propertyName: string;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsProperties_GetDocumentPropertyRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsProperties_PutDocumentProperty operation.
 */
export class CellsProperties_PutDocumentPropertyRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * The property name.
     */
    public propertyName: string;

    /**
     * with new property value.
     */
    public property: CellsDocumentProperty;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsProperties_PutDocumentPropertyRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsRanges_GetWorksheetCellsRangeValue operation.
 */
export class CellsRanges_GetWorksheetCellsRangeValueRequest {
    /**
     * workbook name
     */
    public name: string;

    /**
     * worksheet name
     */
    public sheetName: string;

    /**
     * range name, for example: 'A1:B2' or 'range_name1'
     */
    public namerange: string;

    /**
     * the first row of the range
     */
    public firstRow: number;

    /**
     * the first column of the range
     */
    public firstColumn: number;

    /**
     * the count of rows in the range
     */
    public rowCount: number;

    /**
     * the count of columns in the range
     */
    public columnCount: number;

    /**
     * Workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsRanges_GetWorksheetCellsRangeValueRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsRanges_PostWorksheetCellsRangeColumnWidth operation.
 */
export class CellsRanges_PostWorksheetCellsRangeColumnWidthRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets value
     */
    public value: number;

    /**
     * Gets or sets range
     */
    public range: Range;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsRanges_PostWorksheetCellsRangeColumnWidthRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsRanges_PostWorksheetCellsRangeMerge operation.
 */
export class CellsRanges_PostWorksheetCellsRangeMergeRequest {
    /**
     * workbook name
     */
    public name: string;

    /**
     * worksheet name
     */
    public sheetName: string;

    /**
     * range in worksheet 
     */
    public range: Range;

    /**
     * Workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsRanges_PostWorksheetCellsRangeMergeRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsRanges_PostWorksheetCellsRangeMoveTo operation.
 */
export class CellsRanges_PostWorksheetCellsRangeMoveToRequest {
    /**
     * workbook name
     */
    public name: string;

    /**
     * worksheet name
     */
    public sheetName: string;

    /**
     * The start row of the dest range.
     */
    public destRow: number;

    /**
     * The start column of the dest range.
     */
    public destColumn: number;

    /**
     * range in worksheet 
     */
    public range: Range;

    /**
     * Workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsRanges_PostWorksheetCellsRangeMoveToRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsRanges_PostWorksheetCellsRangeOutlineBorder operation.
 */
export class CellsRanges_PostWorksheetCellsRangeOutlineBorderRequest {
    /**
     * workbook name
     */
    public name: string;

    /**
     * worksheet name
     */
    public sheetName: string;

    /**
     * Range Set OutlineBorder Request 
     */
    public rangeOperate: RangeSetOutlineBorderRequest;

    /**
     * Workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsRanges_PostWorksheetCellsRangeOutlineBorderRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsRanges_PostWorksheetCellsRangeRowHeight operation.
 */
export class CellsRanges_PostWorksheetCellsRangeRowHeightRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets value
     */
    public value: number;

    /**
     * Gets or sets range
     */
    public range: Range;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsRanges_PostWorksheetCellsRangeRowHeightRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsRanges_PostWorksheetCellsRangeStyle operation.
 */
export class CellsRanges_PostWorksheetCellsRangeStyleRequest {
    /**
     * workbook name
     */
    public name: string;

    /**
     * worksheet name
     */
    public sheetName: string;

    /**
     * Range Set Style Request 
     */
    public rangeOperate: RangeSetStyleRequest;

    /**
     * Workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsRanges_PostWorksheetCellsRangeStyleRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsRanges_PostWorksheetCellsRangeUnmerge operation.
 */
export class CellsRanges_PostWorksheetCellsRangeUnmergeRequest {
    /**
     * workbook name
     */
    public name: string;

    /**
     * worksheet name
     */
    public sheetName: string;

    /**
     * range in worksheet 
     */
    public range: Range;

    /**
     * Workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsRanges_PostWorksheetCellsRangeUnmergeRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsRanges_PostWorksheetCellsRangeValue operation.
 */
export class CellsRanges_PostWorksheetCellsRangeValueRequest {
    /**
     * workbook name
     */
    public name: string;

    /**
     * worksheet name
     */
    public sheetName: string;

    /**
     * Input value
     */
    public value: string;

    /**
     * range in worksheet 
     */
    public range: Range;

    /**
     * True: converted to other data type if appropriate.
     */
    public isConverted: boolean;

    /**
     * True: set the number format to cell's style when converting to other data type
     */
    public setStyle: boolean;

    /**
     * Workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsRanges_PostWorksheetCellsRangeValueRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsRanges_PostWorksheetCellsRanges operation.
 */
export class CellsRanges_PostWorksheetCellsRangesRequest {
    /**
     * workbook name
     */
    public name: string;

    /**
     * worksheet name
     */
    public sheetName: string;

    /**
     * copydata,copystyle,copyto,copyvalue
     */
    public rangeOperate: RangeCopyRequest;

    /**
     * Workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsRanges_PostWorksheetCellsRangesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsSaveAs_PostDocumentSaveAs operation.
 */
export class CellsSaveAs_PostDocumentSaveAsRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Save options.
     */
    public saveOptions: SaveOptions;

    /**
     * The new file name.
     */
    public newfilename: string;

    /**
     * Autofit rows.
     */
    public isAutoFitRows: boolean;

    /**
     * Autofit columns.
     */
    public isAutoFitColumns: boolean;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsSaveAs_PostDocumentSaveAsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsShapes_DeleteWorksheetShape operation.
 */
export class CellsShapes_DeleteWorksheetShapeRequest {
    /**
     * document name.
     */
    public name: string;

    /**
     * worksheet name.
     */
    public sheetName: string;

    /**
     * shape index in worksheet shapes.
     */
    public shapeindex: number;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsShapes_DeleteWorksheetShapeRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsShapes_DeleteWorksheetShapes operation.
 */
export class CellsShapes_DeleteWorksheetShapesRequest {
    /**
     * document name.
     */
    public name: string;

    /**
     * worksheet name.
     */
    public sheetName: string;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsShapes_DeleteWorksheetShapesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsShapes_GetWorksheetShape operation.
 */
export class CellsShapes_GetWorksheetShapeRequest {
    /**
     * document name.
     */
    public name: string;

    /**
     * worksheet name.
     */
    public sheetName: string;

    /**
     * shape index in worksheet shapes.
     */
    public shapeindex: number;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsShapes_GetWorksheetShapeRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsShapes_GetWorksheetShapes operation.
 */
export class CellsShapes_GetWorksheetShapesRequest {
    /**
     * document name.
     */
    public name: string;

    /**
     * worksheet name.
     */
    public sheetName: string;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsShapes_GetWorksheetShapesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsShapes_PostWorksheetShape operation.
 */
export class CellsShapes_PostWorksheetShapeRequest {
    /**
     * document name.
     */
    public name: string;

    /**
     * worksheet name.
     */
    public sheetName: string;

    /**
     * shape index in worksheet shapes.
     */
    public shapeindex: number;

    /**
     * Gets or sets dto
     */
    public dto: Shape;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsShapes_PostWorksheetShapeRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsShapes_PutWorksheetShape operation.
 */
export class CellsShapes_PutWorksheetShapeRequest {
    /**
     * document name.
     */
    public name: string;

    /**
     * worksheet name.
     */
    public sheetName: string;

    /**
     * shape object type
     */
    public drawingType: string;

    /**
     * Upper left row index.
     */
    public upperLeftRow: number;

    /**
     * Upper left column index.
     */
    public upperLeftColumn: number;

    /**
     * Represents the vertical offset of Spinner from its left row, in unit of pixel.
     */
    public top: number;

    /**
     * Represents the horizontal offset of Spinner from its left column, in unit of pixel.
     */
    public left: number;

    /**
     * Represents the height of Spinner, in unit of pixel.
     */
    public width: number;

    /**
     * Represents the width of Spinner, in unit of pixel.
     */
    public height: number;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsShapes_PutWorksheetShapeRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsTask_PostRunTask operation.
 */
export class CellsTask_PostRunTaskRequest {
    /**
     * Gets or sets taskData
     */
    public taskData: TaskData;
    
    public constructor(init?: Partial<CellsTask_PostRunTaskRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorkbook_DeleteDecryptDocument operation.
 */
export class CellsWorkbook_DeleteDecryptDocumentRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Encryption settings, only password can be specified.
     */
    public encryption: WorkbookEncryptionRequest;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorkbook_DeleteDecryptDocumentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorkbook_DeleteDocumentUnprotectFromChanges operation.
 */
export class CellsWorkbook_DeleteDocumentUnprotectFromChangesRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorkbook_DeleteDocumentUnprotectFromChangesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorkbook_DeleteUnprotectDocument operation.
 */
export class CellsWorkbook_DeleteUnprotectDocumentRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Protection settings, only password can be specified.
     */
    public protection: WorkbookProtectionRequest;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorkbook_DeleteUnprotectDocumentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorkbook_DeleteWorkbookName operation.
 */
export class CellsWorkbook_DeleteWorkbookNameRequest {
    /**
     * The workbook name.
     */
    public name: string;

    /**
     * The name.
     */
    public nameName: string;

    /**
     * The workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorkbook_DeleteWorkbookNameRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorkbook_DeleteWorkbookNames operation.
 */
export class CellsWorkbook_DeleteWorkbookNamesRequest {
    /**
     * The workbook name.
     */
    public name: string;

    /**
     * The workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorkbook_DeleteWorkbookNamesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorkbook_GetWorkbook operation.
 */
export class CellsWorkbook_GetWorkbookRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * The document password.
     */
    public password: string;

    /**
     * The exported file format.
     */
    public format: string;

    /**
     * Set document rows to be autofit.
     */
    public isAutoFit: boolean;

    /**
     * Only save table data.
     */
    public onlySaveTable: boolean;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;

    /**
     * The document output folder.
     */
    public outPath: string;
    
    public constructor(init?: Partial<CellsWorkbook_GetWorkbookRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorkbook_GetWorkbookDefaultStyle operation.
 */
export class CellsWorkbook_GetWorkbookDefaultStyleRequest {
    /**
     * The workbook name.
     */
    public name: string;

    /**
     * The document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorkbook_GetWorkbookDefaultStyleRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorkbook_GetWorkbookName operation.
 */
export class CellsWorkbook_GetWorkbookNameRequest {
    /**
     * The workbook name.
     */
    public name: string;

    /**
     * The name.
     */
    public nameName: string;

    /**
     * The workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorkbook_GetWorkbookNameRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorkbook_GetWorkbookNameValue operation.
 */
export class CellsWorkbook_GetWorkbookNameValueRequest {
    /**
     * The workbook name.
     */
    public name: string;

    /**
     * The name.
     */
    public nameName: string;

    /**
     * The workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorkbook_GetWorkbookNameValueRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorkbook_GetWorkbookNames operation.
 */
export class CellsWorkbook_GetWorkbookNamesRequest {
    /**
     * The workbook name.
     */
    public name: string;

    /**
     * The workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorkbook_GetWorkbookNamesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorkbook_GetWorkbookSettings operation.
 */
export class CellsWorkbook_GetWorkbookSettingsRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorkbook_GetWorkbookSettingsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorkbook_GetWorkbookTextItems operation.
 */
export class CellsWorkbook_GetWorkbookTextItemsRequest {
    /**
     * The workbook name.
     */
    public name: string;

    /**
     * The workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorkbook_GetWorkbookTextItemsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorkbook_PostAutofitWorkbookRows operation.
 */
export class CellsWorkbook_PostAutofitWorkbookRowsRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * Auto Fitter Options.
     */
    public autoFitterOptions: AutoFitterOptions;

    /**
     * Start row.
     */
    public startRow: number;

    /**
     * End row.
     */
    public endRow: number;

    /**
     * Only auto.
     */
    public onlyAuto: boolean;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorkbook_PostAutofitWorkbookRowsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorkbook_PostEncryptDocument operation.
 */
export class CellsWorkbook_PostEncryptDocumentRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Encryption parameters.
     */
    public encryption: WorkbookEncryptionRequest;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorkbook_PostEncryptDocumentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorkbook_PostImportData operation.
 */
export class CellsWorkbook_PostImportDataRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets importdata
     */
    public importdata: ImportOption;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorkbook_PostImportDataRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorkbook_PostProtectDocument operation.
 */
export class CellsWorkbook_PostProtectDocumentRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * The protection settings.
     */
    public protection: WorkbookProtectionRequest;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorkbook_PostProtectDocumentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorkbook_PostWorkbookCalculateFormula operation.
 */
export class CellsWorkbook_PostWorkbookCalculateFormulaRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * Calculation Options.
     */
    public options: CalculationOptions;

    /**
     * ignore Error.
     */
    public ignoreError: boolean;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorkbook_PostWorkbookCalculateFormulaRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorkbook_PostWorkbookGetSmartMarkerResult operation.
 */
export class CellsWorkbook_PostWorkbookGetSmartMarkerResultRequest {
    /**
     * The workbook name.
     */
    public name: string;

    /**
     * The xml file full path, if empty the data is read from request body.
     */
    public xmlFile: string;

    /**
     * The workbook folder full path.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;

    /**
     * Path to save result
     */
    public outPath: string;
    
    public constructor(init?: Partial<CellsWorkbook_PostWorkbookGetSmartMarkerResultRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorkbook_PostWorkbookSettings operation.
 */
export class CellsWorkbook_PostWorkbookSettingsRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * Workbook Setting DTO
     */
    public settings: WorkbookSettings;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorkbook_PostWorkbookSettingsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorkbook_PostWorkbookSplit operation.
 */
export class CellsWorkbook_PostWorkbookSplitRequest {
    /**
     * The workbook name.
     */
    public name: string;

    /**
     * Split format.
     */
    public format: string;

    /**
     * Start worksheet index.
     */
    public from: number;

    /**
     * End worksheet index.
     */
    public to: number;

    /**
     * Image horizontal resolution.
     */
    public horizontalResolution: number;

    /**
     * Image vertical resolution.
     */
    public verticalResolution: number;

    /**
     * The workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorkbook_PostWorkbookSplitRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorkbook_PostWorkbooksMerge operation.
 */
export class CellsWorkbook_PostWorkbooksMergeRequest {
    /**
     * Workbook name.
     */
    public name: string;

    /**
     * The workbook to merge with.
     */
    public mergeWith: string;

    /**
     * Source workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorkbook_PostWorkbooksMergeRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorkbook_PostWorkbooksTextReplace operation.
 */
export class CellsWorkbook_PostWorkbooksTextReplaceRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * The old value.
     */
    public oldValue: string;

    /**
     * The new value.
     */
    public newValue: string;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorkbook_PostWorkbooksTextReplaceRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorkbook_PostWorkbooksTextSearch operation.
 */
export class CellsWorkbook_PostWorkbooksTextSearchRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * Text sample.
     */
    public text: string;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorkbook_PostWorkbooksTextSearchRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorkbook_PutConvertWorkbook operation.
 */
export class CellsWorkbook_PutConvertWorkbookRequest {
    /**
     * The format to convert.
     */
    public format: string;

    /**
     * The workbook password.
     */
    public password: string;

    /**
     * Path to save result
     */
    public outPath: string;
    
    public constructor(init?: Partial<CellsWorkbook_PutConvertWorkbookRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorkbook_PutDocumentProtectFromChanges operation.
 */
export class CellsWorkbook_PutDocumentProtectFromChangesRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * Modification password.
     */
    public password: PasswordRequest;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorkbook_PutDocumentProtectFromChangesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorkbook_PutWorkbookCreate operation.
 */
export class CellsWorkbook_PutWorkbookCreateRequest {
    /**
     * The new document name.
     */
    public name: string;

    /**
     * The template file, if the data not provided default workbook is created.
     */
    public templateFile: string;

    /**
     * Smart marker data file, if the data not provided the request content is checked for the data.
     */
    public dataFile: string;

    /**
     * The new document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorkbook_PutWorkbookCreateRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorksheetValidations_DeleteWorksheetValidation operation.
 */
export class CellsWorksheetValidations_DeleteWorksheetValidationRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * Worksheet name.
     */
    public sheetName: string;

    /**
     * The validation index.
     */
    public validationIndex: number;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorksheetValidations_DeleteWorksheetValidationRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorksheetValidations_GetWorksheetValidation operation.
 */
export class CellsWorksheetValidations_GetWorksheetValidationRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * Worksheet name.
     */
    public sheetName: string;

    /**
     * The validation index.
     */
    public validationIndex: number;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorksheetValidations_GetWorksheetValidationRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorksheetValidations_GetWorksheetValidations operation.
 */
export class CellsWorksheetValidations_GetWorksheetValidationsRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * Worksheet name.
     */
    public sheetName: string;

    /**
     * Document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorksheetValidations_GetWorksheetValidationsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorksheetValidations_PostWorksheetValidation operation.
 */
export class CellsWorksheetValidations_PostWorksheetValidationRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * Worksheet name.
     */
    public sheetName: string;

    /**
     * The validation index.
     */
    public validationIndex: number;

    /**
     * Gets or sets validation
     */
    public validation: Validation;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorksheetValidations_PostWorksheetValidationRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorksheetValidations_PutWorksheetValidation operation.
 */
export class CellsWorksheetValidations_PutWorksheetValidationRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * Worksheet name.
     */
    public sheetName: string;

    /**
     * Specified cells area
     */
    public range: string;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorksheetValidations_PutWorksheetValidationRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorksheets_DeleteUnprotectWorksheet operation.
 */
export class CellsWorksheets_DeleteUnprotectWorksheetRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * with protection settings. Only password is used here.
     */
    public protectParameter: ProtectSheetParameter;

    /**
     * Document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorksheets_DeleteUnprotectWorksheetRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorksheets_DeleteWorksheet operation.
 */
export class CellsWorksheets_DeleteWorksheetRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorksheets_DeleteWorksheetRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorksheets_DeleteWorksheetBackground operation.
 */
export class CellsWorksheets_DeleteWorksheetBackgroundRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorksheets_DeleteWorksheetBackgroundRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorksheets_DeleteWorksheetComment operation.
 */
export class CellsWorksheets_DeleteWorksheetCommentRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * The cell name
     */
    public cellName: string;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorksheets_DeleteWorksheetCommentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorksheets_DeleteWorksheetComments operation.
 */
export class CellsWorksheets_DeleteWorksheetCommentsRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorksheets_DeleteWorksheetCommentsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorksheets_DeleteWorksheetFreezePanes operation.
 */
export class CellsWorksheets_DeleteWorksheetFreezePanesRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets row
     */
    public row: number;

    /**
     * Gets or sets column
     */
    public column: number;

    /**
     * Gets or sets freezedRows
     */
    public freezedRows: number;

    /**
     * Gets or sets freezedColumns
     */
    public freezedColumns: number;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorksheets_DeleteWorksheetFreezePanesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorksheets_GetNamedRanges operation.
 */
export class CellsWorksheets_GetNamedRangesRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * Document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorksheets_GetNamedRangesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorksheets_GetWorksheet operation.
 */
export class CellsWorksheets_GetWorksheetRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * The exported file format.
     */
    public format: string;

    /**
     * Image vertical resolution.
     */
    public verticalResolution: number;

    /**
     * Image horizontal resolution.
     */
    public horizontalResolution: number;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorksheets_GetWorksheetRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorksheets_GetWorksheetCalculateFormula operation.
 */
export class CellsWorksheets_GetWorksheetCalculateFormulaRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * Worksheet name.
     */
    public sheetName: string;

    /**
     * The formula.
     */
    public formula: string;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorksheets_GetWorksheetCalculateFormulaRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorksheets_GetWorksheetComment operation.
 */
export class CellsWorksheets_GetWorksheetCommentRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * The cell name
     */
    public cellName: string;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorksheets_GetWorksheetCommentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorksheets_GetWorksheetComments operation.
 */
export class CellsWorksheets_GetWorksheetCommentsRequest {
    /**
     * Workbook name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorksheets_GetWorksheetCommentsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorksheets_GetWorksheetMergedCell operation.
 */
export class CellsWorksheets_GetWorksheetMergedCellRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * Worksheet name.
     */
    public sheetName: string;

    /**
     * Merged cell index.
     */
    public mergedCellIndex: number;

    /**
     * Document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorksheets_GetWorksheetMergedCellRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorksheets_GetWorksheetMergedCells operation.
 */
export class CellsWorksheets_GetWorksheetMergedCellsRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * The workseet name.
     */
    public sheetName: string;

    /**
     * Document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorksheets_GetWorksheetMergedCellsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorksheets_GetWorksheetTextItems operation.
 */
export class CellsWorksheets_GetWorksheetTextItemsRequest {
    /**
     * Workbook name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * The workbook's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorksheets_GetWorksheetTextItemsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorksheets_GetWorksheets operation.
 */
export class CellsWorksheets_GetWorksheetsRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * Document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorksheets_GetWorksheetsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorksheets_PostAutofitWorksheetColumns operation.
 */
export class CellsWorksheets_PostAutofitWorksheetColumnsRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets firstColumn
     */
    public firstColumn: number;

    /**
     * Gets or sets lastColumn
     */
    public lastColumn: number;

    /**
     * Gets or sets autoFitterOptions
     */
    public autoFitterOptions: AutoFitterOptions;

    /**
     * Gets or sets firstRow
     */
    public firstRow: number;

    /**
     * Gets or sets lastRow
     */
    public lastRow: number;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorksheets_PostAutofitWorksheetColumnsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorksheets_PostAutofitWorksheetRow operation.
 */
export class CellsWorksheets_PostAutofitWorksheetRowRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets rowIndex
     */
    public rowIndex: number;

    /**
     * Gets or sets firstColumn
     */
    public firstColumn: number;

    /**
     * Gets or sets lastColumn
     */
    public lastColumn: number;

    /**
     * Gets or sets autoFitterOptions
     */
    public autoFitterOptions: AutoFitterOptions;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorksheets_PostAutofitWorksheetRowRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorksheets_PostAutofitWorksheetRows operation.
 */
export class CellsWorksheets_PostAutofitWorksheetRowsRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * Auto Fitter Options.
     */
    public autoFitterOptions: AutoFitterOptions;

    /**
     * Start row.
     */
    public startRow: number;

    /**
     * End row.
     */
    public endRow: number;

    /**
     * Only auto.
     */
    public onlyAuto: boolean;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorksheets_PostAutofitWorksheetRowsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorksheets_PostCopyWorksheet operation.
 */
export class CellsWorksheets_PostCopyWorksheetRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets sourceSheet
     */
    public sourceSheet: string;

    /**
     * Gets or sets options
     */
    public options: CopyOptions;

    /**
     * Gets or sets sourceWorkbook
     */
    public sourceWorkbook: string;

    /**
     * Gets or sets sourceFolder
     */
    public sourceFolder: string;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorksheets_PostCopyWorksheetRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorksheets_PostMoveWorksheet operation.
 */
export class CellsWorksheets_PostMoveWorksheetRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * with moving parameters.
     */
    public moving: WorksheetMovingRequest;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorksheets_PostMoveWorksheetRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorksheets_PostRenameWorksheet operation.
 */
export class CellsWorksheets_PostRenameWorksheetRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets newname
     */
    public newname: string;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorksheets_PostRenameWorksheetRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorksheets_PostUpdateWorksheetProperty operation.
 */
export class CellsWorksheets_PostUpdateWorksheetPropertyRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets sheet
     */
    public sheet: Worksheet;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorksheets_PostUpdateWorksheetPropertyRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorksheets_PostUpdateWorksheetZoom operation.
 */
export class CellsWorksheets_PostUpdateWorksheetZoomRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets value
     */
    public value: number;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorksheets_PostUpdateWorksheetZoomRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorksheets_PostWorksheetComment operation.
 */
export class CellsWorksheets_PostWorksheetCommentRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * The cell name
     */
    public cellName: string;

    /**
     * Comment object
     */
    public comment: Comment;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorksheets_PostWorksheetCommentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorksheets_PostWorksheetRangeSort operation.
 */
export class CellsWorksheets_PostWorksheetRangeSortRequest {
    /**
     * The workbook name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * The range to sort.
     */
    public cellArea: string;

    /**
     * with sorting settings.
     */
    public dataSorter: DataSorter;

    /**
     * The workbook folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorksheets_PostWorksheetRangeSortRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorksheets_PostWorksheetTextSearch operation.
 */
export class CellsWorksheets_PostWorksheetTextSearchRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * Text to search.
     */
    public text: string;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorksheets_PostWorksheetTextSearchRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorksheets_PostWorsheetTextReplace operation.
 */
export class CellsWorksheets_PostWorsheetTextReplaceRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * Worksheet name.
     */
    public sheetName: string;

    /**
     * The old text to replace.
     */
    public oldValue: string;

    /**
     * The new text to replace by.
     */
    public newValue: string;

    /**
     * Document's folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorksheets_PostWorsheetTextReplaceRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorksheets_PutAddNewWorksheet operation.
 */
export class CellsWorksheets_PutAddNewWorksheetRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * The new sheet name.
     */
    public sheetName: string;

    /**
     * The new sheet position.
     */
    public position: number;

    /**
     * The new sheet type.
     */
    public sheettype: string;

    /**
     * Document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorksheets_PutAddNewWorksheetRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorksheets_PutChangeVisibilityWorksheet operation.
 */
export class CellsWorksheets_PutChangeVisibilityWorksheetRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * Worksheet name.
     */
    public sheetName: string;

    /**
     * New worksheet visibility value.
     */
    public isVisible: boolean;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorksheets_PutChangeVisibilityWorksheetRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorksheets_PutProtectWorksheet operation.
 */
export class CellsWorksheets_PutProtectWorksheetRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * with protection settings.
     */
    public protectParameter: ProtectSheetParameter;

    /**
     * Document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorksheets_PutProtectWorksheetRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorksheets_PutWorksheetBackground operation.
 */
export class CellsWorksheets_PutWorksheetBackgroundRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets png
     */
    public png: string;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorksheets_PutWorksheetBackgroundRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorksheets_PutWorksheetComment operation.
 */
export class CellsWorksheets_PutWorksheetCommentRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * The worksheet name.
     */
    public sheetName: string;

    /**
     * The cell name
     */
    public cellName: string;

    /**
     * Comment object
     */
    public comment: Comment;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorksheets_PutWorksheetCommentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CellsWorksheets_PutWorksheetFreezePanes operation.
 */
export class CellsWorksheets_PutWorksheetFreezePanesRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sheetName
     */
    public sheetName: string;

    /**
     * Gets or sets row
     */
    public row: number;

    /**
     * Gets or sets column
     */
    public column: number;

    /**
     * Gets or sets freezedRows
     */
    public freezedRows: number;

    /**
     * Gets or sets freezedColumns
     */
    public freezedColumns: number;

    /**
     * Gets or sets folder
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<CellsWorksheets_PutWorksheetFreezePanesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for OAuth_Post operation.
 */
export class OAuth_PostRequest {
    /**
     * Grant Type
     */
    public grantType: string;

    /**
     * App SID
     */
    public clientId: string;

    /**
     * App Key
     */
    public clientSecret: string;
    
    public constructor(init?: Partial<OAuth_PostRequest>) {        
        Object.assign(this, init);
    } 
}
