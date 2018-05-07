// not in the workshop
'use strict'

let crypto = require('crypto');

crypto.createHash('md5').update('hello world, you can kiss my grits!').digest('hex');

