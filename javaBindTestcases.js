const SubmitCases=[0,2,3,5,15];
const runcase=5;
const JavaCompile=require('./javaCompile');
const fs =require('fs');

function JavaBindTestCase(res,filename,mode){

console.log('bind for Test Case fxn called') ;

if(mode=="run"){

 fs.readFile(filename +'.java', 'utf8', function (error, data) {
    if (error) throw error;
     var content= data.toString();
     let arr=content.split('@@@');
     content=arr[0]+ " " +runcase+" "+arr[1];
    
    fs.writeFile(filename+'.java', content, (err) => {
        if (err) throw err;
    
        console.log('code ready...start compilation!');
        JavaCompile(res,filename);
    });

    });

}
else if(mode=="submit"){

SubmitCases.forEach(testcase=>{

    fs.readFile(filename +'.java', 'utf8', function (error, data) {
        if (error) throw error;
         var content= data.toString();
         let arr=content.split('@@@');
         content=arr[0]+ " " +testcase+" "+arr[1];
        
        fs.writeFile(filename+'.java', content, (err) => {
            if (err) throw err;
        
            console.log('code ready...start compilation!');
            JavaCompile(res,filename);
        });
    
        });
});

}

}
module.exports=JavaBindTestCase;

