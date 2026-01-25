let arr=[1,2,4,5,6,]
function secondLargest(arr){
    let max=0;
    let secondmax=0;
    for(let i=0;i<arr.length;i++){
        if(max<arr[i]){
            secondmax=max;
            max=arr[i];
        }
        else if(max>secondmax && secondmax>arr[i]){
            secondmax=max;
        }
        
    }
    return secondmax
}
console.log(secondLargest(arr));