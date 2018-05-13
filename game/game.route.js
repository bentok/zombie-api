const express = require('express');
const router = express.Router();
const Game = require('./game');

/* GET users listing. */
router.get('/game', (req, res, next) => {
  const game = new Game();
  res.send(game);
});

module.exports = router;
