const express = require("express");
const app = express();
const secret_key = "JWTSecurity";
const jwt = require("jsonwebtoken");

app.post("/login", (req, res) => {
  jwt.sign(
    { name: "admin" },
    secret_key,
    { expiresIn: "2 Days" },
    (er, token) => {
      res.json({ token });
    },
  );
});

app.listen(4000, () => console.log("Server running @ port 4000 !"));
