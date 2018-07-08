var ghpages = require('gh-pages');
 
ghpages.publish('dist', err => error.length ? console.log(error) : console.log('Successfull deploy'));