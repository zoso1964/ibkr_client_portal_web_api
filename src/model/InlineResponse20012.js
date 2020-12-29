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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Summary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Summary'));
  } else {
    // Browser globals (root is window)
    if (!root.ClientPortalWebApi) {
      root.ClientPortalWebApi = {};
    }
    root.ClientPortalWebApi.InlineResponse20012 = factory(root.ClientPortalWebApi.ApiClient, root.ClientPortalWebApi.Summary);
  }
}(this, function(ApiClient, Summary) {
  'use strict';

  /**
   * The InlineResponse20012 model module.
   * @module model/InlineResponse20012
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>InlineResponse20012</code>.
   * @alias module:model/InlineResponse20012
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>InlineResponse20012</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20012} obj Optional instance to populate.
   * @return {module:model/InlineResponse20012} The populated <code>InlineResponse20012</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('accountready'))
        obj.accountready = Summary.constructFromObject(data['accountready']);
      if (data.hasOwnProperty('accounttype'))
        obj.accounttype = Summary.constructFromObject(data['accounttype']);
      if (data.hasOwnProperty('accruedcash'))
        obj.accruedcash = Summary.constructFromObject(data['accruedcash']);
      if (data.hasOwnProperty('accruedcash-c'))
        obj.accruedcashC = Summary.constructFromObject(data['accruedcash-c']);
      if (data.hasOwnProperty('accruedcash-f'))
        obj.accruedcashF = Summary.constructFromObject(data['accruedcash-f']);
      if (data.hasOwnProperty('accruedcash-s'))
        obj.accruedcashS = Summary.constructFromObject(data['accruedcash-s']);
      if (data.hasOwnProperty('accrueddividend'))
        obj.accrueddividend = Summary.constructFromObject(data['accrueddividend']);
      if (data.hasOwnProperty('accrueddividend-c'))
        obj.accrueddividendC = Summary.constructFromObject(data['accrueddividend-c']);
      if (data.hasOwnProperty('accrueddividend-f'))
        obj.accrueddividendF = Summary.constructFromObject(data['accrueddividend-f']);
      if (data.hasOwnProperty('accrueddividend-s'))
        obj.accrueddividendS = Summary.constructFromObject(data['accrueddividend-s']);
      if (data.hasOwnProperty('availablefunds'))
        obj.availablefunds = Summary.constructFromObject(data['availablefunds']);
      if (data.hasOwnProperty('availablefunds-c'))
        obj.availablefundsC = Summary.constructFromObject(data['availablefunds-c']);
      if (data.hasOwnProperty('availablefunds-f'))
        obj.availablefundsF = Summary.constructFromObject(data['availablefunds-f']);
      if (data.hasOwnProperty('availablefunds-s'))
        obj.availablefundsS = Summary.constructFromObject(data['availablefunds-s']);
      if (data.hasOwnProperty('billable'))
        obj.billable = Summary.constructFromObject(data['billable']);
      if (data.hasOwnProperty('billable-c'))
        obj.billableC = Summary.constructFromObject(data['billable-c']);
      if (data.hasOwnProperty('billable-f'))
        obj.billableF = Summary.constructFromObject(data['billable-f']);
      if (data.hasOwnProperty('billable-s'))
        obj.billableS = Summary.constructFromObject(data['billable-s']);
      if (data.hasOwnProperty('buyingpower'))
        obj.buyingpower = Summary.constructFromObject(data['buyingpower']);
      if (data.hasOwnProperty('cushion'))
        obj.cushion = Summary.constructFromObject(data['cushion']);
      if (data.hasOwnProperty('daytradesremaining'))
        obj.daytradesremaining = Summary.constructFromObject(data['daytradesremaining']);
      if (data.hasOwnProperty('daytradesremainingt+1'))
        obj.daytradesremainingt1 = Summary.constructFromObject(data['daytradesremainingt+1']);
      if (data.hasOwnProperty('daytradesremainingt+2'))
        obj.daytradesremainingt2 = Summary.constructFromObject(data['daytradesremainingt+2']);
      if (data.hasOwnProperty('daytradesremainingt+3'))
        obj.daytradesremainingt3 = Summary.constructFromObject(data['daytradesremainingt+3']);
      if (data.hasOwnProperty('daytradesremainingt+4'))
        obj.daytradesremainingt4 = Summary.constructFromObject(data['daytradesremainingt+4']);
      if (data.hasOwnProperty('equitywithloanvalue'))
        obj.equitywithloanvalue = Summary.constructFromObject(data['equitywithloanvalue']);
      if (data.hasOwnProperty('equitywithloanvalue-c'))
        obj.equitywithloanvalueC = Summary.constructFromObject(data['equitywithloanvalue-c']);
      if (data.hasOwnProperty('equitywithloanvalue-f'))
        obj.equitywithloanvalueF = Summary.constructFromObject(data['equitywithloanvalue-f']);
      if (data.hasOwnProperty('equitywithloanvalue-s'))
        obj.equitywithloanvalueS = Summary.constructFromObject(data['equitywithloanvalue-s']);
      if (data.hasOwnProperty('excessliquidity'))
        obj.excessliquidity = Summary.constructFromObject(data['excessliquidity']);
      if (data.hasOwnProperty('excessliquidity-c'))
        obj.excessliquidityC = Summary.constructFromObject(data['excessliquidity-c']);
      if (data.hasOwnProperty('excessliquidity-f'))
        obj.excessliquidityF = Summary.constructFromObject(data['excessliquidity-f']);
      if (data.hasOwnProperty('excessliquidity-s'))
        obj.excessliquidityS = Summary.constructFromObject(data['excessliquidity-s']);
      if (data.hasOwnProperty('fullavailablefunds'))
        obj.fullavailablefunds = Summary.constructFromObject(data['fullavailablefunds']);
      if (data.hasOwnProperty('fullavailablefunds-c'))
        obj.fullavailablefundsC = Summary.constructFromObject(data['fullavailablefunds-c']);
      if (data.hasOwnProperty('fullavailablefunds-f'))
        obj.fullavailablefundsF = Summary.constructFromObject(data['fullavailablefunds-f']);
      if (data.hasOwnProperty('fullavailablefunds-s'))
        obj.fullavailablefundsS = Summary.constructFromObject(data['fullavailablefunds-s']);
      if (data.hasOwnProperty('fullexcessliquidity'))
        obj.fullexcessliquidity = Summary.constructFromObject(data['fullexcessliquidity']);
      if (data.hasOwnProperty('fullexcessliquidity-c'))
        obj.fullexcessliquidityC = Summary.constructFromObject(data['fullexcessliquidity-c']);
      if (data.hasOwnProperty('fullexcessliquidity-f'))
        obj.fullexcessliquidityF = Summary.constructFromObject(data['fullexcessliquidity-f']);
      if (data.hasOwnProperty('fullexcessliquidity-s'))
        obj.fullexcessliquidityS = Summary.constructFromObject(data['fullexcessliquidity-s']);
      if (data.hasOwnProperty('fullinitmarginreq'))
        obj.fullinitmarginreq = Summary.constructFromObject(data['fullinitmarginreq']);
      if (data.hasOwnProperty('fullinitmarginreq-c'))
        obj.fullinitmarginreqC = Summary.constructFromObject(data['fullinitmarginreq-c']);
      if (data.hasOwnProperty('fullinitmarginreq-f'))
        obj.fullinitmarginreqF = Summary.constructFromObject(data['fullinitmarginreq-f']);
      if (data.hasOwnProperty('fullinitmarginreq-s'))
        obj.fullinitmarginreqS = Summary.constructFromObject(data['fullinitmarginreq-s']);
      if (data.hasOwnProperty('fullmaintmarginreq'))
        obj.fullmaintmarginreq = Summary.constructFromObject(data['fullmaintmarginreq']);
      if (data.hasOwnProperty('fullmaintmarginreq-c'))
        obj.fullmaintmarginreqC = Summary.constructFromObject(data['fullmaintmarginreq-c']);
      if (data.hasOwnProperty('fullmaintmarginreq-f'))
        obj.fullmaintmarginreqF = Summary.constructFromObject(data['fullmaintmarginreq-f']);
      if (data.hasOwnProperty('fullmaintmarginreq-s'))
        obj.fullmaintmarginreqS = Summary.constructFromObject(data['fullmaintmarginreq-s']);
      if (data.hasOwnProperty('grosspositionvalue'))
        obj.grosspositionvalue = Summary.constructFromObject(data['grosspositionvalue']);
      if (data.hasOwnProperty('grosspositionvalue-c'))
        obj.grosspositionvalueC = Summary.constructFromObject(data['grosspositionvalue-c']);
      if (data.hasOwnProperty('grosspositionvalue-f'))
        obj.grosspositionvalueF = Summary.constructFromObject(data['grosspositionvalue-f']);
      if (data.hasOwnProperty('grosspositionvalue-s'))
        obj.grosspositionvalueS = Summary.constructFromObject(data['grosspositionvalue-s']);
      if (data.hasOwnProperty('guarantee'))
        obj.guarantee = Summary.constructFromObject(data['guarantee']);
      if (data.hasOwnProperty('guarantee-c'))
        obj.guaranteeC = Summary.constructFromObject(data['guarantee-c']);
      if (data.hasOwnProperty('guarantee-f'))
        obj.guaranteeF = Summary.constructFromObject(data['guarantee-f']);
      if (data.hasOwnProperty('guarantee-s'))
        obj.guaranteeS = Summary.constructFromObject(data['guarantee-s']);
      if (data.hasOwnProperty('highestseverity'))
        obj.highestseverity = Summary.constructFromObject(data['highestseverity']);
      if (data.hasOwnProperty('highestseverity-c'))
        obj.highestseverityC = Summary.constructFromObject(data['highestseverity-c']);
      if (data.hasOwnProperty('highestseverity-f'))
        obj.highestseverityF = Summary.constructFromObject(data['highestseverity-f']);
      if (data.hasOwnProperty('highestseverity-s'))
        obj.highestseverityS = Summary.constructFromObject(data['highestseverity-s']);
      if (data.hasOwnProperty('indianstockhaircut'))
        obj.indianstockhaircut = Summary.constructFromObject(data['indianstockhaircut']);
      if (data.hasOwnProperty('indianstockhaircut-c'))
        obj.indianstockhaircutC = Summary.constructFromObject(data['indianstockhaircut-c']);
      if (data.hasOwnProperty('indianstockhaircut-f'))
        obj.indianstockhaircutF = Summary.constructFromObject(data['indianstockhaircut-f']);
      if (data.hasOwnProperty('indianstockhaircut-s'))
        obj.indianstockhaircutS = Summary.constructFromObject(data['indianstockhaircut-s']);
      if (data.hasOwnProperty('initmarginreq'))
        obj.initmarginreq = Summary.constructFromObject(data['initmarginreq']);
      if (data.hasOwnProperty('initmarginreq-c'))
        obj.initmarginreqC = Summary.constructFromObject(data['initmarginreq-c']);
      if (data.hasOwnProperty('initmarginreq-f'))
        obj.initmarginreqF = Summary.constructFromObject(data['initmarginreq-f']);
      if (data.hasOwnProperty('initmarginreq-s'))
        obj.initmarginreqS = Summary.constructFromObject(data['initmarginreq-s']);
      if (data.hasOwnProperty('leverage'))
        obj.leverage = Summary.constructFromObject(data['leverage']);
      if (data.hasOwnProperty('leverage-c'))
        obj.leverageC = Summary.constructFromObject(data['leverage-c']);
      if (data.hasOwnProperty('leverage-f'))
        obj.leverageF = Summary.constructFromObject(data['leverage-f']);
      if (data.hasOwnProperty('leverage-s'))
        obj.leverageS = Summary.constructFromObject(data['leverage-s']);
      if (data.hasOwnProperty('lookaheadavailablefunds'))
        obj.lookaheadavailablefunds = Summary.constructFromObject(data['lookaheadavailablefunds']);
      if (data.hasOwnProperty('lookaheadavailablefunds-c'))
        obj.lookaheadavailablefundsC = Summary.constructFromObject(data['lookaheadavailablefunds-c']);
      if (data.hasOwnProperty('lookaheadavailablefunds-f'))
        obj.lookaheadavailablefundsF = Summary.constructFromObject(data['lookaheadavailablefunds-f']);
      if (data.hasOwnProperty('lookaheadavailablefunds-s'))
        obj.lookaheadavailablefundsS = Summary.constructFromObject(data['lookaheadavailablefunds-s']);
      if (data.hasOwnProperty('lookaheadexcessliquidity'))
        obj.lookaheadexcessliquidity = Summary.constructFromObject(data['lookaheadexcessliquidity']);
      if (data.hasOwnProperty('lookaheadexcessliquidity-c'))
        obj.lookaheadexcessliquidityC = Summary.constructFromObject(data['lookaheadexcessliquidity-c']);
      if (data.hasOwnProperty('lookaheadexcessliquidity-f'))
        obj.lookaheadexcessliquidityF = Summary.constructFromObject(data['lookaheadexcessliquidity-f']);
      if (data.hasOwnProperty('lookaheadexcessliquidity-s'))
        obj.lookaheadexcessliquidityS = Summary.constructFromObject(data['lookaheadexcessliquidity-s']);
      if (data.hasOwnProperty('lookaheadinitmarginreq'))
        obj.lookaheadinitmarginreq = Summary.constructFromObject(data['lookaheadinitmarginreq']);
      if (data.hasOwnProperty('lookaheadinitmarginreq-c'))
        obj.lookaheadinitmarginreqC = Summary.constructFromObject(data['lookaheadinitmarginreq-c']);
      if (data.hasOwnProperty('lookaheadinitmarginreq-f'))
        obj.lookaheadinitmarginreqF = Summary.constructFromObject(data['lookaheadinitmarginreq-f']);
      if (data.hasOwnProperty('lookaheadinitmarginreq-s'))
        obj.lookaheadinitmarginreqS = Summary.constructFromObject(data['lookaheadinitmarginreq-s']);
      if (data.hasOwnProperty('lookaheadmaintmarginreq'))
        obj.lookaheadmaintmarginreq = Summary.constructFromObject(data['lookaheadmaintmarginreq']);
      if (data.hasOwnProperty('lookaheadmaintmarginreq-c'))
        obj.lookaheadmaintmarginreqC = Summary.constructFromObject(data['lookaheadmaintmarginreq-c']);
      if (data.hasOwnProperty('lookaheadmaintmarginreq-f'))
        obj.lookaheadmaintmarginreqF = Summary.constructFromObject(data['lookaheadmaintmarginreq-f']);
      if (data.hasOwnProperty('lookaheadmaintmarginreq-s'))
        obj.lookaheadmaintmarginreqS = Summary.constructFromObject(data['lookaheadmaintmarginreq-s']);
      if (data.hasOwnProperty('lookaheadnextchange'))
        obj.lookaheadnextchange = Summary.constructFromObject(data['lookaheadnextchange']);
      if (data.hasOwnProperty('maintmarginreq'))
        obj.maintmarginreq = Summary.constructFromObject(data['maintmarginreq']);
      if (data.hasOwnProperty('maintmarginreq-c'))
        obj.maintmarginreqC = Summary.constructFromObject(data['maintmarginreq-c']);
      if (data.hasOwnProperty('maintmarginreq-f'))
        obj.maintmarginreqF = Summary.constructFromObject(data['maintmarginreq-f']);
      if (data.hasOwnProperty('maintmarginreq-s'))
        obj.maintmarginreqS = Summary.constructFromObject(data['maintmarginreq-s']);
      if (data.hasOwnProperty('netliquidation'))
        obj.netliquidation = Summary.constructFromObject(data['netliquidation']);
      if (data.hasOwnProperty('netliquidation-c'))
        obj.netliquidationC = Summary.constructFromObject(data['netliquidation-c']);
      if (data.hasOwnProperty('netliquidation-f'))
        obj.netliquidationF = Summary.constructFromObject(data['netliquidation-f']);
      if (data.hasOwnProperty('netliquidation-s'))
        obj.netliquidationS = Summary.constructFromObject(data['netliquidation-s']);
      if (data.hasOwnProperty('netliquidationuncertainty'))
        obj.netliquidationuncertainty = Summary.constructFromObject(data['netliquidationuncertainty']);
      if (data.hasOwnProperty('nlvandmargininreview'))
        obj.nlvandmargininreview = Summary.constructFromObject(data['nlvandmargininreview']);
      if (data.hasOwnProperty('pasharesvalue'))
        obj.pasharesvalue = Summary.constructFromObject(data['pasharesvalue']);
      if (data.hasOwnProperty('pasharesvalue-c'))
        obj.pasharesvalueC = Summary.constructFromObject(data['pasharesvalue-c']);
      if (data.hasOwnProperty('pasharesvalue-f'))
        obj.pasharesvalueF = Summary.constructFromObject(data['pasharesvalue-f']);
      if (data.hasOwnProperty('pasharesvalue-s'))
        obj.pasharesvalueS = Summary.constructFromObject(data['pasharesvalue-s']);
      if (data.hasOwnProperty('postexpirationexcess'))
        obj.postexpirationexcess = Summary.constructFromObject(data['postexpirationexcess']);
      if (data.hasOwnProperty('postexpirationexcess-c'))
        obj.postexpirationexcessC = Summary.constructFromObject(data['postexpirationexcess-c']);
      if (data.hasOwnProperty('postexpirationexcess-f'))
        obj.postexpirationexcessF = Summary.constructFromObject(data['postexpirationexcess-f']);
      if (data.hasOwnProperty('postexpirationexcess-s'))
        obj.postexpirationexcessS = Summary.constructFromObject(data['postexpirationexcess-s']);
      if (data.hasOwnProperty('postexpirationmargin'))
        obj.postexpirationmargin = Summary.constructFromObject(data['postexpirationmargin']);
      if (data.hasOwnProperty('postexpirationmargin-c'))
        obj.postexpirationmarginC = Summary.constructFromObject(data['postexpirationmargin-c']);
      if (data.hasOwnProperty('postexpirationmargin-f'))
        obj.postexpirationmarginF = Summary.constructFromObject(data['postexpirationmargin-f']);
      if (data.hasOwnProperty('postexpirationmargin-s'))
        obj.postexpirationmarginS = Summary.constructFromObject(data['postexpirationmargin-s']);
      if (data.hasOwnProperty('previousdayequitywithloanvalue'))
        obj.previousdayequitywithloanvalue = Summary.constructFromObject(data['previousdayequitywithloanvalue']);
      if (data.hasOwnProperty('previousdayequitywithloanvalue-c'))
        obj.previousdayequitywithloanvalueC = Summary.constructFromObject(data['previousdayequitywithloanvalue-c']);
      if (data.hasOwnProperty('previousdayequitywithloanvalue-f'))
        obj.previousdayequitywithloanvalueF = Summary.constructFromObject(data['previousdayequitywithloanvalue-f']);
      if (data.hasOwnProperty('previousdayequitywithloanvalue-s'))
        obj.previousdayequitywithloanvalueS = Summary.constructFromObject(data['previousdayequitywithloanvalue-s']);
      if (data.hasOwnProperty('segmenttitle-c'))
        obj.segmenttitleC = Summary.constructFromObject(data['segmenttitle-c']);
      if (data.hasOwnProperty('segmenttitle-f'))
        obj.segmenttitleF = Summary.constructFromObject(data['segmenttitle-f']);
      if (data.hasOwnProperty('segmenttitle-s'))
        obj.segmenttitleS = Summary.constructFromObject(data['segmenttitle-s']);
      if (data.hasOwnProperty('totalcashvalue'))
        obj.totalcashvalue = Summary.constructFromObject(data['totalcashvalue']);
      if (data.hasOwnProperty('totalcashvalue-c'))
        obj.totalcashvalueC = Summary.constructFromObject(data['totalcashvalue-c']);
      if (data.hasOwnProperty('totalcashvalue-f'))
        obj.totalcashvalueF = Summary.constructFromObject(data['totalcashvalue-f']);
      if (data.hasOwnProperty('totalcashvalue-s'))
        obj.totalcashvalueS = Summary.constructFromObject(data['totalcashvalue-s']);
      if (data.hasOwnProperty('totaldebitcardpendingcharges'))
        obj.totaldebitcardpendingcharges = Summary.constructFromObject(data['totaldebitcardpendingcharges']);
      if (data.hasOwnProperty('totaldebitcardpendingcharges-c'))
        obj.totaldebitcardpendingchargesC = Summary.constructFromObject(data['totaldebitcardpendingcharges-c']);
      if (data.hasOwnProperty('totaldebitcardpendingcharges-f'))
        obj.totaldebitcardpendingchargesF = Summary.constructFromObject(data['totaldebitcardpendingcharges-f']);
      if (data.hasOwnProperty('totaldebitcardpendingcharges-s'))
        obj.totaldebitcardpendingchargesS = Summary.constructFromObject(data['totaldebitcardpendingcharges-s']);
      if (data.hasOwnProperty('tradingtype-f'))
        obj.tradingtypeF = Summary.constructFromObject(data['tradingtype-f']);
      if (data.hasOwnProperty('tradingtype-s'))
        obj.tradingtypeS = Summary.constructFromObject(data['tradingtype-s']);
    }
    return obj;
  }

  /**
   * @member {module:model/Summary} accountready
   */
  exports.prototype.accountready = undefined;

  /**
   * @member {module:model/Summary} accounttype
   */
  exports.prototype.accounttype = undefined;

  /**
   * @member {module:model/Summary} accruedcash
   */
  exports.prototype.accruedcash = undefined;

  /**
   * @member {module:model/Summary} accruedcashC
   */
  exports.prototype.accruedcashC = undefined;

  /**
   * @member {module:model/Summary} accruedcashF
   */
  exports.prototype.accruedcashF = undefined;

  /**
   * @member {module:model/Summary} accruedcashS
   */
  exports.prototype.accruedcashS = undefined;

  /**
   * @member {module:model/Summary} accrueddividend
   */
  exports.prototype.accrueddividend = undefined;

  /**
   * @member {module:model/Summary} accrueddividendC
   */
  exports.prototype.accrueddividendC = undefined;

  /**
   * @member {module:model/Summary} accrueddividendF
   */
  exports.prototype.accrueddividendF = undefined;

  /**
   * @member {module:model/Summary} accrueddividendS
   */
  exports.prototype.accrueddividendS = undefined;

  /**
   * @member {module:model/Summary} availablefunds
   */
  exports.prototype.availablefunds = undefined;

  /**
   * @member {module:model/Summary} availablefundsC
   */
  exports.prototype.availablefundsC = undefined;

  /**
   * @member {module:model/Summary} availablefundsF
   */
  exports.prototype.availablefundsF = undefined;

  /**
   * @member {module:model/Summary} availablefundsS
   */
  exports.prototype.availablefundsS = undefined;

  /**
   * @member {module:model/Summary} billable
   */
  exports.prototype.billable = undefined;

  /**
   * @member {module:model/Summary} billableC
   */
  exports.prototype.billableC = undefined;

  /**
   * @member {module:model/Summary} billableF
   */
  exports.prototype.billableF = undefined;

  /**
   * @member {module:model/Summary} billableS
   */
  exports.prototype.billableS = undefined;

  /**
   * @member {module:model/Summary} buyingpower
   */
  exports.prototype.buyingpower = undefined;

  /**
   * @member {module:model/Summary} cushion
   */
  exports.prototype.cushion = undefined;

  /**
   * @member {module:model/Summary} daytradesremaining
   */
  exports.prototype.daytradesremaining = undefined;

  /**
   * @member {module:model/Summary} daytradesremainingt1
   */
  exports.prototype.daytradesremainingt1 = undefined;

  /**
   * @member {module:model/Summary} daytradesremainingt2
   */
  exports.prototype.daytradesremainingt2 = undefined;

  /**
   * @member {module:model/Summary} daytradesremainingt3
   */
  exports.prototype.daytradesremainingt3 = undefined;

  /**
   * @member {module:model/Summary} daytradesremainingt4
   */
  exports.prototype.daytradesremainingt4 = undefined;

  /**
   * @member {module:model/Summary} equitywithloanvalue
   */
  exports.prototype.equitywithloanvalue = undefined;

  /**
   * @member {module:model/Summary} equitywithloanvalueC
   */
  exports.prototype.equitywithloanvalueC = undefined;

  /**
   * @member {module:model/Summary} equitywithloanvalueF
   */
  exports.prototype.equitywithloanvalueF = undefined;

  /**
   * @member {module:model/Summary} equitywithloanvalueS
   */
  exports.prototype.equitywithloanvalueS = undefined;

  /**
   * @member {module:model/Summary} excessliquidity
   */
  exports.prototype.excessliquidity = undefined;

  /**
   * @member {module:model/Summary} excessliquidityC
   */
  exports.prototype.excessliquidityC = undefined;

  /**
   * @member {module:model/Summary} excessliquidityF
   */
  exports.prototype.excessliquidityF = undefined;

  /**
   * @member {module:model/Summary} excessliquidityS
   */
  exports.prototype.excessliquidityS = undefined;

  /**
   * @member {module:model/Summary} fullavailablefunds
   */
  exports.prototype.fullavailablefunds = undefined;

  /**
   * @member {module:model/Summary} fullavailablefundsC
   */
  exports.prototype.fullavailablefundsC = undefined;

  /**
   * @member {module:model/Summary} fullavailablefundsF
   */
  exports.prototype.fullavailablefundsF = undefined;

  /**
   * @member {module:model/Summary} fullavailablefundsS
   */
  exports.prototype.fullavailablefundsS = undefined;

  /**
   * @member {module:model/Summary} fullexcessliquidity
   */
  exports.prototype.fullexcessliquidity = undefined;

  /**
   * @member {module:model/Summary} fullexcessliquidityC
   */
  exports.prototype.fullexcessliquidityC = undefined;

  /**
   * @member {module:model/Summary} fullexcessliquidityF
   */
  exports.prototype.fullexcessliquidityF = undefined;

  /**
   * @member {module:model/Summary} fullexcessliquidityS
   */
  exports.prototype.fullexcessliquidityS = undefined;

  /**
   * @member {module:model/Summary} fullinitmarginreq
   */
  exports.prototype.fullinitmarginreq = undefined;

  /**
   * @member {module:model/Summary} fullinitmarginreqC
   */
  exports.prototype.fullinitmarginreqC = undefined;

  /**
   * @member {module:model/Summary} fullinitmarginreqF
   */
  exports.prototype.fullinitmarginreqF = undefined;

  /**
   * @member {module:model/Summary} fullinitmarginreqS
   */
  exports.prototype.fullinitmarginreqS = undefined;

  /**
   * @member {module:model/Summary} fullmaintmarginreq
   */
  exports.prototype.fullmaintmarginreq = undefined;

  /**
   * @member {module:model/Summary} fullmaintmarginreqC
   */
  exports.prototype.fullmaintmarginreqC = undefined;

  /**
   * @member {module:model/Summary} fullmaintmarginreqF
   */
  exports.prototype.fullmaintmarginreqF = undefined;

  /**
   * @member {module:model/Summary} fullmaintmarginreqS
   */
  exports.prototype.fullmaintmarginreqS = undefined;

  /**
   * @member {module:model/Summary} grosspositionvalue
   */
  exports.prototype.grosspositionvalue = undefined;

  /**
   * @member {module:model/Summary} grosspositionvalueC
   */
  exports.prototype.grosspositionvalueC = undefined;

  /**
   * @member {module:model/Summary} grosspositionvalueF
   */
  exports.prototype.grosspositionvalueF = undefined;

  /**
   * @member {module:model/Summary} grosspositionvalueS
   */
  exports.prototype.grosspositionvalueS = undefined;

  /**
   * @member {module:model/Summary} guarantee
   */
  exports.prototype.guarantee = undefined;

  /**
   * @member {module:model/Summary} guaranteeC
   */
  exports.prototype.guaranteeC = undefined;

  /**
   * @member {module:model/Summary} guaranteeF
   */
  exports.prototype.guaranteeF = undefined;

  /**
   * @member {module:model/Summary} guaranteeS
   */
  exports.prototype.guaranteeS = undefined;

  /**
   * @member {module:model/Summary} highestseverity
   */
  exports.prototype.highestseverity = undefined;

  /**
   * @member {module:model/Summary} highestseverityC
   */
  exports.prototype.highestseverityC = undefined;

  /**
   * @member {module:model/Summary} highestseverityF
   */
  exports.prototype.highestseverityF = undefined;

  /**
   * @member {module:model/Summary} highestseverityS
   */
  exports.prototype.highestseverityS = undefined;

  /**
   * @member {module:model/Summary} indianstockhaircut
   */
  exports.prototype.indianstockhaircut = undefined;

  /**
   * @member {module:model/Summary} indianstockhaircutC
   */
  exports.prototype.indianstockhaircutC = undefined;

  /**
   * @member {module:model/Summary} indianstockhaircutF
   */
  exports.prototype.indianstockhaircutF = undefined;

  /**
   * @member {module:model/Summary} indianstockhaircutS
   */
  exports.prototype.indianstockhaircutS = undefined;

  /**
   * @member {module:model/Summary} initmarginreq
   */
  exports.prototype.initmarginreq = undefined;

  /**
   * @member {module:model/Summary} initmarginreqC
   */
  exports.prototype.initmarginreqC = undefined;

  /**
   * @member {module:model/Summary} initmarginreqF
   */
  exports.prototype.initmarginreqF = undefined;

  /**
   * @member {module:model/Summary} initmarginreqS
   */
  exports.prototype.initmarginreqS = undefined;

  /**
   * @member {module:model/Summary} leverage
   */
  exports.prototype.leverage = undefined;

  /**
   * @member {module:model/Summary} leverageC
   */
  exports.prototype.leverageC = undefined;

  /**
   * @member {module:model/Summary} leverageF
   */
  exports.prototype.leverageF = undefined;

  /**
   * @member {module:model/Summary} leverageS
   */
  exports.prototype.leverageS = undefined;

  /**
   * @member {module:model/Summary} lookaheadavailablefunds
   */
  exports.prototype.lookaheadavailablefunds = undefined;

  /**
   * @member {module:model/Summary} lookaheadavailablefundsC
   */
  exports.prototype.lookaheadavailablefundsC = undefined;

  /**
   * @member {module:model/Summary} lookaheadavailablefundsF
   */
  exports.prototype.lookaheadavailablefundsF = undefined;

  /**
   * @member {module:model/Summary} lookaheadavailablefundsS
   */
  exports.prototype.lookaheadavailablefundsS = undefined;

  /**
   * @member {module:model/Summary} lookaheadexcessliquidity
   */
  exports.prototype.lookaheadexcessliquidity = undefined;

  /**
   * @member {module:model/Summary} lookaheadexcessliquidityC
   */
  exports.prototype.lookaheadexcessliquidityC = undefined;

  /**
   * @member {module:model/Summary} lookaheadexcessliquidityF
   */
  exports.prototype.lookaheadexcessliquidityF = undefined;

  /**
   * @member {module:model/Summary} lookaheadexcessliquidityS
   */
  exports.prototype.lookaheadexcessliquidityS = undefined;

  /**
   * @member {module:model/Summary} lookaheadinitmarginreq
   */
  exports.prototype.lookaheadinitmarginreq = undefined;

  /**
   * @member {module:model/Summary} lookaheadinitmarginreqC
   */
  exports.prototype.lookaheadinitmarginreqC = undefined;

  /**
   * @member {module:model/Summary} lookaheadinitmarginreqF
   */
  exports.prototype.lookaheadinitmarginreqF = undefined;

  /**
   * @member {module:model/Summary} lookaheadinitmarginreqS
   */
  exports.prototype.lookaheadinitmarginreqS = undefined;

  /**
   * @member {module:model/Summary} lookaheadmaintmarginreq
   */
  exports.prototype.lookaheadmaintmarginreq = undefined;

  /**
   * @member {module:model/Summary} lookaheadmaintmarginreqC
   */
  exports.prototype.lookaheadmaintmarginreqC = undefined;

  /**
   * @member {module:model/Summary} lookaheadmaintmarginreqF
   */
  exports.prototype.lookaheadmaintmarginreqF = undefined;

  /**
   * @member {module:model/Summary} lookaheadmaintmarginreqS
   */
  exports.prototype.lookaheadmaintmarginreqS = undefined;

  /**
   * @member {module:model/Summary} lookaheadnextchange
   */
  exports.prototype.lookaheadnextchange = undefined;

  /**
   * @member {module:model/Summary} maintmarginreq
   */
  exports.prototype.maintmarginreq = undefined;

  /**
   * @member {module:model/Summary} maintmarginreqC
   */
  exports.prototype.maintmarginreqC = undefined;

  /**
   * @member {module:model/Summary} maintmarginreqF
   */
  exports.prototype.maintmarginreqF = undefined;

  /**
   * @member {module:model/Summary} maintmarginreqS
   */
  exports.prototype.maintmarginreqS = undefined;

  /**
   * @member {module:model/Summary} netliquidation
   */
  exports.prototype.netliquidation = undefined;

  /**
   * @member {module:model/Summary} netliquidationC
   */
  exports.prototype.netliquidationC = undefined;

  /**
   * @member {module:model/Summary} netliquidationF
   */
  exports.prototype.netliquidationF = undefined;

  /**
   * @member {module:model/Summary} netliquidationS
   */
  exports.prototype.netliquidationS = undefined;

  /**
   * @member {module:model/Summary} netliquidationuncertainty
   */
  exports.prototype.netliquidationuncertainty = undefined;

  /**
   * @member {module:model/Summary} nlvandmargininreview
   */
  exports.prototype.nlvandmargininreview = undefined;

  /**
   * @member {module:model/Summary} pasharesvalue
   */
  exports.prototype.pasharesvalue = undefined;

  /**
   * @member {module:model/Summary} pasharesvalueC
   */
  exports.prototype.pasharesvalueC = undefined;

  /**
   * @member {module:model/Summary} pasharesvalueF
   */
  exports.prototype.pasharesvalueF = undefined;

  /**
   * @member {module:model/Summary} pasharesvalueS
   */
  exports.prototype.pasharesvalueS = undefined;

  /**
   * @member {module:model/Summary} postexpirationexcess
   */
  exports.prototype.postexpirationexcess = undefined;

  /**
   * @member {module:model/Summary} postexpirationexcessC
   */
  exports.prototype.postexpirationexcessC = undefined;

  /**
   * @member {module:model/Summary} postexpirationexcessF
   */
  exports.prototype.postexpirationexcessF = undefined;

  /**
   * @member {module:model/Summary} postexpirationexcessS
   */
  exports.prototype.postexpirationexcessS = undefined;

  /**
   * @member {module:model/Summary} postexpirationmargin
   */
  exports.prototype.postexpirationmargin = undefined;

  /**
   * @member {module:model/Summary} postexpirationmarginC
   */
  exports.prototype.postexpirationmarginC = undefined;

  /**
   * @member {module:model/Summary} postexpirationmarginF
   */
  exports.prototype.postexpirationmarginF = undefined;

  /**
   * @member {module:model/Summary} postexpirationmarginS
   */
  exports.prototype.postexpirationmarginS = undefined;

  /**
   * @member {module:model/Summary} previousdayequitywithloanvalue
   */
  exports.prototype.previousdayequitywithloanvalue = undefined;

  /**
   * @member {module:model/Summary} previousdayequitywithloanvalueC
   */
  exports.prototype.previousdayequitywithloanvalueC = undefined;

  /**
   * @member {module:model/Summary} previousdayequitywithloanvalueF
   */
  exports.prototype.previousdayequitywithloanvalueF = undefined;

  /**
   * @member {module:model/Summary} previousdayequitywithloanvalueS
   */
  exports.prototype.previousdayequitywithloanvalueS = undefined;

  /**
   * @member {module:model/Summary} segmenttitleC
   */
  exports.prototype.segmenttitleC = undefined;

  /**
   * @member {module:model/Summary} segmenttitleF
   */
  exports.prototype.segmenttitleF = undefined;

  /**
   * @member {module:model/Summary} segmenttitleS
   */
  exports.prototype.segmenttitleS = undefined;

  /**
   * @member {module:model/Summary} totalcashvalue
   */
  exports.prototype.totalcashvalue = undefined;

  /**
   * @member {module:model/Summary} totalcashvalueC
   */
  exports.prototype.totalcashvalueC = undefined;

  /**
   * @member {module:model/Summary} totalcashvalueF
   */
  exports.prototype.totalcashvalueF = undefined;

  /**
   * @member {module:model/Summary} totalcashvalueS
   */
  exports.prototype.totalcashvalueS = undefined;

  /**
   * @member {module:model/Summary} totaldebitcardpendingcharges
   */
  exports.prototype.totaldebitcardpendingcharges = undefined;

  /**
   * @member {module:model/Summary} totaldebitcardpendingchargesC
   */
  exports.prototype.totaldebitcardpendingchargesC = undefined;

  /**
   * @member {module:model/Summary} totaldebitcardpendingchargesF
   */
  exports.prototype.totaldebitcardpendingchargesF = undefined;

  /**
   * @member {module:model/Summary} totaldebitcardpendingchargesS
   */
  exports.prototype.totaldebitcardpendingchargesS = undefined;

  /**
   * @member {module:model/Summary} tradingtypeF
   */
  exports.prototype.tradingtypeF = undefined;

  /**
   * @member {module:model/Summary} tradingtypeS
   */
  exports.prototype.tradingtypeS = undefined;

  return exports;

}));