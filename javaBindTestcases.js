//for run (single test case);
const JavaCompile=require('./javaCompile');
const fs =require('fs');

function JavaBindTestCase(filename){

console.log('bind for Test Case fxn called') ;

 fs.readFile(filename +'.java', 'utf8', function (error, data) {
    if (error) throw error;
     var content= data.toString();
     let arr=content.split('@@@');
     content=arr[0]+ " " +5+" "+arr[1];
    
    fs.writeFile(filename+'.java', content, (err) => {
        if (err) throw err;
    
        console.log('code ready...start compilation!');
        res.send('code ready...start compilation!');
        JavaCompile(filename);
    });

    });

}
module.exports=JavaBindTestCase;

