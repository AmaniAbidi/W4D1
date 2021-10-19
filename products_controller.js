const Product = require("product");

exports.getProduct = (req, res) => {
    res.render('product', Product.getProduct(req.params.id));
};

exports.addProduct = (req, res) => {
    res.render('add-product', res.params);
};