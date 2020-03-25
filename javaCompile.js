const {exec} = require('child_process');


function javaCompile(res,filename){


 exec('javac ' + filename +'.java' , function(err, stdout, stderr){
    if(err){
        console.log("err",err);
        res.send(err);
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

module.exports=javaCompile;