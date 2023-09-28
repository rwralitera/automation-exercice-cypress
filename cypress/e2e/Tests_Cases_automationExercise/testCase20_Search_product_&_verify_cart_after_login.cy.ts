/// <reference types="cypress" />
import LoginPage from '../pageObject/loginPage'
const loginPage = new LoginPage()
import { NavbarPage } from '../pageObject/navbarPage'
const navbarPage = new NavbarPage()
import SearchPage from '../pageObject/searchPage'
const searchPage = new SearchPage()

let item = 'Tshirt'
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

describe('Test Case 20: Search Products and Verify Cart After Login', () => {
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
    cy.get('#slider').should('be.visible')
  })

  it('Tests Case 20: Search Products and Verify Cart After Login', () => {
    // 3. Click on 'Products' button
    navbarPage.goToProduct()

    // 5. Enter product name in search input and click search button
    searchPage.searchItem(item)
    // 6. Verify 'SEARCHED PRODUCTS' is visible
    cy.get('.features_items > h2')
      .contains('Searched Products')
      .should('be.visible')
    // 7. Verify all the products related to search are visible
    cy.get(
      ':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > p',
    ).contains('Tshirt')
    cy.get(
      ':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > p',
    ).contains('T-Shirt')
    cy.get(
      ':nth-child(5) > .product-image-wrapper > .single-products > .productinfo > p',
    ).contains('T-Shirt')
    cy.get(
      ':nth-child(6) > .product-image-wrapper > .single-products > .productinfo > p',
    ).contains('T-Shirts')
    cy.get(
      ':nth-child(7) > .product-image-wrapper > .single-products > .productinfo > p',
    ).contains('Tshirt')
    cy.get(
      ':nth-child(8) > .product-image-wrapper > .single-products > .productinfo > p',
    ).contains('T SHIRT')
    // 8. Add those products to cart
    cy.get(
      ':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > a:contains("Add to cart")',
    ).click()
    cy.get('button:contains("Continue Shopping")').click()
    cy.get(
      ':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > a:contains("Add to cart")',
    ).click()
    cy.get('button:contains("Continue Shopping")').click()
    cy.get(
      ':nth-child(5) > .product-image-wrapper > .single-products > .productinfo > a:contains("Add to cart")',
    ).click()
    cy.get('button:contains("Continue Shopping")').click()
    cy.get(
      ':nth-child(6) > .product-image-wrapper > .single-products > .productinfo > a:contains("Add to cart")',
    ).click()
    cy.get('button:contains("Continue Shopping")').click()
    cy.get(
      ':nth-child(7) > .product-image-wrapper > .single-products > .productinfo > a:contains("Add to cart")',
    ).click()
    cy.get('button:contains("Continue Shopping")').click()
    cy.get(
      ':nth-child(8) > .product-image-wrapper > .single-products > .productinfo > a:contains("Add to cart")',
    ).click()
    cy.get('button:contains("Continue Shopping")').click()
    // 9. Click 'Cart' button and verify that products are visible in cart
    navbarPage.goToCart()
    cy.get('#cart_info_table #product-2').should('be.visible')
    cy.get('#cart_info_table #product-28').should('be.visible')
    cy.get('#cart_info_table #product-29').should('be.visible')
    cy.get('#cart_info_table #product-30').should('be.visible')
    cy.get('#cart_info_table #product-31').should('be.visible')
    cy.get('#cart_info_table #product-43').should('be.visible')
    // 10. Click 'Signup / Login' button and submit login details
    navbarPage.goToSignup()
    loginPage.fillLoginData(email, password)
    // 11. Again, go to Cart page
    navbarPage.goToCart()
    // 12. Verify that those products are visible in cart after login as well
    cy.get('#cart_info_table #product-2').should('be.visible')
    cy.get('#cart_info_table #product-28').should('be.visible')
    cy.get('#cart_info_table #product-29').should('be.visible')
    cy.get('#cart_info_table #product-30').should('be.visible')
    cy.get('#cart_info_table #product-31').should('be.visible')
    cy.get('#cart_info_table #product-43').should('be.visible')
  })
  afterEach(() => {
    cy.deleteUser(email, password)
    navbarPage.goToHome()
  })
})
