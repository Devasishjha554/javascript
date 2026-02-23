// string is a primitive datatype.
// set of charecters.
// string is immutable.

// eg:-
// let str_1="name";
// let str_2="name123"
// let str_3=str_2.replace('n','p');
// console.log(typeof str_1)
// console.log(typeof str_2)
// console.log(str_3);


// let str_1="name";
// let str_2=str_1.toUpperCase();
// let str_3=str_2.toLowerCase();
// console.log(str_2)
// console.log(str_3)


// let str_1="Devasish";
// let str_2=str_1.slice(0,4);
// console.log(str_2);




// convert string to array
// let str='apple,banana,mango';
// let str_1=str.split();
// console.log(str_1);

// Q. input:aaabbbcba
// only non repeating element
// function nonrepeating(str){
//     let isrep;
//     for(let i=0;i<str.length;i++){
//         isrep=true;
//         for(let k=0;k>str.length;k++){
//             if(i==k){
//                 continue;
//             }
//             else if(str[i]==str[k]){
//                 isrep=false;
//             }
//             else{
//                 if(isrep){
//                     console.log(str[i]);
//                 }
//             }
//         }
//     }
//     return isrep;
// }
// console.log(nonrepeating("aaabbcab"))



// hw

// function rtn_sm_word(str1,str2){
//     let s1="",s2="";
//     str1+=" ";
//     str2+=" ";
//     for(i=0;i<str1.length;i++){
//         if(str1[i]!=" "){
//             s1+=str1[i]
//         }
//         else{
//             for(k=0;k<str2.length;k++){
//                 if(str2[k]!=" "){
//                     s2+=str2[k]
//                 }
//                 else{
//                     if(s1==s2){
//                         console.log(s2)
//                     }
//                     s2="";
//                 }
//             }
//             s1="";
//         }
//     }
// }
// let s1="hh uj iolp iioopp oo pp";
// let s2="hh uhdbu iolp jhddh hbxw oo pp";
// rtn_sm_word(s1,s2)

// function haveSameWords(sentence1, sentence2) {
//   let words1 = sentence1.split(" ");
//   let words2 = sentence2.split(" ");
//   if (words1.length !== words2.length) {
//     return false;
//   }
//   let freq = {};
//   for (let word of words1) {
//     if (freq[word]) {
//       freq[word]++;
//     } else {
//       freq[word] = 1;
//     }
//   }
//   for (let word of words2) {
//     if (!freq[word]) {
//       return false; 
//     }
//     freq[word]--;
//   }return true;
// }
// console.log(haveSameWords("hh uj iolp iioopp oo pp","hh uhdbu iolp jhddh hbxw oo pp"))







// function rtn_wrd_max_vovl(str){
//     let s="";
//     let ms="";
//     let mv=0;
//     let v=0;
//     str+=" "
//     for(i=0;i<str.length;i++){
//         if(str[i]!=" "){
//             s+=str[i];
//             if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"||str[i]=="A"||str[i]=="E"||str[i]=="I"||str[i]=="O"||str[i]=="U"){
//                 v++;
//             }
//         }
//         else{
//             if(mv<v){
//                 mv=v;
//                 ms=s
//             }
//             v=0;
//             s="";
//         }
//     }
//     console.log(ms);
// }
// let s23="rtrtee rteee treeeee";
// rtn_wrd_max_vovl(s23)








// function countWords(str) {
//     let words = [];
//     let word = "";
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === " ") {
//             words[words.length] = word;
//             word = "";
//         } else {
//             word += str[i];
//         }
//     }
//     words[words.length] = word; 
//     let unique = [];
//     let counts = [];

//     for (let i = 0; i < words.length; i++) {
//         let found = false;

//         for (let j = 0; j < unique.length; j++) {
//             if (words[i] === unique[j]) {
//                 counts[j]++;
//                 found = true;
//                 break;
//             }
//         }

//         if (!found) {
//             unique[unique.length] = words[i];
//             counts[counts.length] = 1;
//         }
//     }

//     for (let i = 0; i < unique.length; i++) {
//         console.log(unique[i] + " : " + counts[i]);
//     }
// }

// console.log(countWords("apple banana apple orange banana apple"))



// function secondLongestWord(str) {
//     let words = [];
//     let word = "";
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === " ") {
//             words[words.length] = word;
//             word = "";
//         } else {
//             word += str[i];
//         }
//     }
//     words[words.length] = word; 
//     let longest = "";
//     let second = "";
//     for (let i = 0; i < words.length; i++) {
//         let current = words[i];

//         if (current.length > longest.length) {
//             second = longest;
//             longest = current;
//         } 
//         else if (current.length > second.length && current !== longest) {
//             second = current;
//         }
//     }

//     return second;
// }
// console.log(secondLongestWord( "apple banana apple orange banana apple"));


// function countvovl(str){
//     let count=0;
//     for(let i=0;i<=str.length;i++){
//         let ch=str[i];
//         if(ch==='a'||ch==='e'||ch==='i'||ch==='o'||ch==='u'||ch==='A'||ch==='E'||ch==='I'||ch==='O'||ch==='U'){
//             count++;

//         }
//     }
//      return count;

// }
// console.log(countvovl("Devasish"));





