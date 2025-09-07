import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017';
const DB_NAME = process.env.DB_NAME || 'crud_db';

export async function connectMongoose(): Promise<typeof mongoose> {
    if (mongoose.connection.readyState === 1) return mongoose;
    await mongoose.connect(MONGO_URI, { dbName: DB_NAME });
    console.log(`Connected to Mongoose: ${DB_NAME}`);
    return mongoose;
}

export async function disconnectMongoose(): Promise<void> {
    if (mongoose.connection.readyState !== 0) {
        await mongoose.disconnect();
        console.log('Disconnected from Mongoose');
    }
}
