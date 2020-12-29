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
    define(['ApiClient', 'model/IbcustentityinfoAddress', 'model/IbcustentityinfoName'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./IbcustentityinfoAddress'), require('./IbcustentityinfoName'));
  } else {
    // Browser globals (root is window)
    if (!root.ClientPortalWebApi) {
      root.ClientPortalWebApi = {};
    }
    root.ClientPortalWebApi.IbcustentityinfoEntities = factory(root.ClientPortalWebApi.ApiClient, root.ClientPortalWebApi.IbcustentityinfoAddress, root.ClientPortalWebApi.IbcustentityinfoName);
  }
}(this, function(ApiClient, IbcustentityinfoAddress, IbcustentityinfoName) {
  'use strict';

  /**
   * The IbcustentityinfoEntities model module.
   * @module model/IbcustentityinfoEntities
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>IbcustentityinfoEntities</code>.
   * @alias module:model/IbcustentityinfoEntities
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>IbcustentityinfoEntities</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IbcustentityinfoEntities} obj Optional instance to populate.
   * @return {module:model/IbcustentityinfoEntities} The populated <code>IbcustentityinfoEntities</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('canTrade'))
        obj.canTrade = ApiClient.convertToType(data['canTrade'], 'Boolean');
      if (data.hasOwnProperty('canSign'))
        obj.canSign = ApiClient.convertToType(data['canSign'], 'Boolean');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = IbcustentityinfoName.constructFromObject(data['name']);
      if (data.hasOwnProperty('address'))
        obj.address = IbcustentityinfoAddress.constructFromObject(data['address']);
      if (data.hasOwnProperty('identDocs'))
        obj.identDocs = ApiClient.convertToType(data['identDocs'], [Object]);
    }
    return obj;
  }

  /**
   * @member {Boolean} canTrade
   */
  exports.prototype.canTrade = undefined;

  /**
   * @member {Boolean} canSign
   */
  exports.prototype.canSign = undefined;

  /**
   * @member {String} type
   */
  exports.prototype.type = undefined;

  /**
   * @member {module:model/IbcustentityinfoName} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {module:model/IbcustentityinfoAddress} address
   */
  exports.prototype.address = undefined;

  /**
   * @member {Array.<Object>} identDocs
   */
  exports.prototype.identDocs = undefined;

  return exports;

}));