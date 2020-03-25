const fs =require('fs');
const bindTestCase=require('./javaBindTestcases');

function prepareCodeForJavaTC(res,codebyclient){

console.log('prepare for Test Case fxn called') ;

var content="xyz";
 fs.readFile('CodeSignature.java', 'utf8', function (error, data) {
    if (error) throw error;
     content= data.toString();
     let arr=content.split('$$$');
     content=arr[0]+ " " +codebyclient+" "+arr[1];
    
    fs.writeFile('JavaCodetoCompile.java', content, (err) => {
        if (err) throw err;
    
        console.log('code ready...start compilation!');
        res.send('code ready...start compilation!');
        bindTestCase('JavaCodetoCompile') ;
    });

    });

}
module.exports=prepareCodeForJavaTC;