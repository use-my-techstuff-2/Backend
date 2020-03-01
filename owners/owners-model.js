const db = require('../database/dbconfig');

module.exports = {
    find,
    findById,
    findBy,
    add,
}

function find() {
    return db('owners').select('id', 'username')
}

function findById(id) {
    return db('owners')
        .where({ id })
        .first();
}

function findBy(filter) {
    return db('owners').where(filter).first()
}

async function add(owner) {
    const [id] = await db('owners').insert(owner)

    return findById(id)
}