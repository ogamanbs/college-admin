import mongoose, {Schema} from 'mongoose';

const adminSchema = Schema({
    name: String,
    dob: String,
    email: String,
    password: String,
})

const Admin = mongoose.model.Admins || mongoose.model('admin', adminSchema);

export default Admin;