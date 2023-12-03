import LoginPage from "../Page/LoginPage";
describe("Login page for positive and negative scenarios", () => {
  it("Verify that a user can login with valid credentials", () => {
    LoginPage.launchURL();
    LoginPage.clickAccountPage();
    LoginPage.enterLoginCredentials("obooj@gmail.com", "Ojukwu_1874");
    LoginPage.clickLoginBtn();
  });
});
