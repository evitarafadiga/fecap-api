const express = require('express');
const personController = require('./controller/personController');
const personMiddleware = require('./middleware/personMiddleware');

const router = express.Router();

router.get('/', (req, res) => res.status(200).send('routering!'));

router.get('/persons', personController.getAll);
router.post('/login', personController.login);
router.post('/persons', personMiddleware.validateBody, personMiddleware.validatePassword, personMiddleware.validateSpecial, personController.createPerson);
router.delete('/persons/:id', personController.deletePerson);
router.put('/persons/:id', personMiddleware.validateBody, personController.updatePerson);

module.exports = router;