const express = require("express");
const app = express();
const server = require("http").Server(app);
const helmet = require("helmet");
const cors = require("cors");

const PORT = 8081;

// middleware
app.use(helmet());
app.use(express.json());
app.use(cors());

// render the static files
app.use("/assets", express.static(__dirname + "/assets"));
app.use(express.static(__dirname + "/build"));
app.use(express.static(__dirname + "/public"));

// Root - server serves index.html
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// start server at port
server.listen(PORT, () => {
    console.log(`\n==API Running on port ${PORT} ==\n`);
});
