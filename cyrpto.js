// not in the workshop
'use strict'
// require the crypto module
let crypto = require('crypto');

//use crypto method to turn string hash, with hex base??
crypto.createHash('md5').update('hello world, you can kiss my grits!').digest('hex');
