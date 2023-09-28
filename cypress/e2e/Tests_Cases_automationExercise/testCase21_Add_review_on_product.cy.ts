/// <reference types="cypress" />
import { ContactPage } from '../pageObject/contactPage'
const contactPage = new ContactPage()
import { NavbarPage } from '../pageObject/navbarPage'
const navbarPage = new NavbarPage()

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const randomUserNumber = getRandomInt(0, 99)
let email
let name
describe('Test Case 21: Add review on product', () => {
  beforeEach(() => {
    cy.fixture('data.json').then((item) => {
      email = item[randomUserNumber].email
      name = item[randomUserNumber].name
    })
    cy.visit('/')
    cy.url().should('eq', 'https://automationexercise.com/')
  })

  it('Tests Case 21: Add review on product', () => {
    // 3. Click on 'Products' button
    navbarPage.goToProduct()

    // 5. Click on 'View Product' button
    cy.get(
      ':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a',
    ).click()
    // 6. Verify 'Write Your Review' is visible
    cy.get('a:contains("Write Your Review")').should('be.visible')
    // 7. Enter name, email and review
    contactPage.fillReview(name, email)
    // 9. Verify success message 'Thank you for your review.
    cy.get('#review-section .alert-success > span').contains(
      'Thank you for your review.',
    )
  })
})
