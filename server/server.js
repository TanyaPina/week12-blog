const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const db = require('./db/db-connection.js');


const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route "/""
app.get('/', (req, res) => {
    res.json({ message: 'Hola, from My template ExpressJS with React-Vite' });
});

// create the get request for students in the endpoint '/api/students'
app.get('/api/posts', async (req, res) => {
    try {
        const { rows: posts } = await db.query('SELECT * FROM posts');
        res.send(posts);
    } catch (e) {
        return res.status(400).json({ e });
    }
});

// create the POST request
app.post('/api/posts', async (req, res) => {
    try {
        const newPosts = {
            title: req.body.title,
            body: req.body.body,
            img: req.body.img,
            is_starred: req.body.is_starred
        };
        //console.log([newStudent.firstname, newStudent.lastname, newStudent.iscurrent]);
        const result = await db.query(
            'INSERT INTO posts(title, body, img, is_current) VALUES($1, $2, $3, $4) RETURNING *',
            [newPosts.title, newPosts.body, newPosts.img, newPosts.is_current],
        );
        console.log(result.rows[0]);
        res.json(result.rows[0]);

    } catch (e) {
        console.log(e);
        return res.status(400).json({ e });
    }

});

// delete request for students
app.delete('/api/students/:postID', async (req, res) => {
    try {
        const studentId = req.params.studentId;
        await db.query('DELETE FROM posts WHERE id=$1', [postId]);
        console.log("From the delete request-url", postId);
        res.status(200).end();
    } catch (e) {
        console.log(e);
        return res.status(400).json({ e });

    }
});

//A put request - Update a student 
app.put('/api/posts/:postId', async (req, res) =>{
    //console.log(req.params);
    //This will be the id that I want to find in the DB - the student to be updated
    const postId = req.params.postId
    const updatedPost = { id: req.body.id, title: req.body.title, body: req.body.body, img: req.body.img, is_starred: req.body.is_starred}
    console.log("In the server from the url - the post id", postId);
    console.log("In the server, from the react - the post to be edited", updatedPost);
    // UPDATE students SET lastname = "something" WHERE id="16";
    const query = `UPDATE posts SET title=$1, body=$2, img=$3 is_starred=$4 WHERE id=${postId} RETURNING *`;
    const values = [updatedPost.title, updatedPost.body, updatedPost.img, updatedPost.is_starred];
    try {
      const updated = await db.query(query, values);
      console.log(updated.rows[0]);
      res.send(updated.rows[0]);
  
    }catch(e){
      console.log(e);
      return res.status(400).json({e})
    }
  })

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Hola, Server listening on ${PORT}`);
});