const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Bot da gráfica funcionando ✅');
});

app.listen(3000, () => {
  console.log('Servidor online');
});
