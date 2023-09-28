/// <reference types="cypress" />
import { NavbarPage, selectors } from '../pageObject/navbarPage'
const navbarPage = new NavbarPage()
import AddProductPage from '../pageObject/addProductPage'
const addProduct = new AddProductPage()
describe('Test Case 12: Add Products in Cart', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get(selectors.homeIdentifier).should('be.visible')
  })
  it('Test case 12: Add Products in Cart', () => {
    navbarPage.goToProduct()
    addProduct.addRandomProduct()
    navbarPage.goToCart()
    //     9. Verify both products are added to Cart
    cy.get('#product-1').should('be.visible') //TODO
    cy.get('#product-2').should('be.visible')
    cy.get('#product-3').should('be.visible')
    // 10. Verify their prices, quantity and total price
    cy.get('#product-1 .cart_price').should('be.visible')
    cy.get('#product-1 .cart_quantity').should('be.visible')
    cy.get('#product-1 .cart_total').should('be.visible')
    cy.get('#product-2 .cart_price').should('be.visible')
    cy.get('#product-2 .cart_quantity').should('be.visible')
    cy.get('#product-2 .cart_total').should('be.visible')
    cy.get('#product-3 .cart_price').should('be.visible')
    cy.get('#product-3 .cart_quantity').should('be.visible')
    cy.get('#product-3 .cart_total').should('be.visible')
  })
})
