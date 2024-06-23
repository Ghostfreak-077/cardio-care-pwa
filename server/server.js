const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const FAST2SMS_API_KEY = 'tkHkRfCqKWUxu3n17USXJhjUx31X3HHFbEwrKqi9OMpZbpB93dqlhGqMCpWX';

// Mock user data
const users = {
  user123: {
    emergencyContact: '9613086017'
  },
  // Add more users as needed
};

// Endpoint to get emergency contact
app.post('/get-emergency-contact', (req, res) => {
  const { userId } = req.body;
  const user = users[userId];

  if (user) {
    res.json({ success: true, emergencyContact: user.emergencyContact });
  } else {
    res.json({ success: false, message: 'User not found' });
  }
});

// Endpoint to send SMS
app.post('/send-sms', async (req, res) => {
  const { userId } = req.body;
  const user = users[userId];

  if (!user) {
    return res.json({ success: false, message: 'User not found' });
  }

  const emergencyContact = user.emergencyContact;
  const message = 'This is an emergency message. Please respond immediately.';

  try {
    const response = await axios.get(`https://www.fast2sms.com/dev/bulkV2?authorization=${FAST2SMS_API_KEY}&message=${message}&language=english&route=q&numbers=${emergencyContact}`);
    if (response.data.return) {
      res.json({ success: true });
    } else {
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
