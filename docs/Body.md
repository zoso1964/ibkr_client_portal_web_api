# ClientPortalWebApi.Body

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orders** | [**[OrderRequest]**](OrderRequest.md) | Notes for bracket orders: 1. Children orders will not have its own \"cOID\", so please donot pass \"cOID\" parameter in child order.Instead, they will have a \"parentId\" which must be equal to \"cOID\" of parent. 2. When you cancel a parent order, it will cancel all bracket orders, when you cancel one child order, it will also cancel its sibling order.  | [optional] 


