const myAge = 25;
let earlyYears = 2;//early years of the dog
earlyYears *= 10.5;
console.log(earlyYears);//testing if the multiplication works
let laterYears = myAge - 2; //years already computed in the operation
console.log(laterYears);
laterYears *= 4;//multying the number of dog years by the number of human years less 2
console.log(laterYears);
let myAgeInDogYears = earlyYears + laterYears;//the first 2 years plus the rest of my age after convertion corresponds to the dog years we're looking for
console.log(myAgeInDogYears);
const myName = 'Jennyfer';
console.log(myName.toLowerCase());
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
