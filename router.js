const express = require("express");
const productController = require("products_controller");
const shoppingcartController = require("shopping_cart_controller");

const options = {
    "caseSensitive": false,
    "strict": false
}

const router = express.Router(options);

router.get('/:id', productController.getProduct);


router.post('/add-to-cart', shoppingcartController.addProduct);


module.exports = router;