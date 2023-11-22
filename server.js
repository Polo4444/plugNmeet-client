const express = require('express');
const app = express();
const port = 3000; // You can choose any port

// Replace 'public' with the name of your folder
app.use(express.static('dist'));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
