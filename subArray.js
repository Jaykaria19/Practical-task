function subArray (arr) {
    const sumSet = new Set();
    let sum = 0;
   
    for (let i =0 ; i<arr.length ; i ++){
        sum += arr[i];
        if (sum === 0 || sumSet.has(sum)){
            return true;
        }
        sumSet.add(sum);
    }
    return false;
}



const arr1=[4,2,-3,1,6]; 
console.log(subArray(arr1))

const arr2 = [4 , 2 ,0 , 1 ,6]
console.log(subArray(arr2))
