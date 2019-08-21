import mongoose from 'mongoose';

export const connectMongoose = async (url = 'mongodb://localhost:27017/playground') => {
    await mongoose.connect(url);
    mongoose.connection.once('open', () => console.log(`Connected to mongo at ${url}`));
    return Promise.resolve();
};


