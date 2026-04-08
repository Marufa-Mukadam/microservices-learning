const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/events', async (req, res) => {

    const { type, data } = req.body;
    if (type === 'CommentCreated') {
        const { id, content, postId } = data;
        const newStatus = content.includes('orange') ? 'rejected' : 'approved';
        await axios.post('http://localhost:4005/events', {
            type: 'CommentModerated',
            data: {
                id,
                content,
                postId,
                status: newStatus
            }
        }).catch((err) => {
            console.error('Error sending event to event bus:', err);
        });
    }
    res.send({ status: 'OK' });
})

app.listen(4003, () => {
    console.log('Moderation service listening on port 4003');
});