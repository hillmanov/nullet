"use strict";

(function(exports) {

  exports.get = function(object, namespace, defaultVal) {
    if (object == null) return defaultVal;

    var names = namespace.split('.').reverse();

    while(names.length && (object = object[names.pop()]) != null);

    return(object == null ? defaultVal : object);
  }

}(typeof exports === "undefined"
       ? (this.nullet = {})
       : exports));


