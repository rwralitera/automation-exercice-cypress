/// <reference types="cypress" />

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
