const cartSelectors = {
  emptyCart: '#empty_cart',
  clickHere: '#empty_cart .text-center a:contains("here")',
  checkoutButton: '.check_out',
  cardNumberField: '[name="card_number"]',
  cvcField: '[name="cvc"]',
  expiryMonthField: '[name="expiry_month"]',
  expiryYearField: '[name="expiry_year"]',
  firstProductImage: '#product-1 > .cart_product > a > .product_image',
  productDetailsIdentifier: '.product-details',
  btnCheckout: '.btn:contains("Proceed To Checkout")',
  //pop-up
  btnRegister: 'a:contains("Register / Login")',
  //message
  messageField: '[name="message"]',
  placeOrder: 'a:contains("Place Order")',
  orderPlaced: '.title b:contains("Order Placed!")',
}

export { cartSelectors }
