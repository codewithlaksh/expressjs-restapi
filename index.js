const express = require('express');
const cors = require('cors');
const connectToMongo = require('./db');
const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || '0.0.0.0';

connectToMongo();

app.use(cors());
app.use(express.json());
app.use('/api/blogs', require('./routes/blogs'));
app.use((req, res, next) => {
    res.status(404).json({ status: 404, message: `Route not found! Please go to api/blogs.` });
})


app.listen(port, host, async () => {
    console.log(`Express api app listening on http://localhost:${port}`);
})