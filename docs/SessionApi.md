# ClientPortalWebApi.SessionApi

All URIs are relative to *https://localhost:5000/v1/portal*

Method | HTTP request | Description
------------- | ------------- | -------------
[**iserverAuthStatusPost**](SessionApi.md#iserverAuthStatusPost) | **POST** /iserver/auth/status | Authentication Status
[**iserverReauthenticatePost**](SessionApi.md#iserverReauthenticatePost) | **POST** /iserver/reauthenticate | Tries to re-authenticate to Brokerage
[**logoutPost**](SessionApi.md#logoutPost) | **POST** /logout | Ends the current session
[**ssoValidateGet**](SessionApi.md#ssoValidateGet) | **GET** /sso/validate | Validate SSO
[**ticklePost**](SessionApi.md#ticklePost) | **POST** /tickle | Ping the server to keep the session open


<a name="iserverAuthStatusPost"></a>
# **iserverAuthStatusPost**
> AuthStatus iserverAuthStatusPost()

Authentication Status

Current Authentication status to the Brokerage system. Market Data and Trading is not possible if not authenticated, e.g. authenticated shows false

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.SessionApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iserverAuthStatusPost(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**AuthStatus**](AuthStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="iserverReauthenticatePost"></a>
# **iserverReauthenticatePost**
> AuthStatus iserverReauthenticatePost()

Tries to re-authenticate to Brokerage

Provides a way to reauthenticate to the Brokerage system as long as there is a valid SSO session, see /sso/validate.

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.SessionApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iserverReauthenticatePost(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**AuthStatus**](AuthStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="logoutPost"></a>
# **logoutPost**
> InlineResponse20015 logoutPost()

Ends the current session

Logs the user out of the gateway session. Any further activity requires re-authentication.

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.SessionApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.logoutPost(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse20015**](InlineResponse20015.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="ssoValidateGet"></a>
# **ssoValidateGet**
> ssoValidateGet()

Validate SSO

Validates the current session for the SSO user

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.SessionApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.ssoValidateGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="ticklePost"></a>
# **ticklePost**
> ticklePost()

Ping the server to keep the session open

If the gateway has not received any requests for several minutes an open session will automatically timeout. The tickle endpoint pings the server to prevent the session from ending.

### Example
```javascript
var ClientPortalWebApi = require('client_portal_web_api');

var apiInstance = new ClientPortalWebApi.SessionApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.ticklePost(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

