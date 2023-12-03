///<reference types='cypress'/>
describe("class1", () => {

  beforeEach("", () => {
    cy.visit("/");
  });

  after('', () => {
    
    cy.clearCookies()
    
  })

  afterEach('', () => {
    cy.clearCookies()
  })

  it("Verify that a user can interact with the alert windows", () => {
    //Alerts in cypress
    cy.get(":nth-child(3) > :nth-child(1) > .card-body > h5").click();
    cy.get(":nth-child(3) > .element-list > .menu-list > #item-1").click();
    cy.get("#alertButton").click();
    cy.on("window:alert", (message) => {
      expect(message).to.be.equal("You clicked a button");
    });
  });

  it("Verify that a user can assert", () => {
    cy.get(":nth-child(1) > :nth-child(1) > .card-up").click();
    cy.contains("Buttons").click();
    cy.url().should("eq", "https://demoqa.com/buttons");
    cy.location("pathname").should("eq", "/buttons"); //pathname = human beings      but = female
    cy.get("#doubleClickBtn").should("exist");
    cy.get("#doubleClickBtn").should("be.visible");
    cy.get("#doubleClickMessage").should("not.exist");
    cy.get("#doubleClickBtn").dblclick();
    cy.get("#doubleClickMessage").should(
      "contain",
      "You have done a double click"
    );
  });

  it("Verify that a user can interact with the webpage elements", () => {
    cy.get(":nth-child(2) > :nth-child(1) > .card-body > h5").click();
    cy.get(
      ":nth-child(2) > .element-list > .menu-list > #item-0 > .text"
    ).click();
    //cy.get('[name="firstname"]').type('Class1Automation')
    //cy.get("#Website").click();
    cy.get('input[id="firstName"]').type("Class3");
    //cy.get("#hobbies-checkbox-1").click();
    //cy.get('input[type="checkbox"]').rightclick();
  });
  /*
    //Assertion and expectation
    
    cy.get("#rightClickBtn").rightclick();
    cy.get("#rightClickMessage").should(
      "have.text",
      "You have done a right click"
    );*/

  /*
    //assertion for color
    cy.get(":nth-child(2) > :nth-child(1) > .card-up").click();
    cy.contains("Practice Form").should("be.visible");
    cy.contains("Practise Form").should("not.exist");
    cy.contains("Practice Form").click();
    cy.contains("Submit").click({ force: true });
    cy.contains("Female").should("have.css", "color", "rgb(220, 53, 69)");*/

  /*//Class 3b Interacting with the alert popup
    cy.get(":nth-child(3) > :nth-child(1) > .card-body > h5").click();
    cy.get(":nth-child(3) > .element-list > .menu-list > #item-1").click();
    cy.get("#alertButton").click();
    cy.on("window:alert", (text) => {
      expect(text).to.equal("You clicked a button");
    });*/
  //cy.get("#confirmButton").click();
  //cy.on("window:confirm", (message) => {
  // Handle the confirm alert
  // You can choose to accept or dismiss it
  // For example, to accept:
  // return true;
  // To dismiss:
  //return false;
  //});
  /*
    cy.get("#promtButton").click();
    cy.on("window:prompt", (message) => {
      // Handle the prompt alert
      // You can choose to accept or dismiss it and provide an input value
      // For example, to accept and provide an input:
      return "Your input value";  
      // To dismiss:
      return null;
    });*/
  /*
    //class 3
    cy.get(":nth-child(1) > :nth-child(1) > .card-up").click();
    //cy.get(':nth-child(1) > .element-list > .menu-list > #item-4 > .text').click()
    

    /* //class 3 Interact with elements and assertion
    cy.get(":nth-child(1) > :nth-child(1) > .card-up").click();
    //cy.get(':nth-child(1) > .element-list > .menu-list > #item-4 > .text').click()
    cy.contains("Buttons").click();
    cy.url().should("eq", "https://demoqa.com/buttons");
    cy.location("pathname").should("eq", "/buttons"); //pathname = human beings      but = female
    cy.get("#doubleClickBtn").dblclick();
    cy.get("#doubleClickMessage").should(
      "contain",
      "You have done a double click"
    );
    cy.get("#rightClickBtn").rightclick();*/

  //Class 1 and 2
});
