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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ClientPortalWebApi);
  }
}(this, function(expect, ClientPortalWebApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('InlineResponse20010', function() {
      beforeEach(function() {
        instance = new ClientPortalWebApi.InlineResponse20010();
      });

      it('should create an instance of InlineResponse20010', function() {
        // TODO: update the code to test InlineResponse20010
        expect(instance).to.be.a(ClientPortalWebApi.InlineResponse20010);
      });

      it('should have the property serverId (base name: "server_id")', function() {
        // TODO: update the code to test the property serverId
        expect(instance).to.have.property('serverId');
        // expect(instance.serverId).to.be(expectedValueLiteral);
      });

      it('should have the property columnName (base name: "column_name")', function() {
        // TODO: update the code to test the property columnName
        expect(instance).to.have.property('columnName');
        // expect(instance.columnName).to.be(expectedValueLiteral);
      });

      it('should have the property symbol (base name: "symbol")', function() {
        // TODO: update the code to test the property symbol
        expect(instance).to.have.property('symbol');
        // expect(instance.symbol).to.be(expectedValueLiteral);
      });

      it('should have the property conidex (base name: "conidex")', function() {
        // TODO: update the code to test the property conidex
        expect(instance).to.have.property('conidex');
        // expect(instance.conidex).to.be(expectedValueLiteral);
      });

      it('should have the property conId (base name: "con_id")', function() {
        // TODO: update the code to test the property conId
        expect(instance).to.have.property('conId');
        // expect(instance.conId).to.be(expectedValueLiteral);
      });

      it('should have the property availableChartPeriods (base name: "available_chart_periods")', function() {
        // TODO: update the code to test the property availableChartPeriods
        expect(instance).to.have.property('availableChartPeriods');
        // expect(instance.availableChartPeriods).to.be(expectedValueLiteral);
      });

      it('should have the property companyName (base name: "company_name")', function() {
        // TODO: update the code to test the property companyName
        expect(instance).to.have.property('companyName');
        // expect(instance.companyName).to.be(expectedValueLiteral);
      });

      it('should have the property contractDescription1 (base name: "contract_description_1")', function() {
        // TODO: update the code to test the property contractDescription1
        expect(instance).to.have.property('contractDescription1');
        // expect(instance.contractDescription1).to.be(expectedValueLiteral);
      });

      it('should have the property listingExchange (base name: "listing_exchange")', function() {
        // TODO: update the code to test the property listingExchange
        expect(instance).to.have.property('listingExchange');
        // expect(instance.listingExchange).to.be(expectedValueLiteral);
      });

      it('should have the property secType (base name: "sec_type")', function() {
        // TODO: update the code to test the property secType
        expect(instance).to.have.property('secType');
        // expect(instance.secType).to.be(expectedValueLiteral);
      });

    });
  });

}));
