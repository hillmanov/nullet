"use strict";

(function(exports) {

  function cloneObject(obj) {
    var clone = {};
    for(var prop in obj) {
      if(typeof(obj[prop]) == 'object')
        clone[prop] = cloneObject(obj[prop]);
      else
        clone[prop] = obj[prop];
    }
    return clone;
  }

  exports.get = function(object, subAccessor, defaultVal) {
    var currentObj = cloneObject(object)
      , parts      = subAccessor.split('.')
      , i
      ;

    for (i = 0; i < parts.length; i++) {
      if (!currentObj[parts[i]]) return defaultVal;
      currentObj = currentObj[parts[i]];
    }
    return currentObj
  }
}(typeof exports === "undefined"
       ? (this.nullet = {})
       : exports));


