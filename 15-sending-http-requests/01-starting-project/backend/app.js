import fs from 'node:fs/promises';

import bodyParser from 'body-parser';
import express from 'express';


const app = express();

// let path = '/home/frido/web/react/15-sending-http-requests/01-starting-project/backend/'
// app.use('/images/', express.static(path + 'images'));
// app.use(express.static('images'));

import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use('/images/', express.static(path.join(__dirname, 'images')))
app.use(bodyParser.json());

// CORS

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // allow all domains
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    next();
});

app.get('/places', async (req, res) => {
    const fileContent = await fs.readFile('./data/places.json');

    const placesData = JSON.parse(fileContent);

    res.status(200).json({ places: placesData });
});

app.get('/user-places', async (req, res) => {
    const fileContent = await fs.readFile('./data/user-places.json');

    const places = JSON.parse(fileContent);

    res.status(200).json({ places });
});

app.put('/user-places', async (req, res) => {
    const places = req.body.places;

    await fs.writeFile('./data/user-places.json', JSON.stringify(places));

    res.status(200).json({ message: 'User places updated!' });
});

// 404
app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next();
    }
    res.status(404).json({ message: '404 - Not Found' });
});

import { readFileSync } from 'fs'

var privateKey = readFileSync( '/home/frido/web/react/15-sending-http-requests/01-starting-project/backend/privatekey.pem' );
var certificate = readFileSync( '/home/frido/web/react/15-sending-http-requests/01-starting-project/backend/certificate.pem' );

https.createServer({
    key: privateKey,
    cert: certificate
}, app).listen(3001, "192.168.1.10");
