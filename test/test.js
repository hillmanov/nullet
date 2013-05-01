var nullet  = require('../')
  , assert  = require('assert')
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
        assert.equal(nullet.get(testObj.badVal, 'nothing', FAILURE), FAILURE);
    });
    it('should find top level value', function(){
        assert.equal(nullet.get(testObj, 'name', FAILURE), SUCCESS);
    });
    it('should not find a top level value', function(){
        assert.equal(nullet.get(testObj, 'age', SUCCESS), SUCCESS);
    });
    it('should find a deeply nested value', function(){
        assert.equal(nullet.get(testObj, 'sub1.sub2.sub3.value', FAILURE), SUCCESS);
    });
    it('should not find a deeply nested value', function(){
        assert.equal(nullet.get(testObj, 'sub1.sub2.sub3.sub4.value', FAILURE), FAILURE);
    });
    it('should find a deeply nested value, which is a function', function(){
        assert.equal(nullet.get(testObj, 'sayName', function() { return FAILURE })(), SUCCESS);
    });
  })
})


