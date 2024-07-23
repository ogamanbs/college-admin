import mongoose, {Schema} from 'mongoose';

const phoneSchema = Schema({
    // write your schema here
});

const Phone = mongoose.model.Phones || mongoose.model('phone', phoneSchema);

export default Phone;