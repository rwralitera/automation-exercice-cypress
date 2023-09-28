const selectors = {
  loginEmail: '[data-qa="login-email"]',
  loginPassword: '[data-qa="login-password"]',
  loginButton: '[data-qa="login-button"]',
}
class LoginPage {
  fillLoginData(email: string, password: string) {
    cy.get(selectors.loginEmail).type(email)
    cy.get(selectors.loginPassword).type(password)
    cy.get(selectors.loginButton).click()
  }
}

export default LoginPage
