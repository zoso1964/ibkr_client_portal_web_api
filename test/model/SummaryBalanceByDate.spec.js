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
    describe('SummaryBalanceByDate', function() {
      beforeEach(function() {
        instance = new ClientPortalWebApi.SummaryBalanceByDate();
      });

      it('should create an instance of SummaryBalanceByDate', function() {
        // TODO: update the code to test SummaryBalanceByDate
        expect(instance).to.be.a(ClientPortalWebApi.SummaryBalanceByDate);
      });

      it('should have the property series (base name: "series")', function() {
        // TODO: update the code to test the property series
        expect(instance).to.have.property('series');
        // expect(instance.series).to.be(expectedValueLiteral);
      });

    });
  });

}));
