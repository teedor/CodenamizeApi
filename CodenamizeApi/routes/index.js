'use strict';
var codenamize = require('@codenamize/codenamize');
var express = require('express');
var router = express.Router();

/* GET home page. */

// Middleware to handle JSON bodies 
router.use(express.json());


router.get('/', function (req, res) {
    // Check if query parameter exists
    if (req.query.value) {
        // Respond with a JSON object containing the passed value
        res.json({ codenamizedValue: codenamize(req.query.value) });
    } else {
        // If no query parameter, respond with the default page
        res.status(400).json({ message: 'no value provided' });
    }
});

/* POST home page. */
router.post('/', function (req, res) {
    if (req.body.values) {
        // Map the input array to an array of codenamize results
        var output = req.body.values.map(value => ({ original: value, codename: codenamize(value) }));
        res.json(output);
    } else {
        res.status(400).send('Bad Request');
    }
});

module.exports = router;
