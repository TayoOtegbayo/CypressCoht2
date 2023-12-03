class LoginPage {
  launchURL() {
    return cy.visit("/");
  }
  clickAccountPage() {
    return cy.contains(" My account").eq(0).click({ force: true });
  }
  enterLoginCredentials(email, password) {
    cy.get("#input-email").type(email);
    cy.get("#input-password").type(password);
    return this;
  }
  clickLoginBtn() {
    return cy.get('input[type="submit"]').click();
  }
}
export default new LoginPage();
