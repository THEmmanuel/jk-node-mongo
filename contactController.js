// const Contact = require('./contactModel');

// exports.index = (req, res) => {
// 	Contact.get((err, contacts) => {
// 		if (err) {
// 			res.json({
// 				status: 'error',
// 				message: err,
// 			});
// 		}

// 		res.json({
// 			status: 'success',
// 			message: 'retrieved contacts',
// 			data: contacts
// 		});
// 	});
// };

// exports.new = (req, res) => {
// 	const contact = new Contact();
// 	contact.name = req.body.name ? req.body.name : contact.name;
// 	contact.gender = req.body.gender;
// 	contact.email = req.body.email;
// 	contact.phone = req.body.phone;

// 	contact.save(err => {
// 		res.json({
// 			message: 'New contact created!',
// 			data: contact
// 		});
// 	});
// };

// exports.view = (req, res) => {
// 	Contact.findById(req.params.contact_id, (err, contact) => {
// 		if (err) {
// 			res.send(err);
// 			res.json({
// 				message: 'contact details loading...',
// 				data: contact
// 			});
// 		};
// 	});
// };

// exports.update = (req, res) => {
// 	Contact.findById(req.params.contact_id, (err, contact) => {
// 		if (err) {
// 			res.send(err);
// 		}

// 		contact.name = req.body.name ? req.body.name : contact.name;
// 		contact.gender = req.body.gender;
// 		contact.email = req.body.email;
// 		contact.phone = req.body.phone;

// 		contact.save(err => {
// 			if (err) {
// 				res.json(err);
// 			}

// 			res.json({
// 				message: 'contact info updated',
// 				data: contact
// 			});
// 		});
// 	});
// };

// exports.delete = (req, res) => {
// 	Contact.remove({
// 		_id: req.params.contact_id
// 	}, (err, contact) => {
// 		if (err) {
// 			res.send(err);
// 		}

// 		res.json({
// 			status: 'success',
// 			message: 'contact deleted'
// 		});
// 	});
// };






// contactController.js
// Import contact model
Contact = require('./contactModel');
// Handle index actions
exports.index = function (req, res) {
    Contact.get(function (err, contacts) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Contacts retrieved successfully",
            data: contacts
        });
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    var contact = new Contact();
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone = req.body.phone;
// save the contact and check for errors
    contact.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New contact created!',
            data: contact
        });
    });
};
// Handle view contact info
exports.view = function (req, res) {
    Contact.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);
        res.json({
            message: 'Contact details loading..',
            data: contact
        });
    });
};
// Handle update contact info
exports.update = function (req, res) {
Contact.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);
contact.name = req.body.name ? req.body.name : contact.name;
        contact.gender = req.body.gender;
        contact.email = req.body.email;
        contact.phone = req.body.phone;
// save the contact and check for errors
        contact.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Contact Info updated',
                data: contact
            });
        });
    });
};
// Handle delete contact
exports.delete = function (req, res) {
    Contact.remove({
        _id: req.params.contact_id
    }, function (err, contact) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Contact deleted'
        });
    });
};