const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Endpoint to control the ESP32 light
app.get("/control", (req, res) => {
    const { state } = req.query; // 'on' or 'off'
    if (state === "on" || state === "off") {
        // Here, you'll send a command to the ESP32
        console.log(`Turning light ${state}`);
        res.send(`Light turned ${state}`);
    } else {
        res.status(400).send("Invalid state. Use 'on' or 'off'.");
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
