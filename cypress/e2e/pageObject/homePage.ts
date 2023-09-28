const homeSelectors = {
  homeIdentifier: '#slider',
  navbarIdentifier: '.header-middle > .container > .row',
  //carousel section
  carouselTestCaseButton:
    '#slider-carousel .active .btn-success:contains("Test Cases")',
  carouselAPITestingButton:
    '#slider-carousel .active .btn-success:contains("APIs list for practice")',
  carouselItem: '.carousel-inner .item',
  carouselInner: '.carousel-inner',
  carouselButtonRight: '#slider-carousel .fa-angle-right',
  carouselButtonLeft: '#slider-carousel .fa-angle-left',

  //Category section
  categoryIdentifier: '.left-sidebar h2:contains("Category")',
  womenLabel: '#accordian .panel .panel-heading [href="#Women"]',
  womenChild: '#Women .panel-body ul a',
  menIdentifier: '#accordian .panel .panel-heading [href="#Men"]',
  menChild: '#Men .panel-body ul a',

  //brands section
  brandsIdentifier: 'h2:contains("Brands")',
  firstBrandIdentifier: '.brands-name .nav :nth-child(1) a',
  firstBrandNumbers: '.brands-name  .nav  :nth-child(1)  a  .pull-right',

  //feature items
  featureItem: '.features_items ',
  titleIdentifier: '.features_items .title',
  cardIdentifier: '.col-sm-4',
  imageWrapper: '.features_items .product-image-wrapper',
  cardImage: '.product-image-wrapper .single-products .productinfo img',
  productOverlay:
    '.product-image-wrapper .single-products .product-overlay img',
  cardPrice: '.product-image-wrapper .single-products h2:contains("Rs.")',
  cardP: '.product-image-wrapper .single-products p',
  cardAdd: '.product-image-wrapper .single-products .add-to-cart',
  cardViewProduct: '.product-image-wrapper .nav-justified',

  //footer
  footerIdentifier: '#footer',
  footerTitle: '#footer h2:contains("Subscription")',
  footerField: '#footer .searchform input',
  footerButton: '#footer .searchform #subscribe',

  //scroll_up
  scrollup: '#scrollUp',
}

export { homeSelectors }
