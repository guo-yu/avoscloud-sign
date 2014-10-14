var createSign = require('..');

// These two demo key are come from AVOSCloud documents.
var demoAppkey = 'n35a5fdhawz56y24pjn3u9d5zp9r1nhpebrxyyu359cq0ddo';
var demoMasterKey = 'h2ln3ffyfzysxmkl4p3ja7ih0y6sq5knsa2j0qnm1blk2rn2';

// Create appKey sign
var sign = createSign(demoAppkey);
console.log(sign);
console.log();

// Create masterKey sign
var masterSign = createSign(demoMasterKey, true);
console.log(masterSign);
console.log();