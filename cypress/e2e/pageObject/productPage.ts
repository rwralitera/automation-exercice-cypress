const productSelectors = {
  //product feature_items
  productCard: '.features_items .col-sm-4 .productinfo',
  productAdd: '.add-to-cart',
  btnAddToCart: 'button:contains("Add to cart")',

  //pop-up
  modalContent: '#cartModal',
  continueButton: '.modal-footer .btn',
  viewCart: 'a:contains("View Cart")',
  //product cards
  product: '#cart_info_table tbody tr',
  cartPrice: '#cart_info_table tbody tr .cart_price',
  cartQuantity: '#cart_info_table tbody tr .cart_quantity',
  cartTotal: '#cart_info_table tbody tr .cart_total',
  viewProduct: '.features_items .col-sm-4 a:contains("View Product")',
  addProduct:
    '.features_items .product-image-wrapper .single-products .add-to-cart',

  //view product details
  productTitle: '.product-information h2',
  productCategory: '.product-information p:contains("Category")',
  productPrice: '.product-information span:contains("Rs")',
  productAvailability: '.product-information p:contains("Availability")',
  productCondition: '.product-information p:contains("Condition")',
  productBrand: '.product-information p:contains("Brand")',

  //review
  reviewIdentifier: '.active a:contains("Write Your Review")',
  reviewMessageSuccess: '#review-section .alert-success > span',
  reviewButton: '#button-review',

  //search
  searchField: '#search_product',
  searchButton: '#submit_search',

  //products
  product1: 'Blue Top',
  product2: 'Men Tshirt',
  product3: 'Sleeveless Dress',

  //product details
  detailQuantity: '[name="quantity"]',
}

export { productSelectors }
