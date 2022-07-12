import 'cypress-file-upload';
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
    // cy.screenshot()
    cy.get('button').click().should(() => {
      const jwt = {
        "userId": 2,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      }
      expect(localStorage.getItem('jwt')).to.eq(JSON.stringify(jwt));
    });

    cy.get(':nth-child(5) > li > :nth-child(6)').click(() => {
      expect(window.alert());
    })
    const p = 'Picture.png';
    cy.get('.Home > :nth-child(1) > :nth-child(1)').click().attachFile(p);
    cy.get('.Home > :nth-child(1) > :nth-child(3)').click();
  })
})