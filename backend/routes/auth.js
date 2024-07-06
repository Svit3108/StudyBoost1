const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const auth = require('../middleware/auth');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const router = express.Router();

//Multer-Konfiguration für Datei-Upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Verzeichnis für hochgeladene Dateien
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Dateiname anpassen, um Konflikte zu vermeiden
  }
});

const upload = multer({ storage: storage });

// POST-Endpunkt für Hausaufgaben mit Authentifizierung
router.post('/Hausaufgabe', auth, upload.single('file'), (req, res) => {
  const { homeworkText } = req.body; // Text der Hausaufgabe aus dem Request Body
  const file = req.file; // Hochgeladene Datei aus dem Multer Upload

  // Beispiel: Speichern in einer Datenbank oder anderen Logik
  // Für dieses Beispiel speichern wir nur den Dateinamen
  const response = {
    msg: 'Hausaufgabe erfolgreich gespeichert',
    homeworkText,
    file
  };

  res.json(response);
});

// Register
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: 'User already exists' });

    user = new User({ username, email, password });
    await user.save();

    const payload = { user: { id: user.id } };
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const payload = { user: { id: user.id } };
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});
module.exports = router;