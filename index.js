'use strict';
var Constants = require('./constants');
var GSTIN = {};

function isValidGstinStructure(s){
 return s && typeof s === 'string' && s.length === 15;
}

function isValidGstinPattern(gstin){
 return Constants.GSTIN_REGEX.test(gstin);
}

function isValidStateCode(gstin){
 return gstin.slice(0,2) in Constants.STATE_CODE_MAP;
}

function getGstinCode(ch){
 return Constants.CHAR_CODE.indexOf(ch);
}

function checkSum(gstin){
 var l = gstin.length - 1;
 var divider = Constants.CHAR_CODE.length;
 var i,code,multiplier, product, hash, sum = 0;
 for(i=0;i<l;i++) {
  code = getGstinCode(gstin[i]);
  if (code === -1) {
   return false;
  }
  multiplier = Constants.MULTIPLIER[i%2];
  product = code * multiplier;
  hash = Math.floor(product / divider) + (product % divider);
  sum += hash;
 }
 //var checksum_code = divider - Math.floor(sum/divider);
 var checksum_code = (divider - (sum % divider))%divider;
 return checksum_code==Constants.CHAR_CODE.indexOf(gstin[i]);
 }

GSTIN.validate = function(gstin){
 return isValidGstinStructure(gstin) && isValidGstinPattern(gstin) && isValidStateCode(gstin) && checkSum(gstin);
};

module.exports = GSTIN;
