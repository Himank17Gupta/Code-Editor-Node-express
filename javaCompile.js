const {exec} = require('child_process');


function javaCompile(filename){


 exec('javac ' + filename +'.java' , function(err, stdout, stderr){
    if(err){
        console.log("err",err);
    }
    if(stderr){
        console.log("stderr",stderr);
    }
    else{
        exec('java ' +filename, function(err, stdout, stderr){
            if(err){
                console.log("err",err);
            }
            if(stderr){
                console.log("stderr",stderr);
            }
            else
            console.log(stdout);
    });
}
});

}

module.exports=javaCompile;