const router = require('express').Router();
router.get('/', (req, res) => {
	res.json({
		status: 'API response here... cool!',
		message: 'sup!'
	})
});

module.exports = router;