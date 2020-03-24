var express=require('express');
var bodyParser = require('body-parser')

var app=express();
const port=process.env.PORT||5000;
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Methods","*");
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Request-Headers", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Range , Authorization");
   res.header("Access-Control-Expose-Headers","*");           
   next();
  });

app.get('/',(req,res)=>{
                        res.send('Hello from the back of online compiler!');
                    });

//app.use('/user',require('./controllers/user'));

app.use((req,res)=>res.send('invalid request configured'));

app.listen(port,()=>console.log('loading server on port ',port));