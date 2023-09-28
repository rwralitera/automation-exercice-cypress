/* eslint-disable no-unused-vars */
/// <reference types="cypress" />

// eslint-disable-next-line no-unused-vars
declare namespace Cypress {
  // eslint-disable-next-line no-unused-vars
  interface Chainable<Subject = any> {
    /**
     * Custom command to delete an user
     * @example cy.deleteUser(email,password)
     */
    // eslint-disable-next-line no-unused-vars
    deleteUser(email: string, password: string): Chainable<null>
    createUser(
      // eslint-disable-next-line no-unused-vars
      name: string,
      // eslint-disable-next-line no-unused-vars
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
    ): Chainable<null>
  }
}
