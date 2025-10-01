import mongoose from 'mongoose';

// eslint-disable-next-line n/no-process-env
const uri = process.env.MONGODB_URI!;

export async function connectToMongo() {
    if (!uri) throw new Error('Please set MongoDB URI.');

    await mongoose.connect(uri);
    mongoose.connection.on('connected',
        () => console.log('MongoDB server connected'));
    mongoose.connection.on('error', (e) => console.error('MongoDB server connection error', e));
}