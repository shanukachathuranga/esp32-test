const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Set up EJS as the template engine
app.set("view engine", "ejs");

// Serve static files (like CSS) from the 'public' folder
app.use(express.static("public"));

// Track the light state (on/off)
let lightState = "off";

// Serve the main page
app.get("/", (req, res) => {
    res.render("index", { lightState });
});

// Handle on/off button requests
app.post("/toggle", (req, res) => {
    lightState = lightState === "on" ? "off" : "on";
    console.log(`Light turned ${lightState}`);
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
