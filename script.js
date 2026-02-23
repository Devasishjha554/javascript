// console.log("hello world")
// var a=5;
// console.log(a)
// let b=30;
// console.log(b)
// const pi=3.14;
// console.log(pi)
// let c;
// console.log(c)



//creat an object

// let obj ={
//     name:"deva",
//     age:20,
// };
// console.log(obj.age);


// hw


// let salary = 20000;
// let increment = 2000;
// let target = 40000;
// let years = 0;

// while (salary < target) {
//   salary =salary+ increment;
//   years++;
// }

// console.log(years);





// let maxCap = 500;
// let currentWg = 0;

// let personWg = 60;
// let personCount = 0;

// while (currentWg + personWg <= maxCap) {
//   currentWg =currentWg+personWg;
//   personCount++;
//   personWg =personWg+ 10;
// }

// console.log( personCount);
// console.log( personCount + 1);





// let dailySaving = 1;
// let total = 0;
// let day = 0;

// while (total <= 1000) {
//   day++;
//   total =total+ dailySaving;
//   dailySaving= dailySaving*2;
// }

// console.log(day);
// console.log(total);





// let ticketPrice = 30;
// let totalCollection = 0;
// let passengerCount = 0;
// let payingPassengers = 0;

// while (totalCollection < 300) {
//   passengerCount++;

//   if (passengerCount % 5 !== 0) { 
//     totalCollection =totalCollection + ticketPrice;
//     payingPassengers++;
//   }
// }

// console.log("Total Passengers:", passengerCount);
// console.log("Paying Passengers:", payingPassengers);
// console.log("Total Collection:" + totalCollection);



// function countdigit(num){
//     num=Math.abs(num);
//     if(num==0){
//         return 1;
//     }
//     else{
//         let count=0;
//         while(num!==0){
//            let digit=num%10;
//             num=(num-digit)/10;
//             count++;
//         }
//         return count;
//     }    
// }
//    console.log(countdigit(50));



// let pattern = "";
// for (let i = 1; i <= 4; i++) {
//   pattern =pattern + "*";
//   console.log(pattern);
// }



// Q.1
// function odd_even(num){
//     if(num%2==0){
//         console.log("even");
//     }
//     else{
//         console.log("odd")
//     }
// }
// console.log (odd_even(73));



// Q.2
// function maximum(a,b){
//     if(a>b){
//         return a;
//     }
//     else {
//         return b;
//     }
// }
// console.log(maximum(67,69));

// Q.3
// function maximum_of_three(a,b,c){
//      if(a>b&&a>c){
//         return a;
//      }
//      else if(b>a&&b>c){
//         return b;
//      }
//      else{
//         return c;
//      }
// }
// console.log(maximum_of_three(34,24,96));

// Q.3
// function sum(num){
//     let sum=0;
//     for(let i=1;i<=num;i++){
//     sum=sum+i;
//     }
//     console.log(sum);
// }
// sum(3);

// function ap(a,n,d){
//     // let series=0;
//     // for(let i=1;i<=n;i++){
//     //     series=a+(i-1)*d;
//     //     console.log(series);
//     // }
//     let series=0;
//     let Total_series=0;
//     let i=1;
//     while(i<=n){
//         series=a+(i-1)*d;
//         console.log(series);
//         Total_series+=series;
//         i++;
//     }
//     console.log("total sum=",Total_series);
// }

// ap(2,4,3);


// Q.6
// function factorial(num){
//     let fact=1;
//     for(let i=1;i<=num;i++){
//         fact*=i;
//     }
//     return fact;
// }
// console.log(factorial(5));

// Q.7

// function reverse(num){
//     let rev=0;
//     while(num>0){
//         let digit=num%10;
//         rev=rev*10+digit;
//         num= Math.floor(num/10);
//     }
//     return rev;
// }
// console.log(reverse(12667));

// Q.8
// function palindrome(num){
//     let value=num;
//     let rev=0;
//     while(num>0){
//         let digit=num%10;
//         rev=rev*10+digit;
//         num=Math.floor(num/10);
//     }
//     return value==rev;
// }
// console.log(palindrome(1221));
// console.log(palindrome(12345));


//Q.9
// function prime_number(num){
//     if(num<=1){
//         return false;
//     }
//     for(let i=2;i<num;i++){
//         if(num%i===0){
//             return false;
//         }
//     }
//      return true;
// }
// console.log(prime_number(7))

// Q.10
// function count_digit(num){
//     let count=0;
//     if(num==0){
//         return 1;
//     }
//     while(num>0){
//         count++;
//         num=Math.floor(num/10);

//     }
//     return count;

// }
// console.log(count_digit(145788));

