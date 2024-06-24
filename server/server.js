const express = require('express');
const bodyParser = require('body-parser');
const corsMiddleware = require('../middleware/corsMiddleware');
const axios = require('axios');

const app = express();
const port = 5000;

app.use(corsMiddleware); 
app.use(bodyParser.json());

const FAST2SMS_API_KEY = '1ySgqFytrSCWFetoKqWhBCD9MmwknDXH1SWQgTteaL3FLqPli4JcZM6FZ2tm';

// Endpoint to send SMS
app.post('/api/sos', async (req, res) => {
  const { message, location, emergencyContact } = req.body;

  if (!message || !location || !emergencyContact) {
    return res.json({ success: false, message: 'Missing required fields' });
  }

  const fullMessage = `${message} Location: ${location}`;

  try {
    const response = await axios.get(`https://www.fast2sms.com/dev/bulkV2`, {
      params: {
        authorization: FAST2SMS_API_KEY,
        message: fullMessage,
        language: 'english',
        route: 'q',
        numbers: emergencyContact
      }
    });

    if (response.data.return) {
      console.log('SMS sent successfully:', response.data);
      res.json({ success: true });
    } else {
      console.error('Failed to send SMS:', response.data);
      res.json({ success: false, message: 'Failed to send SMS' });
    }
  } catch (error) {
    console.error('Error sending SMS:', error);
    res.json({ success: false, message: 'Error sending SMS' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
