import mongoose from 'mongoose';
require('dotenv').config();

const connectAdmin = () => {
    try {
        mongoose.connect(process.env.DATABASEADMIN);
        console.log('connectted to database');
    } catch (err) {
        console.err('error connecting to database');
    }
}

export default connectAdmin;