const fs =require('fs');
const bindTestCase=require('./javaBindTestcases');

function prepareCodeForJavaTC(res,codebyclient,mode){

console.log('prepare for Test Case fxn called') ;
var content="xyz";
if(mode=="run"){
fs.readFile('CodeSignature.java', 'utf8', function (error, data) {
    if (error) throw error;
     content= data.toString();
     let arr=content.split('$$$');
     content=arr[0]+ " " +codebyclient+" "+arr[1];
    
    fs.writeFile('JavaCodetoCompile.java', content, (err) => {
        if (err) throw err;
    
        console.log('code ready...binding testcases!');
  //      res.send('code ready...start compilation!');
        bindTestCase(res,'JavaCodetoCompile',mode) ;
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
      //      res.send('code ready...start compilation!');
            bindTestCase(res,'JavaCodetoCompile',mode) ;
        });
    
        });

}


}
module.exports=prepareCodeForJavaTC;