const express = require("express");
const app = express();
const secret_key = "JWTSecurity";
const jwt = require("jsonwebtoken");

app.post("/login", (req, res) => {
  // fetch username & password from request object
  // verify the user with the credentials pass exists in DB (mongodb)
  // then generate to token as below
  jwt.sign(
    { name: "admin" },
    secret_key,
    { expiresIn: "2 Days" },
    (err, token) => {
      if (err) console.log(err);
      res.json({ token });
    },
  );
});

app.post("/verify", (req, res) => {
  let value = req.headers.authorization;
  let token = value.split(" ")[1];
  if (token) {
    jwt.verify(token, secret_key, (err, decodedToken) => {
      if (!err) {
        console.log(decodedToken);
        res.json({ msg: "Token Verified !" });
      } else {
        res.status(401).send({ msg: "Invalid Token" });
      }
    });
  } else {
    res.status(500).send("Token not found !");
  }
});

app.listen(4000, () => console.log("Server running @ port 4000 !"));
