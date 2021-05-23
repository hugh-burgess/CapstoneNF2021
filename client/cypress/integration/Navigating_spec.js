describe("Navigate the App", () => {
  it("creates a user sent to the DB and sends the user to the log in page", () => {
    cy.viewport(375, 667);
    cy.visit("http://localhost:3000/register");
    cy.location().should((loc) => {
      expect(loc.host).to.eq("localhost:3000");
      expect(loc.href).to.eq("http://localhost:3000/register");
    });
    cy.get('[type="text"]').focus().type("Robot");
    cy.get('[id="passwordOne"]').focus().type("123");
    cy.get('[id="passwordTwo"]').focus().type("123");
    cy.get('[type="submit"]').dblclick();
    cy.wait(500);
  });

  it("logs in the user with the previously defined information from the register page", () => {
    cy.viewport(375, 667);
    cy.visit("http://localhost:3000/");
    cy.get('[type="text"]').focus().type("Robot");
    cy.get('[type="password"]').focus().type("123");
    cy.get('[id="log-in"]').dblclick();
    cy.wait(500);
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
    cy.fixture("profilePic.png").then((fileContent) => {
      cy.get('input[type="file"]').attachFile({
        fileContent: fileContent.toString(),
        fileName: "profilePic.png",
        mimeType: "image/png",
      });
    });
    cy.get("button.generic-button").click();
    cy.wait(8000);
    cy.get(".create-profile-save-button").click();
    cy.wait(500);
    cy.get(".nav-button").click();
  });
});
