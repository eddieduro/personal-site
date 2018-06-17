describe('Visit the home page', () => {
    it('Is able to navigate to the route', () => {
        cy.visit('/');
    });
});
describe('Renders the hero component', () => {
    it('Able to render the hero component', () => {
        const title = "Eddie Duro";
        cy.visit('/')
        cy.get('[data-testid=Hero__title]').contains(title);
    })
})