function handlesum(a = 2 , b = 5) {
    console.log(arguments);
    let sum = a + b;
    return [];
}
function displaymenu() {
    console.log("list do an");
}
let sum = handlesum(10,5);
console.log(sum);

console.log(displaymenu());

let sum_v1 = handlesum(10,5);
let sum_v2 = handlesum();

console.log(sum_v1);
console.log(sum_v2);

// arrow function


const handlesumv2 = (a,b) =>{
    return a + b;
};

handlename();