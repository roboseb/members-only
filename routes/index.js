var express = require('express');
var router = express.Router();

const user_controller = require('../controllers/userController');
const message_controller = require('../controllers/messageController');

/* GET home page. */
router.get('/', message_controller.index_get);




/* GET sign-up page. */
router.get('/sign-up', function (req, res, next) {
    res.render('sign-up', { title: 'Express' });
});

/* GET sign-in page. */
router.get('/sign-in', function (req, res, next) {
    res.render('sign-in', { title: 'Express' });
});

/* GET sign-out request. */
router.get('/sign-out', user_controller.user_signout_post);


/* POST for sign-up page. */
router.post('/sign-up', user_controller.user_create_post);

/* POST for sign-in page. */
router.post('/sign-in', user_controller.user_signin_post);

router.post('/add-message', message_controller.new_message_post);

module.exports = router;
