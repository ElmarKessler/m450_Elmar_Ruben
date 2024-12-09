describe('Students Page Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/students', { timeout: 10000 });
  });

  it('should load the students page and show buttons', () => {
    cy.contains('List Students').should('be.visible');
    cy.contains('Add Students').should('be.visible');
  });

  it('should display the students table', () => {
    cy.get('table').should('be.visible');
    cy.get('table tbody tr').should('have.length.at.least', 1);
    cy.get('table tbody tr').first().find('td').should('contain', 'Jonas');
  });

  it('should add a new student and see them in the list', () => {
    cy.contains('Add Students').click();

    cy.get('input[name="name"]').type('Test Student');
    cy.get('input[name="email"]').type('test.student@example.com');

    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/students');

    cy.get('table tbody tr').last().find('td').should('contain', 'Test Student');
    cy.get('table tbody tr').last().find('td').should('contain', 'test.student@example.com');
  });

  it('should interact with "Add Students" button', () => {
    cy.contains('Add Students').click();
    cy.url().should('include', '/add');
  });

  it('should display a specific student (Jonas)', () => {
    cy.get('table tbody tr', { timeout: 10000 }).contains('Jonas').should('be.visible');
  });
});