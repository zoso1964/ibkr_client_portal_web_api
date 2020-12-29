# ClientPortalWebApi.PnLApi

All URIs are relative to *https://localhost:5000/v1/portal*

Method | HTTP request | Description
------------- | ------------- | -------------
[**iserverAccountPnlPartitionedGet**](PnLApi.md#iserverAccountPnlPartitionedGet) | **GET** /iserver/account/pnl/partitioned | PnL for the selected account


<a name="iserverAccountPnlPartitionedGet"></a>
# **iserverAccountPnlPartitionedGet**
> InlineResponse20011 iserverAccountPnlPartitionedGet()

PnL for the selected account

Returns an object containing PnLfor the selected account and its models (if any).

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.PnLApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iserverAccountPnlPartitionedGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

