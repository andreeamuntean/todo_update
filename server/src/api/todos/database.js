const todos = require('../../database/models/todos')

module.exports = {
    getAll: () => todos.find({}).lean().exec(),
    getById: id => todos.findById(id).lean().exec(),
    update: (id, todo) => todos.findByIdAndUpdate(id, todo).lean().exec(),
    delete: id => todos.findByIdAndDelete(id).lean().exec(),
    create: todo => todos.create(todo)
}