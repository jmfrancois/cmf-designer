const express = require('express');
const apps = require('./apps');
const pages = require('./pages');
const components = require('./components');

const app = express();
app.use(express.static('dist'));
apps.setup(app);
components.setup(app);
pages.setup(app);
app.listen(3030, () => console.log('Example app listening on port 3030!'));
