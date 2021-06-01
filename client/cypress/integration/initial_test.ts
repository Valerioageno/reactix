/* eslint-disable no-undef */
describe('My First Test', () => {
   it('Find the content "type"', () => {
      cy.visit('http://localhost:3000')

      //Check element switch class
      cy.get('.link').trigger('mouseover').should('have.class', 'linkHovered')
      cy.get('.link')
         .trigger('mouseout')
         .should('not.have.class', 'linkHovered')

      //Play with counter button
      for (let i = 0; i < 10; i++) {
         cy.get('.counter')
            .click()
            .contains(`${i + 1} Click${i < 1 ? '' : 's'}`)
      }

      cy.get('a[href*="about"]').click()
      cy.url().should('contain', '/about')
      cy.get('.wrapper h1').should('contain', 'About Page')

      //Check 404 page
      cy.visit('http://localhost:3000/urlNotFound')
      cy.get('.wrapper h1').should('contain', '404 Error')
   })
})
