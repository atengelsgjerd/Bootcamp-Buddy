const {Module} = require('../models');

const moduleData = [
    {
        module_title: 'HTML'
    },
    {
        module_title: 'CSS'
    },
    {
        module_title: 'JavaScript'
    },
    {
        module_title: 'Web APIs'
    },
    {
        module_title: 'Third-Party APIs'
    },
];

const seedModule = () => Module.bulkCreate(moduleData);

module.exports = seedModule;