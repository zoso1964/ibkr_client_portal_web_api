# ClientPortalWebApi.IBCustApi

All URIs are relative to *https://localhost:5000/v1/portal*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ibcustEntityInfoGet**](IBCustApi.md#ibcustEntityInfoGet) | **GET** /ibcust/entity/info | IBCust Entity Info


<a name="ibcustEntityInfoGet"></a>
# **ibcustEntityInfoGet**
> [InlineResponse20017] ibcustEntityInfoGet()

IBCust Entity Info

Returns Applicant Id with all owner related entities

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.IBCustApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ibcustEntityInfoGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[InlineResponse20017]**](InlineResponse20017.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

