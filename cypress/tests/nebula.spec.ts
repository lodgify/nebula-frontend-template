/// <reference types="Cypress" />

import { Routes } from '../../src/routes';
import { HEADER_PAGE_OBJECT } from '../../src/components/header/tests/index.page';
import { WELCOME_PAGE_OBJECT } from '../../src/pages/welcome-page/tests/index.page';
import { UNIVERSE_PAGE_OBJECT } from '../../src/pages/universe-page/tests/index.page';
import { MILKY_WAY_PAGE_OBJECT } from '../../src/pages/milky-way-page/tests/index.page';

describe('Nebula main test', () => {
  beforeEach(() => {
    cy.server();
  });

  describe('Checking page structure', () => {
    it('renders as expected', () => {});
  });

  describe('Main happy flow: ', () => {
    it('Loads the main Nebula page', () => {
      cy.visit(`/#${Routes.root.url}`);
      cy.url().should('include', '/nebula');
    });

    it('Click in the +1 button increases the counter from 0 to 1', () => {
      cy.get(`[data-testid=${WELCOME_PAGE_OBJECT.subtitle}]`).should('contain.text', 0);
      cy.get(`[data-testid=${WELCOME_PAGE_OBJECT.ctaButton}]`).click();
      cy.get(`[data-testid=${WELCOME_PAGE_OBJECT.subtitle}]`).should('contain.text', 1);
    });

    it('Click in the `Universe` link changes the page', () => {
      cy.get(`[data-testid=${HEADER_PAGE_OBJECT.universeLink}]`).click();
      cy.url().should('include', '/nebula/universe');
    });

    it('The Universe page counter value is 1', () => {
      cy.get(`[data-testid=${UNIVERSE_PAGE_OBJECT.subtitle}]`).should('contain.text', 1);
    });

    it('Click in the +1 button increases the counter from 1 to 2', () => {
      cy.get(`[data-testid=${UNIVERSE_PAGE_OBJECT.ctaButton}]`).click();
      cy.get(`[data-testid=${UNIVERSE_PAGE_OBJECT.subtitle}]`).should('contain.text', 2);
    });

    it('Click in the `Milky Way` link changes the page', () => {
      cy.get(`[data-testid=${HEADER_PAGE_OBJECT.milkyWayLink}]`).click();
      cy.url().should('include', '/nebula/milky-way');
    });

    it('The Universe page counter value is 2', () => {
      cy.get(`[data-testid=${MILKY_WAY_PAGE_OBJECT.subtitle}]`).should('contain.text', 2);
    });

    it('Click in the +1 button increases the counter from 2 to 3', () => {
      cy.get(`[data-testid=${MILKY_WAY_PAGE_OBJECT.ctaButton}]`).click();
      cy.get(`[data-testid=${MILKY_WAY_PAGE_OBJECT.subtitle}]`).should('contain.text', 3);
    });

    it('Click in the `Home` link changes the page', () => {
      cy.get(`[data-testid=${HEADER_PAGE_OBJECT.homeLink}]`).click();
      cy.url().should('include', '/nebula');
    });

    it('The Welcome page counter value is 3', () => {
      cy.get(`[data-testid=${WELCOME_PAGE_OBJECT.subtitle}]`).should('contain.text', 3);
    });
  });
});
