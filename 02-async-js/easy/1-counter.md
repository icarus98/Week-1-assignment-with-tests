## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second




// let counter = 1;
// function counter1(){
//     console.clear();
//     // console.log(counter);
//     // counter = counter + 1;
//     if(counter<10){
//         console.log(counter);
//         counter = counter + 1;
//     }
// }
// setInterval(counter1,1000)  //setInterval will run indefinitely if not closed manual we can use clearInterval function
let counter = 0;
function counter1(){
    if(counter < 10){
        console.clear();
        counter += 1;
        console.log(counter);
        setTimeout(counter1,1000);
    }
}
counter1();