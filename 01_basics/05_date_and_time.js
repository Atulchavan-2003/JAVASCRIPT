let createdDate = new Date();
// console.log(todayDate.toString());

// console.log(todayDate.toDateString());
// console.log(todayDate.toLocaleDateString());
// console.log(todayDate.getDay());

// console.log(todayDate.getFullYear());

// console.log(todayDate.toLocaleDateString('in-en'));

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(createdDate.getTime());

console.log(createdDate.toLocaleString('default',{
    weekday:"long",
    
}));


