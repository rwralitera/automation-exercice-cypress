/// <reference types="cypress" />
import { ContactPage } from '../../../../pageObject/contactPage'
const contactPage = new ContactPage()
import { NavbarPage } from '../../../../pageObject/navbarPage'
const navbarPage = new NavbarPage()
import { productSelectors } from '../../../../pageObject/productPage'

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const randomUserNumber = getRandomInt(0, 99)
let email
let name
describe('Add review on product and verification', () => {
  beforeEach(() => {
    cy.fixture('data.json').then((item) => {
      email = item[randomUserNumber].email
      name = item[randomUserNumber].name
    })
    cy.visit('/')
    cy.url().should('eq', 'https://automationexercise.com/')
    // Click on 'Products' button
    navbarPage.goToProduct()
  })
  //WEL-T814
  it('01: Add review on product', () => {
    // Click on 'View Product' button
    cy.get(productSelectors.viewProduct).eq(0).click()
    //Verify 'Write Your Review' is visible
    cy.get(productSelectors.reviewIdentifier).should('be.visible')
    // Enter name, email and review
    contactPage.fillReview(name, email)
    // Verify success message 'Thank you for your review.
    cy.get(productSelectors.reviewMessageSuccess).contains(
      'Thank you for your review.',
    )
  })
  //WEL-T815
  it.only('S02: Review verification', () => {
    // Click on 'View Product' button
    cy.get(productSelectors.viewProduct).eq(0).click()

    cy.get(productSelectors.reviewButton).click() //FIXME : impossible d'atteindre le message d'erreur
  })
})
