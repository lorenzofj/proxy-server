const express = require('express');
const app = express();
const path = require('path');
const formidable = require('formidable');
const fs = require('fs');

const uploadFolder = path.join(__dirname, 'uploaded files', 'files');

app.use('public', express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.post('/fileupload', (req, res) => {

    const form = formidable.IncomingForm();
    console.log(form);
    form.parse(req, (error, fields, files) => {
        let oldPath = form.uploadDir;
        let newPath = path.join(__dirname, 'public') + '/' + files.profilePic.name;
        let rawData = fs.readFileSync(oldPath);

        fs.writeFile(newPath, rawData, (error) => {
            if(error) console.log(error);
            return res.send('File uploaded!')
        });
    });

});

app.listen(8080);