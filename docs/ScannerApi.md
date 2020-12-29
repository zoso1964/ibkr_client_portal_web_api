# ClientPortalWebApi.ScannerApi

All URIs are relative to *https://localhost:5000/v1/portal*

Method | HTTP request | Description
------------- | ------------- | -------------
[**iserverScannerParamsGet**](ScannerApi.md#iserverScannerParamsGet) | **GET** /iserver/scanner/params | get lists of available scanners
[**iserverScannerRunPost**](ScannerApi.md#iserverScannerRunPost) | **POST** /iserver/scanner/run | run scanner to get a list of contracts


<a name="iserverScannerParamsGet"></a>
# **iserverScannerParamsGet**
> InlineResponse2009 iserverScannerParamsGet()

get lists of available scanners

Returns an object contains four lists contain all parameters for scanners

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.ScannerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iserverScannerParamsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="iserverScannerRunPost"></a>
# **iserverScannerRunPost**
> [InlineResponse20010] iserverScannerRunPost(body)

run scanner to get a list of contracts

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.ScannerApi();

var body = new ClientPortalWebApi.ScannerParams(); // ScannerParams | modify-order request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iserverScannerRunPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ScannerParams**](ScannerParams.md)| modify-order request | 

### Return type

[**[InlineResponse20010]**](InlineResponse20010.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

