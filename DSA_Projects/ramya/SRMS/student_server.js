const express = require("express");
const { exec } = require("child_process");
const app = express();
const PORT = 3001;  // different port from trie project

app.get("/searchStudent", (req, res) => {
    let name = req.query.name;
    let roll = req.query.roll;

    exec(`student_backend.exe "${name}" "${roll}"`, (err, stdout) => {
        if (err) return res.send("ERROR");
        res.send(stdout);
    });
});

app.listen(PORT, () => {
    console.log("Student Server running on port 3001");
});
