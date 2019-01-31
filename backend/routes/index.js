var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/items', function(req, res, next) {
  const producto = req.query.q
  axios.get('https://api.mercadolibre.com/sites/MLA/search?limit=4&q=1' + producto)
});

module.exports = router;
