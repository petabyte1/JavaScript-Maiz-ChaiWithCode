console.log(2 > 1); //True bcz 2 is greater than 1
console.log(2 >= 1);//True bcz 2 is greater than and equal to 1
console.log(2 < 1); //False bcz 2 is not less than 1
console.log(2 == 1);//False bcz 2 in not equal to  1
console.log(2 != 1);//True bcz 2 is not equal to 1

console.log("2" > 1);
//yaha pe ye string to ko number em conver kr rhaa he is lie "2" > 1 true aa rha he kyunke isme kooi strict check nhee he.    
console.log("02" > 1);

console.log(null > 0);
/* 
JavaScript mein comparison operators like > type conversion karte hain. Jab null ko compare kiya jaata hai > 0 se, tab:

null ko number mein convert kiya jaata hai → null becomes 0

So it becomes: 0 > 0 → which is false
*/ 



console.log(null == 0);
/*
JavaScript yahan null ko number mein convert nahi karta.

Aur null aur 0 ki types different hain — aur yeh dono kabhi bhi equal nahi maane jaate.

👉 Isliye: false
*/


console.log(null >= 0);
/*
null >= 0 ka matlab hai: Compare null with 0 using ">=" operator.

JavaScript yahan pe relational comparison kar raha hai — isme type coercion hoti hai.

🔧 JavaScript kya karta hai yahan:
Jab null ko >= ya <= ke sath use karte ho, to JavaScript null ko number mein convert karta hai.

null → 0

So it becomes: 0 >= 0 → ✅ true
*/


// undefined ka matlab hota hai: "kuch value define nahi hui hai.

// Jab undefined ko compare karte ho kisi number se (like 0), toh JavaScript coercion apply karta hai ya nahi karta hai, depending on the operator.

/*
console.log(undefined == 0);
Yahan == (loose equality) hai.

Lekin undefined sirf null ke equal hota hai, kisi aur value ke nahi.

👉 So:
undefined == 0 → ❌ false

✅ Output:false
*/

console.log(undefined == 0);

/*
Jab undefined ko comparison mein use karte ho (like >), toh JS try karta hai ise number mein convert karne ka.

undefined ko number mein convert karoge toh milta hai → NaN (Not a Number)

Aur:

Koi bhi comparison NaN ke sath ho, result hota hai: false

👉 So:
undefined > 0 → becomes NaN > 0 → ❌ false

✅ Output:false
*/


console.log(undefined > 0 );
/*
Same logic yahan bhi lagta hai.

undefined → NaN

NaN < 0 → ❌ false

✅ Output:false
*/
console.log(undefined < 0);

// === tripple equal

console.log("2" === 2);






// ✅ Basic Number Comparisons
console.log(2 > 1);     // true  → 2 is greater than 1
console.log(2 >= 1);    // true  → 2 is greater than or equal to 1
console.log(2 < 1);     // false → 2 is not less than 1
console.log(2 == 1);    // false → 2 is not equal to 1
console.log(2 != 1);    // true  → 2 is not equal to 1

// ✅ String & Number Comparison
console.log("2" > 1);   // true  → "2" gets converted to number → 2 > 1
console.log("02" > 1);  // true  → "02" → 2 → 2 > 1

// ✅ null Comparisons
console.log(null > 0);      // false → null → 0 → 0 > 0 → false
console.log(null == 0);     // false → null is only loosely equal to undefined
console.log(null >= 0);     // true  → null → 0 → 0 >= 0 → true

// ✅ undefined Comparisons
console.log(undefined == 0);  // false → undefined is only loosely equal to null
console.log(undefined > 0);   // false → undefined → NaN → NaN > 0 → false
console.log(undefined < 0);   // false → undefined → NaN → NaN < 0 → false

// ✅ Strict Equality
console.log("2" === 2);     // false → different types: string !== number
