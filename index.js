var MD5 = require('MD5');

module.exports = createSign;

/**
*
* Create AVOSCloud Sign from appkey or masterkey
* 
* @example
*   var appKeySign = createSign('xxxx');
*   var masterSign = createSign('xxxx', true);
*
**/
function createSign(key, isMasterKey) {
  if (!key)
    throw new Error('AVOSCloud appkey/masterKey is required.'); 

  var timestamp = Date.now();
  var baseSign = MD5(timestamp + key) + ',' + timestamp;

  return isMasterKey ? baseSign + ',' + 'master' : baseSign;
}