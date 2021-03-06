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
    describe('InlineResponse200', function() {
      beforeEach(function() {
        instance = new ClientPortalWebApi.InlineResponse200();
      });

      it('should create an instance of InlineResponse200', function() {
        // TODO: update the code to test InlineResponse200
        expect(instance).to.be.a(ClientPortalWebApi.InlineResponse200);
      });

      it('should have the property accounts (base name: "accounts")', function() {
        // TODO: update the code to test the property accounts
        expect(instance).to.have.property('accounts');
        // expect(instance.accounts).to.be(expectedValueLiteral);
      });

      it('should have the property aliases (base name: "aliases")', function() {
        // TODO: update the code to test the property aliases
        expect(instance).to.have.property('aliases');
        // expect(instance.aliases).to.be(expectedValueLiteral);
      });

      it('should have the property selectedAccount (base name: "selectedAccount")', function() {
        // TODO: update the code to test the property selectedAccount
        expect(instance).to.have.property('selectedAccount');
        // expect(instance.selectedAccount).to.be(expectedValueLiteral);
      });

    });
  });

}));
