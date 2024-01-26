const express = require('express');
const fs = require('fs');

const app = express();
const port = 8080;

app.get('/data', (req, res) => {
    const n = req.query.n;
    const m = req.query.m;

    if (!n) {
        res.status(400).send("Missing 'n' parameter");
        return;
    }

    const filePath = `./tmp/data/${n}.txt`;

    if (m !== undefined) {
        try {
            const lineNumber = parseInt(m);
            const lines = fs.readFileSync(filePath, 'utf-8').split('\n');

            if (1 <= lineNumber && lineNumber <= lines.length) {
                res.send(lines[lineNumber - 1]);
            } else {
                res.status(400).send(`Invalid line number 'm'. It should be between 1 and ${lines.length}`);
            }
        } catch (error) {
            res.status(400).send("Invalid 'm' parameter. It should be an integer");
        }
    } else {
        try {
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            res.send(fileContent);
        } catch (error) {
            res.status(404).send(`File ${n}.txt not found`);
        }
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
