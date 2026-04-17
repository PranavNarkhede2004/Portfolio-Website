const Contact = require('../models/Contact');

// @desc    Submit a new contact message
// @route   POST /api/contact
// @access  Public
const submitMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please provide name, email, and message.' });
    }

    const newMessage = await Contact.create({
      name,
      email,
      message,
    });

    res.status(201).json({ success: true, data: newMessage });
  } catch (error) {
    console.error('Error submitting message:', error);
    res.status(500).json({ error: 'Server Error' });
  }
};

// @desc    Get all contact messages (Admin only)
// @route   GET /api/contact/admin
// @access  Private (Simple Secret Key)
const getMessages = async (req, res) => {
  try {
    const adminSecret = req.headers['x-admin-secret'];

    if (!adminSecret || adminSecret !== process.env.ADMIN_SECRET) {
      return res.status(401).json({ error: 'Not authorized as admin.' });
    }

    const messages = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json({ success: true, data: messages });
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: 'Server Error' });
  }
};

module.exports = {
  submitMessage,
  getMessages,
};
