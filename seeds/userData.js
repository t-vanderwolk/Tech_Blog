const { User } = require('../models');

const userdata =
[
  {
    "username": "TayTay",
    "password": "password"
  },
  {
    "username": "Em",
    "password": "password"
  },
  {
    "username": "Ava",
    "password": "password"
  }
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;
