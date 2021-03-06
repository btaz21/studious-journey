const express = require('express');
const router = express.Router();
const Books = require('../models/books.js');

router.post('/', (req, res) => {
    Books.create(req.body, (err, createdBook) => {
        res.json(createdBook);
    });
})


router.get('/', (req, res) => {
    Books.find({}, (err, allBooks) => {
        res.json(allBooks);
    });
});

router.delete('/:id', (req, res) => {
    Books.findByIdAndRemove(req.params.id, (err, deletedBook) => {
        res.json(deletedBook);
    });
});

router.put('/:id', (req, res) => {
    Books.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedBook) => {
        res.json(updatedBook);
    });
});

module.exports = router;
