const express = require('express');
const app = express();

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));

const path = require('path');
const mime = require('mime-types');
const multer = require('multer');
const { maxHeaderSize } = require('http');

const fileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: fileStorage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/jpg' ||
      file.mimetype == 'image/jpeg'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      cb(new Error('Upload only image format.'));
    }
  },
});

app.post('/uploads', upload.single('myFile'), (req, res) => {
  console.log(req.file);

  req.file.mimetype = mime.lookup(req.file.originalname);

  res.sendFile(path.join(__dirname, 'file-uploaded.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.post('/process_post', urlencodedParser, function (req, res) {
  response = {
    Name: req.body.Name,
    Subject: req.body.Subject,
    Message: req.body.Message,
    Email: req.body.Email,
  };

  console.log(response);
  res.end(JSON.stringify(response));
});

app.all('*', (req, res) => {
  res.status(404).sendFile(__dirname + '/' + 'error.html');
});
