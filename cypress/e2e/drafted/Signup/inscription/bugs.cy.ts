/// <reference types="cypress" />

import { SingUpPage, signupSelectors } from '../../../pageObject/signupPage'
import { NavbarPage, selectors } from '../../../pageObject/navbarPage'
const signupPage = new SingUpPage()
const navbar = new NavbarPage()

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const randomUserNumber = getRandomInt(0, 99)
let name: string
let email: string
//WEL-T907
describe('bugs on filling signup fields', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get(selectors.homeIdentifier).should('be.visible')
    cy.fixture('data.json').then((item) => {
      ;(name = item[randomUserNumber].name),
        (email = item[randomUserNumber].email)
    })
  })

  it('S07: When I fill in the "ZipCode" and "Mobile number" fields, only numeric characters must be accepted', () => {
    navbar.goToSignup()
    signupPage.fillSignupForm(name, email)
    cy.get(signupSelectors.title).should('contain', 'Enter Account Information')
    cy.get(signupSelectors.signupZipCode).type('abc123')
    //FIXME : .should('have.value', '123') seul les caractères numériques doivent être acceptés
    cy.get(signupSelectors.signupMobile).type('abc123')
    //FIXME : .should('have.value', '123')  seul les caractères numériques doivent être acceptés
  })
})
