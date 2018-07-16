var cheerio = require('cheerio');
var request = require('request');

const scrape = function() {
  return new Promise(function(resolve, reject) {
    request('https://www.nytimes.com/', function (error, response, html) {
      if (error) {
        reject('Could not request site');
      }
      //console.log('request statusCode:', response && response.statusCode); 
      const $ = cheerio.load(html);
      const nytData = $('.theme-summary').map((i, elem) => {
        if ($(elem).children('.story-heading').text()) {
          return {
            title: $(elem).children('.story-heading').text().trim(),
            url: $(elem).children('.story-heading').children('a').attr('href'),
            summary: $(elem).children('.summary').text().trim(),
            date: new Date()
          }
        }
      }).get();
      //console.log(nytData);
      
      resolve(nytData);
                 
    });
  });
}

module.exports = scrape;
