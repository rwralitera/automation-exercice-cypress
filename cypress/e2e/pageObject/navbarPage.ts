const selectors = {
  navHome: '.navbar-nav [href="/"]',
  navHomeLogo: '.logo a',
  navProduct: '.navbar-nav [href="/products"]',
  navCart: '.navbar-nav [href="/view_cart"]',
  navSignup: '.navbar-nav [href="/login"]',
  navTestCases: '.navbar-nav [href="/test_cases"]',
  navAPITesting: '.navbar-nav [href="/api_list"]',
  navVideo: '.navbar-nav [href="https://www.youtube.com/c/AutomationExercise"]',
  navContactUs: '.navbar-nav [href="/contact_us"]',
  navLogout: '.navbar-nav [href="/logout"]',
  navDelete: '.navbar-nav [href="/delete_account"]',
  navbar: '.navbar-nav',
  homeIdentifier: '#slider',
  productIdentifier: '.features_items .title:contains("All Products")',
  cartIdentifier: '.active:contains("Shopping Cart")',
  signupIdentifier: '.login-form h2:contains("Login to your account")',
  signupIncorrect:
    '.login-form > form > p:contains("Your email or password is incorrect!")',
  registerError:
    '.signup-form > form > p:contains("Email Address already exist!")',
  signupSignupActionTitle: '.title',
  contactUsIdentifier: '.title:contains("Contact")',
  deleteAccountIdentifier: '[data-qa="account-deleted"]',
  deleteAccountButton: '[data-qa="continue-button"]',
  videoIdentifier: 'https://www.youtube.com/c/AutomationExercise',
  mailtoLink: 'a[href="mailto:feedback@automationexercise.com"]',
  //contacUs
  inputFile: 'input[type="file"]',
  contactUsGetintouch: '.title:contains("Get In Touch")',
  contactUsFeedback: '.title:contains("Feedback For Us")',
  //test cases and API testing
  testCasesIdentifier: '.title:contains("Test Cases")',
  APITestingIdentifier: '.title:contains("APIs List for practice")',
  testCaseList: '#form .container',
  testCaseListCollapse: '.panel-collapse',
  APITestingFirstCollapse: '[href="#collapse1"]',
  APITestingFirstLink: '#collapse1 .list-group :nth-child(1) a',
  //footer
  footerIdentifier: '#footer',
  loginToYourAccount: 'h2:contains("Login to your account")',
}
class NavbarPage {
  goToHome() {
    cy.get(selectors.navHome).click()
    //verification
    cy.get(selectors.homeIdentifier).should('be.visible')
  }
  goToProduct() {
    cy.get(selectors.navProduct).click()
    //verification
    cy.get(selectors.productIdentifier).should('be.visible')
  }
  goToCart() {
    cy.get(selectors.navCart).click()
    //verification
    cy.get(selectors.cartIdentifier).should('be.visible')
  }
  goToSignup() {
    cy.get(selectors.navSignup).click()
    cy.get(selectors.signupIdentifier).should('be.visible')
  }
  goToTestCases() {
    cy.get(selectors.navTestCases).click()
    cy.get(selectors.testCasesIdentifier).should('be.visible')
  }
  goToAPITesting() {
    cy.get(selectors.navAPITesting).click()
    cy.get(selectors.APITestingIdentifier).should('be.visible')
  }
  goToVideo() {
    cy.get(selectors.navVideo).click()
    cy.url().should('eq', selectors.videoIdentifier)
  }
  goToContactUs() {
    cy.get(selectors.navContactUs).click()
    cy.get(selectors.contactUsIdentifier).should('be.visible')
  }
  goToLogout() {
    cy.get(selectors.navLogout).click()
    cy.get(selectors.navSignup).should('be.visible')
  }
  goToDelete() {
    cy.get(selectors.navDelete).click()
    cy.get(selectors.deleteAccountIdentifier).should(
      'contain',
      'Account Deleted!',
    )
    cy.get(selectors.deleteAccountButton).click()
  }
}

export { NavbarPage, selectors }
