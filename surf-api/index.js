const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/api/sst', (req, res) => {
  const { lat, lng, date } = req.query;

  if (!lat || !lng || !date) {
    return res.status(400).json({ error: 'Missing lat, lng or date parameter' });
  }

  const scriptPath = path.join(__dirname, 'sst_fetch.py');
  const command = `/opt/anaconda3/bin/python ${scriptPath} ${lat} ${lng} ${date}`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return res.status(500).json({ error: 'Failed to fetch SST from GEE' });
    }

    try {
      const data = JSON.parse(stdout);
      res.json(data);
    } catch (e) {
      console.error('Failed to parse output:', stdout);
      res.status(500).json({ error: 'Invalid data format from GEE script' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
