const mongoose = require('mongoose')
const CONSTANTS = require('../../utils/constants')

const todosSchema = mongoose.Schema({
    title: String,
    date: Date
})

module.exports = mongoose.model(CONSTANTS.DATABASE.COLLECTIONS.TODOS, todosSchema)