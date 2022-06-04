describe('Cat details view', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://api.thecatapi.com/v1/images/search?breed_ids=aege', { fixture: 'aegeData.json' })
        cy.visit('http://localhost:3000/cats/aege')
    })

    it('Should have page title that says Caturday', () => {
        cy.get('h1').contains('CATURDAY')
    })

    it('Should display selected cat information', () => {
        cy.contains('Aegean')
        cy.contains('Affectionate, Social, Intelligent, Playful, Active')
        cy.get('.selected-cat-image').should('have.attr', 'src', 'https://cdn2.thecatapi.com/images/Hb2N6tYTJ.jpg')
        cy.url().should('eq', 'http://localhost:3000/cats/aege')
    })

    it('Should be able to click on All Cats', () => {
        cy.contains('All Cats').click({ force: true })
        cy.url().should('eq', 'http://localhost:3000/cats')
    })
})