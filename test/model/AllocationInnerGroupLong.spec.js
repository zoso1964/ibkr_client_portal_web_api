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
    describe('AllocationInnerGroupLong', function() {
      beforeEach(function() {
        instance = new ClientPortalWebApi.AllocationInnerGroupLong();
      });

      it('should create an instance of AllocationInnerGroupLong', function() {
        // TODO: update the code to test AllocationInnerGroupLong
        expect(instance).to.be.a(ClientPortalWebApi.AllocationInnerGroupLong);
      });

      it('should have the property computers (base name: "Computers")', function() {
        // TODO: update the code to test the property computers
        expect(instance).to.have.property('computers');
        // expect(instance.computers).to.be(expectedValueLiteral);
      });

      it('should have the property semiconductors (base name: "Semiconductors")', function() {
        // TODO: update the code to test the property semiconductors
        expect(instance).to.have.property('semiconductors');
        // expect(instance.semiconductors).to.be(expectedValueLiteral);
      });

      it('should have the property others (base name: "Others")', function() {
        // TODO: update the code to test the property others
        expect(instance).to.have.property('others');
        // expect(instance.others).to.be(expectedValueLiteral);
      });

      it('should have the property chemicals (base name: "Chemicals")', function() {
        // TODO: update the code to test the property chemicals
        expect(instance).to.have.property('chemicals');
        // expect(instance.chemicals).to.be(expectedValueLiteral);
      });

      it('should have the property apparel (base name: "Apparel")', function() {
        // TODO: update the code to test the property apparel
        expect(instance).to.have.property('apparel');
        // expect(instance.apparel).to.be(expectedValueLiteral);
      });

      it('should have the property communications (base name: "Communications")', function() {
        // TODO: update the code to test the property communications
        expect(instance).to.have.property('communications');
        // expect(instance.communications).to.be(expectedValueLiteral);
      });

    });
  });

}));
