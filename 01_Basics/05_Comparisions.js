console.log("2">1);// Don't compare different datatypes
console.log("1">2);//

console.log(null==0);//false
console.log(null>=0);// true
console.log(null>0);//false

// important 
/*  == and comparison operators (>, <, >=, <=) work differently.
  Comparisons convert null to 0, but equality check does not.
  That’s why null >= 0 is true, but null > 0 is false. */

  // === -> this is strict check , it will check datatype also