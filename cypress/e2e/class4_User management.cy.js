describe("User Management", () => {
  it("Verify that a student can sign up with right entries", () => {
    cy.visit("/");
    cy.get(".category-cards > :nth-child(5) > :nth-child(1)").click();
    cy.get(":nth-child(5) > .element-list > .menu-list > #item-3").click();

    const dataTransfer = new DataTransfer();
    cy.get("#draggable").trigger("dragstart", { dataTransfer });
    cy.get("#simpleDropContainer > #droppable > p").trigger("drop", {
      dataTransfer,
    });
  });
});
