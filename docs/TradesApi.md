# ClientPortalWebApi.TradesApi

All URIs are relative to *https://localhost:5000/v1/portal*

Method | HTTP request | Description
------------- | ------------- | -------------
[**iserverAccountTradesGet**](TradesApi.md#iserverAccountTradesGet) | **GET** /iserver/account/trades | List of Trades for the selected account


<a name="iserverAccountTradesGet"></a>
# **iserverAccountTradesGet**
> [Trade] iserverAccountTradesGet()

List of Trades for the selected account

Returns a list of trades for the currently selected account for current day and six previous days.

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.TradesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iserverAccountTradesGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Trade]**](Trade.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

