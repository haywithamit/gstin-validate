# gstin-validate

* Validates GSTIN number for length (15 digits), format (State code, PAN, Entity Number, Z, Checksum) and checksum as per the algorithm

![build](https://github.com/haywithamit/gstin-validate/badges/master/build.svg)
![npm](https://img.shields.io/npm/dw/gstin-validate.svg)

## Installation 

    npm install gstin-validate

## Use

    var gstin_validator = require('gstin-validate');
    gstin_validator.validate('12AAACI1681G1Z0');
	  gstin_validator.validate('47AAACI1681G1Z0');
	  gstin_validator.validate('12AAACI1681G1Z0');

## Test
