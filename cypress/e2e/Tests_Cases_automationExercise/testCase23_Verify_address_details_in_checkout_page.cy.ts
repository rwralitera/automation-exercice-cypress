/// <reference types="cypress" />
import { SingUpPage } from '../pageObject/signupPage'
const signupPage = new SingUpPage()
import AddProductPage from '../pageObject/addProductPage'
const addProductPage = new AddProductPage()
import VerificationPage from '../pageObject/verificationPage'
const verificationPage = new VerificationPage()
import { NavbarPage } from '../pageObject/navbarPage'
const navbarPage = new NavbarPage()

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const randomUserNumber = getRandomInt(0, 99)
let randomRadioButton: string
let gender: string
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
let phoneNumber: string

describe('Test Case 23: Verify address details in checkout page', () => {
  beforeEach(() => {
    cy.fixture('data.json').then((item) => {
      ;(randomRadioButton = item[randomUserNumber].gender[0]),
        (gender = item[randomUserNumber].gender[1]),
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
        (phoneNumber = item[randomUserNumber].phoneNumber)
    })
    cy.visit('/')
    cy.url().should('eq', 'https://automationexercise.com/')
    //Verify that home page is visible successfully
    cy.get('#slider').should('be.visible')
  })

  it('Tests Case 23: Verify address details in checkout page', () => {
    // 4. Click 'Signup / Login' button
    navbarPage.goToSignup()
    signupPage.fillSignupForm(name, email)
    cy.get('.title').should('contain', 'Enter Account Information')
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
    cy.get('.navbar-nav').should('contain', 'Logged in as ' + name)

    // 8. Add products to cart
    navbarPage.goToProduct()
    addProductPage.addRandomProduct()
    // 9. Click 'Cart' button
    navbarPage.goToCart()
    // 10. Verify that cart page is displayed
    cy.get('.active:contains("Shopping Cart")').should('be.visible')
    // 11. Click Proceed To Checkout
    cy.get('.btn:contains("Proceed To Checkout")').click()
    // 12. Verify that the delivery address is same address filled at the time registration of account
    //address_delivery
    verificationPage.addressDelivery(
      gender,
      name,
      lastName,
      state,
      city,
      zipCode,
      phoneNumber,
    )
    //address_invoice
    verificationPage.addressBilling(
      gender,
      name,
      lastName,
      state,
      city,
      zipCode,
      phoneNumber,
    )
  })
  afterEach(() => {
    cy.deleteUser(email, password)
  })
})
