const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {
	MONGO_URI
} = require('./config');
const postsRoutes = require('./routes/posts_controller');
const apiRoutes = require('./api-routes');

const app = express();
app.use(bodyParser.urlencoded({
	extended: true
}));

// app.use(bodyParser.json());
app.use(express.json());

mongoose.connect(MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('MongoDB connected!'))
	.catch(err => console.log(err));

app.use('/posts', postsRoutes);
app.use('/api', apiRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running at port ${PORT}`));