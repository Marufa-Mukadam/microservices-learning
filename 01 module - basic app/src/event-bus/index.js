const express = require ('express');
const bodyParser = require ('body-parser');
const { default: axios } = require('axios');

const app = express();
app.use (bodyParser.json ()); // to parse incoming JSON data

app.post ('/events', (req, res) => {
    const event = req.body;
    axios.post ('http://localhost:4000/events', event); // Post service
    axios.post ('http://localhost:4001/events', event); // Comment service
     axios.post ('http://localhost:4002/events', event); // Query service
     axios.post ('http://localhost:4003/events', event); // Moderation service  

    res.send ({status: 'OK'});
});


app.listen (4005, () => {
    console.log (' app listening on port 4000!');
}
);