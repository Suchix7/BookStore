import express from "express";
import {PORT} from "./config.js";

const app=express();

app.get('/',(request,response)=>{
    return response.status(234).send('Welcome to this bookstore.');
});

app.listen(PORT,()=>{
    console.log(`App is listening to the port: ${PORT}`);
});