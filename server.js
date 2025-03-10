

const express = require('express')
const app = express()
const port = 3000

app.get('/movie/:movieName', (req, res) => {
  const movieName = req.params.movieName;

const movieData ={
id:"movieoneid" , titie:movieName , rating:"9.9/10" };

res.json(movieData);
})

app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})

