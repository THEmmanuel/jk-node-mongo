const router = require('express').Router();
const contactController = require('./contactController');

router.get('/', (req, res) => {
	res.json({
		status: 'API response here... cool!',
		message: 'sup!'
	})
});

router.route('./contacts')
	.get(contactController.index)
	.post(contactController.new);


router.route('/contacts/:contact_id')
	.get(contactController.view)
	.patch(contactController.update)
	.put(contactController.update)
	.delete(contactController.delete)
	
module.exports = router;