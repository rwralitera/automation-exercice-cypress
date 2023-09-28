/// <reference types="cypress" />

import LoginPage from '../pageObject/loginPage'
const loginPage = new LoginPage()
import { NavbarPage, selectors } from '../pageObject/navbarPage'
const navbarPage = new NavbarPage()
import VerificationPage from '../pageObject/verificationPage'
const verificationPage = new VerificationPage()
import PaymentPage from '../pageObject/payementPage'
const paymentPage = new PaymentPage()
import AddProductPage from '../pageObject/addProductPage'
const addProductPage = new AddProductPage()
import { cartSelectors } from '../pageObject/cartPage'

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const randomUserNumber = getRandomInt(0, 99)
let title: string
let name: string
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
let cardNumber: string
let cvc: string
let cardMonth: string
let cardYear: string
//we use faker for others payment information

describe('Test Case 16: Place Order: Login before Checkout', () => {
  beforeEach(() => {
    cy.fixture('data.json').then((item) => {
      ;(title = item[randomUserNumber].gender[1]),
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
        (zipCode = item[randomUserNumber].zipCode),
        (phoneNumber = item[randomUserNumber].phoneNumber),
        (cardNumber = item[randomUserNumber].cardNumber),
        (cvc = item[randomUserNumber].cvc),
        (cardMonth = item[randomUserNumber].cardMonth),
        (cardYear = item[randomUserNumber].cardYear)

      cy.createUser(
        name,
        email,
        password,
        title,
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
    cy.visit('/')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get(selectors.homeIdentifier).should('be.visible')
  })

  it('Tests Case 16: Place Order: Login before Checkout', () => {
    navbarPage.goToSignup()
    cy.get(selectors.loginToYourAccount).should('exist')
    loginPage.fillLoginData(email, password)
    cy.get(selectors.navbar).should('contain', 'Logged in as ' + name)
    //Add product to Cart
    navbarPage.goToProduct()
    addProductPage.addRandomProduct()
    //Click cart button
    navbarPage.goToCart()

    //Proceed to checkout
    cy.get(cartSelectors.btnCheckout).click()
    //Address Details Verification
    verificationPage.addressDelivery(
      title,
      name,
      lastName,
      state,
      city,
      zipCode,
      phoneNumber,
    )
    //address_invoice
    verificationPage.addressBilling(
      title,
      name,
      lastName,
      state,
      city,
      zipCode,
      phoneNumber,
    )

    //message
    cy.get(cartSelectors.messageField).type('Checked OK to Place order')

    //Enter payment details:
    cy.get(cartSelectors.placeOrder).click()
    paymentPage.fillPaymentForm(
      name,
      lastName,
      cardNumber,
      cvc,
      cardMonth,
      cardYear,
    )
  })
  afterEach(() => {
    cy.deleteUser(email, password)
  })
})
