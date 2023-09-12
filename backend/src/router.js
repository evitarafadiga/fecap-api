const express = require('express');
const personController = require('./controller/personController');
const personMiddleware = require('./middleware/personMiddleware');

const router = express.Router();

router.get('/', (req, res) => res.status(200).send('routering!'));

router.get('/persons', personController.getAll);
router.post('/persons', personMiddleware.validateBody, personController.createPerson);

module.exports = router;