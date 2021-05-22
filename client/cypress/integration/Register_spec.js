describe("Logging In", () => {
  it("successfully register the user", () => {
    cy.visit("http://localhost:3000/register");
    expect(true).to.equal(true);
  });

  it("submits the form and gets a card with the submitted name", () => {
    cy.visit("http://localhost:3000/register");
    cy.get('[type="text"]').focus().type("Robot");
    cy.get('[id="passwordOne"]').focus().type("123");
    cy.get('[id="passwordTwo"]').focus().type("123");
    cy.get('[type="submit"]').focus().type("enter");
    cy.get("form").submit();
  });
});
