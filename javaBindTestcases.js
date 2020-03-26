const SubmitCases=[0,2,3,5,15];
const runcase=5;
const JavaCompile=require('./javaCompile');
const fs =require('fs');

function JavaBindTestCase(lang,res,filename,mode){

console.log('bind for Test Case fxn called') ;

if(lang=="java"){

    if(mode=="run"){

    fs.readFile(filename +'.java', 'utf8', function (error, data) {
    if (error) throw error;
    var content= data.toString();
    let arr=content.split('@@@');
    content=arr[0]+ " " +runcase+" "+arr[1];
    
    fs.writeFile(filename+'.java', content, (err) => {
    if (err) throw err;
    
    console.log('code ready...start compilation!');
    JavaCompile(lang,res,filename,mode);
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


fs.writeFileSync(filename+"S.java",content);
let r= JavaCompile(lang,res,filename+"S",mode) ;
results.push(r);

});

if(results.length==SubmitCases.length){ res.send(results);}
}

}

if(lang=="C++"){
    if(mode=="run"){

        fs.readFile(filename +'.cpp', 'utf8', function (error, data) {
           if (error) throw error;
            var content= data.toString();
            let arr=content.split('@@@');
            content=arr[0]+ " " +runcase+" "+arr[1];
           
           fs.writeFile(filename+'.cpp', content, (err) => {
               if (err) throw err;
           
               console.log('code ready...start compilation!');
                  JavaCompile(lang,res,filename,mode);
           });
           });
       
       }

       else if(mode=="submit"){
        var results=[];
        
        SubmitCases.forEach(testCase=>{
        
        var content=fs.readFileSync(filename+'.cpp','utf8');
        content=content.toString();
        let arr=content.split('@@@');
        content=arr[0]+ " " +testCase+" "+arr[1];
        
        fs.writeFileSync(filename+"S.cpp",content);
        let r= JavaCompile(lang,res,filename+"S",mode) ;
        results.push(r);
        
        });
        
        if(results.length==SubmitCases.length){ res.send(results);}
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

