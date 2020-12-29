# ClientPortalWebApi.PortfolioApi

All URIs are relative to *https://localhost:5000/v1/portal*

Method | HTTP request | Description
------------- | ------------- | -------------
[**portfolioAccountIdAllocationGet**](PortfolioApi.md#portfolioAccountIdAllocationGet) | **GET** /portfolio/{accountId}/allocation | Account Allocation
[**portfolioAccountIdLedgerGet**](PortfolioApi.md#portfolioAccountIdLedgerGet) | **GET** /portfolio/{accountId}/ledger | Account Ledger
[**portfolioAccountIdMetaGet**](PortfolioApi.md#portfolioAccountIdMetaGet) | **GET** /portfolio/{accountId}/meta | Account Information
[**portfolioAccountIdPositionConidGet**](PortfolioApi.md#portfolioAccountIdPositionConidGet) | **GET** /portfolio/{accountId}/position/{conid} | Position by Conid
[**portfolioAccountIdPositionsInvalidatePost**](PortfolioApi.md#portfolioAccountIdPositionsInvalidatePost) | **POST** /portfolio/{accountId}/positions/invalidate | Invalidates the backend cache of the Portfolio
[**portfolioAccountIdPositionsPageIdGet**](PortfolioApi.md#portfolioAccountIdPositionsPageIdGet) | **GET** /portfolio/{accountId}/positions/{pageId} | Portfolio Positions
[**portfolioAccountIdSummaryGet**](PortfolioApi.md#portfolioAccountIdSummaryGet) | **GET** /portfolio/{accountId}/summary | Account Summary
[**portfolioAccountsGet**](PortfolioApi.md#portfolioAccountsGet) | **GET** /portfolio/accounts | Portfolio Accounts
[**portfolioAllocationPost**](PortfolioApi.md#portfolioAllocationPost) | **POST** /portfolio/allocation | Account Alloction (All Accounts)
[**portfolioPositionsConidGet**](PortfolioApi.md#portfolioPositionsConidGet) | **GET** /portfolio/positions/{conid} | Positions by Conid
[**portfolioSubaccountsGet**](PortfolioApi.md#portfolioSubaccountsGet) | **GET** /portfolio/subaccounts | List of Sub-Accounts


<a name="portfolioAccountIdAllocationGet"></a>
# **portfolioAccountIdAllocationGet**
> Allocation portfolioAccountIdAllocationGet(accountId)

Account Allocation

Information about the account's portfolio allocation by Asset Class, Industry and Category.  /portfolio/accounts or /portfolio/subaccounts must be called prior to this endpoint.

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.PortfolioApi();

var accountId = "accountId_example"; // String | account id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.portfolioAccountIdAllocationGet(accountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| account id | 

### Return type

[**Allocation**](Allocation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="portfolioAccountIdLedgerGet"></a>
# **portfolioAccountIdLedgerGet**
> InlineResponse20013 portfolioAccountIdLedgerGet(accountId)

Account Ledger

Information regarding settled cash, cash balances, etc. in the account's base currency and any other cash balances hold in other currencies.  /portfolio/accounts or /portfolio/subaccounts must be called prior to this endpoint. The list of supported currencies is available at https://www.interactivebrokers.com/en/index.php?f=3185.

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.PortfolioApi();

var accountId = "accountId_example"; // String | account id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.portfolioAccountIdLedgerGet(accountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| account id | 

### Return type

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="portfolioAccountIdMetaGet"></a>
# **portfolioAccountIdMetaGet**
> Accounts portfolioAccountIdMetaGet(accountId)

Account Information

Account information related to account Id /portfolio/accounts or /portfolio/subaccounts must be called prior to this endpoint.

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.PortfolioApi();

var accountId = "accountId_example"; // String | account id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.portfolioAccountIdMetaGet(accountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| account id | 

### Return type

[**Accounts**](Accounts.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="portfolioAccountIdPositionConidGet"></a>
# **portfolioAccountIdPositionConidGet**
> Position portfolioAccountIdPositionConidGet(accountId, conid)

Position by Conid

Returns a list of all positions matching the conid. For portfolio models the conid could be in more than one model, returning an array with the name of the model it belongs to.  /portfolio/accounts or /portfolio/subaccounts must be called prior to this endpoint.

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.PortfolioApi();

var accountId = "accountId_example"; // String | account id

var conid = 56; // Number | contract id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.portfolioAccountIdPositionConidGet(accountId, conid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| account id | 
 **conid** | **Number**| contract id | 

### Return type

[**Position**](Position.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="portfolioAccountIdPositionsInvalidatePost"></a>
# **portfolioAccountIdPositionsInvalidatePost**
> Object portfolioAccountIdPositionsInvalidatePost(accountId)

Invalidates the backend cache of the Portfolio

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.PortfolioApi();

var accountId = "accountId_example"; // String | account id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.portfolioAccountIdPositionsInvalidatePost(accountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| account id | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="portfolioAccountIdPositionsPageIdGet"></a>
# **portfolioAccountIdPositionsPageIdGet**
> Position portfolioAccountIdPositionsPageIdGet(accountId, pageId, opts)

Portfolio Positions

Returns a list of positions for the given account. The endpoint supports paging, page's default size is 30 positions. /portfolio/accounts or /portfolio/subaccounts must be called prior to this endpoint.

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.PortfolioApi();

var accountId = "accountId_example"; // String | account id

var pageId = "pageId_example"; // String | page id

var opts = { 
  'model': "model_example", // String | optional
  'sort': "sort_example", // String | declare the table to be sorted by which column
  'direction': "direction_example", // String | in which order, a means ascending - d means descending
  'period': "period_example" // String | period for pnl column, can be 1D, 7D, 1M...
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.portfolioAccountIdPositionsPageIdGet(accountId, pageId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| account id | 
 **pageId** | **String**| page id | 
 **model** | **String**| optional | [optional] 
 **sort** | **String**| declare the table to be sorted by which column | [optional] 
 **direction** | **String**| in which order, a means ascending - d means descending | [optional] 
 **period** | **String**| period for pnl column, can be 1D, 7D, 1M... | [optional] 

### Return type

[**Position**](Position.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="portfolioAccountIdSummaryGet"></a>
# **portfolioAccountIdSummaryGet**
> InlineResponse20012 portfolioAccountIdSummaryGet(accountId)

Account Summary

Returns information about margin, cash balances and other information related to specified account. See also /portfolio/{accountId}/ledger. /portfolio/accounts or /portfolio/subaccounts must be called prior to this endpoint.

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.PortfolioApi();

var accountId = "accountId_example"; // String | account id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.portfolioAccountIdSummaryGet(accountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| account id | 

### Return type

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="portfolioAccountsGet"></a>
# **portfolioAccountsGet**
> Accounts portfolioAccountsGet()

Portfolio Accounts

In non-tiered account structures, returns a list of accounts for which the user can view position and account information. This endpoint must be called prior  to calling other /portfolio endpoints for those accounts. For querying a list of accounts  which the user can trade, see /iserver/accounts. For a list of subaccounts in tiered  account structures (e.g. financial advisor or ibroker accounts) see /portfolio/subaccounts.

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.PortfolioApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.portfolioAccountsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Accounts**](Accounts.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="portfolioAllocationPost"></a>
# **portfolioAllocationPost**
> Allocation portfolioAllocationPost(body)

Account Alloction (All Accounts)

Similar to /portfolio/{accountId}/allocation but returns a consolidated view of of all the accounts returned by /portfolio/accounts. /portfolio/accounts or /portfolio/subaccounts must be called prior to this endpoint.

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.PortfolioApi();

var body = new ClientPortalWebApi.Body2(); // Body2 | accounts info


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.portfolioAllocationPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body2**](Body2.md)| accounts info | 

### Return type

[**Allocation**](Allocation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="portfolioPositionsConidGet"></a>
# **portfolioPositionsConidGet**
> InlineResponse20014 portfolioPositionsConidGet(conid)

Positions by Conid

Returns an object of all positions matching the conid for all the selected accounts. For portfolio models the conid could be in more than one model, returning an array with the name of the model it belongs to. /portfolio/accounts or /portfolio/subaccounts must be called prior to this endpoint.

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.PortfolioApi();

var conid = 56; // Number | contract id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.portfolioPositionsConidGet(conid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conid** | **Number**| contract id | 

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="portfolioSubaccountsGet"></a>
# **portfolioSubaccountsGet**
> Account portfolioSubaccountsGet()

List of Sub-Accounts

Used in tiered account structures (such as financial advisor and ibroker accounts)  to return a list of sub-accounts for which the user can view position and  account-related information. This endpoint must be called prior to calling other  /portfolio endpoints for those subaccounts.  To query a list of accounts the user can trade, see /iserver/accounts.

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.PortfolioApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.portfolioSubaccountsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Account**](Account.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

