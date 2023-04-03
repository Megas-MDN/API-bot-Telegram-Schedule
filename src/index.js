const express = require('express');
const cors = require('cors');
const router = require('./routes');
const { setwebHook } = require('./telegram');
require('dotenv/config');
console.clear();

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log('Server On na porta :: %s', port);
  // setwebHook();
});
