const path = require('path');

const express = require('express');
const app = express();
const PORT =  3000;

app.use(express.static(path.join(__dirname, '../dist')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

app.use((err, req, res, next) => {
  console.error(err);
  return res.status(500).send('Error', { error : err });
});


app.listen(PORT, () => console.log('Listening on port ' + PORT));