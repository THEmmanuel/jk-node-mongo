const express = require('express');
const app = express()

app.get('/', (req, res) => {
	res.send('hello from express')
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running at port ${PORT}`))