const express = require ('express');
const bodyParser = require ('body-parser');
const { default: axios } = require('axios');

const app = express();
app.use (bodyParser.json ()); // to parse incoming JSON data
let events = [];

app.post ('/events', (req, res) => {
    const event = req.body;
    events.push(event);
    axios.post ('http://localhost:4000/events', event).catch((err) => {
        console.error('Error sending event to Post service:', err);
    }); // Post service
    axios.post ('http://localhost:4001/events', event).catch((err) => {
        console.error('Error sending event to Comment service:', err);
    }); // Comment service
    axios.post ('http://localhost:4002/events', event).catch((err) => {
        console.error('Error sending event to Query service:', err);
    }); // Query service
    axios.post ('http://localhost:4003/events', event).catch((err) => {
        console.error('Error sending event to Moderation service:', err);
    }); // Moderation service

    res.send ({status: 'OK'});
});


app.get ('/events', (req, res) => {
    res.send (events);
});

app.listen (4005, () => {
    console.log (' app listening on port 4005!');
}
);