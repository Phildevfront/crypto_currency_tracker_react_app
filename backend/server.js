import express from "express";
import mysql from "mysql";
import cors  from "cors";

const app = express();

const db = mysql.createPool({
	host: "localhost",
	user: "root",
	password: "root",
	database: "cryptodb",
	port: 8889,
})

app.use(express.json());
app.use(cors());

app.get("/home", (req,res) => {
	res.json("Hello is the Backend")
})

// const corsOptions ={
// 	origin:'http://localhost:8889',
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }


app.post("/signup", (req,res) => {
	const q = "INSERT INTO users (`name`,`email`,`password`) VALUES (?)";
	const values = [
		req.body.id,
		req.body.name,
		req.body.email,
		req.body.password,
	];
	console.log("values",values);

	db.query(q, [values], (err,data) => {
		if(err) return res.json("Error");
		return res.json("Register has been created successfully!");
	});
});

app.post('/', (req, res) => {
	const sql = "SELECT * FROM users WHERE  `email` = ? AND `password` = ?";
	db.query(sql, [req.body.email, req.body.passwprd], (err, data) => {
		if(err) {
			return res.json("Error");
		}
		if(data.length > 0) {
			return res.json('Success');
		} else {
			return res.json('Failed');
		}
	})
})

app.listen(8889, () => {
	console.log("Connected to Backend!");
})