const express = require('express');
const axios = require('axios');

const app = express();
const port = 8000;

app.get('/', async (req, res) => {
  try {
    const phpApiUrl = 'http://localhost/php/assignment/Q6/index.php'; 
    const response = await axios.get(phpApiUrl);

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error calling PHP API' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
