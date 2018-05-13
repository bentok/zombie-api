const express = require('express');
const router = express.Router();
const User = require('./user');

const UserModel = require('./user.model');

router.post('/user', (req, res, next) => {
  const user = new UserModel();
  Object.assign(user, req.body);
  user.save((err) => {
      if (err) {
          res.send(err);
      }
      res.json({ message: 'User created!' });
  });
});
router.get('/user', (req, res, next) => {
  UserModel.find((err, user) => {
    if (err) {
        res.send(err);
    }
    res.json(user);
  });
});
module.exports = router;