// Q.11
// for(let i=1;i<=50;i++){
//     if(i%3==0){
//         console.log("Fizz");
//     }
//     else if(i%5==0){
//         console.log("Buzz");
//     }
//     else if(i%3==0&&i%5==0){
//         console.log("FizzBuzz");
//     }
//     else{
//         console.log(i);
//     }
// }


// Q.12
// function countvowels(str){
//     let count=0;
//     for(let ch of str){
//         if(ch==='a'||ch==='e'||ch==='i'||ch==='o'||ch==='u'){
//           count++;  
//         }
//     }
// return count;

// }
// console.log(countvowels("dncvdjhbzkjeainjud"))


// Q.13
// function reverse_string(str){
//     let rev="";
//     for(let i=str.length-1;i>=0;i--){
//         rev+=str[i];
//     }
//     return rev;
// }
// console.log(reverse_string("deva"))


// Q.14
// function capitalizefirst(str){
//     if(str.length===0){
//         return str;
//     }
//     return str[0].toUpperCase() + str.slice(1);
// }
// console.log(capitalizefirst("deva"));


// Q.15
// function charfrequency(str){
//     let feq={};
//     for(let ch of str){
//     if(feq[ch]){
//         feq[ch]++;
//     }
//     else{
//         feq[ch]=1;
//     }
//     }
//     return feq;
// }
// console.log(charfrequency("devasish"))

// Q.16
// function longestword(str){
//     let words=str.split(" ");
//     let longest=words[0];
//     for(let i of words){
//         if(i.length>longest.length){
//             longest=i;
//         }
//     }
//     return longest;
// }
// console.log(longestword("My name is Devasish"))

// Q.17
// function sumofdigits(num){
//    let sum=0;
//    while(num>0){
//     sum+=num%10;
//     num= Math.floor(num/10);
//    }
//    return sum;

// }
// console.log(sumofdigits(123456));

// Q.18
// function productofdigit(num){
//     let mul=1;
//     while(num>0){
//         mul*=num%10;
//         num=Math.floor(num/10);
//     }
//     return mul;
// }
// console.log(productofdigit(45));

// Q.19
// function armstrong(num){
//     let value=num;
//     let sum=0;
//     while(num>0){
//         let digit=num%10;
//         sum+=digit*digit*digit;
//         num=Math.floor(num/10);
//     }
//     return sum===value;
// }
// console.log(armstrong(153));

// const person={
//     name:"Devasish jha",
//     ad_no:138,
//     age:20, 
//      skills:{
//     skill1:"graphics",
//     skill2:"videoediting",
//     skill3:"html/css"
// }
// };
// person.height=5.9;
// delete person.ad_no
// console.log(person)
// let exis=("age" in person);
// let exist=("skill6" in person.skills);

// console.log(exis);
// console.log(exist);






// const person={};
// person.name="Devasish jha";
//     person.ad_no=138;
//     person.age=20;
//     person.height=5.9;
//      person.skills={
//     skill1:"graphics",
//     skill2:"videoediting",
//     skill3:"html/css"
//      };
//      console.log(person);


// let marks = {
//   maths: 80,
//   science: 90,
//   english: 70
// };
// let total=0;
// for(let subject in marks){
//     total+=marks[subject];
// }
// console.log(total)


// let marks = {
//   maths: 80,
//   science: 90,
//   english: 70
// };
// let highest = "";
// let highestMarks = 0;

// for (let subject in marks) {
//   if (marks[subject] > highestMarks) {
//     highestMarks = marks[subject];
//     highest = subject;
//   }
// }
// console.log(highestMarks)
// console.log(highest)

// let value={
//     a:2,
//     b:3,
// };
// for(let digit in value){
//     value[digit]=value[digit]*2;
// }
// console.log(value)


// let values={ 
//     a:1, 
//     b:{x:2, y:3}
//  };
//  for(let digit in values){
//     values[digit]=values[digit];
//  }
//  console.log(values)



// let car={
//     milage:20,
//     speed:60,
//     color:"red"
// };
// car.milage =60;
// car.speed=120;
// console.log(car);







// const bike={
//     name:"bullet",
//     print:function(){
//         console.log("the bike is " +this.name);
//     }
// };
// bike.print();





// const num=[3,5,7,8,36];
// console.log(num[1])



// const num=[23,45,2,3,4];
// let array=num.map((Number,index)=>{
//     console.log("number is:",Number,"index:",index)

// })
// console.log(array.length);



//  const num=[23,45,2,3,4];
//  for( let i=0;i<=num.length;i++){
//     console.log(num[i])
//  }


// const num=[1,2,3,4];
// let i=0;
// do{
//     console.log(num[i])
//     i++;
// }while(i<num.length);




























