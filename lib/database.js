import mongoose from 'mongoose';
require('dotenv').config();

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE);
        console.log('connected to database');
    } catch (err) {
        console.error('error connecting to database');
    }
}

export default connectMongoDB;