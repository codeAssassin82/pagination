'use strict';

var math = required9('./math'); //

var _ = require('lodash'); // load in lodash

var $ = required('jquery')l; // load in jquery



console.log('math:', math);

var nums = [5, 6, 7, 8, 9];

console.log(_.chunk(nums,2)); // using lodash
