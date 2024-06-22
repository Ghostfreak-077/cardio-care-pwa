const express = require('express');
const bodyParser = require('body-parser');
const fast2sms = require('fast-two-sms');
const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());

// In-memory user data (replace with your database logic)
let userData = {
  user123: {
    emergencyContact: '9613086017', // Default emergency contact
  },
};

// Endpoint to get emergency contact
app.post('/get-emergency-contact', (req, res) => {
  const { userId } = req.body;
  if (userData[userId]) {
    res.json({ success: true, emergencyContact: userData[userId].emergencyContact });
  } else {
    res.json({ success: false, message: 'User not found' });
  }
});

// Endpoint to set emergency contact
app.post('/set-emergency-contact', (req, res) => {
  const { userId, emergencyContact } = req.body;
  if (userData[userId]) {
    userData[userId].emergencyContact = emergencyContact;
    res.json({ success: true });
  } else {
    res.json({ success: false, message: 'User not found' });
  }
});

// Endpoint to send SMS
app.post('/send-sms', async (req, res) => {
  const { userId } = req.body;
  if (userData[userId]) {
    const emergencyContact = userData[userId].emergencyContact;
    try {
      const response = await fast2sms.sendMessage({
        authorization: 'gDWhsrLzBym8AiaSkETKqXMIuQoYjlRdUcpZbxCPHVOtFwNn539Nl8Otu7UTvYKcdWjFZrx5RMqHQVbA',
        message: 'This is an emergency SOS message',
        numbers: [emergencyContact],
      });
      res.json({ success: true });
    } catch (error) {
      console.error('Error sending SMS:', error);
      res.json({ success: false, message: 'Error sending SMS' });
    }
  } else {
    res.json({ success: false, message: 'User not found' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
