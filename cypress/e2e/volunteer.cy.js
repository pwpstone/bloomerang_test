describe('Volunteer activity entry', () => {
  beforeEach(() => {
    cy.visit('/qa4.bloomerang.co/qa4bloomautomation01/volunteer/31759.html')
  }) 
  it('should load all fields on intial load', () => {
    cy.contains('Log Activity Now!')
    cy.contains('Contact Information')
    cy.get('#first-name')
    cy.get('#last-name')
    
    //todo validate rest of fields

    
  })
  it('should display required validation', () => {
    cy.get('.btn-submit-interaction').click()
    cy.get('.error').contains('This field is required.')

    //todo validate all required field errors
    

    
  })

  it('successfully enter volunteer activity', () => {
    cy.get('#first-name').type('Hermione')
    cy.get('#last-name').type('Granger')
    cy.get('#email-address').type('whatanidiot@hogwarts.uk')
    cy.get('#street-address').type('123 Hogsmeade Ave')
    cy.get('#city').type('Little Whinging')
    cy.get('#state').select('CO')
    cy.get('#zip-code').type('80018')
    cy.get('#volunteer-date').type('2023-03-23')
    cy.get('.btn-submit-interaction').click()
    cy.contains('Thank you for volunteering!')
    cy.contains("Your volunteer activity has been submitted. We couldn't do this without you!")
    

    
  })
})