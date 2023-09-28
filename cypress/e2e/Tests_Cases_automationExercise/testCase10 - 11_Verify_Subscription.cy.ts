/// <reference types="cypress" />
import { ContactPage } from '../pageObject/contactPage'
const contactPage = new ContactPage()
import { NavbarPage, selectors } from '../pageObject/navbarPage'
const navbarPage = new NavbarPage()
let emailUser
describe('Test Case 10 11: Subscription', () => {
  beforeEach(() => {
    cy.fixture('data.json').then((item) => {
      emailUser = item[0].email
    })
    cy.visit('/')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get(selectors.homeIdentifier).should('be.visible')
  })
  it('Test Case 10: Verify Subscription in home page', () => {
    cy.get(selectors.footerIdentifier).scrollIntoView()
    contactPage.fillSubscription(emailUser)
  })
  it('Test Case 11: Verify Subscription in Cart page', () => {
    navbarPage.goToCart()
    cy.get(selectors.footerIdentifier).scrollIntoView()
    contactPage.fillSubscription(emailUser)
  })
})
