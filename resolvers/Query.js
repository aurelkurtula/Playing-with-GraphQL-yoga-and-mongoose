const People = require('../database')
const queries = {
    Greeting: () => `Hello World`,
    People: () => People.find({}),
  };

module.exports = queries;
