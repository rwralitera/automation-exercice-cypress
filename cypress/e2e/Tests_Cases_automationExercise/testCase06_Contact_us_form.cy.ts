/// <reference types="cypress" />
import { ContactPage } from '../pageObject/contactPage'
const contactPage = new ContactPage()
import { NavbarPage, selectors } from '../pageObject/navbarPage'
const navbarPage = new NavbarPage()
let emailUser
let nameUser

describe('Test Case 6 : Contact Us Form', () => {
  beforeEach(() => {
    cy.fixture('data.json').then((item) => {
      emailUser = item[0].email
      nameUser = item[0].name
    })
  })
  it('Test Case 6: Contact Us Form', () => {
    cy.visit('/')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get(selectors.homeIdentifier).should('be.visible')
    navbarPage.goToContactUs()
    contactPage.fillContactUs(nameUser, emailUser, 'invoice.txt')
    navbarPage.goToHome()
  })
})
