function abc_bca(str) {
    let newStr=""
    let lastStr=""
    for (let i = 0; i <= str.length; i++) {
         if(i%3===0){
            if(newStr){
                lastStr+=newStr
            }
            newStr = str[i]
            continue
         }else{
             lastStr+=str[i]
         }
    }
    return lastStr;
  }

  console.log(abc_bca("dfgjkloyo"));
  