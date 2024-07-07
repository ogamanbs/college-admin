import mongoose from 'mongoose';
require('dotenv').config();

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE);
        console.log('connected to database');
    } catch (err) {
        console.error('something wrong happened');
    }
}

export default connectMongoDB;