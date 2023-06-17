import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, 'Title is required'],
      maxlength: 70,
    },
    description: {
      type: String,
      trim: true,
      required: [true, 'Description is required'],
      maxlength: 1000,
    },
    salary: {
        type: String,
        trim: true,
        required: [true, 'Salary is required'],
      },
    location: {
        type: String,
    },
    available: {
        type: Boolean,
        default: true
    },
    jobType: {
        type: Schema.Types.ObjectId,
        ref: 'JobType',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    
}, { timestamps: true });

export default mongoose.model('Job', jobSchema);