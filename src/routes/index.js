const { Router } = require('express');
const notImplemented = require('../middlewares/notImplemented');
const errorHandler = require('../middlewares/errorHandler');
const { endpointPostMessages } = require('../telegram/index');
const messageRouter = require('./messagesRouter');

const router = Router();

router.use(endpointPostMessages, messageRouter);

router.use(notImplemented);
router.use(errorHandler);
module.exports = router;
