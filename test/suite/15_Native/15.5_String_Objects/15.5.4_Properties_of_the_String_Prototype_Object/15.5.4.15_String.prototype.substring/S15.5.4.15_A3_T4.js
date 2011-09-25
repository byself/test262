// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.substring (start, end) can be applied to non String object instance and
 * returns a string value(not object)
 *
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.15_String.prototype.substring/S15.5.4.15_A3_T4.js
 * @description Apply String.prototype.substring to Array instance. Start is '4', end is '5'
 */

var __instance = new Array(1,2,3,4,5); 
__instance.substring = String.prototype.substring;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__instance.substring('4', '5') !== "3") {
  $ERROR('#1: __instance = new Array(1,2,3,4,5); __instance.substring = String.prototype.substring; __instance.substring(\'4\', \'5\') === "3". Actual: '+__instance.substring('4', '5') );
}
//
//////////////////////////////////////////////////////////////////////////////
