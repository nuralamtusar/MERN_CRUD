import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: Number,
});

const user = mongoose.model('user', userSchema);
export default user;

