const express = require("express");
const { exec } = require("child_process");
const app = express();
const PORT = 3000;

app.get("/search", (req, res) => {
    let word = req.query.word;

    exec(`backend.exe ${word}`, (error, stdout) => {
        res.send(stdout.trim());
    });
});

app.listen(PORT, () => console.log("Server running on port 3000"));
