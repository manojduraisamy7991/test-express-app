const express = require('express');
const cors = require('cors');
const app = express()
const PORT = 8000
app.use(cors());

app.get('/', (req, res) => {
  const responseData = {
    message: 'Hello World',
    status: 'success',
    data: {
      userId: 1,
      username: 'john_doe',
      email: 'john.doe@example.com'
    }
  };

  // Send the JSON response
  res.json(responseData);
})

app.get('/about', (req, res) => {
  res.send('About route 🎉 ')
})

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
})