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
    describe('Contract', function() {
      beforeEach(function() {
        instance = new ClientPortalWebApi.Contract();
      });

      it('should create an instance of Contract', function() {
        // TODO: update the code to test Contract
        expect(instance).to.be.a(ClientPortalWebApi.Contract);
      });

      it('should have the property rTH (base name: "r_t_h")', function() {
        // TODO: update the code to test the property rTH
        expect(instance).to.have.property('rTH');
        // expect(instance.rTH).to.be(expectedValueLiteral);
      });

      it('should have the property conId (base name: "con_id")', function() {
        // TODO: update the code to test the property conId
        expect(instance).to.have.property('conId');
        // expect(instance.conId).to.be(expectedValueLiteral);
      });

      it('should have the property companyName (base name: "company_name")', function() {
        // TODO: update the code to test the property companyName
        expect(instance).to.have.property('companyName');
        // expect(instance.companyName).to.be(expectedValueLiteral);
      });

      it('should have the property exchange (base name: "exchange")', function() {
        // TODO: update the code to test the property exchange
        expect(instance).to.have.property('exchange');
        // expect(instance.exchange).to.be(expectedValueLiteral);
      });

      it('should have the property localSymbol (base name: "local_symbol")', function() {
        // TODO: update the code to test the property localSymbol
        expect(instance).to.have.property('localSymbol');
        // expect(instance.localSymbol).to.be(expectedValueLiteral);
      });

      it('should have the property instrumentType (base name: "instrument_type")', function() {
        // TODO: update the code to test the property instrumentType
        expect(instance).to.have.property('instrumentType');
        // expect(instance.instrumentType).to.be(expectedValueLiteral);
      });

      it('should have the property currency (base name: "currency")', function() {
        // TODO: update the code to test the property currency
        expect(instance).to.have.property('currency');
        // expect(instance.currency).to.be(expectedValueLiteral);
      });

      it('should have the property companyName (base name: "companyName")', function() {
        // TODO: update the code to test the property companyName
        expect(instance).to.have.property('companyName');
        // expect(instance.companyName).to.be(expectedValueLiteral);
      });

      it('should have the property category (base name: "category")', function() {
        // TODO: update the code to test the property category
        expect(instance).to.have.property('category');
        // expect(instance.category).to.be(expectedValueLiteral);
      });

      it('should have the property industry (base name: "industry")', function() {
        // TODO: update the code to test the property industry
        expect(instance).to.have.property('industry');
        // expect(instance.industry).to.be(expectedValueLiteral);
      });

      it('should have the property rules (base name: "rules")', function() {
        // TODO: update the code to test the property rules
        expect(instance).to.have.property('rules');
        // expect(instance.rules).to.be(expectedValueLiteral);
      });

    });
  });

}));