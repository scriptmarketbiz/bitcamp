// ----------------- Number Methods ------------------- //

// 1. Write a program to check if a number is positive integer
// დაწერეთ პროგრამა, რათა შეამოწმოთ, არის თუ არა რიცხვი მთელი რიცხვი.
// console.log(Number.isInteger("bitcamp"));

// 2. Write a program to convert string to number
// დაწერეთ პროგრამა, რათა სტრინგი გადააქციოთ რიცხვად
// let num = 40;
// let string = num.toString();
// console.log(typeof string);

// 3. Write a program to check if value is NaN(Not a Number)
// დაწერეთ პროგრამა, რათა შეამოწმოთ, არის თუ არა რაიმე მნიშვნელობა რიცხვი.

// let num = "";
// // let check = isNaN(num);
// let check = typeof num === "number";
// console.log(check);

// console.log("5" === 5); // type coercion

// 4. Write a program which will round the number
// დაწერეთ პროგრამა, რომელიც დაამრგვალებს რიცხვს
// let num = 4.49;
// let roundedNum = Math.round(num);
// console.log(roundedNum);

// 5. Write a program to generate random integer from 0 to x
//დაწერე პროგრამა, რომელიც დააგენერირებს რანდომულ მთელ რიცხვს 0_დან x_მდე
// let x = 20;
// let random = Math.floor(Math.random() * x);
// console.log(random);

// 6. Write a program to generate random integer from x to y
// დაწერე პროგრამა, რომელიც დაგენერირებს რანდომულ მთელ რიცხვს x_დან y_მდე
// let x = 5;
// let y = 10;
// let range = y - x;
// let random = Math.floor(Math.random() * range) + x;
// console.log(random);

// 7. Write a program to round floating number to one hundredth;
// დაწერე პროგრამა, რომელიც დაამრგვალებს ათწილადს მეასადებამდე;

// let floatNum = 4.9876;
// let roundedNum = floatNum.toFixed(3);
// console.log(roundedNum);

// Math.sqrt()
// console.log(Math.sqrt(16));

// Math.abs();
// console.log(Math.abs(-10));

// -------------------- String methods ----------------------- //

// includes
// let str = "Bitcamp Front-End";
// console.log(str.includes("Front"));

// startsWith / endsWith

// let str = "Bitcamp Front-End";
// let check = str.startsWith("W");
// console.log(check);

// let str = "temuri.tsutskiridze.04@gmail.com";
// let check = str.endsWith("@gmail.com") || str.endsWith("@yahoo.com");
// console.log(check);

// replace;
// let str = "Hello, world!";
// let replacedString = str.replace("Hello", "Goodbye");
// console.log(replacedString);

//index
// let string = "Hello, World!";
// let index = string[string.length - 1];
// console.log(index);

//slice / substring
// let string = "Hello, World!";
// let slicedString = string.slice(3);
// console.log(slicedString);
// console.log(string);

// concat
// let string = "Hello";
// let str2 = "something";
// console.log(string.concat(" World!", str2));

// trim

// let str = "   Temuri    ";
// console.log(str.length);
// let trimedString = str.trim();
// let trimedStringStart = str.trimStart();
// let trimedStringEnd = str.trimEnd();
// console.log(trimedStringEnd);

// padStart  /  padEnd
// let num = 12;
// let string = num.toString();
// let paddedStringStart = string.padStart(10, "0");
// let paddedStringEnd = string.padEnd(10, "0");
// console.log(paddedStringStart);
// console.log(paddedStringEnd);

// check if string's first character is uppercase
// let string = "bitcamp";
// let letter = string[0];
// console.log(letter === letter.toUpperCase());

// charAt
// let string = "Bitcmap";
// let letter = string.charAt(string.length - 1);
// console.log(letter);

// let e="Eldari"
// e=e.toLowerCase()
// console.log(e)

// i=2
// if(i%2===0)console.log("luwia")
// else console.log("kentia")

// i=-0
// if(i*-1>0)console.log("urayofitia")
// if(i*-1<0)console.log("dadebitia")
// if(i*-1===0)console.log("nolia")

// let a=10
// let b=11
// if(a>b)console.log(a)
// else console.log(b)

// a=10
// b=11
// if(a>b)console.log(b)
// else console.log(a)

// let el="eldari sologa"
// if (el.indexOf("ssol")!==-1)console.log("sheicavs sol s")

// for (i=0; i<11; i++)console.log(i)


// console.log(Math.sqrt(a).toString())


// a="eldari"
// a=a.split("").reverse().join("");
// console.log(a)

// let x=[1,2,3,3,-4,5,4]
// // console.log(x)
// // let x1=new Set(x)
// // console.log(x1)

// // console.log((x).sort())
// let povna;
// for (i=0;i<x.length; i++)
// {
//    if(i===0)povna=x[i] 
//    if(x[i]<povna) 
//    povna=x[i];
  

// }
// console.log(povna)
// console.log(x.includes(-44))



let x=[1,2,3,3,-4,5,4]
let x2=[];

for (i=0;i<x.length; i++)
{
 console.log(`${x[i]}`)
 if(x2[x[i].toString()])
 x2[x[i].toString()]+=1;
 else x2[x[i].toString()]=1;


}
for (let i in x2)
{
    console.log(`${i} is ${x2[i]}`)
}







