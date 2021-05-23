describe("Navigate the App", () => {
  it("creates a user sent to the DB and sends the user to the log in page", () => {
    cy.viewport(375, 667);
    cy.visit("http://localhost:3000/register");
    cy.get('[type="text"]').focus().type("Robot");
    cy.get('[id="passwordOne"]').focus().type("123");
    cy.get('[id="passwordTwo"]').focus().type("123");
    cy.get('[type="submit"]').click();
    cy.url().should("include", "/register");
  });

  it("logs in the user with the previously defined information from the register page", () => {
    cy.viewport(375, 667);
    cy.visit("http://localhost:3000/");
    cy.get('[type="text"]').focus().type("Robot");
    cy.get('[type="password"]').focus().type("123");
    cy.get('[data-testid="login"]').click();
  });

  it("enter details for first-time users", () => {
    cy.viewport(375, 667);
    cy.get('[placeholder="name here..."]').focus().type("Bobby");
    cy.get('[placeholder="enter a bio here..."]')
      .focus()
      .type(
        "The goodest boy, he is the best of the dogs. He loves walks and sleeping."
      );
  });

  it("tests picture uploading", () => {
    cy.get('input[type="file"]').attachFile("profilePic.png");
    cy.wait(100);

    cy.get("button.generic-button").click();
    cy.waitUntil(() => {
      cy.get("button.generic-button").should("have.text", "Done!");
    });

    cy.get(".create-profile-save-button").click();
    cy.get(".nav-button").click();
  });

  it("view friends page", () => {
    cy.visit("http://localhost:3000/profile");

    cy.get(".nav > :nth-child(2)").click();
    cy.url().should("include", "/friends");
    cy.wait(2000);
  });

  it("view map page", () => {
    cy.get(".nav > :nth-child(3)").click();
    cy.url().should("include", "/map");
    cy.wait(2000);
  });
});
