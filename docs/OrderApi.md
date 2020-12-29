# ClientPortalWebApi.OrderApi

All URIs are relative to *https://localhost:5000/v1/portal*

Method | HTTP request | Description
------------- | ------------- | -------------
[**iserverAccountAccountIdOrderOrigCustomerOrderIdDelete**](OrderApi.md#iserverAccountAccountIdOrderOrigCustomerOrderIdDelete) | **DELETE** /iserver/account/{accountId}/order/{origCustomerOrderId} | Delete Order
[**iserverAccountAccountIdOrderOrigCustomerOrderIdPost**](OrderApi.md#iserverAccountAccountIdOrderOrigCustomerOrderIdPost) | **POST** /iserver/account/{accountId}/order/{origCustomerOrderId} | Modify Order
[**iserverAccountAccountIdOrderPost**](OrderApi.md#iserverAccountAccountIdOrderPost) | **POST** /iserver/account/{accountId}/order | Place Order
[**iserverAccountAccountIdOrderWhatifPost**](OrderApi.md#iserverAccountAccountIdOrderWhatifPost) | **POST** /iserver/account/{accountId}/order/whatif | Preview Order
[**iserverAccountAccountIdOrdersPost**](OrderApi.md#iserverAccountAccountIdOrdersPost) | **POST** /iserver/account/{accountId}/orders | Place Orders (Support bracket orders)
[**iserverAccountOrdersGet**](OrderApi.md#iserverAccountOrdersGet) | **GET** /iserver/account/orders | Live Orders
[**iserverReplyReplyidPost**](OrderApi.md#iserverReplyReplyidPost) | **POST** /iserver/reply/{replyid} | Place Order Reply


<a name="iserverAccountAccountIdOrderOrigCustomerOrderIdDelete"></a>
# **iserverAccountAccountIdOrderOrigCustomerOrderIdDelete**
> [InlineResponse2006] iserverAccountAccountIdOrderOrigCustomerOrderIdDelete(accountId, origCustomerOrderId)

Delete Order

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.OrderApi();

var accountId = "accountId_example"; // String | account id

var origCustomerOrderId = "origCustomerOrderId_example"; // String | Customer OrderId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iserverAccountAccountIdOrderOrigCustomerOrderIdDelete(accountId, origCustomerOrderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| account id | 
 **origCustomerOrderId** | **String**| Customer OrderId | 

### Return type

[**[InlineResponse2006]**](InlineResponse2006.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="iserverAccountAccountIdOrderOrigCustomerOrderIdPost"></a>
# **iserverAccountAccountIdOrderOrigCustomerOrderIdPost**
> [InlineResponse2006] iserverAccountAccountIdOrderOrigCustomerOrderIdPost(accountId, origCustomerOrderId, body)

Modify Order

Modifies an open order. The /iserver/accounts endpoint must first be called.

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.OrderApi();

var accountId = "accountId_example"; // String | account id

var origCustomerOrderId = "origCustomerOrderId_example"; // String | Customer OrderId

var body = new ClientPortalWebApi.ModifyOrder(); // ModifyOrder | modify-order request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iserverAccountAccountIdOrderOrigCustomerOrderIdPost(accountId, origCustomerOrderId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| account id | 
 **origCustomerOrderId** | **String**| Customer OrderId | 
 **body** | [**ModifyOrder**](ModifyOrder.md)| modify-order request | 

### Return type

[**[InlineResponse2006]**](InlineResponse2006.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="iserverAccountAccountIdOrderPost"></a>
# **iserverAccountAccountIdOrderPost**
> [InlineResponse2003] iserverAccountAccountIdOrderPost(accountId, body)

Place Order

Please note here, sometimes this end-point alone can't make sure you submit the order successfully, you could receive some questions in the response, you have to to answer them in order to submit the order successfully. You can use \"/iserver/reply/{replyid}\" end-point to answer questions 

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.OrderApi();

var accountId = "accountId_example"; // String | account id

var body = new ClientPortalWebApi.OrderRequest(); // OrderRequest | order request info


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iserverAccountAccountIdOrderPost(accountId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| account id | 
 **body** | [**OrderRequest**](OrderRequest.md)| order request info | 

### Return type

[**[InlineResponse2003]**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="iserverAccountAccountIdOrderWhatifPost"></a>
# **iserverAccountAccountIdOrderWhatifPost**
> InlineResponse2005 iserverAccountAccountIdOrderWhatifPost(accountId, body)

Preview Order

This end-point allows you to preview order without actually submitting the order and you can get commission information in the response. 

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.OrderApi();

var accountId = "accountId_example"; // String | account id

var body = new ClientPortalWebApi.OrderRequest(); // OrderRequest | order info


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iserverAccountAccountIdOrderWhatifPost(accountId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| account id | 
 **body** | [**OrderRequest**](OrderRequest.md)| order info | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="iserverAccountAccountIdOrdersPost"></a>
# **iserverAccountAccountIdOrdersPost**
> [InlineResponse2003] iserverAccountAccountIdOrdersPost(accountId, body)

Place Orders (Support bracket orders)

You can pass a list of orders here 

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.OrderApi();

var accountId = "accountId_example"; // String | account id

var body = new ClientPortalWebApi.Body(); // Body | order request info


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iserverAccountAccountIdOrdersPost(accountId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| account id | 
 **body** | [**Body**](Body.md)| order request info | 

### Return type

[**[InlineResponse2003]**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="iserverAccountOrdersGet"></a>
# **iserverAccountOrdersGet**
> InlineResponse2002 iserverAccountOrdersGet()

Live Orders

The end-point is meant to be used in polling mode, e.g. requesting every x seconds. The response will contain two objects, one is notification, the other is orders.  Orders is the list of orders (cancelled, filled, submitted) with activity in the current day.  Notifications contains information about execute orders as they happen, see status field. 

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.OrderApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iserverAccountOrdersGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="iserverReplyReplyidPost"></a>
# **iserverReplyReplyidPost**
> [InlineResponse2004] iserverReplyReplyidPost(replyid, body)

Place Order Reply

Reply to questions when placing orders and submit orders

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.OrderApi();

var replyid = "replyid_example"; // String | Please use the \"id\" from the response of \"Place Order\" end-point

var body = new ClientPortalWebApi.Body1(); // Body1 | Answer to question


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iserverReplyReplyidPost(replyid, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **replyid** | **String**| Please use the \"id\" from the response of \"Place Order\" end-point | 
 **body** | [**Body1**](Body1.md)| Answer to question | 

### Return type

[**[InlineResponse2004]**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

