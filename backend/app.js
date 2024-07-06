import fs from 'node:fs/promises';
import http from 'http';
import https from 'https';
import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

const corsOptions = {
  origin: 'https://mirali44.github.io/AppoNex-Internship-Ecommerce/',
  methods: 'GET,POST,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization',
};

app.use(cors(corsOptions));

app.get('/meals', async (req, res) => {
  try {
    const meals = await fs.readFile('./data/available-meals.json', 'utf8');
    res.json(JSON.parse(meals));
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.use((req, res) => {
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  res.status(404).json({ message: 'Not found' });
});

app.use((req, res, next) => {
  if (req.protocol === 'http') {
    res.redirect(`https://${req.headers.host}${req.url}`);
  } else {
    next();
  }
});

const httpServer = http.createServer(app);
const httpsServer = https.createServer({
  key: fs.readFileSync('/path/to/privkey.pem'),  
  cert: fs.readFileSync('/path/to/fullchain.pem') 
}, app);

httpServer.listen(3000, () => {
  console.log('HTTP Server running on port 3000');
});

httpsServer.listen(3443, () => {
  console.log('HTTPS Server running on port 3443');
});