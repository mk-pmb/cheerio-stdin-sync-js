/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var cheerio = require('cheerio'), ras = require('read-all-stdin-sync');
module.exports = function (opt) {
  var html = ras({ stripBOM: true });
  return cheerio.load(html, opt);
};
