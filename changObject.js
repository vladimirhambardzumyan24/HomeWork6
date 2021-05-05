function changObject(obj){
    let newObj={}
    for(let item in obj){
        if(typeof newObj[obj[item]] !=="undefined"){
            repeatObj=[]
            let itemValue=newObj[obj[item]]
            for (let i = 0; i < itemValue.length; i++) {
                repeatObj.push(itemValue[i])
            }
            repeatObj.push(item)
            newObj[obj[item]]=repeatObj
        }else{
            newObj[obj[item]]=item
        }
    }
    return newObj
}
console.log(changObject({ a: '1', b: '2', c: '2' }))