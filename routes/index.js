var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).send(
    '<!doctype html>' +
      '<html lang="en">' +
      '<head>' +
      '<meta charset="utf-8" />' +
      '<meta name="viewport" content="width=device-width, initial-scale=1" />' +
      '<title>Express</title>' +
      '</head>' +
      '<body>' +
      '<h1>Express</h1>' +
      '<p>Server is running.</p>' +
      '</body>' +
      '</html>'
  );
});

module.exports = router;
