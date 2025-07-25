// PATH,MOMENT,FS...
let path=require("path");
let moment=require("moment");
let fs=require("fs");

console.log(path.dirname(__filename));
console.log(path.extname("myfile.txt"));

console.log(moment().format("DD-MM-YYYY HH:MM"));
console.log(moment().format("dddd"));
console.log(moment().add(7,"days").format("DD-MM-YYYY HH:MM"));
console.log(moment());

let mydata="hello git";
fs.writeFile("test.txt",mydata,function(err){
    if(err) throw err;
    console.log("file saved successfully")
});

fs.readFile("test.txt","utf-8",function(err,data){
    if (err) throw err;
    console.log(data);
});