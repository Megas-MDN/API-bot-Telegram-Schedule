const { Router } = require('express');
const Controller = require('../controllers/messageController');
const messageFormat = require('../middlewares/messageFormat');

const router = Router();

router.post('/', messageFormat, Controller.sendMenssage);
router.get('/', Controller.checkStatus);

module.exports = router;
