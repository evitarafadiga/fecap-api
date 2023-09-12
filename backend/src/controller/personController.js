const person = require('../model/person');

const getAll = async (_req, res) => {

    const persons  = await person.getAll();
    return res.status(200).json(person);
};

const createPerson = async (req, res) => {
    const createdPerson  = await person.createPerson(req.body);
    return res.status(201).json(createdPerson);
};

module.exports = {
    getAll,
    createPerson
};