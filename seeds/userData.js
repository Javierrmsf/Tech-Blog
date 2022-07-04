const { User } = require('../models');

const userdata =
[
  {
    "username": "John",
    "password": "test12667"
  },
  {
    "username": "William",
    "password": "test12667"
  },
  {
    "username": "Alex",
    "password": "test12667"
  }
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;

