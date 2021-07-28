var fs= require("fs");
var data = fs.readFileSync('demo.txt');
console.log("1st Synchronous data executed : " + data.toString());

fs.readFile('demo2.txt', function(err,data)
{
    if(err)
    {
        console.log(err);
    } else {
    console.log("Asynchronous data executed : " + data.toString());
    }
});

fs.readFileSync('demo.txt');
console.log("2nd Synchronous data executed : " + data.toString());
