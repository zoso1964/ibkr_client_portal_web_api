# ClientPortalWebApi.AccountApi

All URIs are relative to *https://localhost:5000/v1/portal*

Method | HTTP request | Description
------------- | ------------- | -------------
[**iserverAccountPnlPartitionedGet**](AccountApi.md#iserverAccountPnlPartitionedGet) | **GET** /iserver/account/pnl/partitioned | PnL for the selected account
[**iserverAccountPost**](AccountApi.md#iserverAccountPost) | **POST** /iserver/account | Updates currently selected account to the provided account
[**iserverAccountsGet**](AccountApi.md#iserverAccountsGet) | **GET** /iserver/accounts | Brokerage Accounts
[**portfolioAccountIdLedgerGet**](AccountApi.md#portfolioAccountIdLedgerGet) | **GET** /portfolio/{accountId}/ledger | Account Ledger
[**portfolioAccountIdMetaGet**](AccountApi.md#portfolioAccountIdMetaGet) | **GET** /portfolio/{accountId}/meta | Account Information
[**portfolioAccountIdSummaryGet**](AccountApi.md#portfolioAccountIdSummaryGet) | **GET** /portfolio/{accountId}/summary | Account Summary
[**portfolioAccountsGet**](AccountApi.md#portfolioAccountsGet) | **GET** /portfolio/accounts | Portfolio Accounts
[**portfolioSubaccountsGet**](AccountApi.md#portfolioSubaccountsGet) | **GET** /portfolio/subaccounts | List of Sub-Accounts


<a name="iserverAccountPnlPartitionedGet"></a>
# **iserverAccountPnlPartitionedGet**
> InlineResponse20011 iserverAccountPnlPartitionedGet()

PnL for the selected account

Returns an object containing PnLfor the selected account and its models (if any).

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.AccountApi();

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

<a name="iserverAccountPost"></a>
# **iserverAccountPost**
> InlineResponse2001 iserverAccountPost(body)

Updates currently selected account to the provided account

If an user has multiple accounts, and user wants to get orders, trades, etc. of an account other than currently selected account, then user can update the currently selected account using this API and then can fetch required information for the newly updated account.

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.AccountApi();

var body = new ClientPortalWebApi.SetAccount(); // SetAccount | account id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iserverAccountPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SetAccount**](SetAccount.md)| account id | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="iserverAccountsGet"></a>
# **iserverAccountsGet**
> InlineResponse200 iserverAccountsGet()

Brokerage Accounts

Returns a list of accounts the user has trading access to, their respective aliases and the currently selected account. Note this endpoint must be called before modifying an order or querying open orders.

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.AccountApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iserverAccountsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse200**](InlineResponse200.md)

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

var apiInstance = new ClientPortalWebApi.AccountApi();

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

var apiInstance = new ClientPortalWebApi.AccountApi();

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

<a name="portfolioAccountIdSummaryGet"></a>
# **portfolioAccountIdSummaryGet**
> InlineResponse20012 portfolioAccountIdSummaryGet(accountId)

Account Summary

Returns information about margin, cash balances and other information related to specified account. See also /portfolio/{accountId}/ledger. /portfolio/accounts or /portfolio/subaccounts must be called prior to this endpoint.

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.AccountApi();

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

var apiInstance = new ClientPortalWebApi.AccountApi();

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

<a name="portfolioSubaccountsGet"></a>
# **portfolioSubaccountsGet**
> Account portfolioSubaccountsGet()

List of Sub-Accounts

Used in tiered account structures (such as financial advisor and ibroker accounts)  to return a list of sub-accounts for which the user can view position and  account-related information. This endpoint must be called prior to calling other  /portfolio endpoints for those subaccounts.  To query a list of accounts the user can trade, see /iserver/accounts.

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.AccountApi();

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

