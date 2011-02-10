// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.3_A3.4_T1",

path: "7.3, 7.4",

description: "Insert PARAGRAPH SEPARATOR (\\u2029) into single line comment",

test: function testcase() {
  try {
     (function() {
         // CHECK#1
 })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});
