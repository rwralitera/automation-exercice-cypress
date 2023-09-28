const signupSelectors = {
  signupName: '[data-qa="signup-name"]',
  signupEmail: '[data-qa="signup-email"]',
  signupButton: '[data-qa="signup-button"]',
  signupTitle: 'input[name="title"][value="Mr"]',
  signupPassword: '#password',
  signupFirstName: '#first_name',
  signupLastName: '#last_name',
  signupCompany: '#company',
  signupAddress1: '#address1',
  signupAddress2: '#address2',
  signupCountry: '#country',
  signupState: '#state',
  signupCity: '#city',
  signupZipCode: '#zipcode',
  signupMobile: '#mobile_number',
  signupButtonCreate: '[data-qa="create-account"]',
  title: '.title',
  title2: '.title:contains("Enter Account Information")',
  signupIdentifier: 'h2:contains("New User Signup!")',
  checkoutBtn: '.btn:contains("Proceed To Checkout")',
  registerModal: 'u:contains("Register / Login")',
  downloadLink: '[href="/download_invoice/1900"]',
  placeOrderMessage: '[name="message"]',
  placeOrderOk: 'a:contains("Place Order")',
}
class SingUpPage {
  fillSignupForm(name: string, email: string) {
    cy.get(signupSelectors.signupName).type(name)
    cy.get(signupSelectors.signupEmail).type(email)
    cy.get(signupSelectors.signupButton).click()
  }

  fillSignupAccountInformation(
    randomRadioButton: string,
    password: string,
    firstName: string,
    lastName: string,
    companyName: string,
    address1: string,
    address2: string,
    country: string,
    state: string,
    city: string,
    zipCode: string,
    phoneNumber: string,
  ) {
    // cy.get(signupSelectors.signupTitle).check()
    cy.get(randomRadioButton).check()
    cy.get(signupSelectors.signupPassword).type(password)
    cy.get(signupSelectors.signupFirstName).type(firstName)
    cy.get(signupSelectors.signupLastName).type(lastName)
    cy.get(signupSelectors.signupCompany).type(companyName)
    cy.get(signupSelectors.signupAddress1).type(address1)
    cy.get(signupSelectors.signupAddress2).type(address2)
    cy.get(signupSelectors.signupCountry).select(country)
    cy.get(signupSelectors.signupState).type(state)
    cy.get(signupSelectors.signupCity).type(city)
    cy.get(signupSelectors.signupZipCode).type(zipCode)
    cy.get(signupSelectors.signupMobile).type(phoneNumber)
    cy.get(signupSelectors.signupButtonCreate).click()
    cy.get('[data-qa="account-created"]').should('contain', 'Account Created!')
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(500)
    cy.get('[data-qa="continue-button"]').click()
  }
}

export { SingUpPage, signupSelectors }
