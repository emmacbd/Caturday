
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
        cy.get('.affection-level-dropdown').select(`You Can Pet Me But Your Friends Can't`, { force: true })
        cy.get('.cat-container').children().should('have.length', 1)
        cy.get('.affection-level-dropdown').select('Friendly Within Reason', { force: true })
        cy.get('.cat-container').children().should('have.length', 20)
    })

    it('Should display selected cat information', () => {
        cy.intercept('GET', 'https://api.thecatapi.com/v1/images/search?breed_ids=aege', { fixture: 'aegeData.json' })
        cy.contains('Aegean').click()
        cy.url().should('eq', 'http://localhost:3000/cats/aege')
    })
})