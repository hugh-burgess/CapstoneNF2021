describe("Register the User", () => {
  it("creates a user sent to the DB and sends the user to the log in page", () => {
    cy.visit("http://localhost:3000/register");
    cy.get('[type="text"]').focus().type("Robot");
    cy.get('[id="passwordOne"]').focus().type("123");
    cy.get('[id="passwordTwo"]').focus().type("123");
    cy.get('[type="submit"]').click();
    cy.wait(500);
  });

  it("logs in the user with the previously defined information from the register page", () => {
    cy.visit("http://localhost:3000/");

    cy.get('[type="text"]').focus().type("Robot");
    cy.get('[type="password"]').focus().type("123");
    cy.get('[id="log-in"]').trigger("mouseover").click();
    cy.wait(500);
  });

  it("enter details for first-time users", () => {
    cy.get('[placeholder="name here..."]').focus().type("Bobby");
    cy.get('[placeholder="enter a bio here..."]')
      .focus()
      .type(
        "The goodest boy, he is the best of the dogs. He loves walks and sleeping."
      );
    cy.get('[HTMLfor="upload"]').trigger("mouseover");
    cy.get("form").submit();
  });
});
