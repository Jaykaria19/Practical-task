function mergeArr(arr1 , arr2 ,n ,m) {
    let i = n-1;
    let j =0;
   
    while(i >=0 && j < m){
        if(arr1[i]>arr2[j]) {
            [arr1[i] , arr2[j] = [arr2[j] , arr1[i]]];
            i --;
            j++;
        }
        else{
            break;
        }
    }
    arr1.sort((a,b) => a-b)
    arr2.sort((a,b) => a- b)
}

const arr1a= [1 ,3, 5,7];
const arr2a =[0,2,6,8,9];
mergeArr(arr1a , arr2a , 4 ,5);
console.log("arr1[] =" ,arr1a)
console.log("arr2[] =" , arr2a)







const arr1b = [10,12];
const arr2b=[5,18,20];
mergeArr(arr1b , arr2b , 2 ,3);
console.log("arr1[] =" , arr1b );
console.log("arr2[] =" , arr2b)