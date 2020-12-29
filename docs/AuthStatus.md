# ClientPortalWebApi.AuthStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authenticated** | **Boolean** | Brokerage session is authenticated | [optional] 
**connected** | **Boolean** | Connected to backend | [optional] 
**competing** | **Boolean** | Brokerage session is competing, e.g. user is logged in to IBKR Mobile, WebTrader, TWS or other trading platforms. | [optional] 
**fail** | **String** | Authentication failed, why. | [optional] 
**message** | **String** | System messages that may affect trading | [optional] 
**prompts** | **[String]** | Prompt messages that may affect trading or the account | [optional] 


