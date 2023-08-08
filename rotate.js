let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
   
  let result = []
  console.log(result)
  
  for (let i=0; i<arr[0].length; i++){
      let newline = []
      for(let j = arr.length-1;  j>=0; j--)
      {
          newline.push(arr[j][i])
      }
  result.push(newline)
  }
  