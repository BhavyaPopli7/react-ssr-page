require('ignore-styles');
require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
  extensions: ['.js', '.jsx'],
});

const path = require('path');
const fs = require('fs');
const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router-dom/server');

const App = require('../src/App').default;

const app = express();
const PORT = 4000;


app.use('/images', express.static(path.resolve(__dirname, '../public/images'), {
  maxAge: '1y'
}));

app.use(express.static(path.resolve(__dirname, '../public'), {
  index: false, 
  maxAge: '1y' 
}));

app.use((req, res) => {
  console.log('Requested URL:', req.url);
  const context = {};
  
  const appContent = ReactDOMServer.renderToString(
    React.createElement(
      StaticRouter,
      { location: req.url, context },
      React.createElement(App)
    )
  );

  const indexFile = path.resolve(__dirname, '../views/index.html');
  fs.readFile(indexFile, 'utf8', (err, html) => {
    if (err) return res.status(500).send('Error loading HTML file.');
    
    if (context.url) {
      return res.redirect(301, context.url);
    }
    
    return res.send(html.replace('<div id="root"></div>', `<div id="root">${appContent}</div>`));
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});