const { User } = require('../models');

const userdata =
[
  {
    "userId" : 1,
    "username": "TayTay",
    "password": "password"
  },
  {
    "userId": 2,
    "username": "Em",
    "password": "password"
  },
  {
    "userId": 3,
    "username": "Ava",
    "password": "password"
  }
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;
