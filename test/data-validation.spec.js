describe('Data Validation', function(){
  describe("Basic Functionality", function() {
    it('should be able to add a validator', function() {
      dataValidation.add('test', function(value1) {
        return value1 === 'qwerty';
      });

      expect(dataValidation.validate('test', 'qwerty')).to.be.true;
    });

    it('should validate email as valid', function() {
      expect(dataValidation.validate('email', 'test@example.com')).to.be.true;
    });

    it('should validate non-email as invalid', function() {
      expect(dataValidation.validate('email', 'test@example')).to.be.false;
    });

    it('should validate string as not empty', function() {
      expect(dataValidation.validate('notEmpty', 'test@example.com')).to.be.true;
    });

    it('should validate null as empty', function() {
      expect(dataValidation.validate('notEmpty', null)).to.be.false;
    });

    it('should validate 0 as not empty', function() {
      expect(dataValidation.validate('notEmpty', 0)).to.be.true;
    });

    it('should validate 20 as not less than 10', function() {
      expect(dataValidation.validate('minValue', 20, 10)).to.be.true;
    });

    it('should validate 10 as less than 20', function() {
      expect(dataValidation.validate('minValue', 10, 20)).to.be.false;
    });

    it('should validate 20 as more than 10', function() {
      expect(dataValidation.validate('maxValue', 20, 10)).to.be.false;
    });

    it('should validate 10 as not more than 20', function() {
      expect(dataValidation.validate('maxValue', 10, 20)).to.be.true;
    });

    it('should validate 15 is within 10 and 20', function() {
      expect(dataValidation.validate('rangeValue', 15, 10, 20)).to.be.true;
    });

    it('should validate 30 as not within 10 to 20', function() {
      expect(dataValidation.validate('rangeValue', 30, 10, 20)).to.be.false;
    });

    it('should validate matching data as valid', function() {
      expect(dataValidation.validate('match', 'test', 'test')).to.be.true;
    });

    it('should validate non match data as invalid', function() {
      expect(dataValidation.validate('match', 'invalid', 'match')).to.be.false;
    });

    it('should be able to do on the fly custom validation', function() {
      expect(dataValidation.validate('custom', function(value1, value2) {
        return value1 === 'test' && value2 === 'test2'
      }, 'test', 'test2')).to.be.true;
    });

    it('should validate "this is a test" has at least 10 characters', function() {
      expect(dataValidation.validate('minLength', 'this is a test', 10)).to.be.true;
    });

    it('should validate "this is a test" does not have at least 20 characters', function() {
      expect(dataValidation.validate('minLength', 'this is a test', 20)).to.be.false;
    });

    it('should validate "this is a test" does not exceed 20 characters', function() {
      expect(dataValidation.validate('maxLength', 'this is a test', 20)).to.be.true;
    });

    it('should validate "this is a test" does exceed 10 characters', function() {
      expect(dataValidation.validate('maxLength', 'this is a test', 10)).to.be.false;
    });

    it('should validate "this is a test" has between 10 and 20 characters', function() {
      expect(dataValidation.validate('rangeLength', 'this is a test', 10, 20)).to.be.true;
    });

    it('should validate "this" does not have between 10 and 20 characters', function() {
      expect(dataValidation.validate('rangeLength', 'this', 10, 20)).to.be.false;
    });

    //this test needs to be executed last because if it is not, then the other tests that use the default email validations will break
    it('should be able to overwrite an existing validator', function() {
      dataValidation.add('email', function(value1) {
        return false;
      });

      expect(dataValidation.validate('email', 'test@example.com')).to.be.false;
    });
  });
});
