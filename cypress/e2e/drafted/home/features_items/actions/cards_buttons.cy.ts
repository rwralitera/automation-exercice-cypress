/// <reference types="cypress" />
import { NavbarPage, selectors } from '../../../../pageObject/navbarPage'
const navbarPage = new NavbarPage()
import AddProductPage from '../../../../pageObject/addProductPage'
const addProduct = new AddProductPage()
import { productSelectors } from '../../../../pageObject/productPage'
describe('interaction with buttons in product page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get(selectors.homeIdentifier).should('be.visible')
  })
  //WEL-T813
  it('S07: When I click on the View Product button then I should arrive on the "product_details/*" page with the image of the product its descriptions a quantity field and an add to cart button as well as a Review form', () => {
    navbarPage.goToProduct()
    cy.get(productSelectors.viewProduct).eq(0).click()
    cy.url().should('eq', 'https://automationexercise.com/product_details/1')
    //verify details are visible: product name, category, price, availability, condition, brand
    cy.get(productSelectors.productTitle).should('be.visible')
    cy.get(productSelectors.productCategory).should('be.visible')
    cy.get(productSelectors.productPrice).should('be.visible')
    cy.get(productSelectors.productAvailability).should('be.visible')
    cy.get(productSelectors.productCondition).should('be.visible')
    cy.get(productSelectors.productBrand).should('be.visible')
  })
  //WEL-T816
  it.only('S01: When I click on "Add to cart" of a product then I should have this product in the shopping list (cart) and an "Added" pop-up window is displayed', () => {
    navbarPage.goToProduct()
    addProduct.addRandomProduct()
    navbarPage.goToCart()
    cy.get(productSelectors.product).eq(0).should('be.visible')
    cy.get(productSelectors.product).eq(1).should('be.visible')
    cy.get(productSelectors.product).eq(2).should('be.visible')
    // Verify their prices, quantity and total price
    cy.get(productSelectors.cartPrice).eq(0).should('be.visible')
    cy.get(productSelectors.cartQuantity).eq(0).should('be.visible')
    cy.get(productSelectors.cartTotal).eq(0).should('be.visible')
    cy.get(productSelectors.cartPrice).eq(1).should('be.visible')
    cy.get(productSelectors.cartQuantity).eq(1).should('be.visible')
    cy.get(productSelectors.cartTotal).eq(1).should('be.visible')
    cy.get(productSelectors.cartPrice).eq(2).should('be.visible')
    cy.get(productSelectors.cartQuantity).eq(2).should('be.visible')
    cy.get(productSelectors.cartTotal).eq(2).should('be.visible')
  })
})
