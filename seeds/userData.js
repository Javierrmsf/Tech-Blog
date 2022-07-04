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
  },
  {
    "username": "JohnLennon",
    "password": "test12667"
  },
  {
    "username": "Paul",
    "password": "test12667"
  },
  {
    "username": "George",
    "password": "test12667"
  },
  {
    "username": "Ringo",
    "password": "test12667"
  }
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;

