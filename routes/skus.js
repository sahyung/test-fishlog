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

function filterByValue(array, string, key) {
    return array.filter(o => o[key].toLowerCase().includes(string.toLowerCase()));
}

/* GET sku listing, sort descending by orderBy, default product__name. 
*/
router.get('/sort', function (req, res, next) {
    let orderBy = 'product__name';
    if (req.query.orderBy && fields.includes(orderBy)) {
        orderBy = req.query.orderBy;
    }

    let sorted = _.sortBy(objSKU, orderBy).reverse();
    res.json(sorted);
});

/* GET sku listing,
 * filter by filterBy, default product__name.
 * search by search, default empty string
*/
router.get('/filter', function (req, res, next) {
    let filterBy = 'product__name', search = '';
    if (req.query.filterBy && fields.includes(filterBy)) {
        filterBy = req.query.filterBy;
        if (filterBy.toUpperCase() === 'SKU') filterBy = filterBy.toUpperCase()
    }
    if (req.query.search) {
        search = req.query.search;
    }

    let filtered = filterByValue(objSKU, search, filterBy)
    res.json(filtered);
});

module.exports = router;
