const express = require("express");
const app = express();
const port =3000;
app.get('/',(req,res)=>{
	res.send("hello world desde aqui XD");
})

app.listen(port,(error)=>{
	if(!error){
	console.log("project is running");
	}
});
