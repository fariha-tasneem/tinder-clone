import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import cards from './dbCards.js';

//App config
const app = express();
const port = process.env.PORT || 8001
const connection_url = `mongodb+srv://admin:IqlkBdQmPR5DxqrL@cluster0.ubqcm.mongodb.net/tinderdb?retryWrites=true&w=majority`

//Middlewares
app.use(express.json());
app.use(Cors());

//DB config
mongoose.connect(connection_url,{
    //useNewUrlParser: true,
    //useCreateIndex: true,
    //useUnifiedTopology: true,
})

//API Endpoints
app.get("/", (req,res) => res.status(200).send("Hello World"));

app.post('/tinder/cards', (req,res) => {
    const dbCard=req.body;

    cards.create(dbCard, (err,data) => {
        if (err) {
            res.status(500).send(err);
        }else {
            res.status(201).send(data);
        }
    })
});

//pulling from database
app.get('/tinder/cards',(req,res) => {
    const dbCard=req.body;

    cards.find((err,data) => {
        if (err) {
            res.status(500).send(err);
        }else {
            res.status(200).send(data);
        }
    })
});

//Listener
app.listen(port, () => console.log(`listening on local host: ${port}`));
