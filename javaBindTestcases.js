const SubmitCases=[0,2,3,5,15];
const runcase=5;
const JavaCompile=require('./javaCompile');
const fs =require('fs');

function JavaBindTestCase(res,filename,mode){

console.log('bind for Test Case fxn called') ;
var result=[];
if(mode=="run"){

 fs.readFile(filename +'.java', 'utf8', function (error, data) {
    if (error) throw error;
     var content= data.toString();
     let arr=content.split('@@@');
     content=arr[0]+ " " +runcase+" "+arr[1];
    
    fs.writeFile(filename+'.java', content, (err) => {
        if (err) throw err;
    
        console.log('code ready...start compilation!');
     // result.push(
           JavaCompile(res,filename,mode);
     //  );
//      res.send(result);
    });

    });

}
else if(mode=="submit"){
var results=[];

SubmitCases.forEach(testCase=>{
console.log(filename+'.java');

var content=fs.readFileSync(filename+'.java','utf8');
content=content.toString();
let arr=content.split('@@@');
content=arr[0]+ " " +testCase+" "+arr[1];

//console.log(content);
//perfect uptill here

fs.writeFileSync(filename+"S.java",content);
//console.log("after writeFileSync");

let r= JavaCompile(res,filename+"S",mode) ;
//console.log('r',r);
results.push(r);

//console.log(results.length);

});

if(results.length==SubmitCases.length){
    res.send(results);
}
}

}
module.exports=JavaBindTestCase;






// SubmitCases.forEach(testcase=>{
//     console.log(testcase);
//     fs.readFileSync(filename +'.java', 'utf8',function (error, data) {
//         if (error) throw error;

//          var content= data.toString();
//          let arr=content.split('@@@');
//          content=arr[0]+ " " +testcase+" "+arr[1];
        
//         fs.writeFileSync(filename+"S"+'.java', content, (err) => {
//             if (err) throw err;
//             console.log('code ready...start compilation!');

//            let r=  JavaCompile(res,filename+"S",mode,results) ;
//            results.push(r);
//             if(results.length==SubmitCases.length){
//                console.log(results.length);
//                res.send(results);
//         }
//         });
    
//         });
// });
// console.log('after submit cases');

