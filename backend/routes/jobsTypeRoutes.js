import express from 'express'
import { isAuthenticated } from '../middleware/auth.js';
import { allJobsType, createJobType } from '../controllers/jobsTypeController.js';

const router = express.Router()

// api/type/create
router.post('/type/create', isAuthenticated, createJobType)

// api/type/jobs
router.get('/type/jobs', allJobsType)

export default router;