import { createYield } from "typescript"


describe('Page on load', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.thecatapi.com/v1/breeds', { fixture: 'catData.json' })
    cy.visit('http://localhost:3000/')
  })


  it('Should have page title that says Caturday', () => {
    cy.get('h1').contains('CATURDAY')
    cy.get('.App-title')
  })
})
