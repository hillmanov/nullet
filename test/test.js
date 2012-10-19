var nullet  = require('../')
  , should  = require('should')
  , SUCCESS = 'SUCCESS'
  , FAILURE = 'FAILURE'
  , testObj
  ;

testObj = {
  name: SUCCESS,
  sub1: {
    sub2: {
      sub3: {
        value: SUCCESS
      }
    }
  },
  sayName: function() { return SUCCESS }
};

describe('nullet', function(){
  describe('get', function(){
    it('should not find a value', function(){
        nullet.get(testObj.badVal, 'nothing', FAILURE).should.equal(FAILURE)
    });
    it('should find top level value', function(){
        nullet.get(testObj, 'name', FAILURE).should.equal(SUCCESS);
    });
    it('should not find a top level value', function(){
        nullet.get(testObj, 'age', SUCCESS).should.equal(SUCCESS);
    });
    it('should find a deeply nested value', function(){
        nullet.get(testObj, 'sub1.sub2.sub3.value', FAILURE).should.equal(SUCCESS);
    });
    it('should not find a deeply nested value', function(){
        nullet.get(testObj, 'sub1.sub2.sub3.sub4.value', FAILURE).should.equal(FAILURE);
    });
    it('should find a deeply nested value, which is a function', function(){
        nullet.get(testObj, 'sayName', function() { return FAILURE })().should.equal(SUCCESS);
    });
  })
})


