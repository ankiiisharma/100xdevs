const currentDate = new Date();

console.log(currentDate.getDate());
console.log(currentDate.getFullYear());

console.log("date: " + currentDate.getDate() + " & year: " + currentDate.getFullYear());

// TIME TAKEN FOR EXECUTION

function Calculate(){
    let a;
    for(let i=0;i<100000;i++){
        a=a+i;
    }
    return a;
}

const beforeDate = new Date();
const beforetime = beforeDate.getTime();
 Calculate();
 const AfterDate = new Date();
 const AfterTime = beforeDate.getTime();

 console.log(AfterDate-beforeDate);