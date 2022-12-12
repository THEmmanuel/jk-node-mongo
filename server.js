const express = require('express');
const mongoose = require('mongoose');
const {MONGO_URI} = require('./config');

const app = express()

mongoose.connect(MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected!'))
.catch(err => console.log(err));

app.get('/', (req, res) => {
	res.send('hello from express')
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running at port ${PORT}`));