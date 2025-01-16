const express = require('express');
const { getAllRating, ratingSubmit, updateRating, deleteRating, getRating } = require('../controller/ratingController');
const router = express.Router();

router.get('/', getAllRating);
router.get('/:id', getRating);
router.post('/submit', ratingSubmit);
router.put('/update/:id', updateRating);
router.delete('/delete/:id', deleteRating);

module.exports = router;