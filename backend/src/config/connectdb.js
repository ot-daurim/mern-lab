import { MongoClient } from 'mongodb';

export default function mongoClient() {
    return client = new MongoClient(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017");
}

export async function connectDB (params) {
    
    try {
        await client.connect();
        const db = client.db(process.env.MONGODB_NAME || 'mern_lab');
        const articles = db.collection('Post')
    } catch (error) {
        console.error('Message: ' + error.message);
    }
    
}

