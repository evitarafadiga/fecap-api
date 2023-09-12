const c = require('./connection');

const getAll = async () => {

    const persons = await c.execute('SELECT * FROM persons');
    return persons;
};

const createPerson = async (person) => {

    const { name, email, password } = person;

    const dataHora = new Date(Date.now()).toUTCString();

    const [createdPerson] = await c.execute('INSERT INTO persons(name, email, password, created_at) VALUES (?,?,?,?)', [name, email, password, dataHora]);

    return { insertId: createdPerson.insertId };
};

module.exports = {
    getAll,
    createPerson
};