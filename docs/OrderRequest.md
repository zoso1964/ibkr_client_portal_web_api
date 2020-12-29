# ClientPortalWebApi.OrderRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acctId** | **String** | acctId is optional. It should be one of the accounts returned by /iserver/accounts. If not passed, the first one in the list is selected.  | [optional] 
**conid** | **Number** | conid is the identifier of the security you want to trade, you can find the conid with /iserver/secdef/search.  | [optional] 
**secType** | **String** | conid:type for example 265598:STK | [optional] 
**cOID** | **String** | Customer Order ID. An arbitraty string that can be used to identify the order, e.g \"my-fb-order\". The value must be unique for a 24h span. Please do not set this value for child orders when placing a bracket order.  | [optional] 
**parentId** | **String** | When placing bracket orders, the child parentId must be equal to the cOId (customer order id) of the parent.  | [optional] 
**orderType** | **String** | orderType can be one of MKT (Market), LMT (Limit), STP (Stop) or STP_LIMIT (stop limit)  | [optional] 
**listingExchange** | **String** | listingExchange is optional. By default we use \"SMART\" routing. Possible values are available via this end point: /v1/portal/iserver/contract/{{conid}}/info, see valid_exchange: e.g: SMART,AMEX,NYSE, CBOE,ISE,CHX,ARCA,ISLAND,DRCTEDGE,BEX,BATS,EDGEA,CSFBALGO,JE FFALGO,BYX,IEX,FOXRIVER,TPLUS1,NYSENAT,PSX  | [optional] 
**outsideRTH** | **Boolean** | set to true if the order can be executed outside regular trading hours.  | [optional] 
**price** | **Number** | optional if order is MKT, for LMT, this is the limit price. For STP this is the stop price.  | [optional] 
**side** | **String** | SELL or BUY | [optional] 
**ticker** | **String** |  | [optional] 
**tif** | **String** | GTC (Good Till Cancel) or DAY. DAY orders are automatically cancelled at the end of the Day or Trading hours.  | [optional] 
**referrer** | **String** | for example QuickTrade | [optional] 
**quantity** | **Number** | usually integer, for some special cases can be float numbers | [optional] 
**useAdaptive** | **Boolean** | If true, the system will use the Adaptive Algo to submit the order https://www.interactivebrokers.com/en/index.php?f=19091  | [optional] 


