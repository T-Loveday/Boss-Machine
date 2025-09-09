const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
module.exports = app;
const PORT = process.env.PORT || 4001;

// Start the server listening on the provided PORT
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
// Add middleware for handling CORS requests from index.html


// Add middware for parsing request bodies here:


// Mount your existing apiRouter below at the '/api' path.
const apiRouter = require('./server/api');
app.use('/api', apiRouter);

