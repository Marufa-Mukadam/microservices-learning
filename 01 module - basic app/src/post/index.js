const express = require ('express');
const bodyParser = require ('body-parser');
const {randomBytes} = require ('crypto');
const { default: axios } = require('axios');
const app = express();
const cors = require ('cors');
app.use (bodyParser.json ());
app.use (cors ());
const posts = {}

app.get ('/posts', (req, res) => {
   res.send (posts);
});

app.post ('/posts', async (req, res) => {
   const id = randomBytes (4).toString ('hex');
    const {title} = req.body;
    posts [id] = {id, title
    };
    
    await axios.post ('http://localhost:4005/events', {
        type: 'PostCreated',
        data: {id, title}
    });
    res.status (201).send (posts [id]);
}
);

app.post ('/events', (req, res) => {
    console.log ('Received Event', req.body.type);
});

app.listen (4000, () => {
    console.log (' app listening on port 4000!');
}
);