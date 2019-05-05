const express = require('express');
const router = express.Router();

const taskcontrol = require('../controllers/taskcontroller');

router.get('/', taskcontrol.list);
router.post('/add', taskcontrol.save);
router.get('/update/:id', taskcontrol.edit);
router.post('/update/:id', taskcontrol.update);
router.get('/delete/:id', taskcontrol.delete);

module.exports = router;