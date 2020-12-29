# ClientPortalWebApi.ContractApi

All URIs are relative to *https://localhost:5000/v1/portal*

Method | HTTP request | Description
------------- | ------------- | -------------
[**iserverContractConidInfoGet**](ContractApi.md#iserverContractConidInfoGet) | **GET** /iserver/contract/{conid}/info | Contract Info
[**iserverSecdefSearchPost**](ContractApi.md#iserverSecdefSearchPost) | **POST** /iserver/secdef/search | Search by symbol or name
[**trsrvFuturesGet**](ContractApi.md#trsrvFuturesGet) | **GET** /trsrv/futures | Security Futures by Symbol
[**trsrvSecdefPost**](ContractApi.md#trsrvSecdefPost) | **POST** /trsrv/secdef | Secdef by Conid


<a name="iserverContractConidInfoGet"></a>
# **iserverContractConidInfoGet**
> Contract iserverContractConidInfoGet(conid)

Contract Info

get contract details, you can use this to prefill your order before you submit an order

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.ContractApi();

var conid = "conid_example"; // String | contract id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iserverContractConidInfoGet(conid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conid** | **String**| contract id | 

### Return type

[**Contract**](Contract.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="iserverSecdefSearchPost"></a>
# **iserverSecdefSearchPost**
> [InlineResponse2008] iserverSecdefSearchPost(symbol)

Search by symbol or name

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.ContractApi();

var symbol = new ClientPortalWebApi.Symbol(); // Symbol | symbol or name to be searched


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iserverSecdefSearchPost(symbol, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | [**Symbol**](Symbol.md)| symbol or name to be searched | 

### Return type

[**[InlineResponse2008]**](InlineResponse2008.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="trsrvFuturesGet"></a>
# **trsrvFuturesGet**
> InlineResponse20016 trsrvFuturesGet(symbols)

Security Futures by Symbol

Returns a list of non-expired future contracts for given symbol(s)

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.ContractApi();

var symbols = "symbols_example"; // String | list of case-sensitive symbols separated by comma


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trsrvFuturesGet(symbols, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbols** | **String**| list of case-sensitive symbols separated by comma | 

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="trsrvSecdefPost"></a>
# **trsrvSecdefPost**
> Secdef trsrvSecdefPost(body)

Secdef by Conid

Returns a list of security definitions for the given conids

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.ContractApi();

var body = new ClientPortalWebApi.Body5(); // Body5 | request body


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trsrvSecdefPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body5**](Body5.md)| request body | 

### Return type

[**Secdef**](Secdef.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

