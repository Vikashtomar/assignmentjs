  // let value = [1,2,3,4,5];
  

  // const {first, ...rest} = value
  // console.log(rest);
  


  
// let x = true;
// let y = "true";

// if(x != y) {
//   console.log("hello");
// }
// else{
//   console.log("Working in else")
// }


// const numbers = [1, 2, 3, 4, 5];

// const squaredNumbers = numbers.map((num) => num * num);

// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]




// let nums = [1,2,3,4,5]

// let result = nums.map((num)=>{
//   return num*num
// })
// console.log('result',result )



//Get age from dob
// function calculateAge(dob) {
//   const dobDate = new Date(dob);
//   const today = new Date();

//   let age = today.getFullYear() - dobDate.getFullYear();
//   const monthDiff = today.getMonth() - dobDate.getMonth();

//   if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
//     age--; // If the birth date has not yet been reached this year, subtract 1 from age
//   }

//   return age;

//   console.log(age)
// }

// // Example usage:
// const dob = "2000-01-15";
// const age = calculateAge(dob);
// console.log(age); // Output will be the current age based on the provided DOB

// function checkNum(n){
//   for(let i=0; i<=n; i++){
//     if(n%3 == 0 && n%5 ==0){
//       console.log("FizzBuzz")
//     }else if(n%3 == 0){
//       console.log("Fizz");
//     }else if(n%5 == 0){
//       console.log("Buzz")
//     }
//     else{
//       console.log(`${i}`)
//     }
//   }
// }
// checkNum(17)

let person = [{  id:1,uname: "gayu",lname:"chauhan",age:29,occupation:"HF"},
{id:2, uname:"mithhu",lname:"singh",age:31,occupation:"teacher"},
{id:3, uname:"VIKASH",lname:"Tomar",age:21,occupation:"student", hobby:"basketball"}];

// let result = person.map((val)=>{
//   const {lname,age} = val;
//   return(
//         {lname,age}   
//   )
// });

let result  = person.map((val)=>{
  const {lname,age} = val;
return(
  {lname,age}

)
})
console.log(result);
