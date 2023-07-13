Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)




 
 function counter1(){
    let counter = new Date();
    console.clear();
    if(counter.getHours()>12){
        let hours=counter.getHours() - 12;
        console.log(hours+ ':' + counter.getMinutes() + ':' + counter.getSeconds() + ' PM');
    }
    else console.log(counter.getHours() + ':' + counter.getMinutes() + ':' + counter.getSeconds() + ' AM');
    // counter = counter + 1;
    // if(counter<10){
    //     console.log(counter);
    //     counter = counter + 1;
    // }
}
setInterval(counter1,1000);
