# ClientPortalWebApi.MarketDataApi

All URIs are relative to *https://localhost:5000/v1/portal*

Method | HTTP request | Description
------------- | ------------- | -------------
[**iserverMarketdataHistoryGet**](MarketDataApi.md#iserverMarketdataHistoryGet) | **GET** /iserver/marketdata/history | Market Data History
[**iserverMarketdataSnapshotGet**](MarketDataApi.md#iserverMarketdataSnapshotGet) | **GET** /iserver/marketdata/snapshot | Market Data


<a name="iserverMarketdataHistoryGet"></a>
# **iserverMarketdataHistoryGet**
> HistoryData iserverMarketdataHistoryGet(conid, period, opts)

Market Data History

Get history of market Data for the given conid, length of data is controlled by period and bar. e.g. 1y period with bar =1w returns 52 data points

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.MarketDataApi();

var conid = "conid_example"; // String | contract id

var period = "period_example"; // String | time period-- 1d,1w,1m,1y

var opts = { 
  'bar': "bar_example" // String | possible value-- 5min,1h,1w
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iserverMarketdataHistoryGet(conid, period, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conid** | **String**| contract id | 
 **period** | **String**| time period-- 1d,1w,1m,1y | 
 **bar** | **String**| possible value-- 5min,1h,1w | [optional] 

### Return type

[**HistoryData**](HistoryData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="iserverMarketdataSnapshotGet"></a>
# **iserverMarketdataSnapshotGet**
> [InlineResponse2007] iserverMarketdataSnapshotGet(conids, opts)

Market Data

Get Market Data for the given conid(s). The end-point will return by default bid, ask, last, change, change pct, close, listing exchange. See response fields for a list of available fields that can be request via fields argument. The endpoint /iserver/accounts should be called prior to /iserver/marketdata/snapshot. To receive all available fields the /snapshot endpoint will need to be called several times. 

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.MarketDataApi();

var conids = "conids_example"; // String | list of conids separated by comma

var opts = { 
  'since': 56, // Number | time period since which updates are required. uses epoch time with milliseconds.
  'fields': "fields_example" // String | list of fields separated by comma
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iserverMarketdataSnapshotGet(conids, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conids** | **String**| list of conids separated by comma | 
 **since** | **Number**| time period since which updates are required. uses epoch time with milliseconds. | [optional] 
 **fields** | **String**| list of fields separated by comma | [optional] 

### Return type

[**[InlineResponse2007]**](InlineResponse2007.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

