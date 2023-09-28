const { faker } = require('@faker-js/faker')
const selectors = {
  contactName: '[data-qa="name"]',
  contactEmail: '[data-qa="email"]',
  contactSubject: '[data-qa="subject"]',
  contactMessage: '[data-qa="message"]',
  contactFile: 'input[type="file"]',
  contactButton: '[data-qa="submit-button"]',
  reviewName: '#name',
  reviewEmail: '#email',
  reviewMessage: '#review',
  reviewButton: '#button-review',
  subscriptionTitle: '.single-widget > h2',
  subscriptionEmail: '#susbscribe_email',
  subscriptionButton: '#subscribe',
  subscriptionAlert: '#success-subscribe',
  emailLink: '.contact-info address u',
  homeIdentifier: '#slider',
  required: '[required="required"]',
}
class ContactPage {
  fillContactUs(name: string, email: string, file: string) {
    cy.get(selectors.contactName).type(name)
    cy.get(selectors.contactEmail).type(email)
    cy.get(selectors.contactSubject).type(faker.lorem.sentence(5))
    cy.get(selectors.contactMessage).type(faker.lorem.paragraph())
    cy.get(selectors.contactFile).selectFile(file)
    cy.get(selectors.contactButton).click()
    cy.get('.status').contains(
      'Success! Your details have been submitted successfully.',
    )
  }

  fillReview(name: string, email: string) {
    cy.get(selectors.reviewName).type(name)
    cy.get(selectors.reviewEmail).type(email)
    cy.get(selectors.reviewMessage).type(faker.lorem.paragraph())
    // 8. Click 'Submit' button
    cy.get(selectors.reviewButton).click()
  }

  fillSubscription(email: string) {
    cy.get(selectors.subscriptionTitle)
      .contains('Subscription')
      .should('be.visible')
    cy.get(selectors.subscriptionEmail).type(email)
    cy.get(selectors.subscriptionButton).click()
    cy.get(selectors.subscriptionAlert)
      .contains('You have been successfully subscribed')
      .should('be.visible')
  }
}

export { ContactPage, selectors }
