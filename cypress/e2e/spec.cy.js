describe('empty spec', () => {
  beforeEach
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    const email = "Shubha@gmail.com";
    const password = "abcd1234";
    cy.get('[placeholder="email"]')
    .type(email)
    .should('have.value', email);
    cy.get('[placeholder="password"]')
    .type(password)
    .should('have.value', password);
    cy.screenshot()
    cy.get('button').click();
    cy.screenshot()
    
  })

})