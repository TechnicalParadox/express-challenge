const express = require('express');
const app = express();
const path = require('path');

const apiRoutes = require(path.join(__dirname, './routes/apiRoutes.js'));
const htmlRoutes = require(path.join(__dirname, './routes/htmlRoutes.js'));

const PORT = process.env.PORT || 3001;

// Parse incoming data as JSON
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Serve assets
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () =>
{
  console.log('Server now running on port '+PORT+'!');
});
