// Part: 1 Complete the Form with expected value
describe('Log in page: Test to pass', () => {
  // load html page
  it('should see the log in application', () => {
    cy.visit('./index.html')
  })
  it('should be able to enter a username', () => {
    // add value of username
    cy.get('input[name="username__field"]').type("manali").should('have.value', "manali")
  })
  it(' should be able to enter a password', () => {
    // add value to password
    cy.get('input[name="userpassword__field"]').type("123").should('have.value', "123")
    // should submit the form
    cy.get(".login__button").click()
  })
  // Part: 2 Submit the form
  it('should see the values entered for username & password in the output div', () => {
    cy.get('.output').should('have.css', 'display', 'block')
  })
  it('should output is correct', () => {
    cy.get('#useName').contains('manali')
  })
  it('should output is correct', () => {
    cy.get('#passWord').contains('123')
  })
});
// Part: 3 Test to Fail
// click on submit button to get focus and field of usename become red
describe('Log in page: Test to fail', () => {
  // refresh html page
  it('should see the log in application', () => {
    cy.visit('./index.html')
  })
  it('should click on submit', () => {
    cy.get(".login__button").click()
  })
  it('should see the username background turn red and that the focus is set there', () => {
    // check output display none
    cy.get('.output').should('have.css', 'display', 'none')
    cy.get('input[name="username__field"]').should('have.css', 'background-color', 'rgb(255, 0, 0)')
    cy.get('input[name="username__field"]').focus()
  })
  it('should be able to enter a username', () => {
    cy.get('input[name="username__field"]').type("manali").should('have.value', "manali")
  })
  it('should submit the form', () => {
    cy.get(".login__button").click()
  })
  it('cshould seethe password background turn red and that the focus is set there', () => {
    cy.get('input[name="userpassword__field"]').should('have.css', 'background-color', 'rgb(255, 0, 0)')
    cy.get('input[name="userpassword__field"]').focus()
  })
  it('should be able to enter a password', () => {
    cy.get('input[name="userpassword__field"]').type("123").should('have.value', "123")
  })
  it('should submit the form', () => {
    cy.get(".login__button").click()
  })
});