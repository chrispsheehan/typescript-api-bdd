import express from 'express';
import { logRequest } from './logger';

const LOCAL_PORT = 8090;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`Hello from the Mock!`);
});

///////////// VALID ROUTES ///////////////

app.post('/v1/enriched-transactions', (req, res) => { 

  logRequest('Handled', req);
  res.json([
    {
      amount: 34621704.956994176,
      category: "irure nostrud culpa anim",
      date: -24022252.74655731,
      description: "amet reprehenderit non laboris commodo",
      id: "do voluptate id amet cillum",
      merchant: "elit irure nulla",
      regularity: "commod"
    },
    {
      amount: -20828901.99304095,
      category: "ex ut tempor exercitation",
      date: 61956111.34458655,
      description: "officia n",
      id: "sint amet magna enim laborum",
      merchant: "ut dolore irure cillum",
      regularity: "est"
    }
  ]);
});

app.post('/v1/oauth/token', (req, res) => { 
  logRequest('Handled', req);
  res.json({
    access_token: "aliquip anim veniam proident",
    expires_in: 92242555.39694038
  });
});

/////// END OF VALID ROUTES //////

// log out invalid requests
app.post('/*', function(req, res) {
  logRequest('INVALID ROUTE URL', req);
  res.status(404).json({message: "invalidRoute"})
});

app.listen(LOCAL_PORT, () =>
  console.log(`mock up and running!`),
);

