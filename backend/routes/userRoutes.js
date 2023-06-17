import express from 'express'
import {allUsers, createUserJobsHistory, deleteUser, editUser, singleUser} from '../controllers/userController.js'
import { isAdmin, isAuthenticated } from '../middleware/auth.js'

const router = express.Router()


// api/allUsers
router.get('/allusers', isAuthenticated, isAdmin, allUsers)

// api/user/id
router.get('/user/:id', isAuthenticated, singleUser)

// api/user/edit/id
router.put('/user/edit/:id', isAuthenticated, editUser)

// api/admin/user/delete/id
router.delete('/admin/user/delete/:id', isAuthenticated, isAdmin, deleteUser)

// api/user/jobhistory
router.post('/user/jobhistory', isAuthenticated, createUserJobsHistory)

export default router