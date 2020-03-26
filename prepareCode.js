const fs =require('fs');
const bindTestCase=require('./javaBindTestcases');

function prepareCodeForJavaTC(lang,res,codebyclient,mode){

console.log(lang,'prepare for Test Case fxn called') ;

if(lang=="java"){

var content="";
if(mode=="run"){
fs.readFile('CodeSignature.java', 'utf8', function (error, data) {
    if (error) throw error;
     content= data.toString();
     let arr=content.split('$$$');
     content=arr[0]+ " " +codebyclient+" "+arr[1];
    
    fs.writeFile('JavaCodetoCompile.java', content, (err) => {
        if (err) throw err;
    
        console.log('code ready...binding testcases!');
        bindTestCase(lang,res,'JavaCodetoCompile',mode) ;
    });

    });

}
else if(mode=="submit"){
    fs.readFile('CodeSignatureS.java', 'utf8', function (error, data) {
        if (error) throw error;
         content= data.toString();
         let arr=content.split('$$$');
         content=arr[0]+ " " +codebyclient+" "+arr[1];
        
        fs.writeFile('JavaCodetoCompile.java', content, (err) => {
            if (err) throw err;
        
            console.log('code ready...binding testcases!');
            bindTestCase(lang,res,'JavaCodetoCompile',mode) ;
        });
    
        });

}

}
   else if(lang=="C++"){

        var content="";

                fs.readFile('CodeSignature.cpp', 'utf8', function (error, data) {
                    if (error) throw error;
                     content= data.toString();
                     let arr=content.split('$$$');
                     content=arr[0]+ " " +codebyclient+" "+arr[1];
                    
                    fs.writeFile('CPPCodetoCompile.cpp', content, (err) => {
                        if (err) throw err;
                    
                        console.log('code ready...binding testcases!');
                        bindTestCase(lang,res,'CPPCodetoCompile',mode) ;
                    });
                
                    });            

    }

    else {
       var result=[" We are Working on languages other than Java and C++, meanwhile do choose one from C++ or Java"];
        res.send(result);
    }

}
module.exports=prepareCodeForJavaTC;