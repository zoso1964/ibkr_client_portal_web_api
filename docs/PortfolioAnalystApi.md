# ClientPortalWebApi.PortfolioAnalystApi

All URIs are relative to *https://localhost:5000/v1/portal*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paPerformancePost**](PortfolioAnalystApi.md#paPerformancePost) | **POST** /pa/performance | Account Performance
[**paSummaryPost**](PortfolioAnalystApi.md#paSummaryPost) | **POST** /pa/summary | Account Balance's Summary


<a name="paPerformancePost"></a>
# **paPerformancePost**
> Performance paPerformancePost(body)

Account Performance

Returns the performance (MTM) for the given accounts, if more than one account is passed, the result is consolidated.

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.PortfolioAnalystApi();

var body = new ClientPortalWebApi.Body3(); // Body3 | an array of account ids


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.paPerformancePost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body3**](Body3.md)| an array of account ids | 

### Return type

[**Performance**](Performance.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="paSummaryPost"></a>
# **paSummaryPost**
> Summary paSummaryPost(body)

Account Balance's Summary

Returns a summary of all account balances for the given accounts, if more than one account is passed, the result is consolidated.

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.PortfolioAnalystApi();

var body = new ClientPortalWebApi.Body4(); // Body4 | an array of account ids


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.paSummaryPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body4**](Body4.md)| an array of account ids | 

### Return type

[**Summary**](Summary.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

