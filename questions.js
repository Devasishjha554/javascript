// Q.1
//  arr=[1,65,23,90,87,75];
// let largest=0;
// let second =0;let
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>largest){
//         largest=arr[i];

//     }}
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>second&&arr[i]<largest){
//         second=arr[i];
//     }

// }
// console.log(second);


// const arr=[2,5,7,9];
// let firstelement=arr[0];
// for(let i=0;i<=arr.length-1;i++){
//     arr[i]=arr[i+1];

// }
// arr[arr.length-1]=firstelement;
// console.log(arr);




// const arr=[2,3,4,5,7,8];
// let n=arr.length;
// const first = arr[n-1];
// const second = arr[n-2];
//     for (let i = n-3; i >= 0; i--) {
//         arr[i+2]=arr[i];
//     }
//     arr[1] = first;
//     arr[0] = second;
//     console.log(arr);

// function rightrotate(arr){
//     let n=arr.length;
//     for(let step=0;step<2;step++){
//         let temp=arr[n-1];
//         for(let i=n-1;i>=0;i--){
//             if(arr[i]!=undefined){
//                 arr[i]=arr[i-1];
//             }
//         }
//         arr[0]=temp;
//     }
//     return arr;
// }
// console.log(rightrotate([2,3,4,5,6]))


// function remove_dupli(arr){
//     let arr2=[];
//     for(let i=0;i<arr.length;i++){
//         let isduplicate=false;
//         for(let j=0;j<arr2.length;j++){
//            if(arr[i]==arr2[j]){
//             isduplicate=true;
//             break;
//            } 
//         }
//         if(!isduplicate){
//             arr2[arr2.length]=arr[i];
//         }
//     }
//     return arr2;

// }
// console.log(remove_dupli([2,1,2,3,3,4,7]))


// function removeDuplicates(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         let j;
//         for (j = 0; j < result.length; j++) {
//             if (arr[i] === result[j]) {
//                 break; 
//             }
//         }
//         if (j === result.length) {
//             result[result.length] = arr[i];  
//         }
//     }
//     return result;
// }

// console.log(removeDuplicates([1,2,2,3,4,3,5]));



