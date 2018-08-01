import express from 'express';
import apiRouter from './api';

const PORT = process.env.PORT || 3000;
const path = require('path');
const app = express();

app.use('/api', apiRouter);

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

// TODO: server side rendering
// router.use('^/$', serverRenderer);
// router.use('*', serverRenderer);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
