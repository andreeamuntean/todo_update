const database = require('./database')

module.exports = {
    getAll: () => database.getAll(),
    create: todo => {
        todo.date = new Date()
        return database.create(todo)
    },
    getById: id => database.getById(id),
    delete: id => database.delete(id),
    update: (id, todo) => database.update(id, todo)
}