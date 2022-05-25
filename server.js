const express=require("express")   //this is require for every application for importing any package

const app=express()   //this is responsible for creating further route and middleware and server

const port=8090

//create middleware
const middlewareA=(req,res,next)=>{
    console.log('first middleware');
    next()
}
const middlewareB=(req,res,next)=>{
    console.log('middlewaresecond');
    next()                                    //the next is use to call the next middleware
}

app.use(middlewareA)  //this avilable for all route


//creating the route
app.get("/",(req,res)=>{
    res.send("hello middleware")
})

app.get("/home",middlewareB,(req,res)=>{   //the middlewareB avilabe for home 
    res.send('home page')
})


//listen the port

app.listen(port,()=>{
    console.log(`server run at the port ${port}`);
})   