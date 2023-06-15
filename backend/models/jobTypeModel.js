import mongoose from 'mongoose';
import { ObjectId } from 'mongoose';

const jobTypeSchema = new mongoose.Schema(
  {
    jobTypeName: {
      type: String,
      trim: true,
      required: [true, 'job category is required'],
      maxlength: 70,
    },
    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    
}, { timestamps: true });

export default mongoose.model('JobType', jobTypeSchema);