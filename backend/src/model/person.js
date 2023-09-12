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

const deletePerson = async (id) => {

    const [removedPerson] = await c.execute('DELETE FROM persons WHERE id = ?', [id]);
    return removedPerson;
};

const updatePerson = async (id, person) => {

    const { name, email, password } = person;

    const [updatedPerson] = await c.execute('UPDATE persons SET name = ?, email = ?, password = ? WHERE id = ? ', [name, email, password, id]);
    return updatedPerson;
};

module.exports = {
    getAll,
    createPerson,
    deletePerson,
    updatePerson,
};