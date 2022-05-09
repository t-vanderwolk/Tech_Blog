const { Post } = require('../models');

const postdata =
[
  {
    "userId": 1,
    "username": "TayTay",
    "postTitle": "Bootcamp",
    "postContent": "Im so ready to be done with this course!"
    
  },
  {
    "userId": 2,
    "username": "Em",
    "postTitle": "REMINDERS",
    "postContent": "1.Eat real food. 2.Drink water. 3.Walk Brinx. 4.Code"
 
  },
  {
    "userId":3,
    "username": "Ava",
    "postTitle": "New Mom Life",
    "postContent": "My baby doesnt even appriciate me!"
   
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;