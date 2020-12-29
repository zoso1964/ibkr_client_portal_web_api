/*
 * Client Portal Web API
 * Production version of the Client Portal Web API
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.17
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Account', 'model/AccountMaster', 'model/Accounts', 'model/Allocation', 'model/AllocationInner', 'model/AllocationInnerAssetClass', 'model/AllocationInnerAssetClassLong', 'model/AllocationInnerAssetClassShort', 'model/AllocationInnerGroup', 'model/AllocationInnerGroupLong', 'model/AllocationInnerGroupShort', 'model/AllocationInnerSector', 'model/AllocationInnerSectorLong', 'model/AllocationInnerSectorShort', 'model/AuthStatus', 'model/Body', 'model/Body1', 'model/Body2', 'model/Body3', 'model/Body4', 'model/Body5', 'model/Body6', 'model/Body7', 'model/CalendarRequest', 'model/CalendarRequestDate', 'model/CalendarRequestFilters', 'model/Contract', 'model/ContractRules', 'model/Events', 'model/EventsInner', 'model/Futures', 'model/FuturesInner', 'model/HistoryData', 'model/HistorydataData', 'model/IbcustentityinfoAddress', 'model/IbcustentityinfoEntities', 'model/IbcustentityinfoName', 'model/InlineResponse200', 'model/InlineResponse2001', 'model/InlineResponse20010', 'model/InlineResponse20011', 'model/InlineResponse20012', 'model/InlineResponse20013', 'model/InlineResponse20014', 'model/InlineResponse20015', 'model/InlineResponse20016', 'model/InlineResponse20017', 'model/InlineResponse20018', 'model/InlineResponse20019', 'model/InlineResponse2002', 'model/InlineResponse20020', 'model/InlineResponse20021', 'model/InlineResponse20022', 'model/InlineResponse20022E', 'model/InlineResponse2003', 'model/InlineResponse2004', 'model/InlineResponse2005', 'model/InlineResponse2005Amount', 'model/InlineResponse2005Equity', 'model/InlineResponse2006', 'model/InlineResponse2007', 'model/InlineResponse2008', 'model/InlineResponse2009', 'model/InlineResponse2009FilterList', 'model/InlineResponse2009InstrumentList', 'model/InlineResponse2009LocationTree', 'model/InlineResponse2009Locations', 'model/InlineResponse2009ScanTypeList', 'model/InlineResponse400', 'model/InlineResponse4001', 'model/InlineResponse500', 'model/Ledger', 'model/ModifyOrder', 'model/Notifications', 'model/NotificationsInner', 'model/Order', 'model/OrderRequest', 'model/Performance', 'model/PerformanceCps', 'model/PerformanceCpsData', 'model/PerformanceNav', 'model/PerformanceTpps', 'model/Position', 'model/PositionInner', 'model/ScannerParams', 'model/ScannerparamsFilter', 'model/Secdef', 'model/SecdefInner', 'model/SetAccount', 'model/Summary', 'model/SummaryAccountSummaries', 'model/SummaryBalanceByDate', 'model/SummaryBalanceByDateSeries', 'model/SummaryExcludedAccounts', 'model/SummaryTotal', 'model/Symbol', 'model/Trade', 'api/AccountApi', 'api/ContractApi', 'api/FYIApi', 'api/IBCustApi', 'api/MarketDataApi', 'api/OrderApi', 'api/PnLApi', 'api/PortfolioApi', 'api/PortfolioAnalystApi', 'api/ScannerApi', 'api/SessionApi', 'api/TradesApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Account'), require('./model/AccountMaster'), require('./model/Accounts'), require('./model/Allocation'), require('./model/AllocationInner'), require('./model/AllocationInnerAssetClass'), require('./model/AllocationInnerAssetClassLong'), require('./model/AllocationInnerAssetClassShort'), require('./model/AllocationInnerGroup'), require('./model/AllocationInnerGroupLong'), require('./model/AllocationInnerGroupShort'), require('./model/AllocationInnerSector'), require('./model/AllocationInnerSectorLong'), require('./model/AllocationInnerSectorShort'), require('./model/AuthStatus'), require('./model/Body'), require('./model/Body1'), require('./model/Body2'), require('./model/Body3'), require('./model/Body4'), require('./model/Body5'), require('./model/Body6'), require('./model/Body7'), require('./model/CalendarRequest'), require('./model/CalendarRequestDate'), require('./model/CalendarRequestFilters'), require('./model/Contract'), require('./model/ContractRules'), require('./model/Events'), require('./model/EventsInner'), require('./model/Futures'), require('./model/FuturesInner'), require('./model/HistoryData'), require('./model/HistorydataData'), require('./model/IbcustentityinfoAddress'), require('./model/IbcustentityinfoEntities'), require('./model/IbcustentityinfoName'), require('./model/InlineResponse200'), require('./model/InlineResponse2001'), require('./model/InlineResponse20010'), require('./model/InlineResponse20011'), require('./model/InlineResponse20012'), require('./model/InlineResponse20013'), require('./model/InlineResponse20014'), require('./model/InlineResponse20015'), require('./model/InlineResponse20016'), require('./model/InlineResponse20017'), require('./model/InlineResponse20018'), require('./model/InlineResponse20019'), require('./model/InlineResponse2002'), require('./model/InlineResponse20020'), require('./model/InlineResponse20021'), require('./model/InlineResponse20022'), require('./model/InlineResponse20022E'), require('./model/InlineResponse2003'), require('./model/InlineResponse2004'), require('./model/InlineResponse2005'), require('./model/InlineResponse2005Amount'), require('./model/InlineResponse2005Equity'), require('./model/InlineResponse2006'), require('./model/InlineResponse2007'), require('./model/InlineResponse2008'), require('./model/InlineResponse2009'), require('./model/InlineResponse2009FilterList'), require('./model/InlineResponse2009InstrumentList'), require('./model/InlineResponse2009LocationTree'), require('./model/InlineResponse2009Locations'), require('./model/InlineResponse2009ScanTypeList'), require('./model/InlineResponse400'), require('./model/InlineResponse4001'), require('./model/InlineResponse500'), require('./model/Ledger'), require('./model/ModifyOrder'), require('./model/Notifications'), require('./model/NotificationsInner'), require('./model/Order'), require('./model/OrderRequest'), require('./model/Performance'), require('./model/PerformanceCps'), require('./model/PerformanceCpsData'), require('./model/PerformanceNav'), require('./model/PerformanceTpps'), require('./model/Position'), require('./model/PositionInner'), require('./model/ScannerParams'), require('./model/ScannerparamsFilter'), require('./model/Secdef'), require('./model/SecdefInner'), require('./model/SetAccount'), require('./model/Summary'), require('./model/SummaryAccountSummaries'), require('./model/SummaryBalanceByDate'), require('./model/SummaryBalanceByDateSeries'), require('./model/SummaryExcludedAccounts'), require('./model/SummaryTotal'), require('./model/Symbol'), require('./model/Trade'), require('./api/AccountApi'), require('./api/ContractApi'), require('./api/FYIApi'), require('./api/IBCustApi'), require('./api/MarketDataApi'), require('./api/OrderApi'), require('./api/PnLApi'), require('./api/PortfolioApi'), require('./api/PortfolioAnalystApi'), require('./api/ScannerApi'), require('./api/SessionApi'), require('./api/TradesApi'));
  }
}(function(ApiClient, Account, AccountMaster, Accounts, Allocation, AllocationInner, AllocationInnerAssetClass, AllocationInnerAssetClassLong, AllocationInnerAssetClassShort, AllocationInnerGroup, AllocationInnerGroupLong, AllocationInnerGroupShort, AllocationInnerSector, AllocationInnerSectorLong, AllocationInnerSectorShort, AuthStatus, Body, Body1, Body2, Body3, Body4, Body5, Body6, Body7, CalendarRequest, CalendarRequestDate, CalendarRequestFilters, Contract, ContractRules, Events, EventsInner, Futures, FuturesInner, HistoryData, HistorydataData, IbcustentityinfoAddress, IbcustentityinfoEntities, IbcustentityinfoName, InlineResponse200, InlineResponse2001, InlineResponse20010, InlineResponse20011, InlineResponse20012, InlineResponse20013, InlineResponse20014, InlineResponse20015, InlineResponse20016, InlineResponse20017, InlineResponse20018, InlineResponse20019, InlineResponse2002, InlineResponse20020, InlineResponse20021, InlineResponse20022, InlineResponse20022E, InlineResponse2003, InlineResponse2004, InlineResponse2005, InlineResponse2005Amount, InlineResponse2005Equity, InlineResponse2006, InlineResponse2007, InlineResponse2008, InlineResponse2009, InlineResponse2009FilterList, InlineResponse2009InstrumentList, InlineResponse2009LocationTree, InlineResponse2009Locations, InlineResponse2009ScanTypeList, InlineResponse400, InlineResponse4001, InlineResponse500, Ledger, ModifyOrder, Notifications, NotificationsInner, Order, OrderRequest, Performance, PerformanceCps, PerformanceCpsData, PerformanceNav, PerformanceTpps, Position, PositionInner, ScannerParams, ScannerparamsFilter, Secdef, SecdefInner, SetAccount, Summary, SummaryAccountSummaries, SummaryBalanceByDate, SummaryBalanceByDateSeries, SummaryExcludedAccounts, SummaryTotal, Symbol, Trade, AccountApi, ContractApi, FYIApi, IBCustApi, MarketDataApi, OrderApi, PnLApi, PortfolioApi, PortfolioAnalystApi, ScannerApi, SessionApi, TradesApi) {
  'use strict';

  /**
   * Production_version_of_the_Client_Portal_Web_API.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var ClientPortalWebApi = require('index'); // See note below*.
   * var xxxSvc = new ClientPortalWebApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new ClientPortalWebApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new ClientPortalWebApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new ClientPortalWebApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Account model constructor.
     * @property {module:model/Account}
     */
    Account: Account,
    /**
     * The AccountMaster model constructor.
     * @property {module:model/AccountMaster}
     */
    AccountMaster: AccountMaster,
    /**
     * The Accounts model constructor.
     * @property {module:model/Accounts}
     */
    Accounts: Accounts,
    /**
     * The Allocation model constructor.
     * @property {module:model/Allocation}
     */
    Allocation: Allocation,
    /**
     * The AllocationInner model constructor.
     * @property {module:model/AllocationInner}
     */
    AllocationInner: AllocationInner,
    /**
     * The AllocationInnerAssetClass model constructor.
     * @property {module:model/AllocationInnerAssetClass}
     */
    AllocationInnerAssetClass: AllocationInnerAssetClass,
    /**
     * The AllocationInnerAssetClassLong model constructor.
     * @property {module:model/AllocationInnerAssetClassLong}
     */
    AllocationInnerAssetClassLong: AllocationInnerAssetClassLong,
    /**
     * The AllocationInnerAssetClassShort model constructor.
     * @property {module:model/AllocationInnerAssetClassShort}
     */
    AllocationInnerAssetClassShort: AllocationInnerAssetClassShort,
    /**
     * The AllocationInnerGroup model constructor.
     * @property {module:model/AllocationInnerGroup}
     */
    AllocationInnerGroup: AllocationInnerGroup,
    /**
     * The AllocationInnerGroupLong model constructor.
     * @property {module:model/AllocationInnerGroupLong}
     */
    AllocationInnerGroupLong: AllocationInnerGroupLong,
    /**
     * The AllocationInnerGroupShort model constructor.
     * @property {module:model/AllocationInnerGroupShort}
     */
    AllocationInnerGroupShort: AllocationInnerGroupShort,
    /**
     * The AllocationInnerSector model constructor.
     * @property {module:model/AllocationInnerSector}
     */
    AllocationInnerSector: AllocationInnerSector,
    /**
     * The AllocationInnerSectorLong model constructor.
     * @property {module:model/AllocationInnerSectorLong}
     */
    AllocationInnerSectorLong: AllocationInnerSectorLong,
    /**
     * The AllocationInnerSectorShort model constructor.
     * @property {module:model/AllocationInnerSectorShort}
     */
    AllocationInnerSectorShort: AllocationInnerSectorShort,
    /**
     * The AuthStatus model constructor.
     * @property {module:model/AuthStatus}
     */
    AuthStatus: AuthStatus,
    /**
     * The Body model constructor.
     * @property {module:model/Body}
     */
    Body: Body,
    /**
     * The Body1 model constructor.
     * @property {module:model/Body1}
     */
    Body1: Body1,
    /**
     * The Body2 model constructor.
     * @property {module:model/Body2}
     */
    Body2: Body2,
    /**
     * The Body3 model constructor.
     * @property {module:model/Body3}
     */
    Body3: Body3,
    /**
     * The Body4 model constructor.
     * @property {module:model/Body4}
     */
    Body4: Body4,
    /**
     * The Body5 model constructor.
     * @property {module:model/Body5}
     */
    Body5: Body5,
    /**
     * The Body6 model constructor.
     * @property {module:model/Body6}
     */
    Body6: Body6,
    /**
     * The Body7 model constructor.
     * @property {module:model/Body7}
     */
    Body7: Body7,
    /**
     * The CalendarRequest model constructor.
     * @property {module:model/CalendarRequest}
     */
    CalendarRequest: CalendarRequest,
    /**
     * The CalendarRequestDate model constructor.
     * @property {module:model/CalendarRequestDate}
     */
    CalendarRequestDate: CalendarRequestDate,
    /**
     * The CalendarRequestFilters model constructor.
     * @property {module:model/CalendarRequestFilters}
     */
    CalendarRequestFilters: CalendarRequestFilters,
    /**
     * The Contract model constructor.
     * @property {module:model/Contract}
     */
    Contract: Contract,
    /**
     * The ContractRules model constructor.
     * @property {module:model/ContractRules}
     */
    ContractRules: ContractRules,
    /**
     * The Events model constructor.
     * @property {module:model/Events}
     */
    Events: Events,
    /**
     * The EventsInner model constructor.
     * @property {module:model/EventsInner}
     */
    EventsInner: EventsInner,
    /**
     * The Futures model constructor.
     * @property {module:model/Futures}
     */
    Futures: Futures,
    /**
     * The FuturesInner model constructor.
     * @property {module:model/FuturesInner}
     */
    FuturesInner: FuturesInner,
    /**
     * The HistoryData model constructor.
     * @property {module:model/HistoryData}
     */
    HistoryData: HistoryData,
    /**
     * The HistorydataData model constructor.
     * @property {module:model/HistorydataData}
     */
    HistorydataData: HistorydataData,
    /**
     * The IbcustentityinfoAddress model constructor.
     * @property {module:model/IbcustentityinfoAddress}
     */
    IbcustentityinfoAddress: IbcustentityinfoAddress,
    /**
     * The IbcustentityinfoEntities model constructor.
     * @property {module:model/IbcustentityinfoEntities}
     */
    IbcustentityinfoEntities: IbcustentityinfoEntities,
    /**
     * The IbcustentityinfoName model constructor.
     * @property {module:model/IbcustentityinfoName}
     */
    IbcustentityinfoName: IbcustentityinfoName,
    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200: InlineResponse200,
    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001: InlineResponse2001,
    /**
     * The InlineResponse20010 model constructor.
     * @property {module:model/InlineResponse20010}
     */
    InlineResponse20010: InlineResponse20010,
    /**
     * The InlineResponse20011 model constructor.
     * @property {module:model/InlineResponse20011}
     */
    InlineResponse20011: InlineResponse20011,
    /**
     * The InlineResponse20012 model constructor.
     * @property {module:model/InlineResponse20012}
     */
    InlineResponse20012: InlineResponse20012,
    /**
     * The InlineResponse20013 model constructor.
     * @property {module:model/InlineResponse20013}
     */
    InlineResponse20013: InlineResponse20013,
    /**
     * The InlineResponse20014 model constructor.
     * @property {module:model/InlineResponse20014}
     */
    InlineResponse20014: InlineResponse20014,
    /**
     * The InlineResponse20015 model constructor.
     * @property {module:model/InlineResponse20015}
     */
    InlineResponse20015: InlineResponse20015,
    /**
     * The InlineResponse20016 model constructor.
     * @property {module:model/InlineResponse20016}
     */
    InlineResponse20016: InlineResponse20016,
    /**
     * The InlineResponse20017 model constructor.
     * @property {module:model/InlineResponse20017}
     */
    InlineResponse20017: InlineResponse20017,
    /**
     * The InlineResponse20018 model constructor.
     * @property {module:model/InlineResponse20018}
     */
    InlineResponse20018: InlineResponse20018,
    /**
     * The InlineResponse20019 model constructor.
     * @property {module:model/InlineResponse20019}
     */
    InlineResponse20019: InlineResponse20019,
    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002: InlineResponse2002,
    /**
     * The InlineResponse20020 model constructor.
     * @property {module:model/InlineResponse20020}
     */
    InlineResponse20020: InlineResponse20020,
    /**
     * The InlineResponse20021 model constructor.
     * @property {module:model/InlineResponse20021}
     */
    InlineResponse20021: InlineResponse20021,
    /**
     * The InlineResponse20022 model constructor.
     * @property {module:model/InlineResponse20022}
     */
    InlineResponse20022: InlineResponse20022,
    /**
     * The InlineResponse20022E model constructor.
     * @property {module:model/InlineResponse20022E}
     */
    InlineResponse20022E: InlineResponse20022E,
    /**
     * The InlineResponse2003 model constructor.
     * @property {module:model/InlineResponse2003}
     */
    InlineResponse2003: InlineResponse2003,
    /**
     * The InlineResponse2004 model constructor.
     * @property {module:model/InlineResponse2004}
     */
    InlineResponse2004: InlineResponse2004,
    /**
     * The InlineResponse2005 model constructor.
     * @property {module:model/InlineResponse2005}
     */
    InlineResponse2005: InlineResponse2005,
    /**
     * The InlineResponse2005Amount model constructor.
     * @property {module:model/InlineResponse2005Amount}
     */
    InlineResponse2005Amount: InlineResponse2005Amount,
    /**
     * The InlineResponse2005Equity model constructor.
     * @property {module:model/InlineResponse2005Equity}
     */
    InlineResponse2005Equity: InlineResponse2005Equity,
    /**
     * The InlineResponse2006 model constructor.
     * @property {module:model/InlineResponse2006}
     */
    InlineResponse2006: InlineResponse2006,
    /**
     * The InlineResponse2007 model constructor.
     * @property {module:model/InlineResponse2007}
     */
    InlineResponse2007: InlineResponse2007,
    /**
     * The InlineResponse2008 model constructor.
     * @property {module:model/InlineResponse2008}
     */
    InlineResponse2008: InlineResponse2008,
    /**
     * The InlineResponse2009 model constructor.
     * @property {module:model/InlineResponse2009}
     */
    InlineResponse2009: InlineResponse2009,
    /**
     * The InlineResponse2009FilterList model constructor.
     * @property {module:model/InlineResponse2009FilterList}
     */
    InlineResponse2009FilterList: InlineResponse2009FilterList,
    /**
     * The InlineResponse2009InstrumentList model constructor.
     * @property {module:model/InlineResponse2009InstrumentList}
     */
    InlineResponse2009InstrumentList: InlineResponse2009InstrumentList,
    /**
     * The InlineResponse2009LocationTree model constructor.
     * @property {module:model/InlineResponse2009LocationTree}
     */
    InlineResponse2009LocationTree: InlineResponse2009LocationTree,
    /**
     * The InlineResponse2009Locations model constructor.
     * @property {module:model/InlineResponse2009Locations}
     */
    InlineResponse2009Locations: InlineResponse2009Locations,
    /**
     * The InlineResponse2009ScanTypeList model constructor.
     * @property {module:model/InlineResponse2009ScanTypeList}
     */
    InlineResponse2009ScanTypeList: InlineResponse2009ScanTypeList,
    /**
     * The InlineResponse400 model constructor.
     * @property {module:model/InlineResponse400}
     */
    InlineResponse400: InlineResponse400,
    /**
     * The InlineResponse4001 model constructor.
     * @property {module:model/InlineResponse4001}
     */
    InlineResponse4001: InlineResponse4001,
    /**
     * The InlineResponse500 model constructor.
     * @property {module:model/InlineResponse500}
     */
    InlineResponse500: InlineResponse500,
    /**
     * The Ledger model constructor.
     * @property {module:model/Ledger}
     */
    Ledger: Ledger,
    /**
     * The ModifyOrder model constructor.
     * @property {module:model/ModifyOrder}
     */
    ModifyOrder: ModifyOrder,
    /**
     * The Notifications model constructor.
     * @property {module:model/Notifications}
     */
    Notifications: Notifications,
    /**
     * The NotificationsInner model constructor.
     * @property {module:model/NotificationsInner}
     */
    NotificationsInner: NotificationsInner,
    /**
     * The Order model constructor.
     * @property {module:model/Order}
     */
    Order: Order,
    /**
     * The OrderRequest model constructor.
     * @property {module:model/OrderRequest}
     */
    OrderRequest: OrderRequest,
    /**
     * The Performance model constructor.
     * @property {module:model/Performance}
     */
    Performance: Performance,
    /**
     * The PerformanceCps model constructor.
     * @property {module:model/PerformanceCps}
     */
    PerformanceCps: PerformanceCps,
    /**
     * The PerformanceCpsData model constructor.
     * @property {module:model/PerformanceCpsData}
     */
    PerformanceCpsData: PerformanceCpsData,
    /**
     * The PerformanceNav model constructor.
     * @property {module:model/PerformanceNav}
     */
    PerformanceNav: PerformanceNav,
    /**
     * The PerformanceTpps model constructor.
     * @property {module:model/PerformanceTpps}
     */
    PerformanceTpps: PerformanceTpps,
    /**
     * The Position model constructor.
     * @property {module:model/Position}
     */
    Position: Position,
    /**
     * The PositionInner model constructor.
     * @property {module:model/PositionInner}
     */
    PositionInner: PositionInner,
    /**
     * The ScannerParams model constructor.
     * @property {module:model/ScannerParams}
     */
    ScannerParams: ScannerParams,
    /**
     * The ScannerparamsFilter model constructor.
     * @property {module:model/ScannerparamsFilter}
     */
    ScannerparamsFilter: ScannerparamsFilter,
    /**
     * The Secdef model constructor.
     * @property {module:model/Secdef}
     */
    Secdef: Secdef,
    /**
     * The SecdefInner model constructor.
     * @property {module:model/SecdefInner}
     */
    SecdefInner: SecdefInner,
    /**
     * The SetAccount model constructor.
     * @property {module:model/SetAccount}
     */
    SetAccount: SetAccount,
    /**
     * The Summary model constructor.
     * @property {module:model/Summary}
     */
    Summary: Summary,
    /**
     * The SummaryAccountSummaries model constructor.
     * @property {module:model/SummaryAccountSummaries}
     */
    SummaryAccountSummaries: SummaryAccountSummaries,
    /**
     * The SummaryBalanceByDate model constructor.
     * @property {module:model/SummaryBalanceByDate}
     */
    SummaryBalanceByDate: SummaryBalanceByDate,
    /**
     * The SummaryBalanceByDateSeries model constructor.
     * @property {module:model/SummaryBalanceByDateSeries}
     */
    SummaryBalanceByDateSeries: SummaryBalanceByDateSeries,
    /**
     * The SummaryExcludedAccounts model constructor.
     * @property {module:model/SummaryExcludedAccounts}
     */
    SummaryExcludedAccounts: SummaryExcludedAccounts,
    /**
     * The SummaryTotal model constructor.
     * @property {module:model/SummaryTotal}
     */
    SummaryTotal: SummaryTotal,
    /**
     * The Symbol model constructor.
     * @property {module:model/Symbol}
     */
    Symbol: Symbol,
    /**
     * The Trade model constructor.
     * @property {module:model/Trade}
     */
    Trade: Trade,
    /**
     * The AccountApi service constructor.
     * @property {module:api/AccountApi}
     */
    AccountApi: AccountApi,
    /**
     * The ContractApi service constructor.
     * @property {module:api/ContractApi}
     */
    ContractApi: ContractApi,
    /**
     * The FYIApi service constructor.
     * @property {module:api/FYIApi}
     */
    FYIApi: FYIApi,
    /**
     * The IBCustApi service constructor.
     * @property {module:api/IBCustApi}
     */
    IBCustApi: IBCustApi,
    /**
     * The MarketDataApi service constructor.
     * @property {module:api/MarketDataApi}
     */
    MarketDataApi: MarketDataApi,
    /**
     * The OrderApi service constructor.
     * @property {module:api/OrderApi}
     */
    OrderApi: OrderApi,
    /**
     * The PnLApi service constructor.
     * @property {module:api/PnLApi}
     */
    PnLApi: PnLApi,
    /**
     * The PortfolioApi service constructor.
     * @property {module:api/PortfolioApi}
     */
    PortfolioApi: PortfolioApi,
    /**
     * The PortfolioAnalystApi service constructor.
     * @property {module:api/PortfolioAnalystApi}
     */
    PortfolioAnalystApi: PortfolioAnalystApi,
    /**
     * The ScannerApi service constructor.
     * @property {module:api/ScannerApi}
     */
    ScannerApi: ScannerApi,
    /**
     * The SessionApi service constructor.
     * @property {module:api/SessionApi}
     */
    SessionApi: SessionApi,
    /**
     * The TradesApi service constructor.
     * @property {module:api/TradesApi}
     */
    TradesApi: TradesApi
  };

  return exports;
}));
