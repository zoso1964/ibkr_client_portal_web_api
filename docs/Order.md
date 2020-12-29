# ClientPortalWebApi.Order

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acct** | **String** | account id | [optional] 
**conid** | **Number** |  | [optional] 
**orderDesc** | **String** |  | [optional] 
**description1** | **String** |  | [optional] 
**ticker** | **String** | for exmple FB | [optional] 
**secType** | **String** | for example STK | [optional] 
**listingExchange** | **String** | for example NASDAQ.NMS | [optional] 
**remainingQuantity** | **String** |  | [optional] 
**filledQuantity** | **String** |  | [optional] 
**companyName** | **String** |  | [optional] 
**status** | **String** | PendingSubmit - Indicates the order was sent, but confirmation has not been received that it has been received by the destination.                  Occurs most commonly if an exchange is closed. PendingCancel - Indicates that a request has been sent to cancel an order but confirmation has not been received of its cancellation. PreSubmitted - Indicates that a simulated order type has been accepted by the IBKR system and that this order has yet to be elected.                 The order is held in the IBKR system until the election criteria are met. At that time the order is transmitted to the order destination as specified.  Submitted - Indicates that the order has been accepted at the order destination and is working. Cancelled - Indicates that the balance of the order has been confirmed cancelled by the IB system.              This could occur unexpectedly when IB or the destination has rejected the order.   Filled - Indicates that the order has been completely filled.  Inactive - Indicates the order is not working, for instance if the order was invalid and triggered an error message,            or if the order was to short a security and shares have not yet been located.   | [optional] 
**origOrderType** | **String** | for example Limit | [optional] 
**side** | **String** | BUY or SELL | [optional] 
**price** | **Number** |  | [optional] 
**bgColor** | **String** | back-ground color | [optional] 
**fgColor** | **String** |  | [optional] 
**orderId** | **Number** |  | [optional] 
**parentId** | **Number** | Only exists in child order of bracket | [optional] 


