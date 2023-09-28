/// <reference types="cypress" />

import { NavbarPage, selectors } from '../../../pageObject/navbarPage'
const navbar = new NavbarPage()
import LoginPage from '../../../pageObject/loginPage'
const loginPage = new LoginPage()

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const randomUserNumber = getRandomInt(0, 99)
let titleUser: string
let nameUser: string
let email: string
let password: string
let birth_date: string
let birth_month: string
let birth_year: string
let lastName: string
let companyName: string
let address1: string
let address2: string
let country: string
let state: string
let city: string
let zipCode: string
let phoneNumber: string
describe('navigation on Navbar and checking', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('#slider').should('be.visible')
    cy.fixture('data.json').then((item) => {
      ;(titleUser = item[randomUserNumber].gender[1]),
        (nameUser = item[randomUserNumber].name),
        (email = item[randomUserNumber].email),
        (password = item[randomUserNumber].password),
        (birth_date = item[randomUserNumber].birthDate),
        (birth_month = item[randomUserNumber].birthMonth),
        (birth_year = item[randomUserNumber].birthYear),
        (lastName = item[randomUserNumber].lastName),
        (companyName = item[randomUserNumber].companyName),
        (address1 = item[randomUserNumber].address1),
        (address2 = item[randomUserNumber].address2),
        (country = item[randomUserNumber].country),
        (state = item[randomUserNumber].state),
        (city = item[randomUserNumber].city),
        (zipCode = item[randomUserNumber].zipCode),
        (phoneNumber = item[randomUserNumber].phoneNumber),
        cy.createUser(
          nameUser,
          email,
          password,
          titleUser,
          birth_date,
          birth_month,
          birth_year,
          lastName,
          companyName,
          address1,
          address2,
          country,
          zipCode,
          state,
          city,
          phoneNumber,
        )
    })
  })
  //WEL-T790
  it('S01: When I click on "Products" then I should arrive on the products page', () => {
    cy.get(selectors.navProduct).click()
    cy.get(selectors.productIdentifier).should('be.visible')
  })
  //WEL-T791
  it('S02: When I click on "Cart" then I should arrive on the "view_cart" page', () => {
    cy.get(selectors.navCart).click()
    cy.get(selectors.cartIdentifier).should('be.visible')
  })
  //WEL-T797

  //WEL-T792
  it('S03: Signup/login verification - S04:As a non-logged in user when I click on "Signup/Login" I should arrive on the "login" page', () => {
    cy.get(selectors.navSignup).should('be.visible')
    cy.get(selectors.navSignup).click()
    cy.get(selectors.signupIdentifier).should('be.visible')
  })
  //WEL-T794 WEL-T795
  it('S05: Logout account verification - S06: As a logged in user when I click on "Logout" then my account logs out and I arrive on the "login" page', () => {
    navbar.goToSignup()
    loginPage.fillLoginData(email, password)
    navbar.goToHome()
    cy.get(selectors.navLogout).should('be.visible')
    cy.get(selectors.navLogout).click()
    cy.get(selectors.navSignup).should('be.visible')
  })
  //WEL-T796
  it('S06 : Delete verification - S07: As a logged in user when I click on "Delete Account" I arrive on the "delete-account" page with a message "ACCOUNT DELETED!" and my account is deleted', () => {
    navbar.goToSignup()
    loginPage.fillLoginData(email, password)
    navbar.goToHome()
    cy.get(selectors.navDelete).should('be.visible')
    cy.get(selectors.navDelete).click()
    cy.get(selectors.deleteAccountIdentifier).should(
      'contain',
      'Account Deleted!',
    )
  })
  it('S08: Navigation to Test Cases page', () => {
    cy.get(selectors.navTestCases).click()
    cy.get(selectors.testCasesIdentifier).should('be.visible')
  })
  //WEL-T798
  it('S09: Navigation to API Testing page', () => {
    cy.get(selectors.navAPITesting).click()
    cy.get(selectors.APITestingIdentifier).should('be.visible')
  })
  //WEL-T799
  // it('S10: Navigation to Video tutorial', () => {
  //   cy.get(selectors.navVideo).click()
  //   cy.url().should('eq', selectors.videoIdentifier)
  //   cy.visit('/')
  // })
  //WEL-T800
  it('S11: Navigate to Contact Us page', () => {
    cy.get(selectors.navContactUs).click()
    cy.get(selectors.contactUsIdentifier).should('be.visible')
  })
  //WEL-T801
  it('S12: : Go to Home page', () => {
    cy.get(selectors.navHome).click()
    cy.get(selectors.homeIdentifier).should('be.visible')
    cy.get(selectors.navHomeLogo).click()
    cy.get(selectors.homeIdentifier).should('be.visible')
  })

  afterEach(() => {
    cy.deleteUser(email, password)
  })
})
