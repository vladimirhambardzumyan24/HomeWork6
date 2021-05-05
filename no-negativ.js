function noNegativ(arr) {
    let max=-Infinity
    let newArr=[]
    let maltipul=1
  if (typeof arr[0] === "object") {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
            if(max<arr[i][j] && arr[i][j]<0){
                max=arr[i][j]
            }
      }
      if(max !== -Infinity) newArr.push(max)
      max=-Infinity
    }
  }else{
      return "Invalid Argument"
  }
  
  for (let i = 0; i < newArr.length; i++) {
        maltipul*=newArr[i]
  }
  return newArr.length > 0 ? maltipul : 'No negatives';
}
console.log(noNegativ([[2, -9, 3, 0], [1, 2], [-4, 1, 0]]));
