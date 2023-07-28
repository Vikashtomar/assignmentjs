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
function calculateAge(dob) {
  const dobDate = new Date(dob);
  const today = new Date();

  let age = today.getFullYear() - dobDate.getFullYear();
  const monthDiff = today.getMonth() - dobDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
    age--; // If the birth date has not yet been reached this year, subtract 1 from age
  }

  return age;
}

// Example usage:
const dob = "2000-01-15";
const age = calculateAge(dob);
console.log(age); // Output will be the current age based on the provided DOB
