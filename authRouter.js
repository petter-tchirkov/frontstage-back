const Router = require('express')
const router = new Router()
const controller = require('./authController')
const {check} = require('express-validator')
const authMiddleware = require('./middlewares/authMiddleware')

router.post('/registration',[
    check('username', 'Name can not be blank').notEmpty(),
    check('password', 'Password must be 4-10 symbols').isLength({ min: 4, max: 10}),
], controller.registration);
router.post('/login', controller.login);
router.get('/users', authMiddleware, controller.getUsers);


module.exports = router