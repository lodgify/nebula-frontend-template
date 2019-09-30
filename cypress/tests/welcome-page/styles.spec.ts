/// <reference types="Cypress" />

import { Routes } from '../../../src/routes';
import { WELCOME_PAGE_OBJECT } from '../../../src/pages/welcome-page/tests/index.page';

const emToPx = (value: number): string => `${value * 16}px`;
const weightToNumber = (value: string): string => {
  const weights = {
    boldest: '900',
    lighter: '100',
  };
  switch (value) {
    case 'lighter':
      return weights.lighter;
    case 'boldest':
      return weights.boldest;
    default:
      return weights.lighter;
  }
};

describe('Welcom Page Style Test', () => {
  beforeEach(() => {
    cy.server();
  });

  it('Loads the Welcome page', () => {
    cy.visit(`/#${Routes.root.url}`);
    cy.url().should('include', '/nebula');
  });

  it('Subtitle should have the correct font-size', () => {
    cy.get(`[data-testid=${WELCOME_PAGE_OBJECT.subtitle}]`)
      .should('be.visible')
      .should('have.css', 'font-size')
      .and('eq', emToPx(2));
  });

  it('Subtitle should have the correct font-weight', () => {
    cy.get(`[data-testid=${WELCOME_PAGE_OBJECT.subtitle}]`)
      .should('have.css', 'font-weight')
      .and('eq', weightToNumber('lighter'));
  });

  it('Subtitle should be white', () => {
    cy.get(`[data-testid=${WELCOME_PAGE_OBJECT.subtitle}]`)
      .should('have.css', 'color')
      .and('eq', 'rgb(255, 255, 255)');
  });

  it('CTA should be visible on mobile', () => {
    cy.viewport('iphone-6+');
    cy.get(`[data-testid=${WELCOME_PAGE_OBJECT.ctaButton}]`).should('be.visible');
  });
});
