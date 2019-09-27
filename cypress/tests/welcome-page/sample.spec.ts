/// <reference types="Cypress" />

import { Routes } from '../../../src/routes';

describe('Activation Page', () => {
  beforeEach(() => {
    cy.log(`Visiting /#/${Routes.root.url}`);
    cy.server();
    cy.visit(`/#${Routes.root.url}`);
  });
  it('renders as expected', () => {});
});
