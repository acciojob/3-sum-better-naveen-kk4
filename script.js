function findPivot( s , e , arr){
  let pivot = arr[e];
  let i = s;
  for(let j = s;j<e;j++){
   if(arr[j]<=pivot){
     let temp = arr[j];
     arr[j]=arr[i];
     arr[i]=temp;
     i++;
   }
  }
  let temp = arr[i];
  arr[i]=arr[e];
  arr[e]=temp;
  return i;
}
function quickSort(s,e,arr){
 if(s>=e)return;

let pivot = findPivot(s,e,arr);
quickSort(s,pivot-1,arr);
quickSort(pivot+1,e,arr);


}

function threeSum(arr, target) {
	
  quickSort(0,arr.length-1,arr);
  
   let ans = Number.MAX_VALUE;
   let finall=0;
   for(let i = 0;i<arr.length-2;i++){
     let s = i+1;
     let e = arr.length-1;
     let tar = target-arr[i];
     while(s<e){
      if(ans>Math.abs(target-(arr[s]+arr[e]+arr[i]))){
        ans = Math.abs(target-(arr[s]+arr[e]+arr[i]));
        finall = arr[s]+arr[e]+arr[i];

      }
       if(arr[s]+arr[e]>tar)e--;
       else if(arr[s]+arr[e]<tar)s++;
       else {
        console.log("xxxx");
        return target;
       }
       
     }
   }
   return finall;
  
   
 }
 console.log(threeSum([-1,2,1,-4],1));
 