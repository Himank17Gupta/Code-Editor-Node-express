const {exec,execSync} = require('child_process');


function javaCompile(lang,res,filename,mode){


if(lang=="java"){

if(mode=="run"){
    var arr=[];
 exec('javac ' + filename +'.java' , function(err, stdout, stderr){
    if(err){
        console.log("err",err);
        arr.push(err.toString());
        res.send(arr);
    }
   else if(stderr){
        console.log("stderr",stderr);
        ans.push(stderr.toString());
        res.send(arr);
    }
    else{
        exec('java ' +filename, function(err, stdout, stderr){
            if(err){
                console.log("err",err);
                arr.push(err.toString());
                res.send(arr);
            }
            else if(stderr){
                console.log("stderr",stderr);
                arr.push(stderr.toString());
                res.send(arr);
            }
            else{
            console.log(stdout);
            arr.push(stdout.toString());
            res.send(arr);
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

}

}
else if(lang=="C++"){

    if(mode=="run"){
        var arr=[];
     exec("g++ -o " + filename + " "+filename+".cpp", function(err, stdout, stderr){
        if(err){
            console.log("err",err);
            arr.push(err.toString());
            res.send(arr);
        }
       else if(stderr){
            console.log("stderr",stderr);
            arr.push(stderr.toString());
            res.send(arr);
        }
        else{
            exec(filename +".exe", function(err, stdout, stderr){
                if(err){
                    console.log("err",err);
                    arr.push(err.toString());
                    res.send(arr);
                }
                else if(stderr){
                    console.log("stderr",stderr);
                    arr.push(stderr.toString());
                    res.send(arr);
                }
                else{
                console.log(stdout);
                arr.push(stdout.toString());
                res.send(arr);
                }
            });
    }
    });

}
    else if(mode="submit"){

        try{
        var javac=   execSync("g++ -o " + filename + " "+filename+".cpp" );
        console.log(javac.toString());
                    try{
                        var java= execSync(filename +".exe");
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
    
    }


}
}
module.exports=javaCompile;