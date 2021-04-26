import express from "express";
const port = 3000;
const app = express();

app.get("/", (req, res) => {
	res.send("Welcome to the jungle!");
});


app.listen(port, () => {
	console.log(`App is listening at http://localhost:${port}`);
    
});