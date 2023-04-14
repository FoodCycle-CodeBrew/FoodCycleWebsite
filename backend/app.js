import express from 'express';
const app = express();
import cors from 'cors';
const port = process.env.PORT || 5174;
import path from 'path';



app.use(express.urlencoded({ extended: true }));
app.use(cors());

import { getCustomerDetail } from './db.js';

app.get('/', async (req, res) => {
    const items = await getCustomerDetail();
    res.send(items);
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
