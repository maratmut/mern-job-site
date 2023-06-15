import express from 'express'
import { isAdmin, isAuthenticated } from '../middleware/auth.js';
import { createJob, showJobs, singleJob, updateJob } from '../controllers/jobsController.js';

const router = express.Router()

// api/job/create
router.post('/job/create', isAuthenticated, isAdmin, createJob)

// api/job/id
router.get('/job/:id', singleJob)

// api/update/job_id
router.put('/job/update/:job_id',isAuthenticated,isAdmin, updateJob)

// api/show
router.get('/jobs/show', showJobs)


export default router;