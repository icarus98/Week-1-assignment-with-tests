## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```


const fs = require('fs');
fs.readFile('file.txt', 'utf8', (err,content)=>{
    if(err){
        console.error(err);
        return;
    }
    const str = content.replace(/\s+/g, ' ').trim(); 
    fs.writeFile('file.txt', str, 'utf8', (err)=>{
        if(err){
            console.error(err);
            return;
        }
        console.log("written successfully");
    });
});
function readFromFile(){
    fs.readFile('file.txt', 'utf8', (err,content1)=>{
    if(err){
        console.error(err);
            return;
        }
        console.log(content1);
    });
}
setTimeout(readFromFile,2000);