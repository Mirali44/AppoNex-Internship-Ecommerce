import fs from 'node:fs/promises';
import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

// Configure CORS options
const corsOptions = {
  origin: 'https://your-frontend-domain.com', // Replace with your actual frontend domain
  methods: 'GET,POST,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization',
};

// Enable CORS with the specified options
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

