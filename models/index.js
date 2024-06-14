const Module = require('./module');
const Lessons = require('./lessons');
const User = require('./user');

Module.hasMany(Lessons, {
    foreignKey: 'module_id',
    onDelete: 'CASCADE'
});

Lessons.belongsTo(Module, {
    foreignKey: 'module_id'
});

module.exports = { Module, Lessons, User };
