var express = require('express');
var router = express.Router();
var fs = require('fs');
var _ = require('underscore');
var objSKU;
fs.readFile('./public/javascripts/sku.json', 'utf8', function (err, data) {
    if (err) throw err;
    objSKU = JSON.parse(data);
});

const fields = [
    "id",
    "SKU",
    "item_name",
    "product__name",
];

/* GET sku listing, sort descending by param, default product__name. */
router.get('/sort', function (req, res, next) {
    let orderBy = 'product__name';
    if (req.query.orderBy && fields.includes(orderBy)) {
        orderBy = req.query.orderBy;
    }

    let sorted = _.sortBy(objSKU, orderBy).reverse();
    res.json(sorted);
});
router.get('/filter', function (req, res, next) {
    res.send('respond with a resource sku');
});

module.exports = router;
