# ClientPortalWebApi.HistoryData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start** | **String** | start date time | [optional] 
**mdAvailability** | **String** | Market Data Availability. The field may contain two chars. The first char is the primary code: R = Realtime, D = Delayed, Z = Frozen, Y = Frozen Delayed. The second char is the secondary code: P = Snapshot Available, p = Consolidated.  | [optional] 
**barLength** | **Number** |  | [optional] 
**delay** | **Number** |  | [optional] 
**high** | **String** | price/volume/... | [optional] 
**low** | **String** | price/volume/... | [optional] 
**symbol** | **String** |  | [optional] 
**text** | **String** |  | [optional] 
**tickNum** | **String** |  | [optional] 
**timePeriod** | **String** |  | [optional] 
**data** | [**[HistorydataData]**](HistorydataData.md) |  | [optional] 
**points** | **Number** | total number of points | [optional] 
**travelTime** | **Number** |  | [optional] 


