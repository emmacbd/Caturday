
describe('All cats view', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://api.thecatapi.com/v1/breeds', { fixture: 'catData.json' })
        cy.visit('http://localhost:3000/cats')
    })

    it('Should have page title that says Caturday', () => {
        cy.get('h1').contains('CATURDAY')
    })

    it('Should display all cat breeds', () => {
        cy.get('h1').contains('CATURDAY')
        cy.get('.cat-container').children().should('have.length', 40)
        cy.get('.card').children().last().should('have.class', 'wanted-poster-name')
    })

    it('Should be able to filter by affection level', () => {
        cy.get('.dropdown').click().type({ downArrow }{ enter })
        cy.get('.cat-container').children().should('have.length', 1)
    })
})