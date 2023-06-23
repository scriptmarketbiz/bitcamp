// // დაწერეთ პროგრამა წინადადებაში ყველაზე გრძელი სიტყვის სიგრძის საპოვნელად.

// // Write a program to find the length of the longest word in a sentence.
// let x="Lorem ipsum dolor sit amet, consectetur addddddipiscing elit. In pulvinar diam at tellus gravida, at.";
// const arr=x.split(" ");
// let ln=0;
// let i=0;
// console.log(arr);
// arr.forEach((element, index) => {
//     console.log(element+index);  
//     if(element.length>ln)
//     {
//     ln=element.length; 
//     i=index;
//     }   
// });
// console.log(arr[i]);


// დაწერეთ პროგრამა, რათა შეამოწმოთ არის თუ არა სტრიქონი პალინდრომი.

// Write a program to check if a string is a palindrome.

// let x=`The error you re encountering is due to a 
// syntax issue in your JavaScript code. In JavaScript,
//  multi-line strings cannot be directly enclosed within single 
//  or double quotes. If you need to create a string that spans multiple lines, 
//  you can use template literals 
// (enclosed within backticks) or concatenate multiple strings. Here s an example:

// Using template literals:

//  elle
// `;

// let x1=x.replace(/[^a-zA-Z0-9]/g," ");
// const arr=x1.split(" ");
// let rev="";
// arr.forEach((element, index) => {
//     if(element===element.split("").reverse().join("") && element.trim().length>1)
//     {
//         rev=element.split("").reverse().join("");
//         console.log(`${element} is palindromia ${rev}`)
//     }
// });
//-----------33
// დაწერეთ პროგრამა რომ წინადადებაში თითოეული სიტყვის პირველი ასოს დიდი ასოებით შეცვალოს.

// // Write a program to capitalize the first letter of each word in a sentence.
// let x=" Lorem ipsum dolor sit amet, consectetur addddddipiscing elit. In pulvinar diam at tellus gravida, at.";
// console.log(x);
// x1="zuzua iamazi";
// const arr=x.split(" ");
// x="";


// arr.forEach((element, index) => {
//     x+=(element.charAt(0).toUpperCase()+element.slice(1)+" ");

    
    
// });
// console.log(x);


//34
// დაწერეთ პროგრამა, რომ იპოვოთ მასივის ყველა ლუწი რიცხვის ჯამი.

// Write a program to find the sum of all even numbers in an array.
// let t=[1,2,3,4,5,6,7,8,9,0,11,12];
// let luwi_jami=0;
// //console.log(t);
// t.forEach((element)=>{
//  if(element%2==0)luwi_jami+=element;
   
// })
// console.log(luwi_jami);
// 35
// დაწერეთ პროგრამა წინადადებაში სიტყვების თანმიმდევრობის შესაბრუნებლად.

// Write a program to reverse the order of words in a sentence.

// let x=" Lorem ipsum dolor sit amet, consectetur addddddipiscing elit. In pulvinar diam at tellus gravida, at.";
// console.log(x);
// const arr=x.split(" ");
// x="";

// console.log(arr.length    );
// for(let i=arr.length-1 ; i>=0;i--)
// x+=arr[i]+" " ;
// console.log(x);
//36
// დაწერეთ პროგრამა მასივში სიდიდით მეორე რიცხვის მოსაძებნად.

// Write a program to find the second largest number in an array.

// let t=[1,2,3,4,5,6,7,8,9,0,11,12,1];
// let max=0;
// let max1=0;
// //console.log(t);
// t.forEach((element)=>{
//  if(element>max1 &&max1!=max) 
//        max1=element;

        
//  if(element>max)
//        max=element;


// })
// console.log(max);
// console.log(max1);

// //37
// // დაწერეთ პროგრამა, რათა შეამოწმოთ არის თუ არა ორი მასივი ტოლი.

// // Write a program to check if two arrays are equal.
// function arrEqual(arr1,arr2)
// {
//     if (arr1.length!==arr2.length)return false;  
//     for(var i=0;i<arr1.length; i++)if(arr1[i]!==arr2[i])return false;  
//     return true;
// }


// let t= [1,2,3,4,5,6,7,8,9,0,11,12,1];
// let t1=[1,2,3,4,5,6,7,8,9,0,11,12,1];
// console.log(arrEqual(t,t1));

//38
// დაწერეთ პროგრამა მასივში ელემენტის პირველი ადგილმდებარეობის ინდექსის მოსაძებნად.

// Write a program to find the index of the first occurrence of an element in an array.
function firstOccur(ar)
{
    let i= null;
    ar.forEach((element,index) => {
        
        //console.log(index);
        if(element && i===null)
        {
        i= index;
      
        }
       
        
    });
    return i;
}
let t= [,2,3,4,5,6,7,8,9,0,11,12,1];
console.log(firstOccur(t))