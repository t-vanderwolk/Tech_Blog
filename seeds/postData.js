const { Post } = require('../models');

const postdata =
[
  {
    "postTitle": "Bootcamp",
    "postContent": "Im so ready to be done with this course!",
    "userId": 1
  },
  {
    "postTitle": "REMINDERS",
    "postContent": "1.Eat real food. 2.Drink water. 3.Walk Brinx. 4.Code",
    "userId": 2
  },
  {
    "postTitle": "New Mom Life",
    "postContent": "My baby doesnt even appriciate me!",
    "userId": 3
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;