describe("Package", function() {
  describe("calculatesWeightCost", function() {
    it("returns price of shipping with package weight", function() {
      var testPackage = Object.create(Package);
      testPackage.weight = 2;
      testPackage.distance = 250;
      testPackage.cost().should.equal(18.50)
    });
  });
});  
