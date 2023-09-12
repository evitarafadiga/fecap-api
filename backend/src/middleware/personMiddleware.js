const validateBody = (req, res, next) => {
    const { body } = req;

    if (body.name === undefined) {
        return res.status(400).json({ message: 'Não é possível criar pessoa sem um nome.'});        
    }
    if (body.name === '') {
        return res.status(400).json({ message: 'Não é possível criar pessoa com o nome vazio.'});        
    }
    if (body.email === undefined) {
        return res.status(400).json({ message: 'Não é possível criar pessoa sem um endereço de e-mail.'});        
    }
    if (body.email === '') {
        return res.status(400).json({ message: 'Não é possível criar pessoa com o endereço de e-mail vazio.'});        
    }
    if (body.password === undefined) {
        return res.status(400).json({ message: 'Não é possível criar pessoa sem uma senha.'});        
    }
    if (body.password === '') {
        return res.status(400).json({ message: 'Não é possível criar pessoa com a senha vazia.'});        
    }

    next();
};

module.exports = {
    validateBody
}