const person = require('../model/person');

const getAll = async (_req, res) => {
    const [persons]  = await person.getAll();
    return res.status(200).json(persons);
};

const createPerson = async (req, res) => {
    const createdPerson  = await person.createPerson(req.body);
    return res.status(201).json(createdPerson);
};

const deletePerson = async (req, res) => {
    const { id } = req.params;

    await person.deletePerson(id);
    return res.status(204).json();
};

const updatePerson = async (req, res) => {
    const { id } = req.params;

    await person.updatePerson(id, req.body);
    return res.status(204).json();
};

module.exports = {
    getAll,
    createPerson,
    deletePerson,
    updatePerson,
};