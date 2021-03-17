import express from 'express';

import morgan from 'morgan';

import dotenv from 'dotenv';
import bodyparser from 'body-parser';



import productRouter from './routes/products.js';
import list from './routes/showNew.js';
import create from './routes/creatNew.js';

const app = express();

dotenv.config();
app.use(bodyparser.json());

// routes
app.use(morgan('dev'));
app.use('/api',productRouter);
app.use('/new',create);
app.use('/new',list);
const port = process.env.PORT || 8000

app.listen(port, () => {console.log(`http://localhost:${port}/`) })