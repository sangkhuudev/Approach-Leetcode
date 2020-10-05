const a=[1,1,2,3,4,5,8,9]
const b=[3,4,5]
function mergeSort(arr1,arr2){
    let result=[]
    let i=0,j=0;
   while(i<arr1.length && j<arr2.length){
        if(arr1[i]<=arr2[j]){
            result.push(arr1[i])
            i++                       
        }
        else {
            result.push(arr2[j])
             j++;                    
        }      
    }
    result=[...result,...arr1.slice(i),...arr2.slice(j)]
    return result
}
console.log(mergeSort(a,b))
//console.log(b.slice(4))