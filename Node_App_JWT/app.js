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

app.get("/courses", (req, res) => {
  const courses = [
    {
      id: "1",
      title: "React Native Basics",
      instructor: "Jane Doe",
      duration: "4 weeks",
      likes: 200,
      price: 3000,
      rating: 4,
      image:
        "https://4409803.fs1.hubspotusercontent-na1.net/hubfs/4409803/react-native%20%281%29.png",
      description:
        "Learn the fundamentals of React Native, including components, state management, and navigation.React Native is an open-source UI software framework developed by Meta Platforms. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities. Wikipedia",
    },
    {
      id: "2",
      title: "Advanced React Native",
      instructor: "John Smith",
      duration: "6 weeks",
      likes: 400,
      price: 5000,
      rating: 5,
      image:
        "https://www.inovex.de/wp-content/uploads/2018/03/react-native-1500x880.png",
      description:
        "Dive deeper into React Native with advanced topics like performance optimization, native modules, and testing.",
    },
    {
      id: "3",
      title: "JavaScript Fundamentals",
      instructor: "Sarah Lee",
      duration: "3 weeks",
      likes: 600,
      price: 6000,
      rating: 4,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/640px-Unofficial_JavaScript_logo_2.svg.png",
      description:
        "Master the core concepts of JavaScript, including ES6 features, asynchronous programming, and functional programming.",
    },
    {
      id: "4",
      title: "Mobile UI/UX Design",
      instructor: "Mike Johnson",
      duration: "2 weeks",
      likes: 800,
      price: 4000,
      rating: 3,
      image:
        "https://api.reliasoftware.com/uploads/ux_ui_design_322afd6292.webp",
      description:
        "Learn the principles of mobile UI/UX design, including user research, wireframing, and prototyping.",
    },
    {
      id: "5",
      title: "State Management in RN",
      instructor: "Emily Davis",
      duration: "5 weeks",
      likes: 100,
      price: 5000,
      rating: 4,
      image:
        "https://cdn.zapier.com/storage/blog/4ec8fc7dc3a75758a3913bab9e5a4fd8_2.500x278.png",
      description:
        "Explore state management solutions in React Native, including Context API, Redux, and MobX.",
    },
  ];
  return res.json(courses);
});
app.listen(4000, () => console.log("Server running @ port 4000 !"));
