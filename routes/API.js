const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')

const passport = require('passport')
const needsAuth = passport.authenticate('jwt', {session: false})
require('./../middleware/Passport')(passport)

router.get('/', (req, res) => {
    return res.json({message: 'Nothing here in this route'})
})

router.post('/create', UserController.create);
router.post('/login', UserController.login);
router.get('/get',needsAuth, UserController.get);
router.put('/update',needsAuth, UserController.update);




module.exports = router