
"use strict";

var utils = utils || {};

utils.namespace = function (namespace) {
  var parts = namespace.split('.'),
      parent = utils, 
      i;

  if (parts[0] === 'utils') {
    parts = parts.slice(1);
  }

  for (i = 0; i < parts.length; i += 1) {
    if (typeof parent[parts[i]] === 'undefined') {
      parent[parts[i]] = {};
    }
    parent = parent[parts[i]];
  }

  return parent;
};

// accessible at parent level
parent.utils = utils;
