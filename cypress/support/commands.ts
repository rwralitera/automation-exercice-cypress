/// <reference types="cypress" />

import locators from '../utils/locators/locators'

Cypress.Commands.add('deleteUser', (email, password) => {
  cy.request({
    method: 'DELETE',
    url: 'https://automationexercise.com/api/deleteAccount',
    form: true,
    body: { email: email, password: password },
  })
})

Cypress.Commands.add(
  'createUser',
  (
    name: string,
    email: string,
    password: string,
    title: string,
    birth_date: string,
    birth_month: string,
    birth_year: string,
    lastName: string,
    companyName: string,
    address1: string,
    address2: string,
    country: string,
    zipCode: string,
    state: string,
    city: string,
    phoneNumber: string,
  ) => {
    //create
    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/createAccount',
      form: true,
      body: {
        name: name,
        email: email,
        password: password,
        title: title,
        birth_date: birth_date,
        birth_month: birth_month,
        birth_year: birth_year,
        firstname: name,
        lastname: lastName,
        company: companyName,
        address1: address1,
        address2: address2,
        country: country,
        zipcode: zipCode,
        state: state,
        city: city,
        mobile_number: phoneNumber,
      },
    })
  },
)

Cypress.Commands.add('apiLogin', (username: string, password: string) => {
  cy.session([username, password], () => {
    cy.request({
      body: {
        password,
        username,
      },
      method: 'POST',
      failOnStatusCode: false,
      url: `${Cypress.config('baseUrl')}/auth}`, // FIXME: change to your own endpoint URL for the authentication
    }).then((resp) => {
      if (resp.body.id_token) {
        window.localStorage.setItem('jwtToken', `Bearer ${resp.body.id_token}`) // FIXME: change to your own key that contain your token
        window.localStorage.setItem('currentLang', 'fr')
      }
    })
  })
})

Cypress.Commands.add('webLogin', (username: string, password: string) => {
  cy.session([username, password], () => {
    window.localStorage.setItem('currentLang', 'fr')
    cy.visit('#/auth') // FIXME: change to your own endpoint URL for the authentication
    cy.get(`${locators.emailField} input`)
      .type(`{selectall}${username}`)
      .should('have.value', username)
    cy.get(`${locators.passwordField} input`)
      .type(`{selectall}${password}`)
      .then(($input) => {
        cy.wrap($input).should('have.value', password)
        cy.get(`${locators.loginButton}`).click()
      })
    cy.url().should('eq', `${Cypress.config('baseUrl')}#/home`) // FIXME: change to your own endpoint URL for your home page

    // create the jwt token in local storage to use for the api requests
    let auth: any
    cy.window().then((window) => {
      cy.log(`${window.localStorage.getItem('jwtToken')}`)
      auth = window.localStorage.getItem('jwtToken')
      window.localStorage.setItem(
        'jwtToken',
        `Bearer ${auth.replace(/^"(.+(?="$))"$/, '$1')}`,
      )
    })
  })
})

const LOCAL_STORAGE_MEMORY: { [key: string]: any } = {}
Cypress.Commands.add('saveLocalStorage', () => {
  Object.keys(localStorage).forEach((key) => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key]
  })
})

Cypress.Commands.add('restoreLocalStorage', () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach((key) => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key])
    window.localStorage.setItem('currentLang', 'fr')
  })
})

Cypress.Commands.add(
  'shouldHaveTrimmedText',
  { prevSubject: true },
  (subject: any, equalTo: any) => {
    cy.wrap(subject)
      .should('contain.text', equalTo)
      .then(() => {
        expect(subject.text().trim()).to.equal(equalTo)

        return subject
      })
  },
)
