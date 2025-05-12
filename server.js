const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

function getSecretCode() {
  const now = new Date();
  const options = { timeZone: 'Asia/Kolkata', hour12: false };
  const istDate = new Date(now.toLocaleString('en-US', options));
  const day = istDate.getDate();
  const hour = istDate.getHours();

  // Convert hour to alphabet and get its position (A=1, B=2, ..., Z=26)
  const hourChar = String.fromCharCode(65 + hour % 26); // A-Z looping
  const nextChar = String.fromCharCode(65 + (hour + 1) % 26);

  const hourVal = hourChar.charCodeAt(0) - 64;
  const nextVal = nextChar.charCodeAt(0) - 64;

  return `VAK${day}${hourVal}${nextVal}@#`;
}

app.get('/get-code', (req, res) => {
  res.json({ code: getSecretCode() });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
