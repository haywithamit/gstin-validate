# gstin-validate

* Validates GSTIN number for length (15 digits), format (State code, PAN, Entity Number, Z, Checksum) and checksum as per the algorithm


## Installation 

    npm install gstin-validate

## Use

    var gstin_validator = require('gstin-validate');
    gstin_validator.validate('12AAACI1681G1Z0');
	  gstin_validator.validate('47AAACI1681G1Z0');
	  gstin_validator.validate('12AAACI1681G1Z0');

## Test
