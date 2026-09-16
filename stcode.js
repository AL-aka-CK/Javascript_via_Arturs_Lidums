//1.1

const firstName = "Artūrs";
const lastName = "Līdums";
let age = 22;
const university = "VIA";
let yearOfStudy = "3rd";

console.log(firstName, lastName, age, university, yearOfStudy)

//1.2

let grade1 = 5;
let grade2 = 8;
let grade3 = 7;

const total = (grade1 + grade2 + grade3);
const avg = total / 3;

console.log(total, avg)

//1.3

let price = 80;
let quantity = 3;
let discount = 0.10;

const totalPrice = price * quantity;
const discountPrice = totalPrice * discount;
const finalPrice = totalPrice - discountPrice;

console.log(finalPrice) //216

//1.4

let a = 15;
let b = 4;

const remainder = a / b;
const raised = a ** b; //<-- AI help
const greater = a > b;
const equal = a == b;

console.log(remainder, raised, greater, equal)

//2.1

const avgGrade = 67;

if (avgGrade >=90) {
    console.log("Excellent")
}
if(avgGrade >=80 && avgGrade <=89) {
    console.log("Very Good")
}
if (avgGrade >=70 && avgGrade <=79) {
    console.log("Good")
}
if (avgGrade >=50 && avgGrade <=69) {
    console.log("Pass")
}
if (avgGrade <50) {
    console.log("Fail")
}
