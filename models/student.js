import mongoose, {Schema} from 'mongoose';

const studentSchema = new Schema({
    // write user schema here
})

const Student = mongoose.model.Students || mongoose.model('student', studentSchema);

export default Student;