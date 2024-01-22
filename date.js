let myDate = new Date();
// console.log(myDate); // Output: 2024-01-21T19:20:47.684Z
// console.log(typeof myDate); // object

// topic: toString and toLocalString
// console.log(myDate.toString()); // Output: Mon Jan 22 2024 01:22:40 GMT+0600 (Bangladesh Standard Time)
// console.log(myDate.toLocaleString()); // Output: 1/22/2024, 1:25:30 AM

//topic: toDateString and toLocalDateString
// console.log(myDate.toDateString()); // Output: Mon Jan 22 2024
// console.log(myDate.toLocaleDateString()); //Output: 1/22/2024

// topic: toTimeString and toLocalTimeString 
// console.log(myDate.toTimeString()); // Output: 01:29:56 GMT+0600 (Bangladesh Standard Time)
// console.log(myDate.toLocaleTimeString()); // Output: 1:29:56 AM

//topic: toISOString
// console.log(myDate.toISOString()); // Output: 2024-01-21T19:23:43.438Z

// topic: toJSON
// console.log(myDate.toJSON()); // Output: 2024-01-21T19:28:46.573Z


/**imp: Creating Date with year,month,date */
// let myCreatedDate = new Date(2024,0,1); // date with year, month(index), date
// let myCreatedDate = new Date(2024,0,1, 5, 53, 55); // date with year, month,date,hour,minute,second
// let myCreatedDate = new Date("2024-01-01"); // yyyy-mm-dd
let myCreatedDate = new Date("01-02-2024"); // mm-dd-yyyy
// console.log(myCreatedDate.toLocaleString());


// topic: TimeStamp
let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());


// converting milliseconds to seconds
// console.log(Math.floor(Date.now()/1000));


// more methods for hour,minutes,seconds,month,date,day,year
let newDate = new Date();
// console.log(newDate.getDate());
// console.log(newDate.getDay()); // monday = 1
// console.log(newDate.getFullYear());
// console.log(newDate.getMonth() + 1); // month index
// console.log(newDate.getHours(), newDate.getMinutes(), newDate.getSeconds());

// console.log(
//     `The year is ${newDate.getFullYear()} and the date is ${newDate.getDate()}th` 
// );


newDate.toLocaleString('default',{
    weekday: "long"
})
