import express from 'express'
import connectdb from './lib/db.js';
import movieRouter from './route/movie.routes.js'
const port = 3000;


const app = express();

connectdb();
//create a server to handle request and response

//lets make a CRUD operation for the movie database
app.use('/movies',movieRouter)

//create a listener to lesten the response
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})