# client_portal_web_api

ClientPortalWebApi - JavaScript client for client_portal_web_api
Production version of the Client Portal Web API
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install client_portal_web_api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your client_portal_web_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('client_portal_web_api')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/client_portal_web_api
then install it via:

```shell
    npm install YOUR_USERNAME/client_portal_web_api --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var api = new ClientPortalWebApi.AccountApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.iserverAccountPnlPartitionedGet(callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://localhost:5000/v1/portal*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ClientPortalWebApi.AccountApi* | [**iserverAccountPnlPartitionedGet**](docs/AccountApi.md#iserverAccountPnlPartitionedGet) | **GET** /iserver/account/pnl/partitioned | PnL for the selected account
*ClientPortalWebApi.AccountApi* | [**iserverAccountPost**](docs/AccountApi.md#iserverAccountPost) | **POST** /iserver/account | Updates currently selected account to the provided account
*ClientPortalWebApi.AccountApi* | [**iserverAccountsGet**](docs/AccountApi.md#iserverAccountsGet) | **GET** /iserver/accounts | Brokerage Accounts
*ClientPortalWebApi.AccountApi* | [**portfolioAccountIdLedgerGet**](docs/AccountApi.md#portfolioAccountIdLedgerGet) | **GET** /portfolio/{accountId}/ledger | Account Ledger
*ClientPortalWebApi.AccountApi* | [**portfolioAccountIdMetaGet**](docs/AccountApi.md#portfolioAccountIdMetaGet) | **GET** /portfolio/{accountId}/meta | Account Information
*ClientPortalWebApi.AccountApi* | [**portfolioAccountIdSummaryGet**](docs/AccountApi.md#portfolioAccountIdSummaryGet) | **GET** /portfolio/{accountId}/summary | Account Summary
*ClientPortalWebApi.AccountApi* | [**portfolioAccountsGet**](docs/AccountApi.md#portfolioAccountsGet) | **GET** /portfolio/accounts | Portfolio Accounts
*ClientPortalWebApi.AccountApi* | [**portfolioSubaccountsGet**](docs/AccountApi.md#portfolioSubaccountsGet) | **GET** /portfolio/subaccounts | List of Sub-Accounts
*ClientPortalWebApi.ContractApi* | [**iserverContractConidInfoGet**](docs/ContractApi.md#iserverContractConidInfoGet) | **GET** /iserver/contract/{conid}/info | Contract Info
*ClientPortalWebApi.ContractApi* | [**iserverSecdefSearchPost**](docs/ContractApi.md#iserverSecdefSearchPost) | **POST** /iserver/secdef/search | Search by symbol or name
*ClientPortalWebApi.ContractApi* | [**trsrvFuturesGet**](docs/ContractApi.md#trsrvFuturesGet) | **GET** /trsrv/futures | Security Futures by Symbol
*ClientPortalWebApi.ContractApi* | [**trsrvSecdefPost**](docs/ContractApi.md#trsrvSecdefPost) | **POST** /trsrv/secdef | Secdef by Conid
*ClientPortalWebApi.FYIApi* | [**fyiDeliveryoptionsDeviceIdDelete**](docs/FYIApi.md#fyiDeliveryoptionsDeviceIdDelete) | **DELETE** /fyi/deliveryoptions/{deviceId} | delete a device
*ClientPortalWebApi.FYIApi* | [**fyiDeliveryoptionsDevicePost**](docs/FYIApi.md#fyiDeliveryoptionsDevicePost) | **POST** /fyi/deliveryoptions/device | enable/disable device option
*ClientPortalWebApi.FYIApi* | [**fyiDeliveryoptionsEmailPut**](docs/FYIApi.md#fyiDeliveryoptionsEmailPut) | **PUT** /fyi/deliveryoptions/email | enable/disable email option
*ClientPortalWebApi.FYIApi* | [**fyiDeliveryoptionsGet**](docs/FYIApi.md#fyiDeliveryoptionsGet) | **GET** /fyi/deliveryoptions | Get delivery options
*ClientPortalWebApi.FYIApi* | [**fyiDisclaimerTypecodeGet**](docs/FYIApi.md#fyiDisclaimerTypecodeGet) | **GET** /fyi/disclaimer/{typecode} | get disclaimer for a certain kind of fyi
*ClientPortalWebApi.FYIApi* | [**fyiDisclaimerTypecodePut**](docs/FYIApi.md#fyiDisclaimerTypecodePut) | **PUT** /fyi/disclaimer/{typecode} | mark disclaimer read
*ClientPortalWebApi.FYIApi* | [**fyiNotificationsGet**](docs/FYIApi.md#fyiNotificationsGet) | **GET** /fyi/notifications | Get a list of notifications
*ClientPortalWebApi.FYIApi* | [**fyiNotificationsMoreGet**](docs/FYIApi.md#fyiNotificationsMoreGet) | **GET** /fyi/notifications/more | Get more notifications based on a certain one
*ClientPortalWebApi.FYIApi* | [**fyiNotificationsNotificationIdPut**](docs/FYIApi.md#fyiNotificationsNotificationIdPut) | **PUT** /fyi/notifications/{notificationId} | Get a list of notifications
*ClientPortalWebApi.FYIApi* | [**fyiSettingsGet**](docs/FYIApi.md#fyiSettingsGet) | **GET** /fyi/settings | Get a list of subscriptions
*ClientPortalWebApi.FYIApi* | [**fyiSettingsTypecodePost**](docs/FYIApi.md#fyiSettingsTypecodePost) | **POST** /fyi/settings/{typecode} | enable/disable certain subscription
*ClientPortalWebApi.FYIApi* | [**fyiUnreadnumberGet**](docs/FYIApi.md#fyiUnreadnumberGet) | **GET** /fyi/unreadnumber | Get unread number of fyis
*ClientPortalWebApi.IBCustApi* | [**ibcustEntityInfoGet**](docs/IBCustApi.md#ibcustEntityInfoGet) | **GET** /ibcust/entity/info | IBCust Entity Info
*ClientPortalWebApi.MarketDataApi* | [**iserverMarketdataHistoryGet**](docs/MarketDataApi.md#iserverMarketdataHistoryGet) | **GET** /iserver/marketdata/history | Market Data History
*ClientPortalWebApi.MarketDataApi* | [**iserverMarketdataSnapshotGet**](docs/MarketDataApi.md#iserverMarketdataSnapshotGet) | **GET** /iserver/marketdata/snapshot | Market Data
*ClientPortalWebApi.OrderApi* | [**iserverAccountAccountIdOrderOrigCustomerOrderIdDelete**](docs/OrderApi.md#iserverAccountAccountIdOrderOrigCustomerOrderIdDelete) | **DELETE** /iserver/account/{accountId}/order/{origCustomerOrderId} | Delete Order
*ClientPortalWebApi.OrderApi* | [**iserverAccountAccountIdOrderOrigCustomerOrderIdPost**](docs/OrderApi.md#iserverAccountAccountIdOrderOrigCustomerOrderIdPost) | **POST** /iserver/account/{accountId}/order/{origCustomerOrderId} | Modify Order
*ClientPortalWebApi.OrderApi* | [**iserverAccountAccountIdOrderPost**](docs/OrderApi.md#iserverAccountAccountIdOrderPost) | **POST** /iserver/account/{accountId}/order | Place Order
*ClientPortalWebApi.OrderApi* | [**iserverAccountAccountIdOrderWhatifPost**](docs/OrderApi.md#iserverAccountAccountIdOrderWhatifPost) | **POST** /iserver/account/{accountId}/order/whatif | Preview Order
*ClientPortalWebApi.OrderApi* | [**iserverAccountAccountIdOrdersPost**](docs/OrderApi.md#iserverAccountAccountIdOrdersPost) | **POST** /iserver/account/{accountId}/orders | Place Orders (Support bracket orders)
*ClientPortalWebApi.OrderApi* | [**iserverAccountOrdersGet**](docs/OrderApi.md#iserverAccountOrdersGet) | **GET** /iserver/account/orders | Live Orders
*ClientPortalWebApi.OrderApi* | [**iserverReplyReplyidPost**](docs/OrderApi.md#iserverReplyReplyidPost) | **POST** /iserver/reply/{replyid} | Place Order Reply
*ClientPortalWebApi.PnLApi* | [**iserverAccountPnlPartitionedGet**](docs/PnLApi.md#iserverAccountPnlPartitionedGet) | **GET** /iserver/account/pnl/partitioned | PnL for the selected account
*ClientPortalWebApi.PortfolioApi* | [**portfolioAccountIdAllocationGet**](docs/PortfolioApi.md#portfolioAccountIdAllocationGet) | **GET** /portfolio/{accountId}/allocation | Account Allocation
*ClientPortalWebApi.PortfolioApi* | [**portfolioAccountIdLedgerGet**](docs/PortfolioApi.md#portfolioAccountIdLedgerGet) | **GET** /portfolio/{accountId}/ledger | Account Ledger
*ClientPortalWebApi.PortfolioApi* | [**portfolioAccountIdMetaGet**](docs/PortfolioApi.md#portfolioAccountIdMetaGet) | **GET** /portfolio/{accountId}/meta | Account Information
*ClientPortalWebApi.PortfolioApi* | [**portfolioAccountIdPositionConidGet**](docs/PortfolioApi.md#portfolioAccountIdPositionConidGet) | **GET** /portfolio/{accountId}/position/{conid} | Position by Conid
*ClientPortalWebApi.PortfolioApi* | [**portfolioAccountIdPositionsInvalidatePost**](docs/PortfolioApi.md#portfolioAccountIdPositionsInvalidatePost) | **POST** /portfolio/{accountId}/positions/invalidate | Invalidates the backend cache of the Portfolio
*ClientPortalWebApi.PortfolioApi* | [**portfolioAccountIdPositionsPageIdGet**](docs/PortfolioApi.md#portfolioAccountIdPositionsPageIdGet) | **GET** /portfolio/{accountId}/positions/{pageId} | Portfolio Positions
*ClientPortalWebApi.PortfolioApi* | [**portfolioAccountIdSummaryGet**](docs/PortfolioApi.md#portfolioAccountIdSummaryGet) | **GET** /portfolio/{accountId}/summary | Account Summary
*ClientPortalWebApi.PortfolioApi* | [**portfolioAccountsGet**](docs/PortfolioApi.md#portfolioAccountsGet) | **GET** /portfolio/accounts | Portfolio Accounts
*ClientPortalWebApi.PortfolioApi* | [**portfolioAllocationPost**](docs/PortfolioApi.md#portfolioAllocationPost) | **POST** /portfolio/allocation | Account Alloction (All Accounts)
*ClientPortalWebApi.PortfolioApi* | [**portfolioPositionsConidGet**](docs/PortfolioApi.md#portfolioPositionsConidGet) | **GET** /portfolio/positions/{conid} | Positions by Conid
*ClientPortalWebApi.PortfolioApi* | [**portfolioSubaccountsGet**](docs/PortfolioApi.md#portfolioSubaccountsGet) | **GET** /portfolio/subaccounts | List of Sub-Accounts
*ClientPortalWebApi.PortfolioAnalystApi* | [**paPerformancePost**](docs/PortfolioAnalystApi.md#paPerformancePost) | **POST** /pa/performance | Account Performance
*ClientPortalWebApi.PortfolioAnalystApi* | [**paSummaryPost**](docs/PortfolioAnalystApi.md#paSummaryPost) | **POST** /pa/summary | Account Balance's Summary
*ClientPortalWebApi.ScannerApi* | [**iserverScannerParamsGet**](docs/ScannerApi.md#iserverScannerParamsGet) | **GET** /iserver/scanner/params | get lists of available scanners
*ClientPortalWebApi.ScannerApi* | [**iserverScannerRunPost**](docs/ScannerApi.md#iserverScannerRunPost) | **POST** /iserver/scanner/run | run scanner to get a list of contracts
*ClientPortalWebApi.SessionApi* | [**iserverAuthStatusPost**](docs/SessionApi.md#iserverAuthStatusPost) | **POST** /iserver/auth/status | Authentication Status
*ClientPortalWebApi.SessionApi* | [**iserverReauthenticatePost**](docs/SessionApi.md#iserverReauthenticatePost) | **POST** /iserver/reauthenticate | Tries to re-authenticate to Brokerage
*ClientPortalWebApi.SessionApi* | [**logoutPost**](docs/SessionApi.md#logoutPost) | **POST** /logout | Ends the current session
*ClientPortalWebApi.SessionApi* | [**ssoValidateGet**](docs/SessionApi.md#ssoValidateGet) | **GET** /sso/validate | Validate SSO
*ClientPortalWebApi.SessionApi* | [**ticklePost**](docs/SessionApi.md#ticklePost) | **POST** /tickle | Ping the server to keep the session open
*ClientPortalWebApi.TradesApi* | [**iserverAccountTradesGet**](docs/TradesApi.md#iserverAccountTradesGet) | **GET** /iserver/account/trades | List of Trades for the selected account


## Documentation for Models

 - [ClientPortalWebApi.Account](docs/Account.md)
 - [ClientPortalWebApi.AccountMaster](docs/AccountMaster.md)
 - [ClientPortalWebApi.Accounts](docs/Accounts.md)
 - [ClientPortalWebApi.Allocation](docs/Allocation.md)
 - [ClientPortalWebApi.AllocationInner](docs/AllocationInner.md)
 - [ClientPortalWebApi.AllocationInnerAssetClass](docs/AllocationInnerAssetClass.md)
 - [ClientPortalWebApi.AllocationInnerAssetClassLong](docs/AllocationInnerAssetClassLong.md)
 - [ClientPortalWebApi.AllocationInnerAssetClassShort](docs/AllocationInnerAssetClassShort.md)
 - [ClientPortalWebApi.AllocationInnerGroup](docs/AllocationInnerGroup.md)
 - [ClientPortalWebApi.AllocationInnerGroupLong](docs/AllocationInnerGroupLong.md)
 - [ClientPortalWebApi.AllocationInnerGroupShort](docs/AllocationInnerGroupShort.md)
 - [ClientPortalWebApi.AllocationInnerSector](docs/AllocationInnerSector.md)
 - [ClientPortalWebApi.AllocationInnerSectorLong](docs/AllocationInnerSectorLong.md)
 - [ClientPortalWebApi.AllocationInnerSectorShort](docs/AllocationInnerSectorShort.md)
 - [ClientPortalWebApi.AuthStatus](docs/AuthStatus.md)
 - [ClientPortalWebApi.Body](docs/Body.md)
 - [ClientPortalWebApi.Body1](docs/Body1.md)
 - [ClientPortalWebApi.Body2](docs/Body2.md)
 - [ClientPortalWebApi.Body3](docs/Body3.md)
 - [ClientPortalWebApi.Body4](docs/Body4.md)
 - [ClientPortalWebApi.Body5](docs/Body5.md)
 - [ClientPortalWebApi.Body6](docs/Body6.md)
 - [ClientPortalWebApi.Body7](docs/Body7.md)
 - [ClientPortalWebApi.CalendarRequest](docs/CalendarRequest.md)
 - [ClientPortalWebApi.CalendarRequestDate](docs/CalendarRequestDate.md)
 - [ClientPortalWebApi.CalendarRequestFilters](docs/CalendarRequestFilters.md)
 - [ClientPortalWebApi.Contract](docs/Contract.md)
 - [ClientPortalWebApi.ContractRules](docs/ContractRules.md)
 - [ClientPortalWebApi.Events](docs/Events.md)
 - [ClientPortalWebApi.EventsInner](docs/EventsInner.md)
 - [ClientPortalWebApi.Futures](docs/Futures.md)
 - [ClientPortalWebApi.FuturesInner](docs/FuturesInner.md)
 - [ClientPortalWebApi.HistoryData](docs/HistoryData.md)
 - [ClientPortalWebApi.HistorydataData](docs/HistorydataData.md)
 - [ClientPortalWebApi.IbcustentityinfoAddress](docs/IbcustentityinfoAddress.md)
 - [ClientPortalWebApi.IbcustentityinfoEntities](docs/IbcustentityinfoEntities.md)
 - [ClientPortalWebApi.IbcustentityinfoName](docs/IbcustentityinfoName.md)
 - [ClientPortalWebApi.InlineResponse200](docs/InlineResponse200.md)
 - [ClientPortalWebApi.InlineResponse2001](docs/InlineResponse2001.md)
 - [ClientPortalWebApi.InlineResponse20010](docs/InlineResponse20010.md)
 - [ClientPortalWebApi.InlineResponse20011](docs/InlineResponse20011.md)
 - [ClientPortalWebApi.InlineResponse20012](docs/InlineResponse20012.md)
 - [ClientPortalWebApi.InlineResponse20013](docs/InlineResponse20013.md)
 - [ClientPortalWebApi.InlineResponse20014](docs/InlineResponse20014.md)
 - [ClientPortalWebApi.InlineResponse20015](docs/InlineResponse20015.md)
 - [ClientPortalWebApi.InlineResponse20016](docs/InlineResponse20016.md)
 - [ClientPortalWebApi.InlineResponse20017](docs/InlineResponse20017.md)
 - [ClientPortalWebApi.InlineResponse20018](docs/InlineResponse20018.md)
 - [ClientPortalWebApi.InlineResponse20019](docs/InlineResponse20019.md)
 - [ClientPortalWebApi.InlineResponse2002](docs/InlineResponse2002.md)
 - [ClientPortalWebApi.InlineResponse20020](docs/InlineResponse20020.md)
 - [ClientPortalWebApi.InlineResponse20021](docs/InlineResponse20021.md)
 - [ClientPortalWebApi.InlineResponse20022](docs/InlineResponse20022.md)
 - [ClientPortalWebApi.InlineResponse20022E](docs/InlineResponse20022E.md)
 - [ClientPortalWebApi.InlineResponse2003](docs/InlineResponse2003.md)
 - [ClientPortalWebApi.InlineResponse2004](docs/InlineResponse2004.md)
 - [ClientPortalWebApi.InlineResponse2005](docs/InlineResponse2005.md)
 - [ClientPortalWebApi.InlineResponse2005Amount](docs/InlineResponse2005Amount.md)
 - [ClientPortalWebApi.InlineResponse2005Equity](docs/InlineResponse2005Equity.md)
 - [ClientPortalWebApi.InlineResponse2006](docs/InlineResponse2006.md)
 - [ClientPortalWebApi.InlineResponse2007](docs/InlineResponse2007.md)
 - [ClientPortalWebApi.InlineResponse2008](docs/InlineResponse2008.md)
 - [ClientPortalWebApi.InlineResponse2009](docs/InlineResponse2009.md)
 - [ClientPortalWebApi.InlineResponse2009FilterList](docs/InlineResponse2009FilterList.md)
 - [ClientPortalWebApi.InlineResponse2009InstrumentList](docs/InlineResponse2009InstrumentList.md)
 - [ClientPortalWebApi.InlineResponse2009LocationTree](docs/InlineResponse2009LocationTree.md)
 - [ClientPortalWebApi.InlineResponse2009Locations](docs/InlineResponse2009Locations.md)
 - [ClientPortalWebApi.InlineResponse2009ScanTypeList](docs/InlineResponse2009ScanTypeList.md)
 - [ClientPortalWebApi.InlineResponse400](docs/InlineResponse400.md)
 - [ClientPortalWebApi.InlineResponse4001](docs/InlineResponse4001.md)
 - [ClientPortalWebApi.InlineResponse500](docs/InlineResponse500.md)
 - [ClientPortalWebApi.Ledger](docs/Ledger.md)
 - [ClientPortalWebApi.ModifyOrder](docs/ModifyOrder.md)
 - [ClientPortalWebApi.Notifications](docs/Notifications.md)
 - [ClientPortalWebApi.NotificationsInner](docs/NotificationsInner.md)
 - [ClientPortalWebApi.Order](docs/Order.md)
 - [ClientPortalWebApi.OrderRequest](docs/OrderRequest.md)
 - [ClientPortalWebApi.Performance](docs/Performance.md)
 - [ClientPortalWebApi.PerformanceCps](docs/PerformanceCps.md)
 - [ClientPortalWebApi.PerformanceCpsData](docs/PerformanceCpsData.md)
 - [ClientPortalWebApi.PerformanceNav](docs/PerformanceNav.md)
 - [ClientPortalWebApi.PerformanceTpps](docs/PerformanceTpps.md)
 - [ClientPortalWebApi.Position](docs/Position.md)
 - [ClientPortalWebApi.PositionInner](docs/PositionInner.md)
 - [ClientPortalWebApi.ScannerParams](docs/ScannerParams.md)
 - [ClientPortalWebApi.ScannerparamsFilter](docs/ScannerparamsFilter.md)
 - [ClientPortalWebApi.Secdef](docs/Secdef.md)
 - [ClientPortalWebApi.SecdefInner](docs/SecdefInner.md)
 - [ClientPortalWebApi.SetAccount](docs/SetAccount.md)
 - [ClientPortalWebApi.Summary](docs/Summary.md)
 - [ClientPortalWebApi.SummaryAccountSummaries](docs/SummaryAccountSummaries.md)
 - [ClientPortalWebApi.SummaryBalanceByDate](docs/SummaryBalanceByDate.md)
 - [ClientPortalWebApi.SummaryBalanceByDateSeries](docs/SummaryBalanceByDateSeries.md)
 - [ClientPortalWebApi.SummaryExcludedAccounts](docs/SummaryExcludedAccounts.md)
 - [ClientPortalWebApi.SummaryTotal](docs/SummaryTotal.md)
 - [ClientPortalWebApi.Symbol](docs/Symbol.md)
 - [ClientPortalWebApi.Trade](docs/Trade.md)


## Documentation for Authorization

 All endpoints do not require authorization.
