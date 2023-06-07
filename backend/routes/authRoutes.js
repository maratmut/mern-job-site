import express from 'express'
import {signin, signup, logout, userProfile} from '../controllers/authController.js'
import { isAuthenticated } from '../middleware/auth.js'

const router = express.Router()

//auth routes
// api/signup
router.post('/signup', signup)

// api/signin
router.post('/signin', signin)

// api/logout
router.get('/logout', logout)

// api/me
router.get('/me', isAuthenticated, userProfile)

export default router