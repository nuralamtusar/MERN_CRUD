import mongoose from 'mongoose';

const Connection = async () => {
    const URL=process.env.DB_URI;
    try {
        await mongoose.connect(URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log('database connected successfully');
    } catch (error) {
        console.log(error);
    }
}
export default Connection;