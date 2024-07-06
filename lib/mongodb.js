import mongoose from 'mongoose';

const connectMongoDB = async () => {
    try {
        await mongoose.connect();
        console.log('connected to database');
    } catch (err) {
        console.error('something wrong happened');
    }
}

export default connectMongoDB;