## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.





const fs = require('fs');

const content = 'hello';   //content to be written

//used fs module and writeFile function to write in to file.txt using callback function 
fs.writeFile('file.txt', content,'utf8',  function (err){
    if(err){
        console.error(err);
        return;
    }
    console.log('content written successfully');
});

fs.readFile('file.txt', 'utf8', function (err,data){
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
});