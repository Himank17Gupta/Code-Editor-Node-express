const {exec,execSync} = require('child_process');


function javaCompile(res,filename,mode){

if(mode=="run"){
 exec('javac ' + filename +'.java' , function(err, stdout, stderr){
    if(err){
        console.log("err",err);
        res.json({"compilation error":err});
    }
   else if(stderr){
        console.log("stderr",stderr);
        res.json({"compilation error":stderr});
    }
    else{
        exec('java ' +filename, function(err, stdout, stderr){
            if(err){
                console.log("err",err);
                res.json({"run time error":err});
            }
            else if(stderr){
                console.log("stderr",stderr);
                res.json({"run time error":stderr})
            }
            else{
            console.log(stdout);
            res.json({"results":stdout});
            }
        });
}
});
}
else if(mode="submit"){

    try{
    var javac=   execSync('javac ' + filename +'.java' );
    console.log(javac.toString());
                try{
                    var java=   execSync('java ' +filename);
                    console.log(java.toString());
                    return (java.toString());
                }
                catch{
                    console.log(error.toString());
                    return (error.toString());
                }

    }catch(error){
    console.log(error.toString());
    return (error.toString());
    }
    // ,
    // function(err, stdout, stderr){
    //     if(err){
    //         console.log("err",err);
    //         return({"compilation error":err});
    //     }
    //    else if(stderr){
    //         console.log("stderr",stderr);
    //         return({"compilation error":stderr});
    //     }
    //     else{
        //  var java=   execSync('java ' +filename);
        //  console.log(java.toString());
            // , function(err, stdout, stderr){
            //     if(err){
            //         console.log("err",err);
            //         return({"run time error":err});
            //     }
            //     else if(stderr){
            //         console.log("stderr",stderr);
            //         return({"run time error":stderr})
            //     }
            //     else{
            //     console.log(stdout);
            //     return({"results":stdout});
            //     }
            // });
    }
   // });



}



//}

module.exports=javaCompile;