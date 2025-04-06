const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const projectsRoutes = require('./routes/projects');
const contactRoutes = require('./routes/contact');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/projects', projectsRoutes);
app.use('/api/contact', contactRoutes);

app.listen(3000, () => {
  console.log('🚀 Backend lancé sur http://localhost:3000');
});