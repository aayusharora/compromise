'use strict';
const fns = require('../../fns');
const terms = require('./terms');

//collect all transforms for a termslist
let all = {};
Object.keys(terms).forEach((k) => {
  Object.keys(terms[k].transform).forEach((method) => {
    let name = 'to' + fns.titleCase(method);
    //make a termList method..
    all[name] = (ts) => {
      ts._terms = ts._terms.map((t) => {
        if (k === 'term' || t.pos[k]) {
          return t.to(method);
        }
        return t;
      });
      return ts;
    };

  });
});
module.exports = all;
