import ViteExpress from "vite-express";
import express, { response } from "express";
import { MongoClient, ObjectId } from "mongodb";

const PORT = 3000;
const MONGO_USER = 'liva';
const MONGO_PASSWORD = 'xhwT5ifuhZlogtFr';
const MONGO_CONNECTION_STRING = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0.eup62.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const app = express();
const client = new MongoClient(MONGO_CONNECTION_STRING);
const database = client.db('quacker');

app.use(express.json());

app.get('/api/quacks/latest', async (_, response) => {
    const LIMIT = 10;

    const data = database.collection('posts').find().sort({_id: -1}).limit(LIMIT);

    response.json(await data.toArray());
});

app.get('/api/quacks/:id', async (request, response) => {
    const { id } = request.params;

    const data = await database.collection('posts').findOne({ _id: new ObjectId(id) });

    response.json(data);
});

app.post('/api/quacks', async (request, response) => {
    const data = request.body;

    database.collection('posts').insertOne(data);
});

app.put('/api/quacks/:id', async (request, response) => {
    const { id } = request.params;
    const data = request.body;

    database.collection('posts').updateOne({_id: new ObjectId(id)}, {$set: data});
})

app.delete('/api/quacks/:id', (request, response) => {
    const { id } = request.params;
    database.collection('posts').deleteOne({ _id: new ObjectId(id) });
});

ViteExpress.listen(app, PORT, () => console.log(`Server running on http://localhost:${PORT}`));