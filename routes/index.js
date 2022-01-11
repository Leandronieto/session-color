var express = require('express');
var router = express.Router();

const {index, session, destroy} = require("../controllers/mainController")
const userLogin = require('../middlewares/userLogin');



/* GET home page. */
router.get('/', index )
router.post('/', session)
router.delete('/logout', destroy)

module.exports = router;
