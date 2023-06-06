import express from 'express'
import {signin, signup, logout} from '../controllers/authController.js'

const router = express.Router()

//auth routes
// api/signup
router.post('/signup', signup)

// api/signin
router.post('/signin', signin)

// api/logout
router.get('/logout', logout)

export default router