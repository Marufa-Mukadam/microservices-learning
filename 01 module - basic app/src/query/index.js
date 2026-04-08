const express = require ('express');
const bodyParser = require ('body-parser');
const { default: axios } = require('axios');
const cors = require ('cors');

const app = express();
app.use (bodyParser.json ()); // to parse incoming JSON data
app.use (cors ());
const posts = {};


app.get ('/posts', (req, res) => {
  res.send (posts);
});

app.post ('/events', (req, res) => {

    const {type, data} = req.body;
    if (type === 'PostCreated') {
        const {id, title} = data;
        posts [id] = {id, title, comments: []};

    }

    if (type === 'CommentCreated') {
        const {id, content, postId, status} = data;
        const post = posts [postId];
        if (post) {
            post.comments = post.comments || [];
            post.comments.push ({id, content, status});
        }
     }

})

app.listen (4002, () => {
    console.log (' app listening on port 4002!');
}
);