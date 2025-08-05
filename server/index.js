const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/intern', (req, res) => {
  res.json({
    name: "Archit Lalwani",
    referralCode: "archit2025",
    totalDonations: 13500
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
