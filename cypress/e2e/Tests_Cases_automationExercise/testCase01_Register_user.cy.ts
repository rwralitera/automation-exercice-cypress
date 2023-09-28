/// <reference types="cypress" />
const { faker } = require('@faker-js/faker')
import { SingUpPage } from '../pageObject/signupPage'
import { NavbarPage, selectors } from '../pageObject/navbarPage'
const signupPage = new SingUpPage()
const navbarPage = new NavbarPage()

const phoneNumber = faker.phone.number()
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const randomUserNumber = getRandomInt(0, 99)
let randomRadioButton: string
let name: string
let email: string
let password: string
let lastName: string
let companyName: string
let address1: string
let address2: string
let country: string
let state: string
let city: string
let zipCode: string

describe('Test Case 1: Register User', () => {
  beforeEach(() => {
    cy.fixture('data.json').then((item) => {
      ;(randomRadioButton = item[randomUserNumber].gender[0]),
        (name = item[randomUserNumber].name),
        (email = item[randomUserNumber].email),
        (password = item[randomUserNumber].password),
        (lastName = item[randomUserNumber].lastName),
        (companyName = item[randomUserNumber].companyName),
        (address1 = item[randomUserNumber].address1),
        (address2 = item[randomUserNumber].address2),
        (country = item[randomUserNumber].country),
        (state = item[randomUserNumber].state),
        (city = item[randomUserNumber].city),
        (zipCode = item[randomUserNumber].zipCode)
    })
  })
  it('Test Case 1:Register User', () => {
    cy.visit('/')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get(selectors.homeIdentifier).should('be.visible')
    navbarPage.goToSignup()
    signupPage.fillSignupForm(name, email)
    cy.get(selectors.signupSignupActionTitle).should(
      'contain',
      'Enter Account Information',
    )
    signupPage.fillSignupAccountInformation(
      randomRadioButton,
      password,
      name,
      lastName,
      companyName,
      address1,
      address2,
      country,
      state,
      city,
      zipCode,
      phoneNumber,
    )
    //verification
    cy.get(selectors.navbar).should('contain', 'Logged in as ' + name)

    // API Delete account
    cy.deleteUser(email, password)
    navbarPage.goToHome()
    cy.window().scrollTo('top')
    cy.get(selectors.homeIdentifier).should('be.visible')
  })
})
