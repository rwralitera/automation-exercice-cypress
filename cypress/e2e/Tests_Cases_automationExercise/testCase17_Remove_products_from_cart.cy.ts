/// <reference types="cypress" />
import { NavbarPage } from '../pageObject/navbarPage'
const navbarPage = new NavbarPage()
import AddProductPage from '../pageObject/addProductPage'
const addProductPage = new AddProductPage()
describe('Test Case 17: Remove Products From Cart', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('#slider').should('be.visible')
  })

  it('Tests Case 17: Remove Products From Cart', () => {
    //Add product to cart
    navbarPage.goToProduct()
    addProductPage.addRandomProduct()
    //Click cart button
    navbarPage.goToCart()
    //Click X button corresponding to particular product
    cy.get('#product-1 .cart_quantity_delete').click()
    cy.get('#product-2 .cart_quantity_delete').click()
    cy.get('#product-3 .cart_quantity_delete').click()
    cy.get('#empty_cart').should('be.visible')
  })
})
