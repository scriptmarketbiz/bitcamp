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
<<<<<<< HEAD
=======
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
// function firstOccur(ar)
// {
//     let i= null;
//     ar.forEach((element,index) => {
        
//         //console.log(index);
//         if(element && i===null)
//         {
//         i= index;
      
//         }
       
        
//     });
//     return i;
// }
// let t= [,2,3,4,5,6,7,8,9,0,11,12,1];
// console.log(firstOccur(t))

//39
// დაწერეთ პროგრამა, რომ ამოიღოთ ყველა ცრუ მნიშვნელობა მასივიდან.

// // Write a program to remove all falsy values from an array.

// function delFalse(ar)
// {
//    ar=ar.filter(element=>element);
//     return ar;
// }
// let t= [,2,3,4,5,0,7,8,9,0,11,12,1];
// console.log(delFalse(t))

>>>>>>> c4ef1c69e7602a060352525f2344188387d669e5
//40
// დაწერეთ პროგრამა მრავალგანზომილებიან მასივში ყველაზე დიდი ელემენტის მოსაძებნად.

// Write a program to find the largest element in a multi-dimensional array.
<<<<<<< HEAD


// function multiMax(arr)
// {
//     var x=Number.NEGATIVE_INFINITY;
//     arr.forEach(element => {
//         if(Array.isArray(element)){
//             let nestedX=multiMax(element);
//             x=Math.max(x,nestedX);
//         }
//         else {
//             if(element>x)x=element;

//         }
      
        
        
//     });
//     return x;
// }

// let multiArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
//41
//   console.log(  multiMax(multiArray));//41
// დაწერეთ პროგრამა, რომ ამოიღოთ ყველა დუბლიკატი მასივიდან.

// Write a program to remove all duplicates from an array.
// function flattenArray(arr) {
//     return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), []);
//   }
  
//   function findDuplicates(arr) {
//     const seen = new Set();
//     const duplicates = new Set();
  
//     arr.forEach(element => {
//       if (seen.has(element)) {
//         duplicates.add(element);
//       } else {
//         seen.add(element);
//       }
//     });
  
//     return duplicates;
//   }
  
//   let multiArray = [
//     [1, 2, 3],
//     [4, 2, 6],
//     [7, 8, 3]
//   ];
//   console.log(multiArray.reduce());

//   const flattenedArray = flattenArray(multiArray);
//   const result = findDuplicates(flattenedArray);
//   result.forEach(duplicate => {
//     console.log(duplicate);
//   });
  
  
  
// function removeDuplicates(arr) {
//     return [...new Set(arr)];
//   }
  
//   // Example usage
//   const array = [1, 2, 3, 4, 3, 2, 1, 5];
//   const uniqueArray = removeDuplicates(array);
  
//   console.log(uniqueArray);
// // //42  
// // დაწერეთ პროგრამა მასივში ელემენტის ბოლო ადგილმდებარეობის ინდექსის მოსაძებნად.

// // Write a program to find the index of the last occurrence of an element in an array. 
  


// function f(array,i) {
//     let lastIndex=-1
//     array.forEach((element,index) => {
//         if(element===i)lastIndex= index;
        
//     });
//     return lastIndex;
// }

// const array = [1, 2, 3, 4, 3, 2, 1, ];
// console.log(f(array,3));
// 43
// დაწერეთ პროგრამა რომ ორი სორტირებული მასივის შერთდეს და გახდეს ერთი მასივი რომელიც ასევე სორტირებული იქნება.

// // Write a program to merge two sorted arrays into a single sorted array.
// const sortedArray1 = [1, 3, 5, 7, 9];
// const sortedArray2 = [2, 4, 6, 8, 10];
// const mergedArray=sortedArray1.concat(sortedArray2);
// mergedArray.sort((a,b)=>a-b);
// console.log(mergedArray);

//44
// დაწერეთ პროგრამა სტრიქონების მასივის ანბანის მიხედვით დასალაგებლად.

// // Write a program to sort an array of strings in alphabetical order.
// const strings = ['apple', 'cherry', 'banana', 'date'];

// console.log(strings.sort()); // Output: ['apple', 'banana', 'cherry', 'date']
// 45
// დაწერეთ პროგრამა მრავალ მასივებს შორის საერთო ელემენტების მოსაძებნად.

// Write a program to find the common elements among multiple arrays.

// 46
// დაწერეთ ფუნქცია, რომელიც მიიღებს წინადადებას შეყვანად და აბრუნებს უნიკალური სიტყვების მასივს ანბანური თანმიმდევრობით, გამოკლებით გავრცელებული ინგლისური სიტყვების, როგორიცაა "the", "a" და "is".

// Write a function that takes a sentence as input and returns an array of unique words in alphabetical order, excluding common English words such as "the", "a", and "is".

// function f(st){
//     const words=st.split(" ");
//     words.sort(function (a,b){
//         return a.toLowerCase().localeCompare(b.toLowerCase())
//     });
//     const words1=Array.from(new Set(words));
//     const excludeWords=["the","that",'"the"',"a"];
//     const filtered=words1.filter(word=>!excludeWords.includes(word));
//     return filtered;
    
// }



// console.log(f('Write a function that takes a sentence as input and returns an array of unique words in alphabetical order, excluding common English words such as "the" , "a" , and "is"'));
// 47
// დაწერეთ ფუნქცია, რომელიც იღებს სტრიქონს შეყვანად და აბრუნებს ჭეშმარიტს, თუ ის არის პანგრამა (შეიცავს ანბანის ყველა ასოს ერთხელ მაინც), ცრუ სხვა შემთხვევაში.

// Write a function that takes a string as input and returns true if it is a pangram (contains every letter of the alphabet at least once), false otherwise.

// function f(st){
//     st=st.toLowerCase();
//     const letter =new Set();
//     for(let i=0;i<st.length;i++){
//         if(/[a-z]/.test(st[i]))letter.add(st[i]);
       

//     }
//     return letter.size;



// }

// str="The quick brown fox jumps Over the lazy dog.";
// console.log(f(str));
//48
// დაწერეთ ფუნქცია, რომელიც მიიღებს ობიექტების მასივს და თვისების სახელს და აბრუნებს ამ თვისების უნიკალური მნიშვნელობების მასივს ყველა ობიექტიდან.

// Write a function that takes an array of objects and a property name, and returns an array of unique values for that property across all objects.

// function f(ar,pName)
// {
//     //return ar.map(obj=>obj[pName]);
//     const uniqueValues=new Set();
//     ar.forEach(element => {
//         uniqueValues.add(element[pName]);
        
//     });
//  return Array.from(uniqueValues);
// }



// const people = [
//     { name: 'John', age: 25 },
//     { name: 'Jane', age: 30 },
//     { name: 'Bob', age: 30 },
//   ];

//   console.log(f(people,'age'))
=======
let multiArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log(multiArray);
>>>>>>> c4ef1c69e7602a060352525f2344188387d669e5
