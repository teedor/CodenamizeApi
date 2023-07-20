'use strict';
var codenamize = require('@codenamize/codenamize');
var express = require('express');
var router = express.Router();

/* GET home page. */
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

module.exports = router;
