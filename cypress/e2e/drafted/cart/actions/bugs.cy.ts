/// <reference types="cypress" />
const { faker } = require('@faker-js/faker')
import { SingUpPage } from '../../../pageObject/signupPage'
import { NavbarPage, selectors } from '../../../pageObject/navbarPage'
import AddProductPage from '../../../pageObject/addProductPage'
const signupPage = new SingUpPage()
const navbarPage = new NavbarPage()
const addProduct = new AddProductPage()
import { cartSelectors } from '../../../pageObject/cartPage'

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

describe('bugs on Cart page', () => {
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
    cy.visit('/')
    cy.url().should('eq', '//')
    cy.get(selectors.homeIdentifier).should('be.visible')
  })
  //WEL-T911
  it('S07: When I fill in the "CVC" and "Expiration" fields only numeric characters must be accepted', () => {
    navbarPage.goToSignup()
    cy.get(selectors.signupIdentifier).should('be.visible')
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
    navbarPage.goToProduct()
    addProduct.addRandomProduct()
    navbarPage.goToCart()
    cy.get(cartSelectors.checkoutButton).click()
    cy.get(cartSelectors.checkoutButton).click()
    cy.get(cartSelectors.cardNumberField).type('abc123') //FIXME : .should('have.value', '123')doit contenir seulement des nombres
    cy.get(cartSelectors.cvcField).type('abc123') //FIXME : .should('have.value', '123') doit contenir seulement des nombres
    cy.get(cartSelectors.expiryMonthField).type('abc123')
    //FIXME : .should('have.value', '123')  doit contenir seulement des nombres
    cy.get(cartSelectors.expiryYearField).type('abc123')
    //FIXME : .should('have.value', '123')  doit contenir seulement des nombres
  })
  //WEL-T912
  it('S07: When I click on product photos I should be redirected to the "product_details" page', () => {
    navbarPage.goToProduct()
    addProduct.addRandomProduct()
    navbarPage.goToCart()
    cy.get(cartSelectors.firstProductImage).click()
    // cy.get(cartSelectors.productDetailsIdentifier).should('be.visible') //FIXME: la page product_details doit s'afficher
  })
  afterEach(() => {
    cy.deleteUser(email, password)
  })
})
