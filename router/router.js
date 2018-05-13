const logger = require('../logger/logger');
const router = require('express').Router();

router.use((req, res, next) => {
  logger.info(`Received request at ${req.originalUrl}`);
  next();
});

// Require paths
router.use('/', 
  require('../game/game.route'),
  require('../user/user.route'),
);

module.exports = router;