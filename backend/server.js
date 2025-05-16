const express = require('express');
const cors = require('cors');
const  youtubeRoutes = require('./routes/youtubeRoutes.js');
// const instagramRoutes = require('./routes/instagramRoutes');

const app = express();
app.use(cors());
app.use(express.json())
// app.use(bodyParser.json());


app.use('/api', youtubeRoutes);
// app.use('/api', instagramRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
